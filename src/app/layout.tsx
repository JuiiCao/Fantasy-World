import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "九乙的Fantasy World - 充满魅力的幻想世界",
  description: "欢迎来到九乙的Fantasy World，一个充满魔法、神话生物、异域地貌、多元文化、史诗故事、魔法物品、冒险和宗教信仰的幻想世界。",
  keywords: "九乙的Fantasy World, 魔法, 神话生物, 异域地貌, 多元文化, 史诗故事, 魔法物品, 冒险, 宗教信仰",
  authors: [{ name: "九乙" }],
  creator: "九乙",
  publisher: "Fantasy World",
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "https://fantasyworld.com",
    siteName: "九乙的Fantasy World",
    title: "九乙的Fantasy World - 充满魅力的幻想世界",
    description: "欢迎来到九乙的Fantasy World，一个充满魔法、神话生物、异域地貌、多元文化、史诗故事、魔法物品、冒险和宗教信仰的幻想世界。",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "九乙的Fantasy World - 充满魅力的幻想世界",
    description: "欢迎来到九乙的Fantasy World，一个充满魔法、神话生物、异域地貌、多元文化、史诗故事、魔法物品、冒险和宗教信仰的幻想世界。",
    images: ["/twitter-image.png"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,

  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" className="!scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
          type="image/png"
          sizes="180x180"
        />
        <meta name="theme-color" content="#2563eb" />
      </head>
      <body className={inter.className}>
        <main className="min-h-screen bg-gradient-to-b from-white via-white to-gray-50">
          {children}
        </main>
      </body>
    </html>
  );
}