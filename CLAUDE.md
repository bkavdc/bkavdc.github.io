# 專案設定：Ray K. — Editorial Personal Website

> 這份設定是「護欄＋內容」。2026-09-01 從舊版一頁式靜態網站（純 HTML/CSS/JS＋GitHub Pages）全面重構為
> multi-page editorial 個人網站（Next.js + Tailwind + MDX + Vercel）。**這份文件取代舊版 CLAUDE.md 的所有硬性限制**——
> 舊版禁止框架、禁止 build、要求一頁式、部署 GitHub Pages 那些規則已不適用，不要照舊版邏輯行動。

## 溝通方式

- 一律使用繁體中文回覆使用者，並用白話文解釋做了什麼。
- 大規模改動（換框架、換部署平台、整站重構）前一定要先說明並取得確認；小範圍調整（改文案、調色、修 bug）可以直接做完再回報，不用每次都先問。
- 網站「內容語言」是英文（見下方說明），跟「跟使用者對話」用中文是兩件事，不要搞混。

## 網站定位

不是「我有五個興趣」的展示頁，而是「我是誰、我如何觀看與收藏這個世界」的 editorial personal website。核心概念是
**Collecting Stories**：Drinks 是 Ray 的 profession，Film／Sketch／Postcards／Stamps 是他探索與記錄世界的方式。Drinks 是網站裡份量最重的分類，不要把五個分類做成平等並列的興趣清單。

視覺／文案參考 [dixitwine.com](https://www.dixitwine.com/) 的 editorial／wine magazine 調性（強字體、大量留白、圖片主導），**不要直接抄它的版型**。禁止做成「復古主題網站」（郵票邊框、蓋章特效、手寫體氾濫）——設計要安靜、成熟，讓內容自己說話。

## 內容語言：英文

2026-09-01 這次重構，網站文案全部改成英文（首頁、五個分類、About、Contact 皆是）。原因：使用者當次需求訊息整段用英文書寫，且範例文案（"Collecting stories, one bottle..."）都是英文；使用者即將搬到英國、參考站 dixitwine.com 也是英文站。**這是我（Claude）在缺乏明確語言指示時做的判斷，不是使用者明確要求**——如果使用者之後想要中文版或雙語，屬於合理的後續調整，直接照做即可，不算否定先前決策。

## 目標受眾與行動

- 對象：酒類／攝影／速寫／明信片／集郵同好，以及可能找 Ray 合作的品牌／媒體／活動窗口。
- 主要行動：透過 Contact 頁 Email（bkavdc@gmail.com）或 LinkedIn／IG 聯繫；沒有制式合作表單，走「有想法就寫信」的調性。

## 真實資料（不要編造，找不到就標 TBD 或詢問）

- 姓名／職稱：Ray Kuo（Jui Kuo）｜Draught Beer Technician、ex-Asahi Breweries Taiwan（Beer Quality Specialist）、BJCP Beer Judge、WSET Level 2 in Wine。
- 年資：使用者在 2026-09-01 這次需求訊息裡親口說「約 8 年」酒精飲料產業經驗——**這個數字比舊版網站寫的「10 年以上」更新、更直接，全站以「約 8 年／close to 8 years」為準**，不要混用舊數字。
- 經歷：Asahi Breweries Taiwan 期間維護 200+ 桶裝啤酒系統、訓練 350+ 人員、支援 400 支出酒閥；2021–2023 於 BrewDog 台灣負責品牌技術服務與通路經營；即將從台灣搬到英國。
- 聯絡方式：Email bkavdc@gmail.com；LinkedIn https://www.linkedin.com/in/ray-kuo-a89721370/；IG @story.between.inks（速寫）、@beer_snowball（底片）。
- 素材與內容裡引用的具體事實（BrewDog Las Vegas 招牌、捷克 Zdenda 明信片、長崎浮世繪郵票、韓國 Louis Pasteur 紀念郵票等）都是從 `public/images/`、`public/postcards/` 裡的真實照片直接讀出來的，寫新內容前先看過對應照片，不要憑空編故事。

## 內容系統（Next.js + MDX）

- 每篇內容是 `content/<category>/<slug>.mdx`，`category` 為 `drinks`／`film`／`sketch`／`postcards`／`stamps` 其中之一。
- Frontmatter 欄位：`title`、`date`、`excerpt`、`cover`（圖片路徑，指向 `public/` 底下）、`coverAlt`、`tags`（陣列）；可選：`subcategory`（Drinks 用：Beer/Wine/Spirits/Brewing/Tasting/Industry/People/Places）、`location`（Postcards/Sketch 用）、`medium`（Sketch 用）、`featured`（首頁精選story用，全站只留一篇 `true`）。
- 讀取邏輯在 `lib/content.ts`（`getAllPosts`、`getPost`、`getFeaturedPost`）；渲染 MDX 內文用 `components/MdxBody.tsx`（`next-mdx-remote/rsc`）。
- 新增文章：在對應資料夾新增 `.mdx` 檔即可，`generateStaticParams` 會自動抓到，不用改路由程式碼。
- 沒有寫成獨立文章、只是單純好看的照片，放進 `lib/gallery.ts` 對應分類的陣列（`filmGallery`／`sketchGallery`／`postcardsGallery`），會出現在該分類頁的「More from the archive」grid，alt text 要寫實際看到的內容，不要編故事。
- 圖片一律放 `public/images/<category>/` 或 `public/postcards/`，新增圖片後要重新產生尺寸資料：`node scripts/gen-image-dims.mjs`（會更新 `lib/image-dims.json`，讓 `next/image` 知道原始寬高、不強制裁切比例）。

## 技術棧與硬性限制

- **Next.js（App Router）+ TypeScript + Tailwind CSS v4（CSS-first，`app/globals.css` 用 `@theme` 定義 token，沒有 `tailwind.config.js`）+ MDX**。
- 套件管理：npm（`package-lock.json`）。開發機沒有內建 Node，是用官方 tarball 裝到 `/usr/local/bin` 的（見下方「開發環境」）。
- 部署：**GitHub + Vercel**，push 到 GitHub 後 Vercel 自動 build／deploy，不再用 GitHub Pages。
- 色彩／字體 token 都在 `app/globals.css`：`--paper`／`--ink`／`--muted`／`--line`／`--accent` 系列；字體用 `next/font/google`（Fraunces 標題、IBM Plex Sans 內文、IBM Plex Mono 標籤／meta），在 `app/layout.tsx` 設定。
- 圖片一律用 `next/image`，寬高從 `lib/imageDims.ts`（讀 `lib/image-dims.json`）取得，**不要把不同比例的照片強制裁成同一比例**——照片牆用 CSS columns（`components/PhotoGrid.tsx`）做 masonry，保留每張照片原始比例。
- **照片不套用濾鏡**（延續舊站規範）：不要 grayscale／sepia／duotone 之類的 CSS filter，深色或氛圍感靠版面與色塊營造。
- 動效克制：淡入用 `.reveal` class + `components/RevealObserver.tsx`（IntersectionObserver），尊重 `prefers-reduced-motion`；不要加彈跳、花俏的動畫函式庫。

## 開發環境

- 這台機器原本沒裝 Node／npm，Homebrew 的 core tap 也停在 4 年前的舊狀態、抓不到 bottle。改用官方 tarball 裝 Node 24 LTS，`node`／`npm`／`npx` 已軟連結到 `/usr/local/bin`（不需要 sudo，該目錄使用者可寫）。之後的 session 應該可以直接用，不用重裝；如果 `node -v` 失敗才需要回頭處理。
- 本機驗證只用 `npm run build`（＋ `npm run lint`），**不要跑 `npm run dev` 起本機伺服器來預覽**——預覽一律看 Vercel 部署網址，跟舊站規則精神一致。

## 部署流程

- **Repo 沿用原本的 `bkavdc/bkavdc.github.io`**（GitHub Pages 專用命名的 repo），但新網站走 Vercel，不受這個命名限制。
- 重構期間新內容都在 `editorial-redesign` 分支，`main` 分支保留舊版一頁式網站，讓 GitHub Pages（`https://bkavdc.github.io/`）在切換前繼續正常運作。
- Vercel 專案需要使用者自己完成一次性登入／連接 GitHub repo（Claude 沒有現成的 Vercel 帳號可用，這步驟必須由使用者在瀏覽器完成）。連接後：
  - 先用 `editorial-redesign` 分支跑一次 Preview Deployment 讓使用者確認新站沒問題。
  - 使用者確認後，把 `editorial-redesign` merge 進 `main`（此時會覆蓋掉舊站的靜態檔案），Vercel 的 Production Deployment 跟著更新，**再**去 GitHub repo 設定關閉 Pages（`Settings → Pages → Build and deployment → None`），避免兩邊同時服務造成混淆。
  - 之後每次 push 到 `main`，Vercel 自動重新 build／deploy；push 到其他分支會拿到 Preview Deployment 網址，適合先給使用者看過再合併。
- `lib/site.ts` 裡的 `SITE.url` 要在 Vercel 網址確定後更新成正式網址（自訂網域或 `*.vercel.app`），否則 sitemap／OG 網址會是暫時值。

## 完工前檢查

- [ ] `npm run build`、`npm run lint` 都過。
- [ ] 內容都是真實資料（履歷事實、從照片讀出來的細節），沒有編造的人名、數字、故事。
- [ ] 圖片都有真實 alt text，比例沒有被強制裁切。
- [ ] 手機版（`sm`/`md` breakpoint 以下）版面正常、Nav 選單可用。
- [ ] `SITE.url`、metadata、sitemap 在網域確定後有更新。
