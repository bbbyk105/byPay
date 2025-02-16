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
    { name: "ホーム", onClick: () => goTo("/") },
    { name: "特徴", onClick: () => goTo("/characteristic") },
    { name: "料金", onClick: () => goTo("/#fee") },
    { name: "導入の流れ" },
    { name: "テンプレート一覧", onClick: () => goTo("/temple") },
    { name: "お問い合わせ", onClick: () => goTo("/contact") },
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
      className={`lg:hidden fixed inset-0 bg-blue-100 z-50 transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      } w-screen h-screen`}
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
              className="text-gray-600 hover:text-purple-300 transition-colors px-2 py-1 rounded-lg hover:bg-blue-50"
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
