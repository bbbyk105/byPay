"use client";
import {
  ArrowRight,
  CheckCircle,
  CreditCard,
  Package,
  Settings,
} from "lucide-react";

import { pricingPlans } from "@/data/price";
import { features } from "@/data/features";
import PaymentForm from "@/components/payment-form";
import useNavigate from "@/hooks/router";
import SlideButton from "@/components/slide-button";
import React from "react";
import { problems } from "@/data/problems";
import { motion } from "framer-motion";

const LandingPage = () => {
  const { goTo } = useNavigate();

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
              <h1 className="text-3xl md:text-5xl font-bold mb-6">
                マルシェ・展示会の
                <br />
                決済をもっとカンタンに
              </h1>
              <p className="text-sm mb-8">
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
          <h2 className="text-3xl  font-bold text-center mb-4 text-gray-900">
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
                <div className="flex justify-center mb-6">{problem.icon}</div>

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
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-16">
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
      <section id="fee" className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              シンプルな料金体系
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base lg:text-lg">
              初期費用のみで始められる、わかりやすい料金プラン。
              運用時の固定費は0円で、決済時の手数料のみです。
            </p>
          </div>

          {/* モバイルビュー: アコーディオン形式 */}
          <div className="block lg:hidden space-y-4">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-sm"
              >
                <div className={`p-6 ${plan.highlight ? "bg-blue-50" : ""}`}>
                  {plan.highlight && (
                    <span className="inline-block bg-blue-500 text-white text-xs px-3 py-1 rounded-full mb-3">
                      人気プラン
                    </span>
                  )}
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline mb-3">
                    <span className="text-3xl font-bold">¥{plan.price}</span>
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">
                    {plan.description}
                  </p>
                  <div className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <button
                    className={`w-full mt-6 py-3 px-4 rounded-lg text-center transition-all flex items-center justify-center ${
                      plan.highlight
                        ? "bg-blue-500 text-white hover:bg-blue-600"
                        : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                    }`}
                    onClick={() => goTo("/price")}
                  >
                    詳細を見る
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* デスクトップビュー: グリッド形式 */}
          <div className="hidden lg:grid grid-cols-3 gap-6 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative bg-white rounded-xl p-8 transition-all ${
                  plan.highlight
                    ? "shadow-lg ring-2 ring-blue-500"
                    : "shadow-sm hover:shadow-md"
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm">
                      人気プラン
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm">{plan.description}</p>
                </div>

                <div className="text-center mb-8">
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold">¥{plan.price}</span>
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <SlideButton
                  onClick={() => goTo("/price")}
                  label="詳細を見る"
                  icon={<ArrowRight />}
                />
              </motion.div>
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
