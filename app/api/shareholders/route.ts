import { marketIdentity, accessMarket } from '../../../lib/share-store';
export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  const identity = await marketIdentity(request);
  if (!identity) return Response.json({ error: 'identity' }, { status: 401 });
  try {
    const market = await accessMarket(identity);
    return Response.json({
      leaders: Object.fromEntries(market.assets.map(asset => [
        asset.id, asset.leaders.map((holder, i) => ({ ...holder, rank: i + 1 })),
      ])),
    }, { headers: { 'Cache-Control': 'no-store' } });
  } catch (error) {
    console.error('Shareholder lookup failed', error);
    return Response.json({ error: 'storage_unavailable' }, { status: 503 });
  }
}
