"use client";
import { useEffect } from "react";
type ToolContext = { registerTool: (tool: Record<string, unknown>, options?: {signal:AbortSignal}) => void | Promise<void> };
export default function WebMCP() {
 useEffect(() => { const ctx=(document as Document & {modelContext?:ToolContext}).modelContext; if(!ctx?.registerTool)return; const lifecycle=new AbortController();
 const register=(tool:Record<string,unknown>)=>{try {void Promise.resolve(ctx.registerTool(tool,{signal:lifecycle.signal})).catch(console.error)}catch(error){console.error(error)}};
 register({name:"start_post_composition",title:"投稿を書く",description:"ホームの投稿欄を開き、入力できる状態にする。投稿はまだ公開されません。",inputSchema:{type:"object",properties:{},additionalProperties:false},annotations:{readOnlyHint:true},execute(){if(location.search){location.href="/";return {navigating:true}} const input=document.querySelector<HTMLTextAreaElement>("#body");if(!input)throw new Error("投稿欄がありません");input.focus();return {ready:true}}});
 register({name:"search_users",title:"ユーザーを探す",description:"名前またはユーザーIDで検索画面を開く。",inputSchema:{type:"object",properties:{query:{type:"string",minLength:1,maxLength:40}},required:["query"],additionalProperties:false},annotations:{readOnlyHint:true},execute(input:unknown){const query=(input as {query?:unknown})?.query;if(typeof query!=="string"||!query.trim()||query.length>40)throw new Error("1〜40文字の検索語を入力してください");location.href=`/?view=search&q=${encodeURIComponent(query.trim())}`;return {navigating:true}}});
 return ()=>lifecycle.abort(); },[]); return null;
}
