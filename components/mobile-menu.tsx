"use client";

import React, { useEffect } from "react";
import { X } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  goTo: (path: string) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, goTo }) => {
  const menuItems = [
    { name: "特徴", href: "#features" },
    { name: "料金", href: "#pricing" },
    { name: "導入の流れ", href: "#steps" },
    { name: "テンプレート一覧", onClick: () => goTo("/temple") },
    { name: "お問い合わせ", href: "#contact" },
  ];

  useEffect(() => {
    if (isOpen) {
      // メニューが開いている時はスクロールを無効化
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = "var(--scrollbar-width)"; // スクロールバーの幅分のパディングを追加
    } else {
      // メニューが閉じている時はスクロールを有効化
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0";
    }

    // クリーンアップ関数
    return () => {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0";
    };
  }, [isOpen]);

  return (
    <div
      className={`lg:hidden fixed inset-x-0 top-0 bg-white z-50 transition-all duration-300 ease-in-out ${
        isOpen
          ? "max-h-96 opacity-100 py-4"
          : "max-h-0 opacity-0 overflow-hidden"
      }`}
    >
      <div className="container mx-auto px-4">
        {/* 閉じるボタン */}
        <div className="flex justify-end mb-4">
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="メニューを閉じる"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* メニュー項目 */}
        <nav className="flex flex-col space-y-4 pb-6">
          {menuItems.map((item, index) => (
            <button
              key={index}
              className="text-gray-600 hover:text-blue-600 transition-colors px-2 py-1 rounded-lg hover:bg-blue-50"
              onClick={() => {
                if (item.onClick) item.onClick();
                onClose();
              }}
            >
              {item.name}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
