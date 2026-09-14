import { env } from "cloudflare:workers";
import { createSession, sessionCookie } from "../session";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");
  const expected = (request.headers.get("cookie") || "").match(/(?:^|;\s*)yytblue_github_state=([^;]+)/)?.[1];
  if (!code || !state || state !== expected) return Response.redirect(`${url.origin}/?github=error`, 302);
  try {
    const tokenResponse = await fetch("https://github.com/login/oauth/access_token", {
      method: "POST",
      headers: { accept: "application/json", "content-type": "application/json", "user-agent": "yytblue" },
      body: JSON.stringify({ client_id: (env as any).GITHUB_CLIENT_ID, client_secret: (env as any).GITHUB_CLIENT_SECRET, code, redirect_uri: `${url.origin}/api/auth/github/callback` }),
    });
    const token = await tokenResponse.json() as { access_token?: string };
    if (!token.access_token) throw new Error("token_exchange_failed");
    const userResponse = await fetch("https://api.github.com/user", { headers: { authorization: `Bearer ${token.access_token}`, accept: "application/vnd.github+json", "user-agent": "yytblue" } });
    if (!userResponse.ok) throw new Error("profile_failed");
    const profile = await userResponse.json() as { id: number; login: string; name?: string | null; avatar_url?: string };
    const session = await createSession({ id: profile.id, login: profile.login, name: profile.name || profile.login, avatarUrl: profile.avatar_url || "" });
    const headers = new Headers({ location: `${url.origin}/?github=connected` });
    headers.append("set-cookie", sessionCookie(session));
    headers.append("set-cookie", "yytblue_github_state=; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=0");
    return new Response(null, { status: 302, headers });
  } catch { return Response.redirect(`${url.origin}/?github=error`, 302); }
}
