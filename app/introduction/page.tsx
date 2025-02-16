"use client";
import React, { useState } from "react";
import {
  Check,
  CreditCard,
  Package,
  ShoppingCart,
  Store,
  TestTube,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const PaymentFlowDashboard = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    {
      id: 1,
      title: "アカウント作成",
      description: "メールアドレス・パスワードを登録し、ビジネス情報を入力",
      icon: Store,
      substeps: ["メールアドレス登録", "ビジネス情報入力", "Stripe連携"],
    },
    {
      id: 2,
      title: "商品登録",
      description: "商品情報のアップロードと在庫設定",
      icon: Package,
      substeps: ["商品画像アップロード", "商品情報入力", "在庫数設定"],
    },
    {
      id: 3,
      title: "決済設定",
      description: "クレジットカード・QR決済の設定",
      icon: CreditCard,
      substeps: ["クレジットカード決済設定", "QR決済設定", "手数料確認"],
    },
    {
      id: 4,
      title: "テスト決済",
      description: "実際の決済フローをシミュレーション",
      icon: TestTube,
      substeps: ["決済フロー確認", "注文確認テスト", "完了通知確認"],
    },
    {
      id: 5,
      title: "販売開始",
      description: "サイトを公開し、販売をスタート",
      icon: ShoppingCart,
      substeps: ["サイト公開", "在庫確認", "売上管理"],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 mt-32">
      <Card className="mb-8 shadow-lg bg-white border border-gray-200 rounded-xl">
        <CardHeader className="p-6 bg-gradient-to-r from-green-600 to-teal-400 text-white rounded-t-lg">
          <CardTitle className="text-2xl text-center font-bold">
            決済サービス導入フロー
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <motion.div
            key={steps[currentStep - 1].id}
            className="relative flex flex-col items-center space-y-4 bg-gray-100 p-6 rounded-lg shadow-md border-l-4 border-teal-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex-shrink-0 w-12 h-12 bg-teal-500 text-white flex items-center justify-center rounded-full">
              {React.createElement(steps[currentStep - 1].icon, {
                className: "w-6 h-6",
              })}
            </div>
            <h3 className="text-lg font-semibold text-gray-900">
              {steps[currentStep - 1].title}
            </h3>
            <p className="text-gray-600 mt-1 mb-3">
              {steps[currentStep - 1].description}
            </p>
            <ul className="list-disc list-inside text-teal-600 space-y-1">
              {steps[currentStep - 1].substeps.map((substep, index) => (
                <li
                  key={index}
                  className="flex items-center space-x-2 text-sm font-medium"
                >
                  <Check className="w-4 h-4 text-green-500" />
                  <span>{substep}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <div className="flex justify-between mt-6">
            <Button
              disabled={currentStep === 1}
              onClick={() => setCurrentStep((prev) => Math.max(1, prev - 1))}
            >
              前へ
            </Button>
            <Button
              disabled={currentStep === steps.length}
              onClick={() =>
                setCurrentStep((prev) => Math.min(steps.length, prev + 1))
              }
            >
              次へ
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PaymentFlowDashboard;
