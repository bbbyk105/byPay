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
    title: "海外から国内にかけて利用できる決済",
    description:
      "Stripeを利用した安全な決済システムで、クレジットカードからQR決済まで幅広く対応。",
  },
  {
    icon: <Package className="w-8 h-8 text-blue-500" />,
    title: "利用開始まで最短1日",
    description:
      "豊富なテンプレートを用意しており、最短即日で利用開始が可能。展示会やイベント販売にも迅速に対応。",
  },
  {
    icon: <ShoppingBag className="w-8 h-8 text-blue-500" />,
    title: "オンライン販売も対応",
    description:
      "展示会やイベントで利用した後もECサイトとして継続利用可能。オンライン販売へスムーズに移行。",
  },
];
