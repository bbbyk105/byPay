interface pricingPlans {
  name: string;
  price: number;
  period: string;
  features: string[];
}

export const pricingPlans = [
  {
    name: "イベントプラン",
    price: "50000",
    period: "固定費0円",
    features: [
      "決済手数料3.6%",
      "在庫管理機能",
      "売上レポート",
      "スマホ決済対応",
      "チャットサポート",
    ],
  },
];
