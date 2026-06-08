import{r as x,a as z,t as o,b as Se,g as me,w as H}from"./game-i18n-DyDKDPKw.js";import{g as be,a as he,M as _e,b as Me,I as se,c as le}from"./game-content-Bxuo3vKP.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const n of l.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function t(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(i){if(i.ep)return;i.ep=!0;const l=t(i);fetch(i.href,l)}})();async function Ce(e){const a=new URL("/api/admin/rooms",window.location.origin),t=await fetch(a,{headers:{Accept:"application/json"},credentials:"same-origin"}),s=await t.json();if(!t.ok||!s.ok)throw new Error(x(s.messageCode,void 0,s.message||"读取房间列表失败。"));return s.rooms}async function xe(e){const a=await fetch("/api/admin/rooms",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},credentials:"same-origin",body:JSON.stringify(e)}),t=await a.json();if(!a.ok||!t.ok||!t.room)throw new Error(x(t.messageCode,void 0,t.message||"创建房间失败。"));return{room:t.room,message:x(t.messageCode,void 0,t.message||"房间已创建。")}}async function ue(e){const a=await fetch(`/api/admin/rooms/${encodeURIComponent(e)}/close`,{method:"POST",headers:{Accept:"application/json"},credentials:"same-origin"}),t=await a.json();if(!a.ok||!t.ok)throw new Error(x(t.messageCode,void 0,t.message||"关闭房间失败。"));return x(t.messageCode,void 0,t.message||"房间已关闭。")}async function Ne(e){const a=await fetch(`/api/admin/rooms/${encodeURIComponent(e)}/state`,{headers:{Accept:"application/json"},credentials:"same-origin"}),t=await a.json();if(!a.ok||!t.ok||!t.room)throw new Error(x(t.messageCode,void 0,t.message||"读取房间状态失败。"));return t.room}async function Ie(e,a){const t=await fetch(`/api/admin/rooms/${encodeURIComponent(e)}/day-night`,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},credentials:"same-origin",body:JSON.stringify({cycleProgress:a})}),s=await t.json();if(!t.ok||!s.ok||!s.room)throw new Error(x(s.messageCode,void 0,s.message||"调整日夜状态失败。"));return s.room}async function Pe(e,a){const t=await fetch(`/api/admin/rooms/${encodeURIComponent(e)}/monster-spawn`,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},credentials:"same-origin",body:JSON.stringify(a)}),s=await t.json();if(!t.ok||!s.ok||!s.room)throw new Error(x(s.messageCode,void 0,s.message||"设置房间刷怪方案失败。"));return s.room}async function ke(e,a,t){const s=await fetch(`/api/admin/rooms/${encodeURIComponent(e)}/players/${encodeURIComponent(a)}/adjust`,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},credentials:"same-origin",body:JSON.stringify(t)}),i=await s.json();if(!s.ok||!i.ok||!i.room)throw new Error(x(i.messageCode,void 0,i.message||"调整玩家资料失败。"));return i.room}async function Ae(){return(await fetch("/api/admin/session",{headers:{Accept:"application/json"},credentials:"same-origin"})).ok}async function $e(e){const a=await fetch("/api/admin/login",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},credentials:"same-origin",body:JSON.stringify({password:e})}),t=await a.json();if(!a.ok||!t.ok)throw new Error(x(t.messageCode,void 0,t.message||"管理员登录失败。"));return x(t.messageCode,void 0,t.message||"管理员登录成功。")}async function Ee(){await fetch("/api/admin/logout",{method:"POST",headers:{Accept:"application/json"},credentials:"same-origin"})}const qe="/host-console-x9k4n2va.html";function Le(e){const a=new URL(qe,window.location.origin);return e&&a.searchParams.set("room",e),z(a).toString()}function ce(e,a){const t=new URL("/game.html",window.location.origin);return t.searchParams.set("room",e),t.searchParams.set("name","管理员观战"),t.searchParams.set("adminSpectator","1"),a&&t.searchParams.set("focus",a),z(t).toString()}function pe(e){const a=new URL("/game.html",window.location.origin);return a.searchParams.set("room",e),a.searchParams.set("name","管理员"),a.searchParams.set("adminPlayer","1"),z(a).toString()}async function X(e){try{return await navigator.clipboard.writeText(e),!0}catch{return!1}}function ge(e,a){return e==="core"?o("内部测试"):o("像素世界")}function ye(e,a){return e==="core"?o("内部测试房，主要给管理和调试使用。"):o("从猪猪基地出发，去其他地图收集素材，再回主基地往上建造。")}const Te=["placeholder","title","aria-label","alt"];function de(e){const a=e.trim();if(!a)return e;const t=Se(a);return t===a?e:e.replace(a,t)}function C(e){const a=document.createTreeWalker(e,NodeFilter.SHOW_TEXT);let t=a.nextNode();for(;t;){const l=t.textContent??"",n=de(l);n!==l&&(t.textContent=n),t=a.nextNode()}const s=e instanceof Element?e:null;[...s?[s]:[],...Array.from(e.querySelectorAll("*"))].forEach(l=>{Te.forEach(n=>{const _=l.getAttribute(n);if(!_)return;const d=de(_);d!==_&&l.setAttribute(n,d)})})}const Re=[{label:"黎明",progress:.14},{label:"正午",progress:.34},{label:"黄昏",progress:.62},{label:"深夜",progress:.84}],K=[];function f(e){return e.replace(/[&<>"']/g,a=>{switch(a){case"&":return"&amp;";case"<":return"&lt;";case">":return"&gt;";case'"':return"&quot;";case"'":return"&#39;";default:return a}})}function De(e,a){return f(e instanceof Error?e.message:a)}function we(){for(;K.length>0;){const e=K.pop();e!==void 0&&window.clearInterval(e)}}function O(e,a){K.push(window.setInterval(e,a))}function Be(){var a;return(((a=new URLSearchParams(window.location.search).get("room"))==null?void 0:a.trim())??"")||null}function Ve(e,a=Date.now()){if(!e)return o("即将关闭");const t=Math.max(0,Math.ceil((e-a)/1e3)),s=Math.floor(t/60),i=t%60;return`${String(s).padStart(2,"0")}:${String(i).padStart(2,"0")}`}function je(e){return e.isPermanent?null:e.phase==="closing"?e.closingAtMs:e.activeUntilMs}function V(e,a=Date.now()){if(e.isPermanent)return o("永久开放");const t=Ve(je(e),a);return e.phase==="closing"?o("关闭中 {time}",{time:t},`关闭中 ${t}`):o("剩余 {time}",{time:t},`剩余 ${t}`)}function ve(e){return e.isPermanent?o("常驻房"):e.phase==="closing"?o("收尾中"):o("限时房")}function Fe(e){return e.availableSlots<=0?"is-danger":e.phase==="closing"?"is-warning":e.isPermanent?"is-stable":"is-live"}function Oe(e){return e<.18?o("黎明"):e<.48?o("白昼"):e<.74?o("黄昏"):o("深夜")}function Ue(e,a,t=Date.now()){const s=Math.max(1e3,e.cycleDurationMs);return((e.serverNowMs+Math.max(0,t-a)-e.cycleStartedAtMs)%s+s)%s/s}function He(e,a,t){return`${e.toFixed(1)}, ${a.toFixed(1)}, ${t.toFixed(1)}`}function Xe(e){switch(e){case"first-person":return o("第一人称");case"second-person":return o("第二人称");default:return o("第三人称")}}function Ke(e){return e.isSleeping?o("睡眠中"):e.isDowned?o("倒地中"):o("在线")}function $(e){return new Intl.NumberFormat(me()).format(Math.max(0,Math.round(e)))}function D(e){return new Intl.NumberFormat(me(),{minimumFractionDigits:0,maximumFractionDigits:3}).format(Math.max(0,e)/1e3)}function R(e,a=Date.now()){if(!e)return"--";const t=Math.max(0,Math.ceil((e-a)/1e3));return t<60?`${t}s`:`${Math.floor(t/60)}m ${String(t%60).padStart(2,"0")}s`}function Ze(e,a=Date.now()){const t=e.monsterSpawnState;switch(t.phase){case"disabled":return o("已关闭自动刷怪");case"unsupported-room-mode":return o("当前房型不启用自动刷怪");case"waiting-window":return t.nextSpawnAtMs?o("等待危险阶段 · {time}",{time:R(t.nextSpawnAtMs,a)},`等待危险阶段 · ${R(t.nextSpawnAtMs,a)}`):o("等待危险阶段");case"paused":return o("上限为 0，已暂停");case"misconfigured":return o("生怪点配置无效");case"capped":return o("已到场上上限");default:return t.nextSpawnAtMs?o("运行中 · 下次 {time}",{time:R(t.nextSpawnAtMs,a)},`运行中 · 下次 ${R(t.nextSpawnAtMs,a)}`):o("运行中")}}function ze(e){return e.length===0?"":e.map(a=>`${a.x.toFixed(1)}, ${a.z.toFixed(1)}`).join(`
`)}function Ge(e){return e.split(/\n+/).map(a=>a.trim()).filter(Boolean).map(a=>{const[t,s]=a.split(/[,\s]+/).filter(Boolean);return{x:Number(t),z:Number(s)}}).filter(a=>Number.isFinite(a.x)&&Number.isFinite(a.z))}function Z(e,a,t,s){e.textContent=s?a:"复制失败",window.setTimeout(()=>{e.textContent=t},1400)}function We(e,a){const t=e.reduce((d,S)=>d+S.onlineCount,0),s=e.filter(d=>d.isPermanent).length,i=e.filter(d=>!d.isPermanent).length,l=a?f(a.summary.title):"未进入房间管理",n=a?`${V(a.summary)} · 剩余 ${$(a.piggyCoinState.rewardableBlockRemainingCount)} 格可产币`:"先从下方选择一个房间进入管理",_=a?D(a.piggyCoinState.rewardablePiggyCoinRemainingMilliunits):"--";return`
    <article class="admin-summary-card">
      <span class="admin-summary-card__label">房间总数</span>
      <strong class="admin-summary-card__value">${e.length}</strong>
      <span class="admin-summary-card__meta">${s} 个常驻 / ${i} 个限时</span>
    </article>
    <article class="admin-summary-card">
      <span class="admin-summary-card__label">在线玩家</span>
      <strong class="admin-summary-card__value">${t}</strong>
      <span class="admin-summary-card__meta">所有房间当前在线人数</span>
    </article>
    <article class="admin-summary-card">
      <span class="admin-summary-card__label">当前房间余量</span>
      <strong class="admin-summary-card__value">${f(_)}</strong>
      <span class="admin-summary-card__meta">${a?"按剩余可产币方块折算的猪豬幣":"先进入一个房间后显示经济余量"}</span>
    </article>
    <article class="admin-summary-card">
      <span class="admin-summary-card__label">当前管理</span>
      <strong class="admin-summary-card__value admin-summary-card__value--compact">${l}</strong>
      <span class="admin-summary-card__meta">${f(n)}</span>
    </article>
  `}function Je({root:e,refreshRooms:a,navigateToConsole:t}){e.innerHTML=`
    <div class="admin-dashboard">
      <section class="admin-panel admin-panel--light">
        <div class="admin-panel__head">
          <div>
            <p class="section-title__eyebrow">Quick Create</p>
            <h2 class="section-title">快速开房</h2>
            <p class="section-subtitle">创建后直接拿链接发给朋友，然后点进管理页继续盯状态。</p>
          </div>
        </div>
        <form id="admin-create-form" class="admin-create-form">
          <div class="field field--wide">
            <label for="room-title">房间标题</label>
            <input id="room-title" maxlength="28" value="今天一起开黑吧">
          </div>
          <div class="field">
            <label for="room-mode">玩法</label>
            <input id="room-mode" value="像素世界" readonly>
          </div>
          <div class="field">
            <label for="room-map">地图</label>
            <input id="room-map" value="猪猪基地" readonly>
          </div>
          <div class="field">
            <label for="room-limit">人数</label>
            <select id="room-limit">
              <option value="2">2 人</option>
              <option value="4" selected>4 人</option>
              <option value="6">6 人</option>
              <option value="8">8 人</option>
              <option value="10">10 人</option>
            </select>
          </div>
          <div class="field">
            <label for="room-lifetime">关闭时间</label>
            <select id="room-lifetime">
              <option value="30m">30 分钟</option>
              <option value="60m" selected>1 小时</option>
              <option value="permanent">永久房</option>
            </select>
          </div>
          <label class="toggle-field admin-create-form__toggle" for="room-pvp-toggle">
            <input id="room-pvp-toggle" type="checkbox">
            <span>允许玩家互相攻击</span>
          </label>
          <div class="admin-inline-actions">
            <button id="create-room" class="button button--primary" type="submit">创建房间</button>
          </div>
        </form>
        <div id="create-feedback" class="feedback-card">创建成功后，加入链接会显示在这里。</div>
      </section>
      <section class="admin-panel">
        <div class="admin-panel__head">
          <div>
            <p class="section-title__eyebrow">Rooms</p>
            <h2 class="section-title">当前房间</h2>
            <p class="section-subtitle">这里只保留你真正需要的入口和状态，不再把信息拆成大块空白卡片。</p>
          </div>
          <button class="button button--ghost" id="refresh-admin-rooms" type="button">刷新</button>
        </div>
        <div id="admin-room-list" class="admin-room-list">
          <div class="empty-card">正在读取房间列表...</div>
        </div>
      </section>
    </div>
  `,C(e);const s=e.querySelector("#admin-create-form"),i=e.querySelector("#create-feedback"),l=e.querySelector("#admin-room-list"),n=e.querySelector("#refresh-admin-rooms"),_=u=>{if(l){if(u.length===0){l.innerHTML=`<div class="empty-card">${o("还没有房间。先创建一个吧。")}</div>`,C(l);return}l.innerHTML="",u.forEach(p=>{const w=document.createElement("article");w.className="admin-room-row",w.dataset.roomId=p.id,w.innerHTML=`
        <div class="admin-room-row__content">
          <div class="admin-room-row__title">
            <h3>${f(p.title)}</h3>
            <div class="admin-room-row__badges">
              <span class="admin-badge ${Fe(p)}">${f(ve(p))}</span>
              <span class="admin-badge">${f(ge(p.gameMode,p.theme))}</span>
              <span class="admin-badge">${f(be(p.mapId))}</span>
            </div>
          </div>
          <div class="admin-room-row__meta">
            <span>${p.onlineCount} / ${p.maxPlayers} 在线</span>
            <span>${p.allowPlayerDamage?"玩家互伤开启":"玩家互伤关闭"}</span>
            <span>${f(he(p.mapId))}</span>
            <span>${f(ye(p.gameMode,p.theme))}</span>
          </div>
        </div>
        <div class="admin-room-row__side">
          <div class="admin-room-row__countdown" data-countdown-for="${p.id}">${f(V(p))}</div>
          <div class="admin-room-row__actions"></div>
        </div>
      `;const g=w.querySelector(".admin-room-row__actions");if(g){const h=document.createElement("button");h.type="button",h.className="button button--primary",h.textContent=o("进入管理"),h.addEventListener("click",()=>{t(p.id)});const v=document.createElement("button");v.type="button",v.className="button button--ghost",v.textContent=o("复制链接"),v.addEventListener("click",async()=>{const P=await X(H(p.joinUrl));Z(v,o("已复制"),o("复制链接"),P)});const y=document.createElement("a");y.className="button button--ghost",y.href=pe(p.id),y.target="_blank",y.rel="noopener",y.textContent=o("管理进入");const b=document.createElement("button");b.type="button",b.className="button button--danger",b.textContent=o("关闭房间"),b.addEventListener("click",async()=>{if(window.confirm(o("确定关闭「{title}」吗？房内玩家与观战连接会被立即断开。",{title:p.title},`确定关闭「${p.title}」吗？房内玩家与观战连接会被立即断开。`)))try{const I=await ue(p.id);i&&(i.className="feedback-card is-success",i.textContent=I),await a()}catch(I){i&&(i.className="feedback-card is-error",i.textContent=I instanceof Error?I.message:o("关闭房间失败。"))}}),g.append(h,v,y,b)}l.appendChild(w),C(w)})}},d=(u,p)=>{u.forEach(w=>{const g=l==null?void 0:l.querySelector(`[data-countdown-for="${w.id}"]`);g&&(g.textContent=V(w,p))})};s==null||s.addEventListener("submit",async u=>{var b,P,I,E,q,L;u.preventDefault();const p=(((b=e.querySelector("#room-title"))==null?void 0:b.value)??"").trim(),w="survival",g="piggy-base",h=Number(((P=e.querySelector("#room-limit"))==null?void 0:P.value)??"4"),v=((I=e.querySelector("#room-lifetime"))==null?void 0:I.value)??"60m",y=((E=e.querySelector("#room-pvp-toggle"))==null?void 0:E.checked)??!1;try{const{room:N,message:T}=await xe({title:p,mode:w,mapId:g,maxPlayers:h,lifetime:v,allowPlayerDamage:y});i&&(i.className="feedback-card is-success",i.innerHTML=`
          <strong>${f(T)}</strong>
          <div class="admin-feedback-actions">
            <button class="button button--ghost" id="copy-created-room" type="button">复制加入链接</button>
            <button class="button button--primary" id="manage-created-room" type="button">进入管理</button>
          </div>
        `,C(i),(q=i.querySelector("#copy-created-room"))==null||q.addEventListener("click",async()=>{const k=await X(H(N.joinUrl)),A=i.querySelector("#copy-created-room");A&&Z(A,o("已复制"),o("复制加入链接"),k)}),(L=i.querySelector("#manage-created-room"))==null||L.addEventListener("click",()=>{t(N.id)})),await a()}catch(N){i&&(i.className="feedback-card is-error",i.textContent=N instanceof Error?N.message:o("创建房间失败。"))}}),n==null||n.addEventListener("click",()=>{a()});let S=[];return{initialize:async()=>{},handleRoomsUpdate:u=>{S=u,_(u),d(u,Date.now())},handleRoomsError:u=>{l&&(l.innerHTML=`<div class="empty-card">${u}</div>`,C(l))},tick:u=>{d(S,u)},poll:void 0}}function Ye(e){return e.innerHTML=`
    <div class="admin-room-view">
      <section class="admin-panel admin-room-header">
        <div class="admin-room-header__copy">
          <button class="button button--ghost" id="back-to-dashboard" type="button">返回房间总览</button>
          <div>
            <p class="section-title__eyebrow">Room Control</p>
            <h2 class="section-title" id="managed-room-title">房间管理</h2>
            <p class="section-subtitle" id="managed-room-subtitle">正在同步房间状态...</p>
          </div>
        </div>
        <div class="admin-room-header__actions">
          <button class="button button--ghost" id="refresh-room-state" type="button">刷新状态</button>
          <button class="button button--ghost" id="copy-room-link" type="button">复制加入链接</button>
          <button class="button button--danger" id="close-room" type="button">关闭房间</button>
          <a class="button button--ghost" id="open-room-page" target="_blank" rel="noopener">管理进入</a>
          <a class="button button--primary" id="open-spectator-window" target="_blank" rel="noopener">独立观战</a>
        </div>
      </section>
      <div class="admin-room-grid">
        <div class="admin-room-main">
          <section class="admin-panel admin-stage-panel">
            <div class="admin-panel__head">
              <div>
                <p class="section-title__eyebrow">Live Spectator</p>
                <h3 class="section-title">只读观战</h3>
                <p class="section-subtitle">点玩家行就会切到对应视角，不占房间人数，也不会真的操作世界。</p>
              </div>
              <div class="admin-focus-pill" id="spectator-focus-pill">等待玩家</div>
            </div>
            <div class="admin-stage-frame">
              <iframe id="admin-spectator-frame" class="admin-stage-frame__iframe" title="管理员只读观战"></iframe>
            </div>
          </section>
          <section class="admin-panel admin-players-panel">
            <div class="admin-panel__head">
              <div>
                <p class="section-title__eyebrow">Players</p>
                <h3 class="section-title">当前玩家</h3>
                <p class="section-subtitle">行内就能看到血量、视角、状态与位置，直接点选切换观战对象。</p>
              </div>
            </div>
            <div id="admin-player-list" class="admin-player-list">
              <div class="empty-card">正在等待房间状态...</div>
            </div>
          </section>
          <section class="admin-panel admin-player-editor-panel">
            <div class="admin-panel__head">
              <div>
                <p class="section-title__eyebrow">Player Data</p>
                <h3 class="section-title">玩家资料调整</h3>
                <p class="section-subtitle">可直接给指定玩家加减物品与豬豬幣；在线玩家会即时同步，离线玩家则改存档。</p>
              </div>
            </div>
            <div class="admin-player-editor">
              <div class="field field--full">
                <label for="admin-managed-player">目标玩家</label>
                <select id="admin-managed-player"></select>
              </div>
              <div id="admin-managed-player-summary" class="admin-player-editor__summary">
                <div class="empty-card">正在等待玩家资料...</div>
              </div>
              <div class="admin-player-editor__grid">
                <div class="field field--full">
                  <label for="admin-managed-item">物品</label>
                  <select id="admin-managed-item"></select>
                </div>
                <div class="field">
                  <label for="admin-managed-item-amount">数量</label>
                  <input id="admin-managed-item-amount" type="number" min="1" step="1" value="1" inputmode="numeric">
                </div>
                <div class="admin-inline-actions admin-player-editor__actions">
                  <button class="button button--primary" id="admin-managed-item-grant" type="button">给予物品</button>
                  <button class="button button--ghost" id="admin-managed-item-remove" type="button">扣除物品</button>
                </div>
              </div>
              <div class="admin-player-editor__grid">
                <div class="field">
                  <label for="admin-managed-piggy-coin">豬豬幣</label>
                  <input id="admin-managed-piggy-coin" type="number" min="0.001" step="0.001" value="1" inputmode="decimal">
                  <div class="field-hint">输入的是豬豬幣数值，例如 <code>1</code> 代表 1.000。</div>
                </div>
                <div class="admin-inline-actions admin-player-editor__actions">
                  <button class="button button--primary" id="admin-managed-piggy-grant" type="button">增加豬豬幣</button>
                  <button class="button button--ghost" id="admin-managed-piggy-remove" type="button">减少豬豬幣</button>
                </div>
              </div>
            </div>
          </section>
        </div>
        <aside class="admin-room-side">
          <section class="admin-panel admin-metrics-panel">
            <div class="admin-panel__head admin-panel__head--tight">
              <div>
                <p class="section-title__eyebrow">Base State</p>
                <h3 class="section-title">基础状态</h3>
                <p class="section-subtitle">每个可产币方块 = 0.001 豬豬幣；玩家自己放的方块不会计入。</p>
              </div>
            </div>
            <div class="admin-mini-metrics">
              <article class="admin-mini-metric">
                <span class="admin-mini-metric__label">房间剩余</span>
                <strong class="admin-mini-metric__value" id="metric-room-remaining">--</strong>
              </article>
              <article class="admin-mini-metric">
                <span class="admin-mini-metric__label">房间状态</span>
                <strong class="admin-mini-metric__value" id="metric-room-kind">--</strong>
              </article>
              <article class="admin-mini-metric">
                <span class="admin-mini-metric__label">在线玩家</span>
                <strong class="admin-mini-metric__value" id="metric-online-players">--</strong>
              </article>
              <article class="admin-mini-metric">
                <span class="admin-mini-metric__label">语音中</span>
                <strong class="admin-mini-metric__value" id="metric-voice-online">--</strong>
              </article>
              <article class="admin-mini-metric">
                <span class="admin-mini-metric__label">NPC</span>
                <strong class="admin-mini-metric__value" id="metric-entities-main">--</strong>
              </article>
              <article class="admin-mini-metric">
                <span class="admin-mini-metric__label">可产币总格</span>
                <strong class="admin-mini-metric__value" id="metric-reward-total">--</strong>
                <span class="admin-mini-metric__meta" id="metric-reward-total-meta">--</span>
              </article>
              <article class="admin-mini-metric">
                <span class="admin-mini-metric__label">已挖产币格</span>
                <strong class="admin-mini-metric__value" id="metric-reward-broken">--</strong>
                <span class="admin-mini-metric__meta" id="metric-reward-broken-meta">--</span>
              </article>
              <article class="admin-mini-metric">
                <span class="admin-mini-metric__label">剩余产币格</span>
                <strong class="admin-mini-metric__value" id="metric-reward-remaining">--</strong>
                <span class="admin-mini-metric__meta" id="metric-reward-remaining-meta">--</span>
              </article>
            </div>
          </section>
          <section class="admin-panel admin-daynight-panel">
            <div class="admin-panel__head admin-panel__head--tight">
              <div>
                <p class="section-title__eyebrow">Environment</p>
                <h3 class="section-title">日夜控制</h3>
                <p class="section-subtitle">这里只保留环境调节，不再显示回合、危险或队伍相关状态。</p>
              </div>
              <div class="admin-focus-pill" id="day-night-pill">--</div>
            </div>
            <div class="admin-daynight-meter" aria-hidden="true">
              <div class="admin-daynight-meter__fill" id="day-night-fill"></div>
            </div>
            <div class="admin-preset-grid" id="admin-daynight-presets"></div>
          </section>
          <section class="admin-panel admin-room-notice-panel">
            <div class="admin-panel__head admin-panel__head--tight">
              <div>
                <p class="section-title__eyebrow">Sync</p>
                <h3 class="section-title">状态同步</h3>
              </div>
            </div>
            <div id="admin-room-note" class="feedback-card">每 3 秒自动拉取一次房间状态，房间剩余时间和可产币方块余量都会持续更新。</div>
          </section>
        </aside>
      </div>
    </div>
  `,C(e),{backToDashboardButton:e.querySelector("#back-to-dashboard"),title:e.querySelector("#managed-room-title"),subtitle:e.querySelector("#managed-room-subtitle"),copyRoomLinkButton:e.querySelector("#copy-room-link"),closeRoomButton:e.querySelector("#close-room"),openRoomPageLink:e.querySelector("#open-room-page"),openSpectatorWindowLink:e.querySelector("#open-spectator-window"),roomRemainingValue:e.querySelector("#metric-room-remaining"),roomKindValue:e.querySelector("#metric-room-kind"),onlinePlayersValue:e.querySelector("#metric-online-players"),voiceOnlineValue:e.querySelector("#metric-voice-online"),entitiesMainValue:e.querySelector("#metric-entities-main"),rewardTotalValue:e.querySelector("#metric-reward-total"),rewardTotalMeta:e.querySelector("#metric-reward-total-meta"),rewardBrokenValue:e.querySelector("#metric-reward-broken"),rewardBrokenMeta:e.querySelector("#metric-reward-broken-meta"),rewardRemainingValue:e.querySelector("#metric-reward-remaining"),rewardRemainingMeta:e.querySelector("#metric-reward-remaining-meta"),monsterSpawnPhasePill:e.querySelector("#monster-spawn-phase-pill"),monsterSpawnAliveValue:e.querySelector("#metric-spawn-alive"),monsterSpawnAliveMeta:e.querySelector("#metric-spawn-alive-meta"),monsterSpawnKindValue:e.querySelector("#metric-spawn-kind"),monsterSpawnModeMeta:e.querySelector("#metric-spawn-mode-meta"),monsterSpawnNextValue:e.querySelector("#metric-spawn-next"),monsterSpawnTargetMeta:e.querySelector("#metric-spawn-target-meta"),monsterSpawnForm:e.querySelector("#monster-spawn-form"),monsterSpawnKindSelect:e.querySelector("#monster-spawn-kind"),monsterSpawnModeSelect:e.querySelector("#monster-spawn-mode"),monsterSpawnMaxAliveInput:e.querySelector("#monster-spawn-max-alive"),monsterSpawnIntervalInput:e.querySelector("#monster-spawn-interval"),monsterSpawnPerCycleInput:e.querySelector("#monster-spawn-per-cycle"),monsterSpawnEnabledInput:e.querySelector("#monster-spawn-enabled"),monsterSpawnAnchorsField:e.querySelector("#monster-spawn-anchors-field"),monsterSpawnAnchorsInput:e.querySelector("#monster-spawn-anchors"),monsterSpawnAreaField:e.querySelector("#monster-spawn-area-field"),monsterSpawnMinXInput:e.querySelector("#monster-spawn-min-x"),monsterSpawnMaxXInput:e.querySelector("#monster-spawn-max-x"),monsterSpawnMinZInput:e.querySelector("#monster-spawn-min-z"),monsterSpawnMaxZInput:e.querySelector("#monster-spawn-max-z"),monsterSpawnResetButton:e.querySelector("#monster-spawn-reset"),dayNightPill:e.querySelector("#day-night-pill"),dayNightFill:e.querySelector("#day-night-fill"),playerList:e.querySelector("#admin-player-list"),managedPlayerSelect:e.querySelector("#admin-managed-player"),managedPlayerSummary:e.querySelector("#admin-managed-player-summary"),managedPlayerItemSelect:e.querySelector("#admin-managed-item"),managedPlayerItemAmountInput:e.querySelector("#admin-managed-item-amount"),managedPlayerGrantItemButton:e.querySelector("#admin-managed-item-grant"),managedPlayerRemoveItemButton:e.querySelector("#admin-managed-item-remove"),managedPlayerPiggyCoinInput:e.querySelector("#admin-managed-piggy-coin"),managedPlayerGrantPiggyCoinButton:e.querySelector("#admin-managed-piggy-grant"),managedPlayerRemovePiggyCoinButton:e.querySelector("#admin-managed-piggy-remove"),roomNote:e.querySelector("#admin-room-note"),focusPill:e.querySelector("#spectator-focus-pill"),spectatorFrame:e.querySelector("#admin-spectator-frame"),presetGrid:e.querySelector("#admin-daynight-presets"),refreshRoomStateButton:e.querySelector("#refresh-room-state")}}function Qe({roomState:e,receivedAtMs:a,dayNightPill:t,dayNightFill:s,nowMs:i=Date.now()}){if(!e)return;const l=Ue(e.dayNightState,a,i),n=Math.round(l*100);t&&(t.textContent=`${Oe(l)} · ${n}%`),s&&(s.style.width=`${n}%`)}function en({room:e,roomState:a,refs:t,nowMs:s=Date.now()}){e&&(t.roomRemainingValue&&(t.roomRemainingValue.textContent=V(e,s)),t.roomKindValue&&(t.roomKindValue.textContent=ve(e)),a&&(t.onlinePlayersValue&&(t.onlinePlayersValue.textContent=`${a.players.length} / ${e.maxPlayers}`),t.voiceOnlineValue&&(t.voiceOnlineValue.textContent=String(a.voiceParticipantIds.length)),t.entitiesMainValue&&(t.entitiesMainValue.textContent=String(a.npcs.length)),t.rewardTotalValue&&(t.rewardTotalValue.textContent=$(a.piggyCoinState.rewardableBlockTotalCount)),t.rewardTotalMeta&&(t.rewardTotalMeta.textContent=`约 ${D(a.piggyCoinState.rewardablePiggyCoinTotalMilliunits)} 豬豬幣`),t.rewardBrokenValue&&(t.rewardBrokenValue.textContent=$(a.piggyCoinState.rewardableBlockBrokenCount)),t.rewardBrokenMeta&&(t.rewardBrokenMeta.textContent=`已发 ${D(a.piggyCoinState.rewardableBlockBrokenCount)} 豬豬幣`),t.rewardRemainingValue&&(t.rewardRemainingValue.textContent=$(a.piggyCoinState.rewardableBlockRemainingCount)),t.rewardRemainingMeta&&(t.rewardRemainingMeta.textContent=`余量 ${D(a.piggyCoinState.rewardablePiggyCoinRemainingMilliunits)} 豬豬幣`),t.monsterSpawnPhasePill&&(t.monsterSpawnPhasePill.textContent=Ze(a,s)),t.monsterSpawnAliveValue&&(t.monsterSpawnAliveValue.textContent=`${a.monsterSpawnState.autoAliveCount} / ${a.monsterSpawnState.adminAliveCount}`),t.monsterSpawnAliveMeta&&(t.monsterSpawnAliveMeta.textContent=`场上共 ${a.monsterSpawnState.totalAliveCount} 只`),t.monsterSpawnKindValue&&(t.monsterSpawnKindValue.textContent=a.monsterSpawnState.monsterLabel),t.monsterSpawnModeMeta&&(t.monsterSpawnModeMeta.textContent=a.monsterSpawnState.config.mode==="random-area"?`随机区域 · 每轮 ${a.monsterSpawnState.config.spawnPerCycle} 只`:`定点锚位 ${a.monsterSpawnState.config.anchors.length} 个`),t.monsterSpawnNextValue&&(t.monsterSpawnNextValue.textContent=R(a.monsterSpawnState.nextSpawnAtMs,s)),t.monsterSpawnTargetMeta&&(t.monsterSpawnTargetMeta.textContent=`上限 ${a.monsterSpawnState.config.maxAlive} · 间隔 ${a.monsterSpawnState.config.spawnIntervalSeconds.toFixed(1)}s`)))}function nn(e){let a=!1;e.monsterSpawnKindSelect&&e.monsterSpawnKindSelect.options.length===0&&_e.forEach(i=>{var n;const l=document.createElement("option");l.value=i,l.textContent=Me(i),(n=e.monsterSpawnKindSelect)==null||n.appendChild(l)});const t=()=>{var l;const i=((l=e.monsterSpawnModeSelect)==null?void 0:l.value)==="random-area";e.monsterSpawnAnchorsField&&(e.monsterSpawnAnchorsField.hidden=i),e.monsterSpawnAreaField&&(e.monsterSpawnAreaField.hidden=!i)},s=()=>{a=!0};return[e.monsterSpawnKindSelect,e.monsterSpawnModeSelect,e.monsterSpawnMaxAliveInput,e.monsterSpawnIntervalInput,e.monsterSpawnPerCycleInput,e.monsterSpawnEnabledInput,e.monsterSpawnAnchorsInput,e.monsterSpawnMinXInput,e.monsterSpawnMaxXInput,e.monsterSpawnMinZInput,e.monsterSpawnMaxZInput].forEach(i=>{i==null||i.addEventListener("input",s),i==null||i.addEventListener("change",()=>{s(),t()})}),t(),{applyConfig(i,l=!1){!l&&a||(e.monsterSpawnKindSelect&&(e.monsterSpawnKindSelect.value=i.monsterKind),e.monsterSpawnModeSelect&&(e.monsterSpawnModeSelect.value=i.mode),e.monsterSpawnMaxAliveInput&&(e.monsterSpawnMaxAliveInput.value=String(i.maxAlive)),e.monsterSpawnIntervalInput&&(e.monsterSpawnIntervalInput.value=String(i.spawnIntervalSeconds)),e.monsterSpawnPerCycleInput&&(e.monsterSpawnPerCycleInput.value=String(i.spawnPerCycle)),e.monsterSpawnEnabledInput&&(e.monsterSpawnEnabledInput.checked=i.enabled),e.monsterSpawnAnchorsInput&&(e.monsterSpawnAnchorsInput.value=ze(i.anchors)),e.monsterSpawnMinXInput&&(e.monsterSpawnMinXInput.value=i.randomArea?String(i.randomArea.minX):""),e.monsterSpawnMaxXInput&&(e.monsterSpawnMaxXInput.value=i.randomArea?String(i.randomArea.maxX):""),e.monsterSpawnMinZInput&&(e.monsterSpawnMinZInput.value=i.randomArea?String(i.randomArea.minZ):""),e.monsterSpawnMaxZInput&&(e.monsterSpawnMaxZInput.value=i.randomArea?String(i.randomArea.maxZ):""),t(),a=!1)},collectConfig(i){var _,d,S,u,p,w,g,h;if(!i)return null;const l=(v,y)=>{if(!v)return y;const b=Number(v.value);return Number.isFinite(b)?b:y},n=((_=e.monsterSpawnModeSelect)==null?void 0:_.value)==="random-area"?"random-area":"fixed-anchors";return{enabled:((d=e.monsterSpawnEnabledInput)==null?void 0:d.checked)??i.enabled,monsterKind:((S=e.monsterSpawnKindSelect)==null?void 0:S.value)||i.monsterKind,mode:n,maxAlive:l(e.monsterSpawnMaxAliveInput,i.maxAlive),spawnIntervalSeconds:l(e.monsterSpawnIntervalInput,i.spawnIntervalSeconds),spawnPerCycle:l(e.monsterSpawnPerCycleInput,i.spawnPerCycle),anchors:n==="fixed-anchors"?Ge(((u=e.monsterSpawnAnchorsInput)==null?void 0:u.value)??""):[],randomArea:n==="random-area"?{minX:l(e.monsterSpawnMinXInput,((p=i.randomArea)==null?void 0:p.minX)??-26),maxX:l(e.monsterSpawnMaxXInput,((w=i.randomArea)==null?void 0:w.maxX)??26),minZ:l(e.monsterSpawnMinZInput,((g=i.randomArea)==null?void 0:g.minZ)??-26),maxZ:l(e.monsterSpawnMaxZInput,((h=i.randomArea)==null?void 0:h.maxZ)??26)}:i.randomArea}}}}function tn({playerList:e,focusPill:a,spectatorFrame:t,openRoomPageLink:s,openSpectatorWindowLink:i,getRoom:l}){let n=null,_=!1;const d=()=>{!_||!(t!=null&&t.contentWindow)||!n||t.contentWindow.postMessage({type:"admin-spectator-focus",playerId:n},window.location.origin)};t==null||t.addEventListener("load",()=>{_=!0,d()});const S=()=>{const g=l();g&&(s&&(s.href=pe(g.id)),i&&(i.href=ce(g.id,n)),t&&!t.src&&(t.src=ce(g.id,n)))},u=g=>{if(!e)return;if(!g||g.players.length===0){e.innerHTML=`<div class="empty-card">${o("当前房间没有在线玩家。")}</div>`,C(e),a&&(a.textContent=o("等待玩家"));return}const h=new Set(g.voiceParticipantIds);e.innerHTML="",g.players.forEach(y=>{const b=document.createElement("button");b.type="button",b.className=`admin-player-row ${y.id===n?"is-active":""}`,b.dataset.playerId=y.id,b.innerHTML=`
        <div class="admin-player-row__head">
          <div class="admin-player-row__identity">
            <strong>${f(y.name)}</strong>
            <div class="admin-player-row__badges">
              ${h.has(y.id)?'<span class="admin-badge is-live">语音中</span>':""}
              ${y.id===n?'<span class="admin-badge is-stable">当前视角</span>':""}
            </div>
          </div>
          <span class="admin-player-row__camera">${f(Xe(y.cameraMode))}</span>
        </div>
        <div class="admin-player-row__meta">
          <span>HP ${y.health} / ${y.maxHealth}</span>
          <span>${f(Ke(y))}</span>
          <span>${f(He(y.position.x,y.position.y,y.position.z))}</span>
        </div>
      `,b.addEventListener("click",()=>{w(y.id,g)}),C(b),e.appendChild(b)});const v=g.players.find(y=>y.id===n)??g.players[0];a&&v&&(a.textContent=o("正在看 {name}",{name:v.name},`正在看 ${v.name}`))},p=g=>{var h;if(!g||g.players.length===0){n=null,a&&(a.textContent=o("等待玩家")),S();return}if(n&&g.players.some(v=>v.id===n)){S();return}n=((h=g.players[0])==null?void 0:h.id)??null,S(),d()},w=(g,h)=>{n=g,u(h),S(),d()};return{ensureFocus:p,renderPlayers:u,syncLinks:S}}function an({root:e,roomId:a,refreshRooms:t,onManagedRoomStateChange:s,navigateToConsole:i,isRenderActive:l}){var W,J,Y,Q,ee,ne,te,ae,ie,oe,re;const n=Ye(e);let _=[],d=null,S=0,u=null;const p=new Set(se),w=()=>{var r;return((r=d==null?void 0:d.supportedInventoryItemIds)==null?void 0:r.filter(c=>p.has(c)))??[...se]},g=()=>(d==null?void 0:d.summary)??_.find(r=>r.id===a)??null,h=()=>{var r;return((r=d==null?void 0:d.managedPlayers)==null?void 0:r.find(c=>c.id===u))??null},v=tn({playerList:n.playerList,focusPill:n.focusPill,spectatorFrame:n.spectatorFrame,openRoomPageLink:n.openRoomPageLink,openSpectatorWindowLink:n.openSpectatorWindowLink,getRoom:g}),y=nn({monsterSpawnKindSelect:n.monsterSpawnKindSelect,monsterSpawnModeSelect:n.monsterSpawnModeSelect,monsterSpawnMaxAliveInput:n.monsterSpawnMaxAliveInput,monsterSpawnIntervalInput:n.monsterSpawnIntervalInput,monsterSpawnPerCycleInput:n.monsterSpawnPerCycleInput,monsterSpawnEnabledInput:n.monsterSpawnEnabledInput,monsterSpawnAnchorsField:n.monsterSpawnAnchorsField,monsterSpawnAnchorsInput:n.monsterSpawnAnchorsInput,monsterSpawnAreaField:n.monsterSpawnAreaField,monsterSpawnMinXInput:n.monsterSpawnMinXInput,monsterSpawnMaxXInput:n.monsterSpawnMaxXInput,monsterSpawnMinZInput:n.monsterSpawnMinZInput,monsterSpawnMaxZInput:n.monsterSpawnMaxZInput}),b=()=>{var c;if(!n.managedPlayerSelect)return;const r=(d==null?void 0:d.managedPlayers)??[];if(r.length===0){n.managedPlayerSelect.innerHTML='<option value="">当前没有可管理的玩家存档</option>',n.managedPlayerSelect.disabled=!0,u=null;return}(!u||!r.some(m=>m.id===u))&&(u=((c=r[0])==null?void 0:c.id)??null),n.managedPlayerSelect.disabled=!1,n.managedPlayerSelect.innerHTML=r.map(m=>{const M=m.isOnline?"在线":"离线",F=m.id===u?" selected":"";return`<option value="${f(m.id)}"${F}>${f(m.name)} · ${M}</option>`}).join("")},P=()=>{if(!n.managedPlayerSummary)return;const r=h();if(!r){n.managedPlayerSummary.innerHTML=`<div class="empty-card">${o("请选择要管理的玩家。")}</div>`;return}const c=w().filter(M=>(r.inventory[M]??0)>0).slice(0,16).map(M=>`<span class="admin-resource-chip">${f(le(M))} x${$(r.inventory[M]??0)}</span>`).join(""),m=r.isOnline?o("当前在线"):new Intl.DateTimeFormat(void 0,{month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}).format(new Date(r.lastSeenAtMs));n.managedPlayerSummary.innerHTML=`
      <div class="admin-player-editor__summary-head">
        <div>
          <strong>${f(r.name)}</strong>
          <div class="admin-player-row__meta">
            <span>${r.isOnline?o("在线中"):o("离线存档")}</span>
            <span>${o("豬豬幣")} ${D(r.piggyCoinBalanceCents)}</span>
            <span>${o("游玩")} ${$(Math.floor(r.totalPlayTimeMs/6e4))} ${o("分钟")}</span>
            <span>${o("最近")} ${f(m)}</span>
          </div>
        </div>
      </div>
      <div class="admin-resource-chip-list">
        ${c||`<span class="admin-resource-chip admin-resource-chip--muted">${o("目前没有持有任何物品")}</span>`}
      </div>
    `},I=()=>{b(),E(),P()},E=()=>{if(!n.managedPlayerItemSelect)return;const r=w(),c=n.managedPlayerItemSelect.value;n.managedPlayerItemSelect.innerHTML=r.map(m=>`<option value="${f(m)}">${f(le(m))}</option>`).join(""),p.has(c)&&r.includes(c)&&(n.managedPlayerItemSelect.value=c)},q=r=>{const c=Number(r);return!Number.isInteger(c)||c<=0?null:c},L=r=>{const c=Number(r);return!Number.isFinite(c)||c<=0?null:Math.round(c*1e3)},N=async r=>{const c=h();if(!c){n.roomNote&&(n.roomNote.className="feedback-card is-error",n.roomNote.textContent=o("请先选择一个玩家。"));return}n.roomNote&&(n.roomNote.className="feedback-card",n.roomNote.textContent=o("正在调整玩家资料..."));try{const{successMessage:m,...M}=r,F=await ke(a,c.id,M);if(!l())return;k(F),n.roomNote&&(n.roomNote.className="feedback-card is-success",n.roomNote.textContent=m)}catch(m){n.roomNote&&(n.roomNote.className="feedback-card is-error",n.roomNote.textContent=m instanceof Error?m.message:o("调整玩家资料失败。"))}},T=(r=Date.now())=>{en({room:g(),roomState:d,refs:n,nowMs:r}),Qe({roomState:d,receivedAtMs:S,dayNightPill:n.dayNightPill,dayNightFill:n.dayNightFill,nowMs:r})},k=r=>{d=r,S=Date.now(),s(r),n.title&&(n.title.textContent=r.summary.title),n.subtitle&&(n.subtitle.textContent=`${ge(r.summary.gameMode,r.summary.theme)} · ${ye(r.summary.gameMode,r.summary.theme)}`),n.roomNote&&(n.roomNote.className="feedback-card",n.roomNote.textContent=o("每 3 秒自动拉取一次房间状态；天然与房间固有方块每格产 0.001，玩家自行放置的方块不计入。")),I(),v.ensureFocus(r),T(),y.applyConfig(r.monsterSpawnState.config),v.renderPlayers(r),v.syncLinks()},A=async(r=!1)=>{!r&&n.roomNote&&(n.roomNote.className="feedback-card",n.roomNote.textContent=o("正在同步房间状态..."));try{const c=await Ne(a);if(!l())return;k(c)}catch(c){n.roomNote&&(n.roomNote.className="feedback-card is-error",n.roomNote.textContent=c instanceof Error?c.message:o("读取房间状态失败。")),s(null)}};(W=n.backToDashboardButton)==null||W.addEventListener("click",()=>{i(null)}),(J=n.refreshRoomStateButton)==null||J.addEventListener("click",()=>{A()}),(Y=n.managedPlayerSelect)==null||Y.addEventListener("change",()=>{var r;u=((r=n.managedPlayerSelect)==null?void 0:r.value)??null,P()}),(Q=n.managedPlayerGrantItemButton)==null||Q.addEventListener("click",async()=>{var m,M;const r=((m=n.managedPlayerItemSelect)==null?void 0:m.value)??"",c=q(((M=n.managedPlayerItemAmountInput)==null?void 0:M.value)??"");if(!r||!c){n.roomNote&&(n.roomNote.className="feedback-card is-error",n.roomNote.textContent=o("请输入要给予的物品与数量。"));return}await N({itemId:r,itemDelta:c,successMessage:o("玩家物品已增加。")})}),(ee=n.managedPlayerRemoveItemButton)==null||ee.addEventListener("click",async()=>{var m,M;const r=((m=n.managedPlayerItemSelect)==null?void 0:m.value)??"",c=q(((M=n.managedPlayerItemAmountInput)==null?void 0:M.value)??"");if(!r||!c){n.roomNote&&(n.roomNote.className="feedback-card is-error",n.roomNote.textContent=o("请输入要扣除的物品与数量。"));return}await N({itemId:r,itemDelta:-c,successMessage:o("玩家物品已扣除。")})}),(ne=n.managedPlayerGrantPiggyCoinButton)==null||ne.addEventListener("click",async()=>{var c;const r=L(((c=n.managedPlayerPiggyCoinInput)==null?void 0:c.value)??"");if(!r){n.roomNote&&(n.roomNote.className="feedback-card is-error",n.roomNote.textContent=o("请输入要增加的豬豬幣。"));return}await N({piggyCoinDeltaCents:r,successMessage:o("玩家豬豬幣已增加。")})}),(te=n.managedPlayerRemovePiggyCoinButton)==null||te.addEventListener("click",async()=>{var c;const r=L(((c=n.managedPlayerPiggyCoinInput)==null?void 0:c.value)??"");if(!r){n.roomNote&&(n.roomNote.className="feedback-card is-error",n.roomNote.textContent=o("请输入要扣除的豬豬幣。"));return}await N({piggyCoinDeltaCents:-r,successMessage:o("玩家豬豬幣已扣除。")})}),(ae=n.copyRoomLinkButton)==null||ae.addEventListener("click",async()=>{const r=g(),c=n.copyRoomLinkButton;if(!r||!c)return;const m=await X(H(r.joinUrl));Z(c,o("已复制"),o("复制加入链接"),m)}),(ie=n.closeRoomButton)==null||ie.addEventListener("click",async()=>{const r=g();if(!(!r||!window.confirm(o("确定关闭「{title}」吗？房内玩家与观战连接会被立即断开。",{title:r.title},`确定关闭「${r.title}」吗？房内玩家与观战连接会被立即断开。`)))){n.roomNote&&(n.roomNote.className="feedback-card",n.roomNote.textContent=o("正在关闭房间..."));try{const m=await ue(r.id);n.roomNote&&(n.roomNote.className="feedback-card is-success",n.roomNote.textContent=m),await t(),i(null)}catch(m){n.roomNote&&(n.roomNote.className="feedback-card is-error",n.roomNote.textContent=m instanceof Error?m.message:o("关闭房间失败。"))}}}),(oe=n.monsterSpawnForm)==null||oe.addEventListener("submit",async r=>{r.preventDefault();const c=y.collectConfig((d==null?void 0:d.monsterSpawnState.config)??null);if(c){n.roomNote&&(n.roomNote.className="feedback-card",n.roomNote.textContent=o("正在保存房间刷怪方案..."));try{const m=await Pe(a,c);if(!l())return;k(m),n.roomNote&&(n.roomNote.className="feedback-card is-success",n.roomNote.textContent=o("刷怪方案已保存，房间会沿用这套配置继续运行。"))}catch(m){n.roomNote&&(n.roomNote.className="feedback-card is-error",n.roomNote.textContent=m instanceof Error?m.message:o("保存刷怪方案失败。"))}}}),(re=n.monsterSpawnResetButton)==null||re.addEventListener("click",()=>{d&&(y.applyConfig(d.monsterSpawnState.config,!0),n.roomNote&&(n.roomNote.className="feedback-card",n.roomNote.textContent=o("已恢复为房间当前刷怪配置。")))});const G=n.presetGrid;return G&&Re.forEach(r=>{const c=document.createElement("button");c.type="button",c.className="button button--ghost",c.textContent=o(r.label),c.addEventListener("click",async()=>{try{const m=await Ie(a,r.progress);if(!l())return;k(m)}catch(m){n.roomNote&&(n.roomNote.className="feedback-card is-error",n.roomNote.textContent=m instanceof Error?m.message:o("调整日夜状态失败。"))}}),G.appendChild(c)}),E(),{initialize:async()=>{v.syncLinks(),await A(!1)},handleRoomsUpdate:r=>{_=r,T(),v.syncLinks()},handleRoomsError:r=>{!d&&n.roomNote&&(n.roomNote.className="feedback-card is-error",n.roomNote.textContent=r)},tick:r=>{T(r)},poll:async()=>{await A(!0)}}}let B=0;function U(e){const a=Le(e);a!==window.location.href&&(window.history.pushState({},"",a),j())}function fe(e){we(),e.innerHTML=`
    <div class="portal-page portal-page--admin">
      <div class="portal-shell portal-shell--admin portal-shell--admin-v2">
        <section class="panel-card panel-card--light admin-login-panel">
          <div class="admin-login-panel__copy">
            <p class="section-title__eyebrow">Secure Access</p>
            <h1 class="section-title">管理员控制台</h1>
            <p class="section-subtitle">输入管理员密码后，才能创建房间、查看状态和切换观战视角。登录成功后会保留当前浏览器会话。</p>
          </div>
          <form id="admin-login-form" class="admin-login-form">
            <div class="field field--full">
              <label for="admin-password">管理员密码</label>
              <input id="admin-password" type="password" autocomplete="current-password" placeholder="请输入管理员密码">
              <div class="field-hint">密码文件位于 <code>servers/zhuda-pixel-world-api/server-rust/data/admin-key.txt</code>。</div>
            </div>
            <div class="admin-inline-actions">
              <button class="button button--primary" type="submit">进入控制台</button>
            </div>
          </form>
          <div id="admin-login-feedback" class="feedback-card">请输入管理员密码。</div>
        </section>
      </div>
    </div>
  `,C(e);const a=e.querySelector("#admin-login-form"),t=e.querySelector("#admin-password"),s=e.querySelector("#admin-login-feedback");a==null||a.addEventListener("submit",async i=>{i.preventDefault();const l=(t==null?void 0:t.value.trim())??"";if(!l){s&&(s.className="feedback-card is-error",s.textContent=o("先输入管理员密码。")),t==null||t.focus();return}try{const n=await $e(l);s&&(s.className="feedback-card is-success",s.textContent=n),await j()}catch(n){s&&(s.className="feedback-card is-error",s.textContent=n instanceof Error?n.message:o("管理员登录失败。"))}})}async function on(e,a){var p;we();const t=Be();e.innerHTML=`
    <div class="portal-page portal-page--admin">
      <div class="portal-shell portal-shell--admin portal-shell--admin-v2">
        <div class="admin-shell">
          <header class="admin-topbar">
            <div class="admin-topbar__copy">
              <p class="section-title__eyebrow">Admin Console</p>
              <h1 class="section-title">房间控制台</h1>
              <p class="section-subtitle">只保留创建、分发、基础状态和观战切视角，去掉模式特定监控。</p>
            </div>
            <div class="admin-topbar__actions">
              ${t?'<button class="button button--ghost" id="topbar-dashboard" type="button">房间总览</button>':""}
              <button class="button button--danger" id="admin-logout" type="button">退出管理员</button>
            </div>
          </header>
          <section id="admin-summary-root" class="admin-summary-strip">
            <div class="empty-card">正在准备总览...</div>
          </section>
          <main id="admin-view-root" class="admin-view-root"></main>
        </div>
      </div>
    </div>
  `,C(e);const s=e.querySelector("#admin-summary-root"),i=e.querySelector("#admin-view-root"),l=e.querySelector("#admin-logout");(p=e.querySelector("#topbar-dashboard"))==null||p.addEventListener("click",()=>{U(null)}),l==null||l.addEventListener("click",async()=>{await Ee(),fe(e)});let n=[],_=null;const d=()=>{s&&(s.innerHTML=We(n,_),C(s))},S=async()=>{try{const w=await Ce({admin:!0});if(a!==B)return;n=w,u.handleRoomsUpdate(w),d()}catch(w){if(a!==B)return;n=[],u.handleRoomsError(De(w,o("读取房间列表失败。"))),d()}};if(!i)return;const u=t?an({root:i,roomId:t,refreshRooms:S,onManagedRoomStateChange:w=>{_=w,d()},navigateToConsole:U,isRenderActive:()=>a===B}):Je({root:i,refreshRooms:S,navigateToConsole:U});d(),await S(),await u.initialize(),d(),O(()=>{S()},1e4),O(()=>{u.tick(Date.now())},1e3),t&&O(()=>{var w;(w=u.poll)==null||w.call(u)},3e3)}async function j(){const e=++B,a=document.querySelector("#app");if(!a)return;const t=await Ae();if(e===B){if(!t){fe(a);return}await on(a,e)}}function rn(){document.body.classList.add("portal-body--admin"),window.addEventListener("popstate",()=>{j()}),j()}rn();
