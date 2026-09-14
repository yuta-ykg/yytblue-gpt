let sharedMarket = null;
let sharedMarketError = false;
let sharedMarketBusy = false;
async function loadSharedMarket() {
  try {
    const response=await fetch('/api/market',{cache:'no-store'});
    if(!response.ok) throw Error('load');
    sharedMarket=await response.json(); sharedMarketError=false;
  } catch { sharedMarketError=true; }
}
function sharedMarketHTML() {
  const t=marketText, h=escape, fmt=n=>Number(n).toLocaleString(lang==='ja'?'ja-JP':'en-US',{maximumFractionDigits:8});
  if(!sharedMarket) return `<section class="creator-market"><h2>${t('クリエイターシェア','Creator Shares')}</h2><p role="status">${sharedMarketError?t('市場を読み込めませんでした。再読み込みしてください。','Could not load the market. Please retry.'):t('市場を読み込んでいます…','Loading market…')}</p><button data-shared-refresh>${t('再読み込み','Reload')}</button></section>`;
  const m=sharedMarket;
  const rank=m.assets.filter(a=>a.kind==='common').sort((a,b)=>b.price*b.supply-a.price*a.supply);
  const disabled=sharedMarketBusy?'disabled':'';
  const ownCommon=m.assets.find(a=>a.kind==='common' && a.canManage);
  const room=ownCommon?Math.max(0,ownCommon.classLimit-ownCommon.classTotal):0;
  const disclosures=`<section class="large-holder-reports"><div><h3>${t('大量保有報告','Large holder disclosures')}</h3><small>${t('時価総額10億pt以上で、売買前または売買後の保有比率が5%以上となる取引を公開しています。','Trades are disclosed for securities worth at least 1 billion pt when ownership is 5% or more before or after the trade.')}</small></div><ol>${(m.disclosures||[]).map(x=>`<li><span><b>${h(x.traderName)}</b><small>@${h(x.traderHandle)} · ${h(x.assetName)} / ${h(x.creatorName)}</small></span><span><b>${x.side==='buy'?t('購入','Buy'):t('売却','Sell')} ${fmt(x.quantity)}${t('株',' shares')}</b><small>${fmt(x.beforeShares)} (${fmt(x.beforeRatio*100)}%) → ${fmt(x.afterShares)} (${fmt(x.afterRatio*100)}%) · ${t('時価総額','Market cap')} ${fmt(Math.max(x.beforeMarketCap,x.afterMarketCap))} pt · ${h(new Date(x.at).toLocaleString(lang==='ja'?'ja-JP':'en-US'))}</small></span></li>`).join('')||`<li class="empty-report">${t('対象となる売買はまだありません。','No qualifying trades yet.')}</li>`}</ol></section>`;
  const creation=ownCommon?`<details class="market-card"><summary>${t('新しいブランドシェアを発行','Issue a new share class')}</summary><p>${t('全種類の発行済み合計','Total issued across all classes')}: ${fmt(ownCommon.classTotal)} / ${fmt(ownCommon.classLimit)} · ${t('追加発行可能','Available to issue')}: ${fmt(room)}</p><form class="shared-brand-form" data-shared-action="create_class" data-asset="${ownCommon.id}"><label>${t('ブランド名','Brand name')}<input name="name" maxlength="30" required></label><label>${t('画像（5MBまで）','Image (up to 5 MB)')}<input name="image" type="file" accept="image/png,image/jpeg,image/webp,image/gif"></label><label>${t('初回発行株数','Initial shares')}<input name="quantity" type="number" min="1" max="${Math.max(1,room)}" step="1" value="1" required></label><button ${disabled || (!room?'disabled':'')}>${t('新しいブランドシェアを発行','Issue new class')}</button><small>${t('名前・画像・保有株数・議決権・分割投票は種類ごとに独立します。','Each class has its own name, image, holdings, voting rights and split proposals.')}</small></form></details>`:'';
  const holderColor=i=>i===10?'#9aa3ae':`hsl(${Math.round((i*137.508+210)%360)} 68% 52%)`;
  const holderChart=a=>{
    if(!a.totalHeld) return `<p>${t('保有者はいません','No holders yet')}</p>`;
    const slices=[...a.leaders.map((x,i)=>({...x,color:holderColor(i)})),...(a.otherShares?[{name:t('その他','Others'),handle:'',shares:a.otherShares,color:holderColor(10)}]:[])];
    let cursor=0;
    const stops=slices.map(x=>{const start=cursor,end=cursor+x.shares/a.totalHeld*100;cursor=end;return `${x.color} ${start}% ${end}%`;}).join(',');
    return `<div class="holder-chart"><div class="holder-pie" role="img" aria-label="${t('上位10人とその他の保有比率','Ownership share of the top 10 and others')}" style="background:conic-gradient(${stops})"><span><b>${fmt(a.totalHeld)}</b><small>${t('保有株','held shares')}</small></span></div><ul class="holder-legend">${slices.map(x=>`<li><i style="background:${x.color}"></i><span><b>${h(x.name)}${x.current?` · ${t('あなた','You')}`:''}</b>${x.handle?`<small>@${h(x.handle)}</small>`:''}</span><em>${fmt(x.shares)} · ${fmt(x.shares/a.totalHeld*100)}%</em></li>`).join('')}</ul></div>`;
  };
  const assetHTML=a=>{
    const p=a.proposal, live=p && ['voting','collecting'].includes(p.status);
    const common=a.kind==='common', type=t(common?'通常シェア':'ブランドシェア',common?'Creator Shares':'Brand Shares');
    const lot=a.lotSize || 1;
    const trade=`<form data-shared-action="trade" data-asset="${a.id}"><label>${t('株数','Quantity')}<input name="quantity" type="number" min="${lot}" max="1000" step="${lot}" value="${lot}" required></label><button name="side" value="buy" ${disabled || (a.available<lot?'disabled':'')}>${t('買う','Buy')}</button><button name="side" value="sell" ${disabled || (a.held<lot?'disabled':'')}>${t('売る','Sell')}</button></form>`;
    const manage=!common && a.canManage ? `<form class="shared-brand-form" data-shared-action="brand" data-asset="${a.id}"><label>${t('ブランド名','Brand name')}<input name="name" maxlength="30" value="${h(a.name)}" required></label><label>${t('画像（5MBまで）','Image (up to 5 MB)')}<input name="image" type="file" accept="image/png,image/jpeg,image/webp,image/gif"></label><label>${t('株数','Quantity')}<input name="quantity" type="number" min="1" max="${Math.max(1,Math.max(a.cap-a.supply,Math.min(a.held,a.supply-1)))}" step="1" value="1"></label><button name="intent" value="brand" ${disabled}>${t('ブランドを保存','Save brand')}</button><button name="intent" value="issue" ${disabled || (live || a.supply>=a.cap?'disabled':'')}>${t('ブランドシェアを追加発行','Issue more shares')}</button><button class="danger" name="intent" value="burn" ${disabled || (live || a.held<1 || a.supply<=1?'disabled':'')}>${t('保有株を消却','Burn owned shares')}</button><small>${t('消却すると自分の保有株と発行済み株数が同数減り、残る株の1株価格が上がります。消却前後の時価総額は変わりません。最低1株は残し、投票中は追加発行・消却できません。','Burning reduces your holdings and issued supply by the same amount, raising the value per remaining share. Market cap stays unchanged. At least one share must remain; issuance and burning are locked during a proposal.')}</small></form>`:'';
    let governance='';
    if(a.supply>0) {
      const canRequest=a.held>=1 && !live;
      const method=`<input name="mode" type="hidden" value="solo"><small>${t('設置条件：単独で議決権1%以上','Requirement: at least 1% voting power individually')}</small>`;
      const request=!live ? `<form data-shared-action="request" data-asset="${a.id}"><b>${t('株式分割','Share split')}</b><label>${t('分割倍率','Split ratio')}<input name="ratio" type="number" min="2" max="200" value="2" required></label>${method}<button ${disabled || (!canRequest?'disabled':'')}>${t('分割投票をリクエスト','Request split vote')}</button><small>${t('分割後の1単元価格は10pt以上必要です。','The post-split value of one unit must be at least 10 pt.')}</small></form><form data-shared-action="request_lot" data-asset="${a.id}"><b>${t('単元変更','Unit-size change')}</b><label>${t('1単元の株数','Shares per unit')}<input name="lotSize" type="number" min="1" max="${Math.min(1000,a.supply)}" value="${lot}" required></label>${method}<button ${disabled || (!canRequest?'disabled':'')}>${t('単元変更投票をリクエスト','Request unit-change vote')}</button><small>${t('1単元は最低取引数量です。可決時、各保有者の単元未満の端数は自動的に消却されます。','One unit is the minimum trade quantity. If approved, each holder’s odd-lot remainder is burned automatically.')}</small></form>`:'';
      const voteButton=(action,label,extra='',off=false)=>`<button type="button" data-shared-command="${action}" data-asset="${a.id}" data-proposal="${p.id}" data-round="${p.round}" ${extra} ${disabled || (off?'disabled':'')}>${label}</button>`;
      let proposal='';
      if(p) {
        const closed=p.closesAt && Date.now()>=p.closesAt;
        const status={collecting:t('共同賛同を募集中','Collecting supporters'),voting:closed?t('投票終了','Voting closed'):t('投票受付中','Voting open'),executed:t('実行済み','Executed'),rejected:t('否決','Rejected')}[p.status];
        const subject=p.kind==='lot'?`${t('1単元','Unit')} ${fmt(p.lotSize)}${t('株へ変更',' shares')}`:`${p.ratio}${t('倍分割','-for-1 split')}`;
        proposal=`<p><b>${subject} · ${t('第','Round ')}${p.round}${lang==='ja'?'回':''}</b> · ${status}</p>${p.status==='executed'&&p.kind==='lot'?`<small>${t('自動消却','Automatically burned')}: ${fmt(p.burned)}${t('株',' shares')}</small>`:''}`;
        if(p.status==='collecting') proposal+=`<p>${t('共同賛同','Combined support')}: ${fmt(p.supportWeight)} / ${fmt(Math.ceil(a.supply*0.03))}${t('株',' shares')}</p>${voteButton('support',p.supported?t('賛同済み','Supported'):t('共同リクエストに賛同','Support request'),'',p.supported || a.held<1)}`;
        else {
          proposal+=`<p>${t('賛成','For')} ${fmt(p.yes)} · ${t('反対','Against')} ${fmt(p.no)}</p><small>${t('投票期限','Deadline')}: ${h(new Date(p.closesAt).toLocaleString(lang==='ja'?'ja-JP':'en-US'))}<br>${t('あなたの確定票数','Your snapshot votes')}: ${fmt(p.weight)}${p.choice?' · '+t('投票済み','Voted'):''}</small>`;
          if(p.status==='voting') {
            const belowFloor=p.kind!=='lot' && a.price/p.ratio*lot<10;
            proposal+=`<div class="split-actions">${voteButton('vote',t('賛成','For'),'data-choice="yes"',closed || !p.weight || !!p.choice)}${voteButton('vote',t('反対','Against'),'data-choice="no"',closed || !p.weight || !!p.choice)}</div>${belowFloor?`<small>${t('現在の価格では分割後の1単元価格が10ptを下回るため、分割できません。','The current price would put one unit below 10 pt after the split.')}</small>`:''}${voteButton('execute',t('結果を確定・可決なら分割','Finalize result / split if approved'),'',!closed || belowFloor)}`;
          }
          if(['voting','rejected'].includes(p.status)) proposal+=voteButton('revote',p.revoteUsed?t('再投票済み','Revote used'):t('再投票（単独34%以上）','Revote (individual 34%+)'),'',p.revoteUsed || a.held*100<a.supply*34 || p.yes+p.no<1);
        }
      }
      governance=`<section class="split-vote"><b>${type}${t('の投票',' voting')}</b><small>${t('分割と単元変更は別の投票です。設置は単独1%以上。開始時の1株＝1票。投票は24時間、投じられた票の過半数で可決。','Splits and unit-size changes use separate requests. Requests require at least 1% individually. One share at opening = one vote. Voting lasts 24 hours; a majority of cast votes passes.')}</small>${proposal}${request}</section>`;
    }
    const leaders=`<details class="shareholder-leaders"><summary>${type} · ${t('保有者 上位10人とその他','Top 10 holders and others')}</summary>${holderChart(a)}<ol>${a.leaders.map((x,i)=>`<li><span class="holder-rank">${i+1}</span><span>${h(x.name)}${x.current?' · '+t('あなた','You'):''}</span><span>${fmt(x.shares)}${t('株',' shares')} · ${fmt(a.totalHeld?x.shares/a.totalHeld*100:0)}%</span></li>`).join('') || `<li>${t('保有者はいません','No holders yet')}</li>`}${a.otherShares?`<li><span class="holder-rank">…</span><span>${t('その他','Others')}</span><span>${fmt(a.otherShares)}${t('株',' shares')} · ${fmt(a.otherShares/a.totalHeld*100)}%</span></li>`:''}</ol></details>`;
    return `<article class="market-card"><div class="class-brand-head">${a.image?`<img src="${h(a.image)}" alt="">`:''}<div><h3>${h(a.name)}</h3><small>${type} · ${h(a.creatorName)}${a.canManage?' · '+t('あなたの発行銘柄','Your security'):''}</small></div></div><p><strong>${fmt(a.price)} pt</strong> / ${t('株','share')} · ${t('保有','Owned')}: ${fmt(a.held)}</p><p class="market-supply">${t('発行済み','Issued')} ${fmt(a.supply)} · ${t('購入可能','Available')} ${fmt(a.available)} · ${t('上限','Limit')} ${fmt(a.cap)}</p>${!common?`<small>${t('全種類の発行済み合計は通常シェアの3分の2まで。この種類の上限は他の種類の発行数を差し引いた値です。議決権と分割は種類ごとに独立しています。','All classes combined are capped at two-thirds of Creator Shares. This class’s limit deducts other classes’ supply. Voting and splits are independent for each class.')}</small>`:''}${trade}${common?`<button data-shared-post="${a.id}">${t('シェア情報を投稿','Post Creator Shares')}</button>`:''}${manage}${governance}${leaders}</article>`;
  };
  return `<section class="creator-market"><h2>${t('クリエイターシェア','Creator Shares')}</h2><p>${t('みんなで利用する共有市場です。購入で価格が上がり、売却で下がります。取引量が発行済み株数に占める割合が大きいほど価格も大きく動きます。無料ポイントのみで、現金・換金・配当はありません。','A shared market where buying raises the price and selling lowers it. Larger trades relative to issued supply move the price more. Free points only; no real money, cash-out or dividends.')}</p><button data-shared-refresh ${disabled}>${t('最新情報に更新','Refresh market')}</button>${sharedMarketError?`<p role="alert">${t('更新できませんでした。表示は前回取得時点の情報です。','Update failed. Showing the last loaded information.')}</p>`:''}<div class="market-summary"><div>${t('ポイント残高','Points')}<strong>${fmt(m.balance)} pt</strong></div><div>${t('保有評価額','Holdings value')}<strong>${fmt(m.assets.reduce((n,a)=>n+a.price*a.held,0))} pt</strong></div></div>${disclosures}${creation}<section class="market-cap-ranking"><h3>${t('時価総額ランキング','Market cap ranking')}</h3><ol>${rank.map((a,i)=>`<li><span>${i+1} · ${h(a.creatorName)}</span><strong>${fmt(a.supply*a.price)} pt</strong></li>`).join('')}</ol></section>${[...m.assets].sort((a,b)=>(b.canManage-a.canManage) || a.owner.localeCompare(b.owner) || (a.kind===b.kind?a.id.localeCompare(b.id):a.kind==='common'?-1:1)).map(assetHTML).join('')}<h3>${t('取引履歴','Trade history')}</h3><ul class="market-history">${m.history.map(x=>`<li><span>${h(x.name)} · ${x.side==='buy'?t('購入','Buy'):t('売却','Sell')} ${fmt(x.quantity)}<small>${x.beforePrice&&x.afterPrice?`${fmt(x.beforePrice)} → ${fmt(x.afterPrice)} pt · `:''}${h(new Date(x.at).toLocaleString())}</small></span><b>${fmt(x.total)} pt</b></li>`).join('') || `<li>${t('まだ取引はありません。','No trades yet.')}</li>`}</ul><details><summary>${t('従来の個人用シミュレーション記録','Previous personal simulation record')}</summary><p>${t('以前の記録は保存したままです。所有者が確定していない旧サンプル銘柄は共有市場へ移さず、共有市場は別の10,000 ptから開始します。','Previous records are preserved. Old sample securities without verified owners are not imported. The shared market starts separately with 10,000 pt.')}</p><p>${t('旧残高','Previous balance')}: ${fmt(creatorMarket.balance)} pt</p><ul>${Object.entries(creatorMarket.holdings).map(([id,n])=>`<li>${h(id)}: ${fmt(n)} · ${t('ブランドシェア','Brand Shares')}: ${fmt(creatorMarket.classHoldings[id] || 0)}</li>`).join('')}</ul></details></section>`;
}
const sharedErrors={owner:['発行・編集・消却できるのは本人だけです','Only the creator may issue, edit or burn'],supply:['購入可能な株数を超えています','Not enough available shares'],balance:['ポイントが不足しています','Not enough points'],holdings:['保有株数が不足しています','Not enough shares'],burn_holdings:['自分の保有株数以内で、最低1株が残る株数を指定してください','Choose no more than your holdings and leave at least one share issued'],request_power:['投票設置には単独で議決権1%以上が必要です','Requests require at least 1% voting power individually'],split_cap:['この倍率では発行上限を超えます（倍率は2〜200）','Split exceeds the cap (ratio must be 2–200)'],split_price_floor:['分割後の1単元価格は10pt以上必要です','The post-split value must be at least 10 pt per unit'],lot_size:['1単元は1〜1,000株で、現在と異なる株数を指定してください','Set one unit to 1–1,000 shares and choose a new size'],lot_burn_all:['全株が消却される単元数には変更できません','The unit size cannot burn every issued share'],class_limit:['ブランドシェアは全種類の合計で通常シェア発行数の3分の2までです','All share classes combined are capped at two-thirds of Creator Shares'],stale:['議案が更新されています。最新情報で操作してください','Proposal changed. Refresh and try again'],closed:['投票期間は終了しました','Voting has closed'],not_closed:['24時間の投票期間終了後に確定できます','Finalize after the 24-hour voting period'],revote:['再投票には単独34%以上・投票済みの議案が必要です。1議案1回限りです','Revote requires a 34% stake, cast votes and an unused revote'],not_holder:['投票開始時点で1株以上の保有が必要です','You must own a share when voting opens'],proposal_active:['投票中は追加発行・消却できません','Issuance and burning are locked during voting'],image:['画像を確認してください','Check the image'],voted:['投票済みです','Already voted']};
async function sharedOperation(op,form) {
  if(sharedMarketBusy) return;
  sharedMarketBusy=true;
  const controls=form ? [...form.querySelectorAll('button')] : [];
  controls.forEach(b=>b.disabled=true);
  try {
    if(form && ['brand','issue','create_class'].includes(op.action)) {
      const file=new FormData(form).get('image');
      if(file instanceof File && file.size) {
        if(file.size>5*1024*1024) throw Error('image');
        const body=new FormData(); body.append('images',file);
        const uploaded=await fetch('/api/media',{method:'POST',body});
        if(!uploaded.ok) throw Error('image');
        op.image=(await uploaded.json()).urls[0];
      }
    }
    op.requestId=crypto.randomUUID();
    const response=await fetch('/api/market',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(op)});
    const data=await response.json();
    if(!response.ok) throw Error(data.error);
    sharedMarket=data; sharedMarketError=false;
    sharedMarketBusy=false; render(); notify(marketText('反映しました','Updated'));
  } catch(error) {
    sharedMarketBusy=false; controls.forEach(b=>b.disabled=false);
    const msg=sharedErrors[error.message];
    notify(msg?marketText(...msg):marketText('処理できませんでした。入力内容を確認し、最新情報に更新してください。','Could not complete. Check your input and refresh the market.'));
  }
}
document.addEventListener('submit',e=>{
  const form=e.target.closest('[data-shared-action]'); if(!form) return;
  e.preventDefault();
  const d=new FormData(form);
  sharedOperation({action:e.submitter?.name==='intent'?e.submitter.value:form.dataset.sharedAction,asset:form.dataset.asset,quantity:Number(d.get('quantity')),ratio:Number(d.get('ratio')),lotSize:Number(d.get('lotSize')),mode:d.get('mode'),side:e.submitter?.value,name:d.get('name')},form);
});
document.addEventListener('click',async e=>{
  const refresh=e.target.closest('[data-shared-refresh]');
  if(refresh && !sharedMarketBusy) { refresh.disabled=true; await loadSharedMarket(); render(); }
  const b=e.target.closest('[data-shared-command]');
  if(b) sharedOperation({action:b.dataset.sharedCommand,asset:b.dataset.asset,proposalId:b.dataset.proposal,round:Number(b.dataset.round),choice:b.dataset.choice});
  const post=e.target.closest('[data-shared-post]');
  if(post) {
    const a=sharedMarket.assets.find(a=>a.id===post.dataset.sharedPost);
    composingStock={creator:a.owner,name:a.creatorName,shared:true,price:a.price,supply:a.supply,marketCap:a.price*a.supply};
    navigate('home'); updateStockComposer(); document.querySelector('#post-text').focus();
  }
});
