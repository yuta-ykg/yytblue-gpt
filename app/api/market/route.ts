import { marketIdentity, accessMarket } from '../../../lib/share-store';
export const dynamic='force-dynamic';
async function handle(request:Request,write:boolean) {
  const identity=await marketIdentity(request);
  if(!identity) return Response.json({error:'identity'},{status:401});
  if(write && request.headers.get('origin') && request.headers.get('origin')!==new URL(request.url).origin) return Response.json({error:'origin'},{status:403});
  try {
    let op;
    if(write) {
      const body=await request.text();
      if(body.length>10000) return Response.json({error:'request'},{status:413});
      op=JSON.parse(body);
      if(!op || typeof op!=='object' || Array.isArray(op)) throw Error('request');
    }
    return Response.json(await accessMarket(identity,op),{headers:{'Cache-Control':'no-store'}});
  } catch(error) {
    const message=error instanceof Error ? error.message : 'storage_unavailable';
    const known=['request','asset','quantity','supply','balance','holdings','burn_holdings','owner','brand','image','proposal_active','class_limit','split_cap','split_price_floor','lot_size','lot_burn_all','request_power','stale','support','closed','not_holder','voted','revote','not_closed','action','conflict','market_capacity'];
    if(!known.includes(message)) console.error('Market operation failed',error);
    return Response.json({error:known.includes(message)?message:'storage_unavailable'},{status:known.includes(message)?409:503});
  }
}
export const GET=(request:Request)=>handle(request,false);
export const POST=(request:Request)=>handle(request,true);
