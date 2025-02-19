"use client";

import React from "react";
import { motion } from "framer-motion";
import { characteristics } from "@/data/characteristics";
import { BackgroundBeams } from "@/components/ui/background-beams";

const FeaturesPage = () => {
  return (
    <div className="bg-white relative flex flex-col flex-grow pt-32">
      <BackgroundBeams />
      {/* Hero Section */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center ">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          選ばれる理由
        </h2>
        <p className="mt-4 font-normal text-base text-gray-600 max-w-lg mx-auto">
          グローバル対応の決済システム、スピーディーな導入、コスト効率の良さで、
          あなたのビジネスをサポートします
        </p>
      </div>

      {/* Features Grid */}
      <div className="max-w-6xl mx-auto px-4 py-20 flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {characteristics.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#4A90E2] to-[#50E3C2] opacity-20 rounded-2xl transition-opacity duration-300" />
              <div className="relative p-8 border border-gray-300 rounded-2xl bg-gray-100 text-gray-900 shadow-md">
                <div className="mb-4 text-[#4A90E2]">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-700">{item.mainDescription}</p>
                <ul className="mt-4 space-y-3">
                  {item.details.map((detail, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <div className="text-[#4A90E2]">{detail.icon}</div>
                      <div>
                        <h4 className="text-base font-medium">
                          {detail.title}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {detail.description}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-20">
        <div className="max-w-2xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            さっそく始めてみませんか？
          </h2>
          <p className="text-gray-600 mb-8">
            無料でテンプレートを試して、あなたのビジネスに最適な
            決済ソリューションを見つけましょう
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full bg-gradient-to-r from-[#4A90E2] to-[#50E3C2] text-white font-medium shadow-md"
          >
            無料デモを試す
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;
