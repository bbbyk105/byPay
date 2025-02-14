import {
  Globe,
  Zap,
  CreditCard,
  Wallet,
  Timer,
  Code,
  QrCode,
  Store,
  Settings,
} from "lucide-react";
import { ReactElement } from "react";

interface CharacteristicDetail {
  title: string;
  description: string;
  icon: ReactElement;
}

interface Characteristic {
  title: string;
  mainDescription: string;
  icon: ReactElement;
  details: CharacteristicDetail[];
}

export const characteristics: Characteristic[] = [
  {
    title: "グローバル決済対応",
    mainDescription: "Stripeを活用した、世界中で使える決済システム",
    icon: <Globe className="w-8 md:w-12 h-8 md:h-12 text-blue-500" />,
    details: [
      {
        title: "多様な決済方法",
        description:
          "クレジットカード、電子マネー、QRコード決済など、お客様の好みの支払い方法に対応",
        icon: <Wallet className="w-6 h-6 text-blue-400" />,
      },
      {
        title: "グローバル展開",
        description: "海外からの観光客やバイヤーとのスムーズな取引を実現",
        icon: <CreditCard className="w-6 h-6 text-blue-400" />,
      },
      {
        title: "安全性",
        description: "Stripeの世界基準のセキュリティで、安心・安全な取引を実現",
        icon: <Settings className="w-6 h-6 text-blue-400" />,
      },
    ],
  },
  {
    title: "迅速な導入とカスタマイズ",
    mainDescription: "テンプレートから始める、スピーディーな店舗開設",
    icon: <Zap className="w-8 md:w-12 h-8 md:h-12 text-blue-500" />,
    details: [
      {
        title: "即日開設",
        description:
          "テンプレートを選んで情報を入力するだけで、その日のうちに開店可能",
        icon: <Timer className="w-6 h-6 text-blue-400" />,
      },
      {
        title: "カスタマイズ自由",
        description:
          "テンプレートをベースに、自由にデザインや機能をカスタマイズ",
        icon: <Code className="w-6 h-6 text-blue-400" />,
      },
      {
        title: "ECサイト連携",
        description:
          "実店舗での販売だけでなく、オンラインショップとしても活用可能",
        icon: <Store className="w-6 h-6 text-blue-400" />,
      },
    ],
  },
  {
    title: "コストパフォーマンス",
    mainDescription:
      "従来のレジシステムより低コストで始められる決済ソリューション",
    icon: <QrCode className="w-8 md:w-12 h-8 md:h-12 text-blue-500" />,
    details: [
      {
        title: "初期費用を抑制",
        description:
          "高額なレジ端末は不要。スマートフォンとQRコードで簡単に決済",
        icon: <Wallet className="w-6 h-6 text-blue-400" />,
      },
      {
        title: "柔軟な運用",
        description:
          "URLをQRコード化して商品ページを共有。場所を選ばない販売が可能",
        icon: <QrCode className="w-6 h-6 text-blue-400" />,
      },
      {
        title: "スケーラブル",
        description:
          "取引量に応じて柔軟に対応。成長に合わせたシステム拡張が可能",
        icon: <Settings className="w-6 h-6 text-blue-400" />,
      },
    ],
  },
];
