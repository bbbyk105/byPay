"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { AiFillInstagram } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import Image from "next/image";
import logowhite from "@/public/logos/logo-white.png";

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
    <div
      className={`fixed inset-0 z-[1000000] ${
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}
    >
      {/* 背景のオーバーレイ */}
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-500 z-[1000000] ${
          isOpen ? "opacity-50" : "opacity-0"
        }`}
        onClick={onClose}
      />
      {/* 左側からスライドインするメニューパネル */}
      <div
        className={`absolute top-0 left-0 h-full w-3/4 max-w-xs bg-gray-900 transform transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* 全体のパディングは0にして、必要なところだけパディングをつける */}
        <div className="flex flex-col h-full p-0">
          {/* 上部：ロゴ & Xボタン（左右に余白を確保したいので px-4） */}
          <div className="flex items-center justify-between px-4 py-4">
            <Image
              src={logowhite}
              alt="byPay"
              className="h-12 w-auto"
              priority
            />
            <button
              onClick={onClose}
              className="text-white"
              aria-label="メニューを閉じる"
            >
              <X className="w-10 h-10" />
            </button>
          </div>

          {/* ナビゲーションメニュー（同じpx-4で左端をそろえる） */}
          <nav className="mt-4 px-4">
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

          {/* 下部のソーシャルアイコン （ここもpx-4で同じ左端に） */}
          <div className="flex space-x-6 px-4 mt-auto pb-4">
            <a
              href="https://www.instagram.com/bypay_official"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <AiFillInstagram className="w-10 h-10 text-white hover:text-gray-300 transition-colors duration-300" />
            </a>
            <a
              href="https://x.com/byPay_official"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
            >
              <FaSquareXTwitter className="w-10 h-10 text-white hover:text-gray-300 transition-colors duration-300" />
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
