import { Phone } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">byPay</h3>
              <p className="text-gray-400">
                マルシェ・展示会向けキャッシュレス決済サービス
              </p>
            </div>
            <div className="flex items-center justify-end">
              <Phone className="w-5 h-5 mr-2" />
              <span>サポート: 090-4189-2872</span>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 byPay. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
