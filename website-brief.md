# 個人品牌網站需求文件

> 由 ask-me skill 於訪談後自動產生。可自行修改，改完請重開 session。

## 0. 專案素材清單（訪談前後已讀過）

| 檔案／來源 | 是什麼 | 會用在哪裡 |
| --- | --- | --- |
| `./resources/Activity _ Ray Kuo _ LinkedIn.html` | LinkedIn 活動頁面（含個人簡介、經歷摘要、貼文） | 關於我、聯絡方式 |
| `./resources/01.jpeg`、`02.jpeg`、`03.jpeg` | BrewDog Las Vegas 店內招牌照片 | 作品案例（酒類筆記）、關於我背景 |
| `./resources/07.jpeg`、`08.jpeg`、`09.jpeg`、`10.jpeg` | 酒吧／釀酒設備現場照片 | 作品案例（酒類筆記） |
| `./resources/11.jpeg`、`12.jpeg`、`13.jpeg` | 桶裝啤酒設備（keg、CO2 鋼瓶）特寫 | 作品案例（酒類筆記） |
| `./resources/14.jpeg`、`15.jpeg` | 本人於啤酒活動現場照片（著 BrewDog 服裝） | 開頭自我介紹、關於我 |
| `./resources/05.jpeg`、`06.jpeg` | 本人工作照（車內，掛 Fermentis 識別證） | 關於我 |
| `./resources/04.jpeg` | 未逐一開啟，待製作網站時再分類 | （待分類） |
| IG [@story.between.inks](https://www.instagram.com/story.between.inks/)（公開帳號） | 速寫（urban sketching）作品帳號，簡介：Urban sketcher / Tiny stories teller | 作品案例（速寫本）、聯絡方式 |
| IG [@beer_snowball](https://www.instagram.com/beer_snowball/)（公開帳號） | 底片攝影帳號，簡介：Large Format/4x5/instax/Film /Beer/Somewhere/Fun | 作品案例（底片攝影）、聯絡方式 |
| `./post_card/`（24 組照片，檔名已改成數字 `01`–`24`；原為 HEIC 的另附同編號 `.jpg`） | 明信片與貼票照片，含 Postcrossing 國際明信片交換實品（可見「Happy Postcrossing Ray K.」橡皮章、長崎郵戳、日本郵票） | 作品案例（明信片、集郵角落） |

素材只用來填空，使用者當場說的內容優先於檔案內容；`post_card/` 內原 HEIC 檔都已轉成同編號 `.jpg`，網頁一律引用 `.jpg`／`.jpeg`／`.png`，不要引用 `.heic`。

## 0-1. 從素材取得的真實資料（只寫檔案裡真的有的，找不到寫「（待補）」）

- 姓名／英文名：Ray Kuo（Jui Kuo）
- 職稱／頭銜：Draught Beer Technician｜ex-Asahi Breweries Taiwan｜Beer Quality Specialist｜BJCP Beer Judge｜WSET Level 2 in Wine
- 聯絡方式（Email／GitHub／LinkedIn／社群）：
  - LinkedIn：有公開頁面
  - IG：@story.between.inks（速寫）、@beer_snowball（底片攝影）
  - Email：bkavdc@gmail.com
- 經歷重點：
  - 10 年以上酒精飲料產業經驗，專長為桶裝啤酒系統、啤酒品質與技術服務
  - 於 Asahi Breweries Taiwan 期間，管理超過 200 套桶裝啤酒系統、訓練超過 350 位酒吧／餐廳人員、支援全台 400 支出酒閥
  - 曾負責 BrewDog 品牌在台灣的技術服務、品牌支援與通路經營（2021–2023）
  - 目前計畫遷居英國，尋求英國飲料產業機會
  - 學歷：世新大學
- 專長技能：Draught Beer、Troubleshooting、Preventive Maintenance、Quality Control、Export-Import；另有 BJCP 啤酒評審資格、WSET Level 2 侍酒知識
- 代表作品或案例：
  - BrewDog 台灣品牌經營與技術服務經驗
  - 速寫作品（建築／街景鋼筆淡彩，IG @story.between.inks）
  - 底片攝影作品（大片幅、4x5、拍立得，IG @beer_snowball）
  - Postcrossing 國際明信片交換實績（`post_card/` 資料夾內容）
- 可用圖片（相對路徑＋用途）：
  - `./resources/14.jpeg` → 本人照片，開頭自我介紹／關於我
  - `./resources/01.jpeg` 等 BrewDog／設備照片 → 酒類筆記區塊
  - `./post_card/` 內明信片與郵票照片（檔名為 `01`–`24`，HEIC 已轉成同編號 `.jpg`，可直接使用） → 明信片、集郵角落區塊

## 1. 網站名稱（Q1）

**漫遊酒途**

## 2. 網站主要目標（Q2）

- 最重要的一件事：讓對酒類、旅遊有興趣的人認識 Ray，累積人脈
- 由此推出的訪客行動：追蹤 IG／透過聯絡方式與 Ray 交流互動

## 3. 目標受眾（Q3）

跟 Ray 興趣相同的同好：酒類、旅遊、集郵、明信片、速寫、底片攝影愛好者。

## 4. 我能幫使用者解決的問題（Q4）

- 分享酒類專業知識與旅遊中發現的酒吧、故事
- 分享手繪速寫記錄下的旅行與生活片段
- 分享底片攝影作品（大片幅、4x5、拍立得）
- 分享明信片背後的故事（含 Postcrossing 國際交換經驗）
- 分享集郵小知識

## 5. 頁面區塊（Q5，一頁式，依順序）

選擇組合：**作品導向**（區塊名稱依內容調整為部落格用語）

1. 開頭自我介紹
2. 關於我
3. 作品案例（酒類、速寫、底片攝影、明信片、集郵故事精選）
4. 主題分類（原「服務項目」，依此順序）：酒類筆記／速寫本／底片攝影／明信片／集郵角落
5. 邀稿與合作方式（原「合作流程」）
6. 聯絡方式

（「旅遊」不獨立成一個分類，而是貫穿在酒類、速寫、底片、明信片、集郵這幾個分類裡的共同背景故事。）

## 6. 視覺風格（Q6，依所選風格填入細節線索）

> 使用者中途改變心意，從原本的「溫暖可愛」改成以下自訂風格，以此版本為準。

- 風格方向：陽剛、有氣場，鋼筆速寫調性，像雨夜下班後走進一間地下室雪茄酒吧
- 排版感覺：偏暗、氛圍感強，留白像速寫本的空白頁，不對稱構圖，內容像一頁頁翻開的筆記
- 字體感覺：剛硬俐落的無襯線標題（geometric sans），內文可帶一點手寫鋼筆／打字機質感
- 色彩方向：黑＋藏青／灰藍為主，低彩度，像雨夜濕路面反光的路燈；點綴一點威士忌琥珀色或雪茄煙霧的暖灰
- 插圖／圖像風格：鋼筆淡彩速寫線稿，交叉影線（hatching）筆觸，適合放雨滴、煙霧、酒杯反光等細節
- 動畫與互動：克制、緩慢，像走進地下室酒吧的節奏，輕柔淡入、滑順不花俏，hover 效果像燈光微微搖曳

## 7. 待補事項

- `./resources/04.jpeg` 尚未分類用途
- 具體要展示的明信片／集郵故事文案（目前只有照片，文字故事需之後補充）
- 速寫本、底片攝影區塊若要放實際作品圖，需從 IG 另外下載或請 Ray 提供原始檔（目前頁面只能連結 IG 帳號，貼文完整內容需登入才看得到）
