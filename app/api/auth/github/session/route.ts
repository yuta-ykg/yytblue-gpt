import { readSession } from "../session";
export async function GET(request: Request) {
  const hostname = new URL(request.url).hostname;
  const devBypassAvailable = hostname === "localhost" || hostname === "127.0.0.1";
  return Response.json({ user: await readSession(request), devBypassAvailable }, { headers: { "cache-control": "no-store" } });
}
