import { cookies } from "next/headers";
import { Redis } from "@upstash/redis";

const VISITOR_COOKIE = "visitor_counted";
const COUNTER_KEY = "site:visitor_count";

// In-memory fallback when Upstash is not configured (resets on cold start)
let memoryCount = 0;

function getRedis() {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (url && token) {
    return new Redis({ url, token });
  }
  return null;
}

async function getCount(redis) {
  if (redis) {
    const n = await redis.get(COUNTER_KEY);
    return typeof n === "number" ? n : 0;
  }
  return memoryCount;
}

async function incrementCount(redis) {
  if (redis) {
    const n = await redis.incr(COUNTER_KEY);
    return n;
  }
  memoryCount += 1;
  return memoryCount;
}

export const dynamic = "force-dynamic";

export async function GET() {
  const cookieStore = await cookies();
  const counted = cookieStore.get(VISITOR_COOKIE);

  const redis = await getRedis();
  let count = await getCount(redis);

  if (!counted) {
    count = await incrementCount(redis);
  }

  const headers = {};
  if (!counted) {
    headers["Set-Cookie"] = `${VISITOR_COOKIE}=1; Path=/; Max-Age=31536000; SameSite=Lax`;
  }
  return Response.json({ count }, { headers });
}
