# 個人作品集網站

使用 Next.js、React 和 Tailwind CSS 建立的個人作品集網站，部署至 GitHub Pages。

## 功能特色

- 🎨 現代化設計，包含動畫和漸層效果
- 📱 完全響應式設計，支援各種裝置
- 🎭 毛玻璃效果（Glassmorphism）
- ✨ 精緻的動畫效果
- 🔗 Linktree 風格首頁
- 📄 履歷展示頁面
- 💼 作品集展示頁面

## 技術棧

- **框架**: Next.js 15.5.4
- **UI 函式庫**: React 19.2.0
- **樣式**: Tailwind CSS 3.4.17
- **部署**: GitHub Pages

## 開始使用

### 安裝依賴

```bash
npm install
```

### 本地開發

```bash
npm run dev
```

網站將運行在 http://localhost:3010

### 建置專案

```bash
npm run build
```

### 匯出靜態網站

```bash
npm run export
```

## 自訂內容

### 更新個人資料

編輯 `src/data/data.js` 檔案：

1. **個人資訊**: 更新 `personalInfo` 物件
2. **社群連結**: 修改 `socialLinks` 陣列
3. **學歷**: 編輯 `education` 陣列
4. **工作經歷**: 更新 `experience` 陣列
5. **技術棧**: 修改 `skills` 物件
6. **專案作品**: 編輯 `projects` 陣列

### 新增圖片

- **大頭貼**: 放置於 `public/images/avatar.jpg`
- **專案截圖**: 放置於 `public/images/projects/`

## 部署到 GitHub Pages

### 1. 更新 next.config.js

將 `basePath` 改為你的 repository 名稱：

```javascript
basePath: '/your-repo-name',
```

### 2. 推送到 GitHub

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

### 3. 啟用 GitHub Pages

1. 前往 Repository Settings
2. 找到 "Pages" 設定
3. Source 選擇 "GitHub Actions"
4. 自動部署將會開始

## 專案結構

```
yuchen-land/
├── public/
│   └── images/
│       ├── avatar.jpg
│       └── projects/
├── src/
│   ├── app/
│   │   ├── about/
│   │   │   └── page.js
│   │   ├── portfolio/
│   │   │   └── page.js
│   │   ├── globals.css
│   │   ├── layout.js
│   │   └── page.js
│   ├── components/
│   │   └── ProjectCard.js
│   └── data/
│       └── data.js
├── .github/
│   └── workflows/
│       └── deploy.yml
├── next.config.js
├── tailwind.config.js
└── package.json
```

## 授權

MIT License
