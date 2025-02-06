import { CreditCard, Package, ShoppingBag } from "lucide-react";
import { ReactNode } from "react";

interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    icon: <CreditCard className="w-8 h-8 text-blue-500" />,
    title: "かんたんキャッシュレス決済",
    description:
      "Stripeを利用した安全な決済システムで、クレジットカードからQR決済まで幅広く対応",
  },
  {
    icon: <Package className="w-8 h-8 text-blue-500" />,
    title: "在庫管理もラクラク",
    description:
      "イベント中の在庫状況をリアルタイムで把握、スマホで簡単に更新可能",
  },
  {
    icon: <ShoppingBag className="w-8 h-8 text-blue-500" />,
    title: "オンライン販売も対応",
    description:
      "イベント前の予約販売や、イベント後のフォローアップセールスもカバー",
  },
];
