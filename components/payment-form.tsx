import { CreditCard } from "lucide-react";
import CardBrands from "./card-brands";

const PaymentForm = () => {
  return (
    <div className="relative bg-white rounded-2xl shadow-2xl p-6 max-w-sm mx-auto">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
              B
            </div>
            <span className="font-bold text-gray-800">byPay 決済</span>
          </div>
          <span className="text-gray-600">¥2,500</span>
        </div>

        <div className="space-y-4">
          <div className="relative">
            <div className="h-12 bg-gray-50 rounded-lg border border-gray-200 px-4 flex items-center text-gray-400">
              4242 4242 4242 4242
            </div>
            <span className="absolute -top-2 left-4 px-2 bg-white text-xs text-gray-500">
              カード番号
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="relative">
              <div className="h-12 bg-gray-50 rounded-lg border border-gray-200 px-4 flex items-center text-gray-400">
                12 / 25
              </div>
              <span className="absolute -top-2 left-4 px-2 bg-white text-xs text-gray-500">
                有効期限
              </span>
            </div>
            <div className="relative">
              <div className="h-12 bg-gray-50 rounded-lg border border-gray-200 px-4 flex items-center text-gray-400">
                123
              </div>
              <span className="absolute -top-2 left-4 px-2 bg-white text-xs text-gray-500 whitespace-nowrap">
                セキュリティコード
              </span>
            </div>
          </div>
        </div>

        <CardBrands />

        <button className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold hover:bg-blue-700 transition-colors">
          決済する
        </button>

        <div className="flex items-center justify-center text-sm text-gray-500">
          <CreditCard className="w-4 h-4 mr-2" />
          <span>セキュリティーは保護されています</span>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
