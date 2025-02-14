"use client";
import React, { useState } from "react";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import SlideButton from "@/components/slide-button";
import useNavigate from "@/hooks/router";
import { categories, templates } from "@/data/template";

const TemplatePage = () => {
  const { goTo } = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredTemplates =
    selectedCategory === "all"
      ? templates
      : templates.filter((template) => template.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 pt-16 sm:pt-20">
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-center mb-3 sm:mb-4">
            テンプレート一覧
          </h1>
          <p className="text-sm sm:text-base text-gray-600 text-center max-w-2xl mx-auto px-2">
            用途に合わせて最適なテンプレートをお選びください。
            全テンプレートは自由にカスタマイズ可能です。
          </p>
        </div>
      </section>

      <div className="sticky top-0 bg-white border-b shadow-sm z-10">
        <div className="container mx-auto px-2 sm:px-6">
          <div className="flex space-x-2 sm:space-x-4 py-3 sm:py-4 overflow-x-auto scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
                  selectedCategory === category.id
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <span className="mr-1.5 sm:mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {filteredTemplates.map((template) => (
            <Card
              key={template.id}
              className="overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative">
                <Image
                  src={template.image}
                  alt={template.name}
                  width={600}
                  height={400}
                  className="w-full h-40 sm:h-48 object-cover"
                  priority
                />
                {template.popular && (
                  <div className="absolute top-3 right-3">
                    <span className="bg-blue-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm">
                      人気
                    </span>
                  </div>
                )}
              </div>
              <CardContent className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold mb-2">
                  {template.name}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4">
                  {template.description}
                </p>
                <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                  {template.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center text-xs sm:text-sm text-gray-600"
                    >
                      <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500 mr-1.5 sm:mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                  <SlideButton
                    onClick={() => goTo(`/preview/${template.id}`)}
                    label="プレビュー"
                    className="w-full bg-green-200 text-gray-800 text-sm sm:text-base"
                  />
                  <SlideButton
                    onClick={() => goTo(`/customize/${template.id}`)}
                    label="このテンプレートを使う"
                    icon={<ArrowRight className="w-4 h-4" />}
                    className="w-full bg-purple-200 text-black text-sm sm:text-base"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TemplatePage;
