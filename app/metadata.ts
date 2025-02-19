import type { Metadata } from "next";

export const siteMetadata: Metadata = {
  title: "byPay | マルシェ・展示会向けキャッシュレス決済",
  description:
    "マルシェや展示会出店者向けのキャッシュレス決済＆ECツール。Stripe連携により、即日導入可能な低コスト・シンプルな決済環境で、在庫管理や売上集計もスムーズに実現します。",
  keywords: [
    "マルシェ キャッシュレス決済",
    "展示会 キャッシュレス",
    "イベント即日決済",
    "Stripe イベント決済",
    "ECツール マルシェ",
    "物販 在庫管理 キャッシュレス",
  ],
  authors: [{ name: "byPay" }],
  openGraph: {
    title: "byPay | マルシェ・展示会向けキャッシュレス決済",
    description: "マルシェや展示会の決済をもっと簡単に！",
    url: "https://by-pay.vercel.app/",
    images: [
      {
        url: "/logos/logo.png",
        width: 1200,
        height: 630,
        alt: "byPay ロゴ",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "byPay | マルシェ・展示会向けキャッシュレス決済",
    description: "マルシェや展示会の決済をもっと簡単に！",
    images: ["/logos/logo.png"],
  },
  metadataBase: new URL("https://by-pay.vercel.app/"),
};
