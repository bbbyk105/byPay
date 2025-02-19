import {
  Settings,
  Package,
  CreditCard,
  ShoppingCart,
  TestTube,
} from "lucide-react";

export const steps = [
  {
    icon: <Settings className="w-12 h-12 text-blue-500" />,
    title: "1. アカウント作成",
    description:
      "メールアドレスとパスワードを登録し、必要事項を入力するだけで即日開設。",
  },
  {
    icon: <Package className="w-12 h-12 text-blue-500" />,
    title: "2. 商品登録",
    description: "スマホで写真を撮り、商品情報を入力。販売価格や在庫を設定。",
  },
  {
    icon: <CreditCard className="w-12 h-12 text-blue-500" />,
    title: "3. 決済設定",
    description:
      "クレジットカードやQRコード決済を設定し、手数料や振込先口座を登録。",
  },
  {
    icon: <TestTube className="w-12 h-12 text-blue-500" />,
    title: "4. テスト決済",
    description: "実際の決済フローをシミュレーションし、動作確認を実施。",
  },
  {
    icon: <ShoppingCart className="w-12 h-12 text-blue-500" />,
    title: "5. 販売開始",
    description: "サイトを公開し、在庫管理を行いながら販売をスタート。",
  },
];
