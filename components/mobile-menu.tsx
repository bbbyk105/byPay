"use client";

import { useLockBodyScroll } from "@uidotdev/usehooks";
import React from "react";

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
  useLockBodyScroll();

  return (
    <div
      className={`lg:hidden transition-all duration-300 ease-in-out ${
        isOpen
          ? "max-h-96 opacity-100 py-4"
          : "max-h-0 opacity-0 overflow-hidden"
      }`}
    >
      <nav className="flex flex-col space-y-4 pb-6">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className="text-gray-600 hover:text-blue-600 transition-colors px-2 py-1 rounded-lg hover:bg-blue-50"
            onClick={() => {
              if (item.onClick) item.onClick();
              onClose(); // メニューを閉じる
            }}
          >
            {item.name}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default MobileMenu;
