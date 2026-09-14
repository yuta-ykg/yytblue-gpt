import { env } from 'cloudflare:workers';
import { initialLedger, register, operate, marketView } from './share-engine.mjs';

export async function marketIdentity(request: Request) {
  const identity=request.headers.get('oai-authenticated-user-id');
  if(!identity) return null;
  const hash=await crypto.subtle.digest('SHA-256',new TextEncoder().encode(identity));
  return { raw:identity, id:Array.from(new Uint8Array(hash)).map(n=>n.toString(16).padStart(2,'0')).join('') };
}
export async function accessMarket(identity: {raw:string,id:string}, op?: Record<string,unknown>) {
  const db=env.DB;
  if(!db) throw Error('storage_unavailable');
  for(let attempt=0;attempt<5;attempt++) {
    const row=await db.prepare('SELECT revision, data FROM share_ledger WHERE id = ?').bind('market').first<{revision:number,data:string}>();
    const state=row ? JSON.parse(row.data) : initialLedger();
    const needsRegistration=!state.members[identity.id];
    if(needsRegistration) {
      const old=await db.prepare('SELECT data FROM app_state WHERE user_id = ?').bind(identity.raw).first<{data:string}>();
      register(state,identity.id,old ? JSON.parse(old.data).profile : {});
    }
    if(op) operate(state,identity.id,op);
    if(!needsRegistration && !op) return marketView(state,identity.id);
    const data=JSON.stringify(state);
    if(data.length>1500000) throw Error('market_capacity');
    const result=row
      ? await db.prepare('UPDATE share_ledger SET data = ?, revision = revision + 1 WHERE id = ? AND revision = ?').bind(data,'market',row.revision).run()
      : await db.prepare('INSERT OR IGNORE INTO share_ledger (id, revision, data) VALUES (?, 0, ?)').bind('market',data).run();
    if(result.meta.changes===1) return marketView(state,identity.id);
  }
  throw Error('conflict');
}
