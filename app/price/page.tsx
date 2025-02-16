import React from "react";
import {
  CheckCircle,
  HelpCircle,
  FileText,
  CreditCard,
  Clock,
  Shield,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const PricingDetail = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* ヘッダーセクション */}
      <section className="pt-16 pb-12 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-6">
            料金プラン詳細
          </h1>
          <p className="text-gray-600 text-center max-w-2xl mx-auto">
            初期費用と手数料について、詳しくご説明いたします。
            透明性の高い料金体系で、ビジネスの成長をサポートします。
          </p>
        </div>
      </section>

      {/* 主要セクション */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* 左カラム：料金詳細 */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>初期費用の内訳</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <FileText className="w-6 h-6 text-blue-500 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-1">導入サポート費用</h4>
                        <p className="text-gray-600">
                          システムの初期設定からスタッフのトレーニングまで、スムーズな導入をサポートいたします。
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <CreditCard className="w-6 h-6 text-blue-500 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-1">決済システム設定</h4>
                        <p className="text-gray-600">
                          オンライン決済システムの設定と連携作業を行います。
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>決済手数料について</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">
                        クレジットカード決済
                      </h4>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-blue-500 mr-2" />
                          <span>国内カード：3.5%</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-blue-500 mr-2" />
                          <span>海外カード：4.0%</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">その他決済方法</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-blue-500 mr-2" />
                          <span>銀行振込：¥300/件</span>
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-blue-500 mr-2" />
                          <span>コンビニ決済：¥250/件</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* 右カラム：補足情報 */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>よくある質問</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <HelpCircle className="w-6 h-6 text-blue-500 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-1">
                          契約期間の縛りはありますか？
                        </h4>
                        <p className="text-gray-600">
                          最低契約期間はございません。いつでも解約可能です。
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Clock className="w-6 h-6 text-blue-500 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-1">
                          導入までどのくらい時間がかかりますか？
                        </h4>
                        <p className="text-gray-600">
                          通常1-2週間程度でご利用開始いただけます。
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Shield className="w-6 h-6 text-blue-500 mt-1" />
                      <div>
                        <h4 className="font-semibold mb-1">
                          セキュリティ対策は？
                        </h4>
                        <p className="text-gray-600">
                          SSL暗号化通信を採用し、PCI
                          DSSに準拠したセキュアな決済環境を提供します。
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>サポート体制</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-gray-600">
                      導入後も安心してご利用いただけるよう、充実したサポート体制を整えています。
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-1" />
                        <span>24時間365日のテクニカルサポート</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-1" />
                        <span>専任のアカウントマネージャーによるサポート</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-1" />
                        <span>オンラインマニュアルとナレッジベースの提供</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            まずはお気軽にご相談ください
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            導入に関するご質問や料金のお見積もりなど、お客様のご要望に応じて詳しくご説明させていただきます。
          </p>
          <button className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600 transition-colors">
            お問い合わせ
          </button>
        </div>
      </section>
    </div>
  );
};

export default PricingDetail;
