import {
  ArrowRight,
  CheckCircle,
  CreditCard,
  Package,
  Settings,
  Phone,
} from "lucide-react";

import { pricingPlans } from "@/data/price";
import Header from "@/components/header";
import { features } from "@/data/features";

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      {/* ヒーローセクション - pt-20を追加してヘッダーの高さ分を確保 */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-400 text-white pt-20">
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              マルシェ・展示会の
              <br />
              決済をもっとカンタンに
            </h1>
            <p className="text-xl mb-8">
              月額費用0円・最短即日導入で、
              <br />
              キャッシュレス決済をスタート
            </p>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors flex items-center mx-auto">
              無料デモを試す
              <ArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      </div>

      {/* 特徴セクション */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">
            選ばれる3つの理由
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 料金プラン */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">
            シンプルな料金体系
          </h2>
          <div className="max-w-md mx-auto flex flex-col">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className="bg-white border-2 border-blue-500 rounded-xl p-8"
              >
                <h3 className="text-2xl font-bold text-center mb-4">
                  {plan.name}
                </h3>
                <div className="text-center mb-8">
                  <span className="text-5xl font-bold">¥{plan.price}</span>
                  <span className="text-gray-600">/{plan.period}</span>
                </div>
                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-3" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 導入ステップ */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">
            かんたん3ステップで導入完了
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <Settings className="w-12 h-12 text-blue-500" />,
                title: "1. アカウント作成",
                description: "必要事項を入力するだけで即日開設",
              },
              {
                icon: <Package className="w-12 h-12 text-blue-500" />,
                title: "2. 商品登録",
                description: "スマホで写真を撮って商品情報を入力",
              },
              {
                icon: <CreditCard className="w-12 h-12 text-blue-500" />,
                title: "3. 決済テスト",
                description: "テスト決済で動作確認して完了",
              },
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-6">{step.icon}</div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">
            まずは無料デモでお試しください
          </h2>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors inline-flex items-center">
            無料デモを試す
            <ArrowRight className="ml-2" />
          </button>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">byPay</h3>
              <p className="text-gray-400">
                マルシェ・展示会向けキャッシュレス決済サービス
              </p>
            </div>
            <div className="flex items-center justify-end">
              <Phone className="w-5 h-5 mr-2" />
              <span>サポート: 090-4189-2872</span>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 byPay. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
