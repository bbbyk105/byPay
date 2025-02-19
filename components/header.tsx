"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import useNavigate from "@/hooks/router";
import MobileMenu from "./mobile-menu";
import logo from "@/public/logos/logo.png";

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
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center space-x-2">
            <div className="relative w-full h-full">
              <Image src={logo} alt="byPay Logo" width={100} height={150} />
            </div>
          </a>

          {/* デスクトップナビゲーション */}
          <nav className="hidden lg:flex items-center space-x-8">
            {[
              { name: "ホーム", onClick: () => goTo("/") },
              { name: "特徴", onClick: () => goTo("/characteristic") },
              { name: "料金", onClick: () => goTo("/#fee") },
              { name: "導入の流れ", onClick: () => goTo("/introduction") },
              { name: "テンプレート一覧", onClick: () => goTo("/temple") },
              { name: "お問い合わせ", onClick: () => goTo("/contact") },
            ].map((item, index) => (
              <button
                key={index}
                className={`text-sm font-medium hover:text-purple-500 transition-colors relative group ${
                  isScrolled ? "text-gray-600" : "text-gray-900"
                }`}
                onClick={item.onClick ? item.onClick : undefined}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
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
        <MobileMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
          goTo={goTo}
        />
      </div>
    </header>
  );
};

export default Header;
