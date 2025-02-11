"use client";
import {
  ArrowRight,
  CheckCircle,
  CreditCard,
  Package,
  Settings,
  XCircle,
} from "lucide-react";

import { pricingPlans } from "@/data/price";
import { features } from "@/data/features";
import PaymentForm from "@/components/payment-form";
import useNavigate from "@/hooks/router";
import SlideButton from "@/components/slide-button";
import React from "react";

const LandingPage = () => {
  const { goTo } = useNavigate();

  const problems = [
    {
      title: "現金決済で売上管理が大変...",
      description:
        "手作業での現金管理は時間がかかり、ミスのリスクも高くなりがち。確認作業に追われて接客に集中できない。",
      icon: <XCircle className="w-12 h-12 text-red-500" />,
    },
    {
      title: "レジを導入するほどの予算がない",
      description:
        "高額な初期費用と月額料金が必要なレジシステム。イベント出店では採算が合わない。",
      icon: <XCircle className="w-12 h-12 text-red-500" />,
    },
    {
      title: "決済手段が限られている",
      description:
        "現金しか受け付けられず、お客様の支払い手段が限定的。売上機会を逃してしまうことも。",
      icon: <XCircle className="w-12 h-12 text-red-500" />,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* 1. ヒーローセクション */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-400 text-white pt-20 overflow-hidden relative">
        {/* 背景の装飾 */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-6 py-24 relative">
          <div className="grid md:grid-cols-2 items-center gap-12">
            <div className="text-center md:text-left relative z-10">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                マルシェ・展示会の
                <br />
                決済をもっとカンタンに
              </h1>
              <p className="text-xl mb-8">
                月額費用0円、最短即日導入 <br />
                キャッシュレス決済を即実現 <br />
                サイトは自由にカスタマイズ可能
              </p>
              <SlideButton
                onClick={() => goTo("/temple")}
                label="テンプレートを見る"
                icon={<ArrowRight />}
              />
            </div>

            <div className="relative">
              <PaymentForm />
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[90%] h-2 bg-black/5 blur-md rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. 課題提起セクション */}
      <section className="py-24 bg-gradient-to-r from-blue-50 to-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900">
            こんな課題はありませんか？
          </h2>
          <p className="text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            マルシェや展示会での販売時によくある課題。
            あなたのお店でも心当たりはありませんか？
          </p>

          <div className="grid md:grid-cols-3 gap-12">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl border border-blue-100 shadow-md transform transition-all duration-200 hover:shadow-lg"
              >
                <div className="flex justify-center mb-6">
                  {React.cloneElement(problem.icon, {
                    className: "w-12 h-12 text-blue-500",
                  })}
                </div>
                <h3 className="text-xl font-bold mb-4 text-center text-gray-900">
                  {problem.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {problem.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-2xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-blue-400 bg-clip-text text-transparent">
              そんな課題を、私たちが解決します！
            </p>
            <SlideButton
              onClick={() => goTo("/temple")}
              label="無料で始める"
              icon={<ArrowRight />}
              className="bg-gradient-to-r from-purple-600 to-blue-400 text-white inline-flex items-center"
            />
          </div>
        </div>
      </section>

      {/* 3. 導入ステップ */}
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

      {/* 4. 特徴セクション */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">
            選ばれる3つの理由
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-sm">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. 料金プラン */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-center mb-6">
            シンプルな料金体系
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
            初期費用のみで始められる、わかりやすい料金プラン。
            運用時の固定費は0円で、決済時の手数料のみです。
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg transform transition-all duration-200 hover:scale-105 ${
                  plan.highlight
                    ? "border-2 border-blue-500 relative"
                    : "border border-gray-200"
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm">
                      人気プラン
                    </span>
                  </div>
                )}

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-center mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 text-center text-sm mb-6">
                    {plan.description}
                  </p>

                  <div className="text-center mb-8">
                    <span className="text-5xl font-bold">¥{plan.price}</span>
                    <span className="text-gray-600 block mt-2">
                      {plan.period}
                    </span>
                  </div>

                  <ul className="space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mr-3" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full mt-8 py-3 px-6 rounded-lg text-center transition-colors ${
                      plan.highlight
                        ? "bg-blue-500 text-white hover:bg-blue-600"
                        : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                    }`}
                  >
                    詳細を見る
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA */}
      <section className="py-24 bg-gradient-to-r from-teal-600 to-blue-400 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">
            まずは無料でお試しください
          </h2>
          <SlideButton
            onClick={() => goTo("/temple")}
            label="無料テンプレートを試す"
            icon={<ArrowRight />}
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors inline-flex items-center"
          />
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
