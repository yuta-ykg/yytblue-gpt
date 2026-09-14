import { env } from "cloudflare:workers";

export type GitHubUser = { id: number; login: string; name: string; avatarUrl: string };

const encoder = new TextEncoder();
const decoder = new TextDecoder();
const encodeBytes = (value: Uint8Array) => btoa(String.fromCharCode(...value)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
const encode = (value: string) => encodeBytes(encoder.encode(value));
const decode = (value: string) => decoder.decode(Uint8Array.from(atob(value.replace(/-/g, "+").replace(/_/g, "/")), (character) => character.charCodeAt(0)));

async function signature(payload: string) {
  const key = await crypto.subtle.importKey("raw", encoder.encode((env as any).GITHUB_CLIENT_SECRET), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const bytes = new Uint8Array(await crypto.subtle.sign("HMAC", key, encoder.encode(payload)));
  return encodeBytes(bytes);
}

export async function createSession(user: GitHubUser) {
  const payload = encode(JSON.stringify({ ...user, exp: Date.now() + 30 * 24 * 60 * 60 * 1000 }));
  return `${payload}.${await signature(payload)}`;
}

export async function readSession(request: Request): Promise<GitHubUser | null> {
  const cookie = request.headers.get("cookie") || "";
  const token = cookie.match(/(?:^|;\s*)yytblue_github=([^;]+)/)?.[1];
  if (!token) return null;
  const [payload, supplied] = token.split(".");
  if (!payload || !supplied || supplied !== await signature(payload)) return null;
  try {
    const data = JSON.parse(decode(payload));
    if (!data.id || data.exp < Date.now()) return null;
    return { id: data.id, login: data.login, name: data.name, avatarUrl: data.avatarUrl };
  } catch { return null; }
}

export const sessionCookie = (value: string, maxAge = 2592000) =>
  `yytblue_github=${value}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=${maxAge}`;
