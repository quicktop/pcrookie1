# A-Zheng｜阿正老師的數位教育實驗室

正式網址：https://pcrookie.net

以 Next.js 靜態輸出部署至 Cloudflare Pages。網站內容與圖片保留自原 Sites 專案。

## 本機執行

需要 Node.js 22.13 以上。

```sh
npm ci
npm run dev
```

## Cloudflare Pages

- Production branch: `main`
- Build command: `npm run build`
- Build output directory: `out`
- Environment variable: `NODE_VERSION=22`
- Custom domain: `pcrookie.net`

推送至 main 後，Cloudflare Pages 會自動建置與發布。網域、Open Graph 圖片與分享預覽使用 https://pcrookie.net。
