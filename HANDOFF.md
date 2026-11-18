# Handoff — resume homepage redesign (2026-11-13)

## Done
- Rewrote `index.html` from scratch, content taken from the 2026-10 PDF resume
  (「趙敬瑋 David722｜AI 應用與軟體研發履歷」).
  - Sections: Hero + key stats → 00 playable works → 01 experience timeline
    (香港商創優) → 02 AI projects → 03 research → 04 skills / 05 education → closing.
  - Follows system light/dark, toggle in top bar (stored in localStorage `theme`).
  - Print button → A4-friendly print stylesheet (save as PDF).
  - Game links are now relative (`./myGames/...`), so local preview works.
  - Removed the old contenteditable/localStorage resume editor.
- Added `assets/img/shikaku-cover.jpg` (cropped + shrunk from the 1.2MB Shikaku icon).

## Decisions
- Phone number from the PDF is intentionally NOT on the public page; email is
  the PDF one (cs.cultivator@...).
- The PDF's 「為何加入華碩」 section was rewritten as a company-neutral
  "How I work" closing, since this page is public and not tied to one employer.
- No photo (PDF only had a placeholder).

## Open
- Confirm: 「網關證照」 in the PDF was shown as 「網路證照」; 宏國德霖 degree shown
  as 「電通系 學士」; 淡江 years 2019–2021 came from the old page.
- Not committed / not pushed yet.

## Games pass (2026-11-13, later)
- Shikaku + ChessLingo restyled to the homepage's paper/ink look (light + dark),
  each with a "← 作品集" link back to the homepage. Game logic untouched.
- ChessLingo: removed demo-only copy (「落地 Demo 規格」, event log panel,
  investor line, "Demo 模式" toasts); fixed squashed empty rows on phones.
- PixelWorld (`index.html` mock layer only, bundles untouched):
  - Day/night was stuck at dawn (mock kept resetting `cycleStartedAtMs`);
    now a fixed 20-min cycle that starts in daytime.
  - Piggy coin balance never grew; now +1 per 10 s of play.
  - Removed developer toasts ("已模擬接收" etc.), hid FPS/latency/room-count/mic.
  - Social-button relocation script no longer re-scans every DOM attribute change.
- Not done: PixelWorld loading screen still says 「連接伺服器」 (lives in the bundle).

## Local preview
`python3 -m http.server <port>` from the repo root (port 8765 is used by another
local app on this machine), then open http://127.0.0.1:<port>/.

## itch.io profile (2026-11-14, outside this repo)
- https://zhudaandzhuer.itch.io restyled to match the homepage IP card: dark theme
  (BG #141416 / text #E9E4DA / link #E8703F), banner 1920×780 built from
  `assets/img/zhuda-zhuer-ip.jpg` (source kept at
  `~/Documents/私人/豬大與豬二/單圖/itch-profile-banner-dark.png`).
- Profile text (Account settings → Profile): bilingual intro + WORKS list (rainy-night
  game, 漫劇 EP.01, ふたりの帰り道, 深潮求生, LINE stickers) + official site link.
  Website field now https. X handle @CsCultivat41761 is the user's real account — keep.
- Public page for logged-out visitors lags ~3 min after a profile save.
- Support email set to the verified primary address (2026-11-14). Still open, user's own
  step: turn on two-factor auth at https://itch.io/user/settings/two-factor-auth.

## Shipped games (2026-11-18)
- Added 「已上架的原創遊戲」 under section 00 in `index.html`: 3 itch.io-public games
  (雨夜殺人事件 / 數豬豬 / 打撈吧！), covers in `assets/img/*-cover.jpg` (from each game's
  `art/store/cover-630x500.png`). Links go to the itch pages.
- Not added: 豬大浮島、豬大時空3D (only on game.qianlongxundao.com, not itch); 100002 is company QA.
- Not committed / not pushed yet.
