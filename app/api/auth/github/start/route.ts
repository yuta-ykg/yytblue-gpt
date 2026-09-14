import { env } from "cloudflare:workers";

export async function GET(request: Request) {
  const clientId = (env as any).GITHUB_CLIENT_ID;
  if (!clientId) return Response.json({ error: "github_not_configured" }, { status: 503 });
  const origin = new URL(request.url).origin;
  const state = crypto.randomUUID();
  const authorize = new URL("https://github.com/login/oauth/authorize");
  authorize.searchParams.set("client_id", clientId);
  authorize.searchParams.set("redirect_uri", `${origin}/api/auth/github/callback`);
  authorize.searchParams.set("scope", "read:user");
  authorize.searchParams.set("state", state);
  return new Response(null, { status: 302, headers: { location: authorize.toString(), "set-cookie": `yytblue_github_state=${state}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=600` } });
}
