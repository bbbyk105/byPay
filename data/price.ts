interface PricingPlan {
  name: string;
  price: string;
  period: string;
  features: string[];
  description?: string;
  highlight?: boolean;
}

export const pricingPlans: PricingPlan[] = [
  {
    name: "イベントプラン",
    price: "5万",
    period: "固定費0円",
    description: "マルシェや展示会ですぐに使える、テンプレート型プラン",
    features: [
      "決済手数料3.6%",
      "テンプレートから即日作成",
      "在庫管理機能",
      "売上レポート",
      "スマホ決済対応",
      "専門知識不要",
    ],
  },
  {
    name: "カスタムプラン",
    price: "20万",
    period: "固定費0円",
    description: "あなたのビジネスに合わせてカスタマイズ",
    highlight: true,
    features: [
      "決済手数料3.6%",
      "オリジナルデザイン",
      "カスタム機能追加",
      "在庫管理機能",
      "売上レポート",
      "スマホ決済対応",
    ],
  },
  {
    name: "ECサイト移行プラン",
    price: "30万",
    period: "固定費0円",
    description: "イベント後もECサイトとして継続利用可能",
    features: [
      "決済手数料3.6%",
      "フルカスタマイズ対応",
      "独自ドメイン設定",
      "SEO最適化",
      "在庫連携API対応",
      "アクセス解析機能",
    ],
  },
];
