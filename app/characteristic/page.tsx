import React from "react";
import { Card, CardContent } from "@/components/ui/card";

import Image from "next/image";
import { characteristics } from "@/data/characteristics";

const FeaturesPage = () => {
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
          {characteristics.map((characteristic, index) => (
            <div
              key={index}
              className="grid md:grid-cols-2 gap-8 md:gap-12 items-center"
            >
              <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
                <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                  {characteristic.icon}
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
                    {characteristic.title}
                  </h2>
                </div>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 md:mb-8 leading-relaxed">
                  {characteristic.mainDescription}
                </p>
                <div className="space-y-4 md:space-y-6">
                  {characteristic.details.map((detail, detailIndex) => (
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
                        alt={characteristic.title}
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
