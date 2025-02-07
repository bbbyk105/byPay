"use client";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">by</span>
            </div>
            <span
              className={`text-xl font-bold ${
                isScrolled ? "text-gray-900" : "text-gray-900"
              }`}
            >
              Pay
            </span>
          </a>

          {/* デスクトップナビゲーション */}
          <nav className="hidden lg:flex items-center space-x-8">
            {[
              { name: "特徴", href: "#features" },
              { name: "料金", href: "#pricing" },
              { name: "導入の流れ", href: "#steps" },
              { name: "テンプレート一覧", href: "/temple" },
              { name: "お問い合わせ", href: "#contact" },
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-medium hover:text-blue-600 transition-colors relative group ${
                  isScrolled ? "text-gray-600" : "text-gray-900"
                }`}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="#"
              className={`text-sm font-medium hover:text-blue-600 transition-colors ${
                isScrolled ? "text-gray-600" : "text-gray-900"
              }`}
            >
              ログイン
            </a>
            <a
              href="#"
              className="bg-blue-600 text-white text-sm font-medium px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30"
            >
              無料デモを試す
            </a>
          </div>

          {/* モバイルメニューボタン */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* モバイルメニュー */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? "max-h-96 opacity-100 py-4"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <nav className="flex flex-col space-y-4 pb-6">
            {[
              { name: "特徴", href: "#features" },
              { name: "料金", href: "#pricing" },
              { name: "導入の流れ", href: "#steps" },
              { name: "お問い合わせ", href: "#contact" },
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-blue-600 transition-colors px-2 py-1 rounded-lg hover:bg-blue-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 space-y-4">
              <a
                href="#"
                className="block text-gray-600 hover:text-blue-600 transition-colors px-2 py-1 rounded-lg hover:bg-blue-50"
              >
                ログイン
              </a>
              <a
                href="#"
                className="block bg-blue-600 text-white text-center px-4 py-2.5 rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20"
              >
                無料デモを試す
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
