// Server-authoritative, revision-guarded free-point market. No real money.
export const DAY = 86400000;
export const MAX = 2100000000;
export const DISCLOSURE_MARKET_CAP = 1000000000;
export const MIN_POST_SPLIT_PRICE = 10;
const fail = (code) => { throw Error(code); };
const whole = (n, min, max) => Number.isSafeInteger(n) && n >= min && n <= max;
export const initialLedger = () => ({ members: {}, assets: {}, operations: {}, disclosures: [] });
const stock = (id, owner, kind, name) => ({ id, owner, kind, name, image: null, supply: kind === 'common' ? 1000 : 0, price: 100, lotSize: 1, holders: {}, proposal: null });
export function register(s, uid, profile = {}) {
  if (s.members[uid]) return;
  s.members[uid] = { id: uid, name: String(profile.name || 'Creator').slice(0,40), handle: `creator_${uid.slice(0,12)}`, balance: 10000, history: [] };
  s.assets[`${uid}-common`] = stock(`${uid}-common`, uid, 'common', s.members[uid].name);
  s.assets[`${uid}-class`] = stock(`${uid}-class`, uid, 'class', `${s.members[uid].name} Class`);
}
const held = (a, uid) => a.holders[uid] || 0;
const available = a => a.supply - Object.values(a.holders).reduce((n,v) => n+v,0);
const active = p => p && ['collecting','voting'].includes(p.status);
const classTotal = (s,owner) => Object.values(s.assets).filter(a=>a.owner===owner && a.kind==='class').reduce((n,a)=>n+a.supply,0);
const classLimit = (s,owner) => Math.floor(s.assets[`${owner}-common`].supply*2/3);
const cap = (s,a) => a.kind === 'common' ? MAX : classLimit(s,a.owner)-classTotal(s,a.owner)+a.supply;
function activate(a,p,now) {
  p.status = 'voting'; p.snapshot = {...a.holders}; p.electorate = a.supply;
  p.ballots = {}; p.yes = 0; p.no = 0; p.closesAt = now+DAY;
}
export function operate(s, uid, op, now = Date.now()) {
  const m = s.members[uid]; if (!m) fail('identity');
  if (!Array.isArray(s.disclosures)) s.disclosures = [];
  if (!/^[a-zA-Z0-9-]{16,80}$/.test(op.requestId || '')) fail('request');
  const previous = s.operations[uid] || [];
  if (previous.includes(op.requestId)) return s;
  let a = s.assets[op.asset]; if (!a) fail('asset');
  if (op.action === 'create_class') {
    if(a.owner!==uid || a.kind!=='common') fail('owner');
    const name=typeof op.name==='string'?op.name.trim():'';
    if(!name || name.length>30) fail('brand');
    if(op.image!=null && (typeof op.image!=='string' || !/^\/api\/media\/[a-zA-Z0-9._/-]+$/.test(op.image))) fail('image');
    if(!whole(op.quantity,1,MAX) || classTotal(s,uid)+op.quantity>classLimit(s,uid)) fail('class_limit');
    const id=`${uid}-class-${op.requestId}`;
    if(s.assets[id]) fail('request');
    a=stock(id,uid,'class',name);
    a.supply=op.quantity; a.holders[uid]=op.quantity; a.image=op.image ?? null;
    s.assets[id]=a;
    s.operations[uid]=[...previous,op.requestId].slice(-100);
    return s;
  }
  const n = op.quantity;
  if (op.action === 'trade') {
    const lotSize=a.lotSize || 1;
    if (!whole(n,lotSize,1000) || n%lotSize!==0 || !['buy','sell'].includes(op.side)) fail('quantity');
    const beforeShares = held(a,uid);
    const beforePrice = a.price;
    const direction = op.side === 'buy' ? 1 : -1;
    const afterPrice = Math.max(0.00000001, beforePrice*Math.exp(direction*0.5*n/a.supply));
    const beforeMarketCap = beforePrice*a.supply;
    const afterMarketCap = afterPrice*a.supply;
    // Area under the exponential price curve gives the execution total and
    // makes an immediate equal-size buy/sell round trip price-neutral.
    const total = a.supply/0.5*Math.abs(afterPrice-beforePrice);
    if (op.side === 'buy') {
      if (n > available(a)) fail('supply');
      if (m.balance+1e-9 < total) fail('balance');
      m.balance = Math.max(0,m.balance-total); a.holders[uid] = held(a,uid)+n;
    } else {
      if (n > held(a,uid)) fail('holdings');
      m.balance += total; a.holders[uid] -= n;
    }
    a.price = afterPrice;
    const afterShares = held(a,uid);
    if ((beforeShares*100 >= a.supply*5 || afterShares*100 >= a.supply*5) &&
        (beforeMarketCap >= DISCLOSURE_MARKET_CAP || afterMarketCap >= DISCLOSURE_MARKET_CAP)) {
      s.disclosures.unshift({
        id: op.requestId, asset: a.id, assetName: a.name,
        creatorName: s.members[a.owner]?.name || 'Creator',
        traderName: m.name, traderHandle: m.handle,
        side: op.side, quantity: n, beforeShares, afterShares,
        beforeRatio: beforeShares/a.supply, afterRatio: afterShares/a.supply,
        beforePrice, afterPrice, beforeMarketCap, afterMarketCap, at: now,
      });
      s.disclosures = s.disclosures.slice(0,200);
    }
    m.history.unshift({asset:a.id,name:a.name,side:op.side,quantity:n,total,beforePrice,afterPrice,at:now}); m.history=m.history.slice(0,100);
  } else if (op.action === 'burn') {
    if (a.owner !== uid || a.kind !== 'class') fail('owner');
    if (active(a.proposal)) fail('proposal_active');
    if (!whole(n,1,MAX) || n > held(a,uid) || n >= a.supply) fail('burn_holdings');
    const remainingSupply = a.supply-n;
    a.price = a.price*a.supply/remainingSupply;
    a.holders[uid] = held(a,uid)-n;
    a.supply = remainingSupply;
  } else if (op.action === 'issue' || op.action === 'brand') {
    if (a.owner !== uid || a.kind !== 'class') fail('owner');
    const name = typeof op.name === 'string' ? op.name.trim() : '';
    if (!name || name.length > 30) fail('brand');
    if (op.image != null && (typeof op.image !== 'string' || !/^\/api\/media\/[a-zA-Z0-9._/-]+$/.test(op.image))) fail('image');
    if (op.action === 'issue') {
      if (active(a.proposal)) fail('proposal_active');
      if (!whole(n,1,MAX) || a.supply+n>cap(s,a)) fail('class_limit');
      a.supply+=n; a.holders[uid]=held(a,uid)+n;
    }
    a.name=name; if(op.image != null) a.image=op.image;
  } else if (op.action === 'request') {
    if (active(a.proposal)) fail('proposal_active');
    if (!whole(op.ratio,2,200) || a.supply < 1 || a.supply*op.ratio>cap(s,a)) fail('split_cap');
    if (a.price/op.ratio*(a.lotSize || 1) < MIN_POST_SPLIT_PRICE) fail('split_price_floor');
    if (op.mode!=='solo') fail('request');
    if (held(a,uid)*100<a.supply) fail('request_power');
    const p = { id:op.requestId, kind:'split', ratio:op.ratio, mode:op.mode, status:'collecting', supporters:[uid], round:1, revoteUsed:false, yes:0,no:0,ballots:{},snapshot:{},electorate:a.supply, createdAt:now };
    a.proposal=p;
    activate(a,p,now);
  } else if (op.action === 'request_lot') {
    if (active(a.proposal)) fail('proposal_active');
    if (!whole(op.lotSize,1,1000) || op.lotSize>a.supply || op.lotSize===(a.lotSize || 1)) fail('lot_size');
    if (op.mode!=='solo') fail('request');
    if (held(a,uid)*100<a.supply) fail('request_power');
    const projectedBurn=Object.values(a.holders).reduce((sum,n)=>sum+n%op.lotSize,0);
    if(projectedBurn>=a.supply) fail('lot_burn_all');
    const p = { id:op.requestId, kind:'lot', lotSize:op.lotSize, mode:op.mode, status:'collecting', supporters:[uid], round:1, revoteUsed:false, yes:0,no:0,ballots:{},snapshot:{},electorate:a.supply, createdAt:now };
    a.proposal=p;
    activate(a,p,now);
  } else {
    const p=a.proposal;
    if (!p || p.id!==op.proposalId || p.round!==op.round) fail('stale');
    if (op.action==='support') {
      if(p.status!=='collecting' || held(a,uid)<1 || p.supporters.includes(uid)) fail('support');
      p.supporters.push(uid);
      if(p.supporters.reduce((sum,id)=>sum+held(a,id),0)*100>=a.supply*3) activate(a,p,now);
    } else if(op.action==='vote') {
      if(p.status!=='voting' || now>=p.closesAt) fail('closed');
      const weight=p.snapshot[uid] || 0;
      if(!weight) fail('not_holder');
      if(p.ballots[uid] || !['yes','no'].includes(op.choice)) fail('voted');
      p.ballots[uid]={choice:op.choice,weight}; p[op.choice]+=weight;
    } else if(op.action==='revote') {
      if(!['voting','rejected'].includes(p.status) || p.revoteUsed || p.yes+p.no<1 || held(a,uid)*100<a.supply*34) fail('revote');
      p.round=2; p.revoteUsed=true; activate(a,p,now);
    } else if(op.action==='execute') {
      if(p.status!=='voting' || now<p.closesAt) fail('not_closed');
      if(p.yes<=p.no) {p.status='rejected';}
      else {
        if((p.kind || 'split')==='lot') {
          const oldSupply=a.supply;
          let burned=0;
          for(const id of Object.keys(a.holders)) { const remainder=a.holders[id]%p.lotSize; a.holders[id]-=remainder; burned+=remainder; }
          if(burned>=oldSupply) fail('lot_burn_all');
          a.supply=oldSupply-burned; a.price*=oldSupply/a.supply; a.lotSize=p.lotSize;
          p.burned=burned;
        } else {
          if(a.supply*p.ratio>cap(s,a)) fail('split_cap');
          if(a.price/p.ratio*(a.lotSize || 1)<MIN_POST_SPLIT_PRICE) fail('split_price_floor');
          a.supply*=p.ratio; a.price/=p.ratio;
          for(const id of Object.keys(a.holders)) a.holders[id]*=p.ratio;
        }
        p.status='executed'; p.executedAt=now;
      }
    } else fail('action');
  }
  s.operations[uid]=[...previous,op.requestId].slice(-100);
  return s;
}
export function marketView(s,uid,now=Date.now()) {
  const m=s.members[uid];
  return { me:uid, now, balance:m?.balance || 0, history:m?.history || [], disclosures:Array.isArray(s.disclosures)?s.disclosures.filter(d=>Number(d.beforeMarketCap)>=DISCLOSURE_MARKET_CAP || Number(d.afterMarketCap)>=DISCLOSURE_MARKET_CAP):[], assets:Object.values(s.assets).map(a=>{
    const p=a.proposal;
    const holders=Object.entries(a.holders).filter(([,n])=>n>0).sort((a,b)=>b[1]-a[1]);
    const totalHeld=holders.reduce((sum,[,n])=>sum+n,0);
    const top=holders.slice(0,10);
    const topHeld=top.reduce((sum,[,n])=>sum+n,0);
    const leaders=top.map(([id,n])=>({name:s.members[id]?.name || 'Creator',handle:s.members[id]?.handle || 'creator',shares:n,current:id===uid}));
    return {id:a.id,owner:a.owner,creatorName:s.members[a.owner]?.name || 'Creator',kind:a.kind,name:a.name,image:a.image,supply:a.supply,price:a.price,lotSize:a.lotSize || 1,held:held(a,uid),available:available(a),cap:cap(s,a),classTotal:classTotal(s,a.owner),classLimit:classLimit(s,a.owner),leaders,totalHeld,otherShares:totalHeld-topHeld,canManage:a.owner===uid,
      proposal:p ? {id:p.id,kind:p.kind || 'split',ratio:p.ratio,lotSize:p.lotSize,burned:p.burned || 0,mode:p.mode,status:p.status,round:p.round,revoteUsed:p.revoteUsed,yes:p.yes,no:p.no,closesAt:p.closesAt,electorate:p.electorate,weight:p.snapshot[uid]||0,choice:p.ballots[uid]?.choice || null,supported:p.supporters.includes(uid),supportWeight:p.supporters.reduce((sum,id)=>sum+held(a,id),0)} : null};
  })};
}
