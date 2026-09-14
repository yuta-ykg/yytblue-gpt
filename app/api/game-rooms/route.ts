import { env } from "cloudflare:workers";

export const dynamic = "force-dynamic";
const userId=(r:Request)=>r.headers.get("oai-authenticated-user-id")||"local-preview";
const hash=async(v:string)=>Array.from(new Uint8Array(await crypto.subtle.digest("SHA-256",new TextEncoder().encode(v)))).map(x=>x.toString(16).padStart(2,"0")).join("");
const roomId=()=>crypto.randomUUID().replaceAll("-","").slice(0,8).toUpperCase();

export async function GET(request:Request){
  if(!env.DB)return Response.json({error:"storage_unavailable"},{status:503});
  const url=new URL(request.url),id=url.searchParams.get("id"),uid=userId(request);
  if(id){const room=await env.DB.prepare("SELECT id, game, visibility, host_id, guest_id, state, status, updated_at FROM game_rooms WHERE id = ?").bind(id.toUpperCase()).first<Record<string,unknown>>();if(!room)return Response.json({error:"not_found"},{status:404});if(room.visibility==="private"&&room.host_id!==uid&&room.guest_id!==uid)return Response.json({error:"forbidden"},{status:403});return Response.json({room:{...room,state:JSON.parse(String(room.state)),side:room.host_id===uid?1:room.guest_id===uid?-1:0}});}
  const rows=await env.DB.prepare("SELECT id, game, status, updated_at FROM game_rooms WHERE visibility = 'public' AND status != 'finished' ORDER BY updated_at DESC LIMIT 20").all();
  return Response.json({rooms:rows.results});
}

export async function POST(request:Request){
  if(!env.DB)return Response.json({error:"storage_unavailable"},{status:503});
  const body=await request.json() as {action?:string;id?:string;game?:string;private?:boolean;code?:string;state?:unknown},uid=userId(request);
  if(body.action==="create"){
    if(!["othello","shogi","go","chess"].includes(body.game||""))return Response.json({error:"invalid_game"},{status:400});
    if(body.private&&(!body.code||body.code.length<4))return Response.json({error:"code_too_short"},{status:400});
    const id=roomId(),now=Date.now(),codeHash=body.private?await hash(body.code!):null;
    await env.DB.prepare("INSERT INTO game_rooms (id, game, visibility, code_hash, host_id, state, status, updated_at) VALUES (?, ?, ?, ?, ?, ?, 'waiting', ?)").bind(id,body.game,body.private?"private":"public",codeHash,uid,JSON.stringify(body.state),now).run();
    return Response.json({room:{id,game:body.game,state:body.state,status:"waiting",side:1,updated_at:now}});
  }
  if(body.action==="join"){
    const id=(body.id||"").trim().toUpperCase(),room=await env.DB.prepare("SELECT * FROM game_rooms WHERE id = ?").bind(id).first<Record<string,unknown>>();
    if(!room)return Response.json({error:"not_found"},{status:404});
    if(room.visibility==="private"&&await hash(body.code||"")!==room.code_hash)return Response.json({error:"wrong_code"},{status:403});
    if(room.host_id!==uid&&room.guest_id&&room.guest_id!==uid)return Response.json({error:"room_full"},{status:409});
    if(room.host_id!==uid&&!room.guest_id)await env.DB.prepare("UPDATE game_rooms SET guest_id = ?, status = 'playing', updated_at = ? WHERE id = ?").bind(uid,Date.now(),id).run();
    return Response.json({room:{id,game:room.game,state:JSON.parse(String(room.state)),status:room.host_id===uid?room.status:"playing",side:room.host_id===uid?1:-1,updated_at:Date.now()}});
  }
  return Response.json({error:"invalid_action"},{status:400});
}

export async function PUT(request:Request){
  if(!env.DB)return Response.json({error:"storage_unavailable"},{status:503});
  const body=await request.json() as {id?:string;state?:unknown},uid=userId(request),id=(body.id||"").toUpperCase();
  const room=await env.DB.prepare("SELECT host_id, guest_id, state FROM game_rooms WHERE id = ?").bind(id).first<{host_id:string;guest_id:string|null;state:string}>();
  if(!room||![room.host_id,room.guest_id].includes(uid))return Response.json({error:"forbidden"},{status:403});
  const side=room.host_id===uid?1:-1,current=JSON.parse(room.state) as {turn?:number;over?:boolean};
  if(!current.over&&current.turn&&current.turn!==side)return Response.json({error:"not_your_turn"},{status:409});
  const data=JSON.stringify(body.state);if(data.length>100000)return Response.json({error:"state_too_large"},{status:413});
  const now=Date.now(),over=Boolean((body.state as {over?:boolean})?.over);
  await env.DB.prepare("UPDATE game_rooms SET state = ?, status = ?, updated_at = ? WHERE id = ?").bind(data,over?"finished":room.guest_id?"playing":"waiting",now,id).run();
  return Response.json({saved:true,updated_at:now});
}
