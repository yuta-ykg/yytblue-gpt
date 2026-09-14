import { readSession } from "../session";
export async function GET(request: Request) {
  return Response.json({ user: await readSession(request) }, { headers: { "cache-control": "no-store" } });
}
