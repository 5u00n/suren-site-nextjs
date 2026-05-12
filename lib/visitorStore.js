import { createHash } from "crypto";
import { mkdir, readFile, rename, writeFile } from "fs/promises";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");
const VISITOR_DATA_FILE = path.join(DATA_DIR, "visitors.json");

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

export async function getVisitorStats() {
  const store = await readStore();

  return {
    totalVisits: store.totalVisits,
    uniqueVisits: store.uniqueVisits,
    updatedAt: store.updatedAt,
  };
}

export async function trackVisit({ isNewBrowserVisitor, ip, userAgent }) {
  const store = await readStore();
  const salt = process.env.VISITOR_HASH_SALT || "default-visitor-salt";
  const visitorHash = getVisitorHash({ ip, userAgent, salt });

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
