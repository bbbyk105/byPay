"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import useNavigate from "@/hooks/router";

const Header = () => {
  const { goTo } = useNavigate();
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
              { name: "テンプレート一覧", onClick: () => goTo("/temple") }, // 修正
              { name: "お問い合わせ", href: "#contact" },
            ].map((item, index) => (
              <button
                key={index}
                className={`text-sm font-medium hover:text-blue-600 transition-colors relative group ${
                  isScrolled ? "text-gray-600" : "text-gray-900"
                }`}
                onClick={item.onClick ? item.onClick : undefined} // hrefの競合を回避
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
              </button>
            ))}
          </nav>

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
              { name: "テンプレート一覧", onClick: () => goTo("/temple") }, // 修正
              { name: "お問い合わせ", href: "#contact" },
            ].map((item, index) => (
              <button
                key={index}
                className="text-gray-600 hover:text-blue-600 transition-colors px-2 py-1 rounded-lg hover:bg-blue-50"
                onClick={() => {
                  if (item.onClick) item.onClick();
                  setIsMobileMenuOpen(false);
                }}
              >
                {item.name}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
