import React from "react";
import { Card, CardContent } from "@/components/ui/card";
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
import Image from "next/image";

const FeaturesPage = () => {
  const features = [
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
          description:
            "Stripeの世界基準のセキュリティで、安心・安全な取引を実現",
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* ヘッダー（ヒーロー）セクション */}
      <div className="bg-gradient-to-r from-teal-600 to-blue-500 text-white pt-24 md:pt-32 pb-16 sm:pb-20 md:pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 md:mb-6 leading-snug">
            選ばれる理由
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-center max-w-2xl mx-auto px-4 mb-4 leading-relaxed">
            グローバル対応の決済システム、スピーディーな導入、
            コスト効率の良さで、あなたのビジネスをサポートします
          </p>
        </div>
      </div>

      {/* メイン特徴セクション */}
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <div className="space-y-12 md:space-y-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="grid md:grid-cols-2 gap-8 md:gap-12 items-center"
            >
              <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
                <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                  {feature.icon}
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
                    {feature.title}
                  </h2>
                </div>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 md:mb-8 leading-relaxed">
                  {feature.mainDescription}
                </p>
                <div className="space-y-4 md:space-y-6">
                  {feature.details.map((detail, detailIndex) => (
                    <div
                      key={detailIndex}
                      className="flex items-start gap-3 md:gap-4"
                    >
                      {detail.icon}
                      <div>
                        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 mb-1 md:mb-2 leading-snug">
                          {detail.title}
                        </h3>
                        <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                          {detail.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className={`${index % 2 === 1 ? "md:order-1" : ""}`}>
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="aspect-video bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                      <Image
                        src="/api/placeholder/600/400"
                        alt={feature.title}
                        width={600}
                        height={400}
                        className="rounded-lg shadow-lg w-full h-auto"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTAセクション */}
      <div className="bg-gradient-to-r from-teal-600 to-blue-500 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 leading-snug">
            さっそく始めてみませんか？
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 px-4 leading-relaxed">
            無料でテンプレートを試して、あなたのビジネスに最適な
            決済ソリューションを見つけましょう
          </p>
          <button className="bg-white text-blue-600 px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold text-base sm:text-lg md:text-xl hover:bg-blue-50 transition-colors">
            無料デモを試す
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;
