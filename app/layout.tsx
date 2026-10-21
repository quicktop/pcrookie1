import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const origin = "https://pcrookie.net";

  return {
    title: "A-Zheng｜阿正老師的數位教育實驗室",
    description: "A-Zheng（陳軒正／阿正老師）的個人形象網站，整理校園資訊治理、雲端教學、校務系統開發、免費軟體分享與 AI 工具實作經驗。",
    metadataBase: new URL(origin),
    openGraph: {
      title: "A-Zheng｜阿正老師的數位教育實驗室",
      description: "把資訊技術，做成學校每天都用得上的力量。",
      type: "website",
      images: [
        {
          url: `${origin}/digital-campus-v2.png`,
          width: 1536,
          height: 1024,
          alt: "A-Zheng 阿正老師數位教育實驗室形象網站預覽",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "A-Zheng｜阿正老師的數位教育實驗室",
      description: "教育現場的技術實作者，長期分享軟體、雲端、校務系統與 AI 工具經驗。",
      images: [`${origin}/digital-campus-v2.png`],
    },
    icons: {
      icon: "/favicon.svg",
      shortcut: "/favicon.svg",
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
