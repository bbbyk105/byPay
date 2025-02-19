// mobile-menu.tsx
"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  goTo: (path: string) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, goTo }) => {
  const menuItems = [
    { name: "ホーム", onClick: () => goTo("/") },
    { name: "特徴", onClick: () => goTo("/characteristic") },
    { name: "料金", onClick: () => goTo("/price") },
    { name: "導入の流れ", onClick: () => goTo("/introduction") },
    { name: "テンプレート一覧", onClick: () => goTo("/temple") },
    { name: "お問い合わせ", onClick: () => goTo("/contact") },
  ];

  // メニューオープン時はスクロール防止
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "var(--scrollbar-width)";
    } else {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0";
    }
    return () => {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0";
    };
  }, [isOpen]);

  return (
    // isOpen のときのみ pointer-events を有効にする
    <div
      className={`fixed inset-0 z-50 ${
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      {/* 背景のオーバーレイ */}
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-500 ${
          isOpen ? "opacity-50" : "opacity-0"
        }`}
        onClick={onClose}
      ></div>
      {/* 左側からスライドインするメニューパネル */}
      <div
        className={`absolute top-0 left-0 h-full w-3/4 max-w-xs bg-gray-900 p-6 transform transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full justify-between">
          {/* ヘッダー：クローズボタン */}
          <div className="relative">
            <button
              onClick={onClose}
              className="absolute top-0 right-0 text-white"
              aria-label="メニューを閉じる"
            >
              <X className="w-8 h-8" />
            </button>
          </div>
          {/* ナビゲーションメニュー */}
          <nav className="mt-12">
            {menuItems.map((item, index) => (
              <div key={index} className="mb-6">
                <button
                  onClick={() => {
                    item.onClick();
                    onClose();
                  }}
                  className="text-2xl text-gray-300 hover:text-white transition-colors duration-300 w-full text-left"
                >
                  {item.name}
                </button>
              </div>
            ))}
          </nav>
          {/* 下部のソーシャルアイコン */}
          <div className="flex space-x-6">
            <a
              href="https://www.instagram.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <AiFillInstagram className="w-8 h-8 text-white hover:text-gray-300 transition-colors duration-300" />
            </a>
            <a
              href="https://x.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
            >
              <AiOutlineTwitter className="w-8 h-8 text-white hover:text-gray-300 transition-colors duration-300" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export const CurtainMenuPage = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((prev) => !prev);

  return (
    <>
      {/* ハンバーガーメニューのトグルボタン */}
      <button
        onClick={toggle}
        className="text-white focus:outline-none m-4"
        aria-label="メニューを開く"
      >
        <Menu className="w-8 h-8" />
      </button>
      <MobileMenu
        isOpen={open}
        onClose={toggle}
        goTo={(path) => console.log(`Navigating to ${path}`)}
      />
    </>
  );
};

export default MobileMenu;
