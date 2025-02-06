import React from "react";

const header = () => {
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* ロゴ部分 */}
        <div className="flex items-center">
          <a href="#" className="text-xl font-bold text-blue-600">
            byPay
          </a>
        </div>

        {/* ナビゲーション */}
        <nav className="hidden md:flex space-x-8">
          <a
            href="#features"
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            特徴
          </a>
          <a
            href="#pricing"
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            料金
          </a>
          <a
            href="#steps"
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            導入の流れ
          </a>
          <a
            href="#contact"
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            お問い合わせ
          </a>
        </nav>

        {/* ログイン・デモボタン */}
        <div className="flex items-center space-x-4">
          <a
            href="#"
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            ログイン
          </a>
          <a
            href="#"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            デモを試す
          </a>
        </div>
      </div>
    </header>
  );
};

export default header;
