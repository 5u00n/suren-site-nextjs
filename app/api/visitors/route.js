import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import { getVisitorStats, trackVisit } from "@/lib/visitorStore";

const VISITOR_COOKIE = "visitor_counted";
const ONE_YEAR_IN_SECONDS = 60 * 60 * 24 * 365;

function parseHost(value) {
  if (!value) return null;
  return value.split(":")[0].trim().toLowerCase();
}

function parseHostFromUrl(value) {
  if (!value) return null;

  try {
    return new URL(value).hostname.trim().toLowerCase();
  } catch {
    return null;
  }
}

function isLocalDevHost(host) {
  return host === "localhost" || host === "127.0.0.1";
}

function isAllowedDomainRequest(request) {
  const allowedDomain = parseHost(process.env.VISITOR_ALLOWED_DOMAIN);
  if (!allowedDomain) {
    return true;
  }

  const hostHeader = parseHost(request.headers.get("x-forwarded-host") || request.headers.get("host"));
  const originHost = parseHostFromUrl(request.headers.get("origin"));
  const refererHost = parseHostFromUrl(request.headers.get("referer"));
  const isDev = process.env.NODE_ENV !== "production";

  const hostAllowed = hostHeader === allowedDomain || (isDev && isLocalDevHost(hostHeader));
  const originAllowed = !originHost || originHost === allowedDomain || (isDev && isLocalDevHost(originHost));
  const refererAllowed = !refererHost || refererHost === allowedDomain || (isDev && isLocalDevHost(refererHost));

  return hostAllowed && originAllowed && refererAllowed;
}

function getVisitorIp(request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }

  return request.headers.get("x-real-ip") || "unknown-ip";
}

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET(request) {
  if (!isAllowedDomainRequest(request)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  const url = new URL(request.url);
  if (url.searchParams.get("mode") === "stats") {
    const stats = await getVisitorStats();
    return NextResponse.json(stats);
  }

  const cookieStore = await cookies();
  const counted = cookieStore.get(VISITOR_COOKIE);

  const counts = await trackVisit({
    isNewBrowserVisitor: !counted,
    ip: getVisitorIp(request),
    userAgent: request.headers.get("user-agent") || "unknown-ua",
  });

  const response = NextResponse.json(counts);
  if (!counted) {
    response.cookies.set(VISITOR_COOKIE, "1", {
      maxAge: ONE_YEAR_IN_SECONDS,
      path: "/",
      sameSite: "lax",
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    });
  }

  return response;
}
