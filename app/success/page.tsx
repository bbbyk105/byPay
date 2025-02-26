"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle, Home, ArrowRight } from "lucide-react";

const SuccessPage = () => {
  useEffect(() => {
    // ページ読み込み時にスムーズなスクロールを有効化
    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 flex flex-col items-center justify-center p-6 text-white">
      {/* メインコンテンツ */}
      <motion.div
        className="w-full max-w-lg bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-2xl border border-white/20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* 成功アイコン */}
        <motion.div
          className="flex justify-center mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          <div className="bg-green-500 rounded-full p-2 shadow-lg shadow-green-500/30">
            <CheckCircle size={50} className="text-white" />
          </div>
        </motion.div>

        {/* タイトル */}
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-center mb-4 bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          送信が完了しました！
        </motion.h2>

        {/* メッセージ */}
        <motion.p
          className="text-base md:text-lg text-center text-blue-100 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          お問い合わせありがとうございます。
          <br />
          3営業日以内にご返信いたします。
        </motion.p>

        {/* ボタン */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Link href="/">
            <span className="group relative overflow-hidden inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-lg font-medium shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-600/40 transition-all duration-300">
              <Home size={18} />
              ホームに戻る
              <ArrowRight
                size={18}
                className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </span>
          </Link>
        </motion.div>
      </motion.div>

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-20 -right-20 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
    </div>
  );
};

export default SuccessPage;

// スタイルを追加する場合は、global CSSファイルに以下を追加：
//
// @keyframes blob {
//   0% { transform: translate(0px, 0px) scale(1); }
//   33% { transform: translate(30px, -50px) scale(1.1); }
//   66% { transform: translate(-20px, 20px) scale(0.9); }
//   100% { transform: translate(0px, 0px) scale(1); }
// }
//
// .animate-blob {
//   animation: blob 7s infinite;
// }
//
// .animation-delay-2000 {
//   animation-delay: 2s;
// }
//
// .animation-delay-4000 {
//   animation-delay: 4s;
// }
