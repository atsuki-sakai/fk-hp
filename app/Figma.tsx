"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "./Navigation";

// アイコンコンポーネント
const CalendarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
);

const ChartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    />
  </svg>
);

const MessageIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
    />
  </svg>
);

const BoxIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
    />
  </svg>
);

// 追加: リサイクルアイコン
const RecycleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 9l-3-5-3 5m3-5v12m-6 8l-3-5-3 5m3-5v-8m-7.5 5a9 9 0 0117.9 0"
    />
  </svg>
);

// サービスデータ
const services = [
  {
    title: "家屋解体",
    description: "住宅や建物を安全に解体します。",
    icon: <CalendarIcon />,
  },
  {
    title: "内装解体",
    description: "壁や床などの内装を迅速に解体します。",
    icon: <BoxIcon />,
  },
  {
    title: "産業廃棄物処理",
    description: "解体後の廃材を適切に処理・リサイクルします。",
    icon: <RecycleIcon />,
  },
  {
    title: "緊急対応",
    description: "台風や火災後の緊急解体に24時間体制で対応。",
    icon: <MessageIcon />,
  },
  {
    title: "環境検査",
    description: "アスベスト調査や土壌汚染検査を実施。",
    icon: <ChartIcon />,
  },
];

const estimatePlans = [
  {
    name: "ベーシックプラン",
    price: "300,000円〜",
    description: "小規模住宅解体向け",
    features: ["家屋解体", "廃材処理"],
    buttonText: "詳細を見る",
    featured: false,
  },
  {
    name: "スタンダードプラン",
    price: "600,000円〜",
    description: "中規模住宅・商業建物解体向け",
    features: ["家屋解体", "内装解体", "廃材処理"],
    buttonText: "おすすめプラン",
    featured: true,
  },
  {
    name: "プレミアムプラン",
    price: "1,200,000円〜",
    description: "大型施設・特殊解体向け",
    features: ["全解体サービス", "環境検査", "緊急対応"],
    buttonText: "お問い合わせ",
    featured: false,
  },
];

const testimonials = [
  {
    name: "鈴木 一郎",
    role: "一戸建て解体",
    comment: "丁寧かつ迅速に作業していただきました。",
  },
  {
    name: "山本 花子",
    role: "アパート解体",
    comment: "対応がプロフェッショナルで安心できました。",
  },
];

export function FigmaLandingPage() {
  return (
    <div className="min-h-screen">
      {/* ナビゲーション */}
      <Navigation />

      {/* ヒーローセクション */}
      <section
        className="bg-gradient-to-r from-blue-500 to-purple-600 text-white"
        id="hero"
      >
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="md:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                家屋解体を
                <br />
                安全・迅速に
              </h1>
              <p className="text-lg md:text-xl opacity-90">
                私たちのチームが確かな技術と最新の機材で、
                解体作業をスムーズに進めます。
              </p>
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-white text-blue-600 hover:bg-gray-100 text-lg"
                >
                  お問い合わせ
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 text-lg"
                >
                  サービスを見る
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl">
                {/* 実際のFigmaデザインに基づいた画像を入れる */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-70"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/90 p-6 rounded-lg shadow-lg w-3/4">
                    <div className="bg-blue-50 p-4 rounded-lg mb-4">
                      <h3 className="text-blue-800 font-semibold text-center">
                        家屋解体の流れ
                      </h3>
                    </div>
                    <div className="grid grid-cols-7 gap-2">
                      {Array.from({ length: 21 }).map((_, i) => (
                        <div
                          key={i}
                          className={`h-10 rounded flex items-center justify-center text-sm ${
                            i % 3 === 0
                              ? "bg-blue-100 text-blue-800"
                              : "bg-gray-50"
                          }`}
                        >
                          {i + 1}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">私たちについて</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Bckerは、美容サロン運営を革新するためのオールインワンソリューションを提供する企業です。私たちの使命は、サロンオーナーがビジネスに集中できる環境を構築することです。
            </p>
          </div>
        </div>
      </section>

      {/* サービスセクション */}
      <section className="py-20 bg-gray-50" id="services">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">サービス</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              家屋・建物の解体から廃棄物処理、緊急対応まで幅広くご提供します。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-none shadow-lg hover:shadow-xl transition-shadow"
              >
                <CardContent className="pt-6">
                  <div className="bg-blue-100 text-blue-600 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 安全と認証セクション */}
      <section id="safety" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">安全と認証</h2>
            <ul className="text-gray-600 space-y-2">
              <li>ISO 9001 認証取得</li>
              <li>解体工事施工管理技士在籍</li>
              <li>アスベスト処理特別教育修了</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 施工事例ギャラリー */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">施工事例</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {/* placeholder images */}
            <div className="bg-gray-200 h-48"></div>
            <div className="bg-gray-200 h-48"></div>
            <div className="bg-gray-200 h-48"></div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">お問い合わせ</h2>
            <p className="text-lg text-gray-600">
              ご質問やデモのご依頼はこちらからお気軽にお問い合わせください。
            </p>
          </div>
          <form className="max-w-xl mx-auto space-y-4">
            <input
              type="text"
              placeholder="お名前"
              className="w-full p-3 border border-gray-300 rounded"
            />
            <input
              type="email"
              placeholder="メールアドレス"
              className="w-full p-3 border border-gray-300 rounded"
            />
            <textarea
              placeholder="お問い合わせ内容"
              className="w-full p-3 border border-gray-300 rounded h-32"
            ></textarea>
            <div className="text-center">
              <Button
                type="submit"
                size="lg"
                className="bg-blue-600 text-white hover:bg-blue-700"
              >
                送信
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* お見積りプラン */}
      <section className="py-20" id="estimate">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              お見積りプラン
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              規模やご要望に合わせた柔軟なお見積りをご提案します。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {estimatePlans.map((plan, index) => (
              <Card
                key={index}
                className={`border ${
                  plan.featured
                    ? "border-blue-500 shadow-blue-100"
                    : "border-gray-200"
                } shadow-lg overflow-hidden`}
              >
                <div
                  className={`p-6 ${
                    plan.featured ? "bg-blue-500 text-white" : "bg-white"
                  }`}
                >
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-end gap-1 mb-4">
                    <span className="text-3xl font-bold">{plan.price}</span>
                  </div>
                  <p
                    className={`text-sm ${
                      plan.featured ? "text-blue-100" : "text-gray-500"
                    }`}
                  >
                    {plan.description}
                  </p>
                </div>
                <CardContent className="pt-6">
                  <ul className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="text-green-500 mt-1">✓</div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full mt-6 ${
                      plan.featured
                        ? "bg-blue-500 hover:bg-blue-600"
                        : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                    }`}
                  >
                    {plan.buttonText}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* お客様の声 */}
      <section className="py-20 bg-gray-50" id="testimonials">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">お客様の声</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              実際に使っていただいているサロンオーナーからの声
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-none shadow-lg p-6">
                <div className="flex flex-col h-full">
                  <div className="text-yellow-400 flex mb-4">
                    {"★".repeat(5)}
                  </div>
                  <p className="text-gray-600 mb-6 flex-grow">
                    {testimonial.comment}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
                      {/* 実際のFigmaデザインに基づいた画像を入れる */}
                      <div className="w-full h-full bg-gradient-to-r from-blue-300 to-purple-300"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            今すぐ無料で始めましょう
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
            初めての方でも簡単に使えるシンプルな操作性。
            14日間の無料トライアルで実際の使用感をお試しください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 text-lg"
            >
              無料で始める
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 text-lg"
            >
              ご質問はこちら
            </Button>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-gray-900 text-white py-12" id="support">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-4">Bcker</h3>
              <p className="text-gray-400">
                家屋・建物解体のプロフェッショナルサービス
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">サービス</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    家屋解体
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    内装解体
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    産業廃棄物処理
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">実績</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    施工事例
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    お客様の声
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    認証・資格
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">会社情報</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    採用情報
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    会社概要
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    プライバシーポリシー
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    利用規約
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2024 〇〇Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
