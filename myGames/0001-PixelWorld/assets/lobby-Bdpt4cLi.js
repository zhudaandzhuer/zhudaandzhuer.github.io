import{g as h,t as p,f as b,a as _,b as $,c as y,u as f}from"./shared-DnP4b5qf.js";import{g,a as w}from"./game-content-CCpXm5Wm.js";import{w as v,t as a}from"./game-i18n-BStjKk4Y.js";async function L(t){try{return await navigator.clipboard.writeText(t),!0}catch{return!1}}function E(t){const r=document.createElement("article");r.className="room-card";const s=document.createElement("div");s.className="room-card__top";const i=document.createElement("div"),c=document.createElement("h3");c.className="room-card__title",c.textContent=g(t.id,t.title),i.appendChild(c);const o=document.createElement("span");o.className="room-card__badge",t.availableSlots<=0?o.classList.add("is-full"):t.phase==="closing"&&o.classList.add("is-closing"),o.textContent=_(t),s.append(i,o);const e=document.createElement("p");e.className="room-card__desc",e.textContent=$(t.gameMode,t.theme);const n=document.createElement("div");n.className="room-meta",n.innerHTML=`
    <div class="stat-chip">
      <span class="stat-chip__label">模式</span>
      <span class="stat-chip__value">${y(t.gameMode,t.theme)}</span>
    </div>
    <div class="stat-chip">
      <span class="stat-chip__label">${a("人数",void 0,"人数")}</span>
      <span class="stat-chip__value">${t.onlineCount} / ${t.maxPlayers}</span>
    </div>
    <div class="stat-chip">
      <span class="stat-chip__label">${a("地图",void 0,"地图")}</span>
      <span class="stat-chip__value">${w(t.mapId)}</span>
    </div>
    <div class="stat-chip">
      <span class="stat-chip__label">${a("剩余席位",void 0,"剩余席位")}</span>
      <span class="stat-chip__value">${t.availableSlots}</span>
    </div>
  `,p(n);const m=document.createElement("div");m.className="room-actions";const l=document.createElement("a");l.className="button button--primary",l.textContent=t.availableSlots>0?a("进入房间"):a("房间已满"),l.href=v(`/room.html?room=${encodeURIComponent(t.id)}`),t.availableSlots<=0&&(l.setAttribute("aria-disabled","true"),l.addEventListener("click",u=>{u.preventDefault()}));const d=document.createElement("button");return d.type="button",d.className="button button--ghost",d.textContent=a("复制链接"),d.addEventListener("click",async()=>{const u=await L(v(t.joinUrl));f(d,a("已复制",void 0,"已复制"),a("复制链接"),u)}),m.append(l,d),r.append(s,e,n,m),r}async function C(){if(h()){const e=new URL("/room.html",window.location.origin);e.search=window.location.search,window.location.replace(v(e));return}const t=document.querySelector("#app");if(!t)return;const r=v("/room.html?room=public-survival");t.innerHTML=`
    <div class="portal-shell">
      <section class="hero-card">
        <div class="hero-card__visual"></div>
        <div>
          <p class="hero-card__eyebrow">${a("多人联机大厅",void 0,"多人联机大厅")}</p>
          <h1 class="hero-card__title">${a("猪大与猪二世界",void 0,"猪大与猪二世界")}</h1>
          <p class="hero-card__summary">
            ${a("先看房间，再进游戏。限时房会倒计时重置，永久房适合朋友们随时进来建造、拍照和娱乐。",void 0,"先看房间，再进游戏。限时房会倒计时重置，永久房适合朋友们随时进来建造、拍照和娱乐。")}
          </p>
          <div class="hero-actions">
            <a class="button button--primary" href="${r}">${a("进入公共房",void 0,"进入公共房")}</a>
            <button class="button button--ghost" id="refresh-hero-rooms" type="button">${a("刷新房间")}</button>
          </div>
          <div class="hero-stats">
            <div class="stat-chip">
              <span class="stat-chip__label">${a("玩法模式",void 0,"玩法模式")}</span>
              <span class="stat-chip__value">${a("像素世界",void 0,"像素世界")}</span>
            </div>
            <div class="stat-chip">
              <span class="stat-chip__label">${a("主地图",void 0,"主地图")}</span>
              <span class="stat-chip__value">${a("猪猪基地",void 0,"猪猪基地")}</span>
            </div>
            <div class="stat-chip">
              <span class="stat-chip__label">${a("加入方式",void 0,"加入方式")}</span>
              <span class="stat-chip__value">${a("点房间 -> 输昵称",void 0,"点房间 -> 输昵称")}</span>
            </div>
          </div>
        </div>
      </section>
      <section class="section-block">
        <div class="section-head">
          <div>
            <h2 class="section-title">${a("当前房间",void 0,"当前房间")}</h2>
            <p class="section-subtitle">${a("房间满了会提示稍后再来；房主新开房后，把邀请链接发给朋友即可先到先得。",void 0,"房间满了会提示稍后再来；房主新开房后，把邀请链接发给朋友即可先到先得。")}</p>
          </div>
          <div class="link-row">
            <button class="button button--ghost" id="refresh-rooms" type="button">${a("刷新房间")}</button>
          </div>
        </div>
        <div id="rooms-root" class="room-grid">
          <div class="empty-card">${a("正在读取房间列表...")}</div>
        </div>
      </section>
    </div>
  `,p(t);const s=t.querySelector("#rooms-root"),i=t.querySelector("#refresh-rooms"),c=t.querySelector("#refresh-hero-rooms"),o=async()=>{if(s){s.innerHTML=`<div class="empty-card">${a("正在同步房间列表...")}</div>`,p(s);try{const e=await b();if(s.innerHTML="",e.length===0){s.innerHTML=`<div class="empty-card">${a("现在还没有新房间。可以稍后再来看看，或者等房主发新的邀请链接。")}</div>`,p(s);return}e.forEach(n=>{s.appendChild(E(n))})}catch(e){s.innerHTML=`<div class="empty-card">${e instanceof Error?e.message:a("读取房间失败。")}</div>`,p(s)}}};i==null||i.addEventListener("click",()=>{o()}),c==null||c.addEventListener("click",()=>{o()}),o(),window.setInterval(()=>{o()},1e4)}C();
