import{g as R,t as g,d as k,c as A,b as K,a as L}from"./shared-DnP4b5qf.js";import{n as x,D as j,g as T,a as C,b as q}from"./game-content-CCpXm5Wm.js";import{a as D,t}from"./game-i18n-BStjKk4Y.js";const U="voxel-survival-avatar-style",I="voxel-survival-player-name",y="voxel-survival-player-key",M="voxel-survival-player-keys-by-name";function w(){var e;return((e=window.localStorage.getItem(I))==null?void 0:e.trim())??""}function Y(e){window.localStorage.setItem(I,e.trim())}function d(e){return(e??"").trim().replace(/[^a-zA-Z0-9_-]/g,"").slice(0,64)}function O(){var e;return typeof((e=window.crypto)==null?void 0:e.randomUUID)=="function"?d(window.crypto.randomUUID()):d(`p${Date.now().toString(36)}${Math.random().toString(36).slice(2,12)}`)}function p(e){return(e??"").trim().slice(0,64)}function S(e){const a=p(e);if(a)return a;const n=p(new URLSearchParams(window.location.search).get("name"));return n||p(w())}function $(){const e=window.localStorage.getItem(M);if(!e)return{};try{const a=JSON.parse(e);if(!a||typeof a!="object")return{};const n=Object.entries(a).flatMap(([s,r])=>{const i=p(s),c=d(typeof r=="string"?r:null);return i&&c?[[i,c]]:[]});return Object.fromEntries(n)}catch{return{}}}function z(e){window.localStorage.setItem(M,JSON.stringify(e))}function N(e){const a=S(e);if(!a)return d(window.localStorage.getItem(y));const n=$();return d(n[a]??null)}function _(e,a){const n=p(e),s=d(a);if(!n||!s)return;const r=$();r[n]!==s&&(r[n]=s,z(r))}function G(e){const a=S(e),n=N(a);if(n)return n;const s=d(window.localStorage.getItem(y)),r=p(w());if(s&&a&&r===a)return _(a,s),s;const i=O();return a?_(a,i):window.localStorage.setItem(y,i),i}function F(e){const a=S(e),n=a?N(a):"",s=d(new URLSearchParams(window.location.search).get("playerKey"));if(n)return n;if(s)if(a){const r=$();if(!Object.entries(r).some(([c,u])=>c!==a&&u===s))return _(a,s),s}else return window.localStorage.setItem(y,s),s;return G(a)}function J(){return window.localStorage.getItem(U)}function B(e,a,n){const s=new URL("/game.html",window.location.origin);s.searchParams.set("room",e),s.searchParams.set("name",a.trim());const r=x(j);r&&s.searchParams.set("map",r);const i=J();i&&s.searchParams.set("style",i);const c=F(a.trim());return c&&s.searchParams.set("playerKey",c),D(s).toString()}function H(e){e.innerHTML=`
    <div class="portal-shell">
      <section class="panel-card">
        <h1 class="section-title">${t("房间链接无效",void 0,"房间链接无效")}</h1>
        <p class="section-subtitle">${t("这个地址没有带房间编号。你可以先回大厅挑一个房间，或者让管理员重新发一次邀请链接。",void 0,"这个地址没有带房间编号。你可以先回大厅挑一个房间，或者让管理员重新发一次邀请链接。")}</p>
        <div class="hero-actions">
          <a class="button button--primary" href="/">${t("返回大厅")}</a>
        </div>
      </section>
    </div>
  `,g(e)}async function V(){const e=document.querySelector("#app");if(!e)return;const a=R();if(!a){H(e);return}e.innerHTML=`
    <div class="portal-shell">
      <div class="join-layout">
        <aside class="join-layout__side">
          <div class="room-preview"></div>
          <div class="section-block">
            <p class="hero-card__eyebrow">${t("多人房间入口",void 0,"多人房间入口")}</p>
            <h1 class="section-title">${t("正在读取房间信息",void 0,"正在读取房间信息")}</h1>
            <p class="section-subtitle">${t("房间数据加载完成后，你只要输入自己喜欢的昵称，就可以尝试加入房间。",void 0,"房间数据加载完成后，你只要输入自己喜欢的昵称，就可以尝试加入房间。")}</p>
          </div>
          <div id="room-side-meta" class="stat-grid"></div>
        </aside>
        <main class="join-layout__main">
          <section class="panel-card panel-card--light">
            <h2 class="section-title">${t("准备加入房间",void 0,"准备加入房间")}</h2>
            <p id="room-status" class="section-subtitle">${t("正在连接房间信息服务...",void 0,"正在连接房间信息服务...")}</p>
            <form id="join-form" class="section-block">
              <div class="field-grid">
                <div class="field field--full">
                  <label for="nickname">${t("你的昵称",void 0,"你的昵称")}</label>
                  <input id="nickname" name="nickname" maxlength="18" placeholder="${t("例如：猪大、猪二、小苦力怕")}" autocomplete="nickname">
                  <div class="field-hint">${t("输入昵称后，系统会带你进入对应房间。房满时会提醒你等待新的房间建立。",void 0,"输入昵称后，系统会带你进入对应房间。房满时会提醒你等待新的房间建立。")}</div>
                </div>
              </div>
              <div id="join-actions" class="hero-actions">
                <button class="button button--primary" id="join-button" type="submit">${t("进入房间")}</button>
                <a class="button button--ghost" id="lobby-button" href="/">${t("返回大厅")}</a>
              </div>
            </form>
            <div id="join-feedback" class="feedback-card">${t("正在同步房间状态...",void 0,"正在同步房间状态...")}</div>
          </section>
        </main>
      </div>
    </div>
  `,g(e);const n=e.querySelector(".join-layout__side .section-title"),s=e.querySelector("#room-status"),r=e.querySelector("#room-side-meta"),i=e.querySelector("#join-feedback"),c=e.querySelector("#join-form"),u=e.querySelector("#nickname"),m=e.querySelector("#join-button"),h=e.querySelector("#join-actions"),f=e.querySelector("#lobby-button");u&&(u.value=w());let v=null,b=!1;const P=o=>{h==null||h.classList.toggle("is-room-unavailable",o),f==null||f.classList.toggle("button--lobby-focus",o),f&&(f.textContent=o?t("返回大厅重新选房"):t("返回大厅")),m&&(m.textContent=o?t("房间不可用"):t("进入房间"))};c==null||c.addEventListener("submit",o=>{if(o.preventDefault(),!v||!b||!u)return;const l=u.value.trim();if(!l){i&&(i.className="feedback-card is-error",i.textContent=t("先输一个你喜欢的昵称，再进入房间。")),u.focus();return}Y(l),window.location.href=B(v,l)});const E=async()=>{try{const o=await k(a);v=o.id,P(!1),n&&(n.textContent=T(o.id,o.title)),s&&(s.textContent=`${A(o.gameMode,o.theme)} · ${K(o.gameMode,o.theme)}`),r&&(r.innerHTML=`
          <div class="stat-chip">
            <span class="stat-chip__label">${t("房间状态",void 0,"房间状态")}</span>
            <span class="stat-chip__value">${L(o)}</span>
          </div>
          <div class="stat-chip">
            <span class="stat-chip__label">${t("在线人数",void 0,"在线人数")}</span>
            <span class="stat-chip__value">${o.onlineCount} / ${o.maxPlayers}</span>
          </div>
          <div class="stat-chip">
            <span class="stat-chip__label">${t("当前地图",void 0,"当前地图")}</span>
            <span class="stat-chip__value">${C(o.mapId)}</span>
          </div>
          <div class="stat-chip">
            <span class="stat-chip__label">${t("剩余名额",void 0,"剩余名额")}</span>
            <span class="stat-chip__value">${o.availableSlots}</span>
          </div>
          <div class="stat-chip">
            <span class="stat-chip__label">${t("玩家互伤",void 0,"玩家互伤")}</span>
            <span class="stat-chip__value">${o.allowPlayerDamage?t("开启",void 0,"开启"):t("关闭")}</span>
          </div>
          <div class="stat-chip">
            <span class="stat-chip__label">${t("地圖說明",void 0,"地圖說明")}</span>
            <span class="stat-chip__value">${q(o.mapId)}</span>
          </div>
        `,g(r));const l=o.availableSlots>0&&o.phase==="open";b=l,m&&(m.disabled=!l),i&&(i.className=`feedback-card ${l?"is-success":"is-error"}`,i.textContent=l?t("房间还有位置，输入昵称就能加入。"):o.availableSlots<=0?t("房间已经满了，请期待后续新房间建立，或者回大厅看看别的房间。"):t("这个房间正在关闭倒计时中，暂时不能加入。"))}catch(o){v=null,b=!1,P(!0),n&&(n.textContent=t("房间不可用")),s&&(s.textContent=t("这个房间可能已经结束、被删除，或者链接写错了。")),i&&(i.className="feedback-card is-error",i.textContent=o instanceof Error?o.message:t("读取房间失败。")),m&&(m.disabled=!0)}};await E(),window.setInterval(()=>{E()},1e4)}V();
