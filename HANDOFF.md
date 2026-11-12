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
