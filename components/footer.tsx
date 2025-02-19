"use client";
import { Phone } from "lucide-react";
import { AiFillInstagram } from "react-icons/ai";
import React from "react";
import Image from "next/image";
import logo from "@/public/logos/logo-white.png";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:grid sm:grid-cols-2 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="flex flex-col items-center sm:items-start">
            <div className="mb-4 relative w-32 h-16">
              <Image
                src={logo}
                alt="byPay Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <p className="text-gray-400 text-center sm:text-left mb-6 sm:mb-0">
              マルシェ・展示会向けキャッシュレス決済サービス
            </p>
          </div>

          {/* Contact Info & Social Links */}
          <div className="flex flex-col items-center sm:items-end">
            <div className="flex items-center justify-center sm:justify-end mb-4">
              <Phone className="w-5 h-5 mr-2" />
              <span className="text-sm sm:text-base">
                サポート: 090-4189-2872
              </span>
            </div>

            <div className="flex items-center space-x-6">
              <a
                href="https://www.instagram.com/bypay_official"
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-105 transition-transform duration-300"
                aria-label="Instagram"
              >
                <AiFillInstagram className="w-8 h-8 sm:w-10 sm:h-10 text-white hover:text-gray-300 transition-colors duration-300" />
              </a>
              <a
                href="https://x.com/byPay_official"
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-105 transition-transform duration-300"
                aria-label="X (Twitter)"
              >
                <FaSquareXTwitter className="w-8 h-8 sm:w-10 sm:h-10 text-white hover:text-gray-300 transition-colors duration-300" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-400">
          <p className="text-sm sm:text-base">
            &copy; 2025 byPay. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
