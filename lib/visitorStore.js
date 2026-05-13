import { createHash } from "crypto";
import { mkdir, readFile, rename, writeFile } from "fs/promises";
import path from "path";
import { Redis } from "@upstash/redis";

const DATA_DIR = path.join(process.cwd(), "data");
const VISITOR_DATA_FILE = path.join(DATA_DIR, "visitors.json");
const REDIS_TOTAL_VISITS_KEY = "site:visits:total";
const REDIS_UNIQUE_VISITORS_SET_KEY = "site:visitors:unique";

const EMPTY_STORE = {
  totalVisits: 0,
  uniqueVisits: 0,
  uniqueVisitorHashes: {},
  updatedAt: null,
};

function sanitizeStore(raw) {
  if (!raw || typeof raw !== "object") {
    return { ...EMPTY_STORE };
  }

  const totalVisits = Number.isInteger(raw.totalVisits) && raw.totalVisits >= 0 ? raw.totalVisits : 0;
  const uniqueVisits = Number.isInteger(raw.uniqueVisits) && raw.uniqueVisits >= 0 ? raw.uniqueVisits : 0;
  const uniqueVisitorHashes =
    raw.uniqueVisitorHashes && typeof raw.uniqueVisitorHashes === "object" ? raw.uniqueVisitorHashes : {};
  const updatedAt = typeof raw.updatedAt === "string" ? raw.updatedAt : null;

  return {
    totalVisits,
    uniqueVisits,
    uniqueVisitorHashes,
    updatedAt,
  };
}

async function ensureStoreFile() {
  await mkdir(DATA_DIR, { recursive: true });

  try {
    await readFile(VISITOR_DATA_FILE, "utf8");
  } catch {
    await writeStore(EMPTY_STORE);
  }
}

async function readStore() {
  await ensureStoreFile();

  try {
    const content = await readFile(VISITOR_DATA_FILE, "utf8");
    const parsed = JSON.parse(content);
    return sanitizeStore(parsed);
  } catch {
    return { ...EMPTY_STORE };
  }
}

async function writeStore(store) {
  await mkdir(DATA_DIR, { recursive: true });

  const nextStore = {
    ...store,
    updatedAt: new Date().toISOString(),
  };

  const tempFile = `${VISITOR_DATA_FILE}.tmp`;
  await writeFile(tempFile, JSON.stringify(nextStore, null, 2), "utf8");
  await rename(tempFile, VISITOR_DATA_FILE);

  return nextStore;
}

function getVisitorHash({ ip, userAgent, salt }) {
  return createHash("sha256")
    .update(`${ip}|${userAgent}|${salt}`)
    .digest("hex");
}

function isProductionRuntime() {
  return process.env.NODE_ENV === "production";
}

function getRedisClient() {
  const url = process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN;

  if (!url || !token) {
    if (isProductionRuntime()) {
      throw new Error("Missing Upstash Redis credentials in production. Set UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN.");
    }

    return null;
  }

  return new Redis({ url, token });
}

async function getRedisStats(redis) {
  const [totalVisits, uniqueVisits] = await Promise.all([
    redis.get(REDIS_TOTAL_VISITS_KEY),
    redis.scard(REDIS_UNIQUE_VISITORS_SET_KEY),
  ]);

  return {
    totalVisits: typeof totalVisits === "number" ? totalVisits : 0,
    uniqueVisits: typeof uniqueVisits === "number" ? uniqueVisits : 0,
    updatedAt: new Date().toISOString(),
  };
}

async function trackVisitInRedis(redis, { isNewBrowserVisitor, visitorHash }) {
  const totalVisits = await redis.incr(REDIS_TOTAL_VISITS_KEY);

  if (isNewBrowserVisitor) {
    await redis.sadd(REDIS_UNIQUE_VISITORS_SET_KEY, visitorHash);
  }

  const uniqueVisits = await redis.scard(REDIS_UNIQUE_VISITORS_SET_KEY);

  return {
    totalVisits: typeof totalVisits === "number" ? totalVisits : 0,
    uniqueVisits: typeof uniqueVisits === "number" ? uniqueVisits : 0,
    updatedAt: new Date().toISOString(),
  };
}

export async function getVisitorStats() {
  const redis = getRedisClient();
  if (redis) {
    return getRedisStats(redis);
  }

  const store = await readStore();

  return {
    totalVisits: store.totalVisits,
    uniqueVisits: store.uniqueVisits,
    updatedAt: store.updatedAt,
  };
}

export async function trackVisit({ isNewBrowserVisitor, ip, userAgent }) {
  const salt = process.env.VISITOR_HASH_SALT || "default-visitor-salt";
  const visitorHash = getVisitorHash({ ip, userAgent, salt });

  const redis = getRedisClient();
  if (redis) {
    return trackVisitInRedis(redis, { isNewBrowserVisitor, visitorHash });
  }

  const store = await readStore();

  store.totalVisits += 1;

  const knownVisitor = Boolean(store.uniqueVisitorHashes[visitorHash]);
  if (isNewBrowserVisitor && !knownVisitor) {
    store.uniqueVisitorHashes[visitorHash] = true;
    store.uniqueVisits += 1;
  }

  const nextStore = await writeStore(store);

  return {
    totalVisits: nextStore.totalVisits,
    uniqueVisits: nextStore.uniqueVisits,
    updatedAt: nextStore.updatedAt,
  };
}
