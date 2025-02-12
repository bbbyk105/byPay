import { Laptop, ShoppingBag, Star, Smartphone } from "lucide-react";

export const templates = [
  {
    id: 1,
    name: "シンプルショップ",
    description: "商品を素早く登録・管理できるシンプルなテンプレート",
    category: "shop",
    features: ["商品一覧", "カート機能", "お気に入り登録"],
    image: "/images/simple-shop.jpg",
    popular: true,
  },
  {
    id: 2,
    name: "イベント特化",
    description: "イベント・フェス向けの期間限定ショップテンプレート",
    category: "event",
    features: ["在庫数表示", "タイムセール", "SNSシェア"],
    image: "/images/event-shop.jpg",
  },
  {
    id: 3,
    name: "アート作品展示",
    description: "作品と作家情報を美しく展示できるギャラリーテンプレート",
    category: "gallery",
    features: ["作品詳細", "作家プロフィール", "お問い合わせフォーム"],
    image: "/images/art-gallery.jpg",
  },
];

export const categories = [
  { id: "all", name: "全て", icon: <Laptop className="w-4 h-4" /> },
  { id: "shop", name: "ショップ", icon: <ShoppingBag className="w-4 h-4" /> },
  { id: "event", name: "イベント", icon: <Star className="w-4 h-4" /> },
  {
    id: "gallery",
    name: "ギャラリー",
    icon: <Smartphone className="w-4 h-4" />,
  },
];
