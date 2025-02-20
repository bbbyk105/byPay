import type { Metadata } from "next";

export const siteMetadata: Metadata = {
  title: "byPay | マルシェ・展示会向けキャッシュレス決済",
  description:
    "マルシェや展示会の出店者向けキャッシュレス決済＆ECツール。Stripe連携で即日導入、低コストで簡単に売上管理や在庫管理が可能。",
  keywords: [
    "マルシェ 決済",
    "展示会 キャッシュレス",
    "Stripe イベント決済",
    "物販 在庫管理",
  ],
  authors: [{ name: "byPay", url: "https://by-pay.vercel.app/" }],
  openGraph: {
    title: "byPay | マルシェ・展示会向けキャッシュレス決済",
    description:
      "マルシェや展示会の出店者向けキャッシュレス決済＆ECツール。Stripe連携で即日導入、低コストで簡単に売上管理や在庫管理が可能。",
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
    description:
      "マルシェや展示会の出店者向けキャッシュレス決済＆ECツール。Stripe連携で即日導入、低コストで簡単に売上管理や在庫管理が可能。",
    images: ["/logos/logo.png"],
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://by-pay.vercel.app/"
  ),
};
