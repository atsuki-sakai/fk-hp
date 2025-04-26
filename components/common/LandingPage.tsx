"use client";

import { motion } from "framer-motion";
import { memo, useMemo } from "react";
import {
  Calendar,
  Box,
  MessageCircle,
  BarChart2,
  RefreshCw,
} from "lucide-react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/common/Navigation";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "お名前は2文字以上入力してください。" })
    .max(50, { message: "お名前は50文字以内で入力してください。" }),
  phone: z
    .string()
    .min(2, { message: "お電話番号は2文字以上入力してください。" })
    .max(50, { message: "お電話番号は50文字以内で入力してください。" }),
  message: z
    .string()
    .min(10, { message: "お問い合わせ内容は10文字以上入力してください。" })
    .max(1000, {
      message: "お問い合わせ内容は1000文字以内で入力してください。",
    }),
});

// 追加: チームメンバー用アイコン
const TeamMemberIcon = ({ initials }: { initials: string }) => (
  <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xl font-bold">
    {initials}
  </div>
);

// メトリクスデータ
const metrics = [
  { label: "解体実績数", value: "300+" },
  { label: "累計解体面積 (㎡)", value: "50,000" },
  { label: "顧客満足度", value: "99%" },
];

// チームデータ
const team = [
  { name: "佐藤 太郎", role: "現場監督", initials: "ST" },
  { name: "鈴木 花子", role: "技術責任者", initials: "SH" },
  { name: "田中 次郎", role: "環境検査士", initials: "TJ" },
];

// FAQデータ
const faqs = [
  {
    question: "解体工事の施工期間はどれくらいですか？",
    answer:
      "建物の規模や構造によりますが、一般的な一戸建ては2～4週間が目安です。",
  },
  {
    question: "アスベスト調査は必須ですか？",
    answer:
      "法令で一定規模以上の解体では必須です。弊社は専門資格を有するスタッフが安全に実施します。",
  },
  {
    question: "見積もりは無料ですか？",
    answer: "はい。現地調査からお見積もりまで一切無料で対応いたします。",
  },
];

// サービスデータ
const services = [
  {
    title: "家屋解体",
    description: "住宅や建物を安全に解体します。",
    icon: <Calendar size={32} />,
  },
  {
    title: "内装解体",
    description: "壁や床などの内装を迅速に解体します。",
    icon: <Box size={32} />,
  },
  {
    title: "産業廃棄物処理",
    description: "解体後の廃材を適切に処理・リサイクルします。",
    icon: <RefreshCw size={32} />,
  },
  {
    title: "緊急対応",
    description: "台風や火災後の緊急解体に24時間体制で対応。",
    icon: <MessageCircle size={32} />,
  },
  {
    title: "環境検査",
    description: "アスベスト調査や土壌汚染検査を実施。",
    icon: <BarChart2 size={32} />,
  },
];

const estimatePlans = [
  {
    name: "小家屋解体",
    price: "300,000円〜",
    description: "小規模住宅解体向け",
    features: ["家屋解体", "廃材処理"],
    buttonText: "詳細を見る",
    featured: false,
  },
  {
    name: "物置解体",
    price: "600,000円〜",
    description: "中規模住宅・商業建物解体向け",
    features: ["家屋解体", "内装解体", "廃材処理"],
    buttonText: "おすすめプラン",
    featured: true,
  },
  {
    name: "大型施設解体",
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

export const LandingPage = memo(function LandingPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      message: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  const memoServices = useMemo(() => services, []);
  const memoMetrics = useMemo(() => metrics, []);
  const memoTeam = useMemo(() => team, []);
  const memoFaqs = useMemo(() => faqs, []);
  const memoTestimonials = useMemo(() => testimonials, []);
  return (
    <div className="min-h-screen">
      {/* ナビゲーション */}
      <Navigation />

      {/* Hero */}
      <motion.section
        id="hero"
        className="relative bg-gradient-to-b from- to-gray-100 text-black py-4 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 text-center flex flex-col md:flex-row-reverse gap-4"
        >
          <div className="w-full h-full min-h-[300px] md:min-h-[500px] bg-gray-200"></div>
          <div className="flex flex-col justify-center w-full">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              解体工事を
              <br />
              安全に、迅速に
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              最新機材と専門スタッフが
              <br />
              あらゆる建物をスムーズに解体します。
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <Button
                size="lg"
                className="px-8 py-4 border border-black bg-black text-white hover:bg-gray-800 hover:text-white mx-2 transition"
              >
                お問い合わせ
              </Button>
              <Button
                size="lg"
                className="px-8 py-4 border border-black bg-black text-white hover:bg-gray-800 hover:text-white mx-2 transition"
              >
                サービスを見る
              </Button>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* 私たちについてセクション */}
      <motion.section
        id="about"
        className="py-20 text-black"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              私たちについて
            </h2>
            <p className="text-lg text-slate-700 mb-8 max-w-3xl mx-auto">
              当社は建物解体のプロフェッショナルです。戸建てから大型施設まで、安全かつ効率的な解体サービスを提供し、廃材のリサイクルまで一括してサポートします。
            </p>
          </div>
        </div>
      </motion.section>

      {/* サービスセクション */}
      <motion.section
        className="py-20 bg-gray-50 text-black"
        id="services"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">サービス</h2>
            <p className="text-lg text-slate-700 mb-8 max-w-3xl mx-auto">
              家屋・建物の解体から廃棄物処理、緊急対応まで幅広くご提供します。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {memoServices.map((service, index) => (
              <Card
                key={index}
                className="border-none shadow-lg hover:shadow-xl transition-shadow"
              >
                <CardContent className="flex items-start gap-6 pt-8">
                  <div className="bg-white text-black w-14 h-14 rounded-full flex items-center justify-center">
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 安全と認証セクション */}
      <motion.section
        id="safety"
        className="py-20 bg-white text-black"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col justify-center items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">安全と認証</h2>
            <ul className="text-green-600 tracking-wide font-bold space-y-2 list-disc">
              <li>ISO 9001 認証取得</li>
              <li>解体工事施工管理技士在籍</li>
              <li>アスベスト処理特別教育修了</li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* 施工事例ギャラリー */}
      <motion.section
        id="projects"
        className="py-20 bg-gray-50 text-black"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">施工事例</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, idx) => (
              <div key={idx} className="bg-gray-200 aspect-square"></div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* お問い合わせセクション */}
      <motion.section
        id="contact"
        className="py-20 bg-white text-black"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              お問い合わせ
            </h2>
            <p className="text-lg text-slate-700 mb-8 max-w-3xl mx-auto">
              ご質問やデモのご依頼はこちらからお気軽にお問い合わせください。
            </p>
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 max-w-xl mx-auto"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>お名前</FormLabel>
                    <FormDescription className="text-xs">
                      お問い合わせのしている本人のお名前を入力してください。
                    </FormDescription>
                    <FormControl>
                      <Input placeholder="山田太郎" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>お電話番号</FormLabel>
                    <FormDescription className="text-xs">
                      折り返しさせていただくためお電話番号を入力してください。
                    </FormDescription>
                    <FormControl>
                      <Input placeholder="090-1234-5678" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>お問い合わせ内容</FormLabel>
                    <FormDescription className="text-xs">
                      お問い合わせ内容を入力してください。
                    </FormDescription>
                    <FormControl>
                      <Textarea
                        rows={10}
                        placeholder="例：家の解体をお願いしたいのですが、見積もりは可能ですか？"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" size="lg" className="w-full px-8 py-4">
                上記の内容で問い合わせる
              </Button>
            </form>
          </Form>
        </div>
      </motion.section>

      {/* お見積りプラン */}
      <motion.section
        className="py-20 bg-white text-black"
        id="estimate"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              お見積りプラン
            </h2>
            <p className="text-lg text-slate-700 mb-8 max-w-3xl mx-auto">
              工事の規模やご要望に合わせた柔軟なお見積りをご提案します。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {estimatePlans.map((plan, index) => (
              <Card
                key={index}
                className={`border shadow-lg overflow-hidden ${
                  plan.featured ? "border-black" : "border-black"
                }`}
              >
                <div
                  className={`p-6 ${
                    plan.featured
                      ? "bg-black text-white"
                      : "bg-white text-black"
                  }`}
                >
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-end gap-1 mb-4">
                    <span className="text-3xl font-bold">{plan.price}</span>
                  </div>
                  <p
                    className={`text-sm ${
                      plan.featured ? "text-white" : "text-black"
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
                    size="lg"
                    className="px-8 py-4 border border-black text-black bg-white hover:bg-black hover:text-white transition w-full mt-6"
                  >
                    {plan.buttonText}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </motion.section>

      {/* お客様の声 */}
      <motion.section
        className="py-20 bg-white text-black"
        id="testimonials"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">お客様の声</h2>
            <p className="text-lg text-slate-700 mb-8 max-w-3xl mx-auto">
              実際に使っていただいているサロンオーナーからの声
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {memoTestimonials.map((testimonial, index) => (
              <Card key={index} className="border-none shadow-lg p-6">
                <div className="flex flex-col h-full">
                  <div className="text-yellow-400 flex mb-4">
                    {"★".repeat(5)}
                  </div>
                  <p className="text-black mb-6 flex-grow">
                    {testimonial.comment}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
                      {/* 実際のFigmaデザインに基づいた画像を入れる */}
                      <div className="w-full h-full bg-gray-300" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-black">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </motion.section>
      {/* メトリクス */}
      <motion.section
        id="metrics"
        className="py-20 bg-gray-50 text-black"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {memoMetrics.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                <h3 className="text-4xl md:text-5xl font-bold mb-4 text-slate-700">
                  {m.value}
                </h3>
                <p className="text-slate-700 mb-8">{m.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* チームメンバー */}
      <motion.section
        id="team"
        className="py-20 bg-white text-black"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            私たちのチーム
          </h2>
          <p className="text-lg text-slate-700 mb-8 max-w-3xl mx-auto">
            専門の技術者が現場をしっかりサポートします。
          </p>
        </div>
        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {memoTeam.map((member, idx) => (
            <Card key={idx} className="shadow-lg hover:shadow-xl p-6">
              <div className="flex flex-col items-center gap-4">
                <TeamMemberIcon initials={member.initials} />
                <h4 className="font-semibold text-xl">{member.name}</h4>
                <p className="text-black">{member.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </motion.section>

      {/* よくある質問 */}
      <motion.section
        id="faq"
        className="py-20 px-4 bg-gray-50 text-black"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4 text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">よくある質問</h2>
          <p className="text-lg text-slate-700 mb-8 max-w-3xl mx-auto">
            ご依頼前に気になるポイントをまとめました。
          </p>
        </div>
        <Accordion
          type="single"
          collapsible
          className="max-w-3xl mx-auto space-y-4"
        >
          {memoFaqs.map((faq, i) => (
            <AccordionItem value={`faq-${i}`} key={i}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.section>

      {/* フッター */}
      <footer className="bg-black text-white py-12" id="support">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* 会社情報カラム */}
            <div>
              <h3 className="font-bold text-xl mb-4">〇〇工務店</h3>
              <p className="text-gray-400">
                家屋・建物解体のプロフェッショナルサービス
              </p>
              <h4 className="font-semibold mt-8 mb-4">会社情報</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-gray-400 hover:text-white">
                    私たちについて
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-white">
                    お問い合わせ
                  </a>
                </li>
              </ul>
            </div>
            {/* サービスカラム */}
            <div>
              <h4 className="font-semibold mb-4">サービス</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#services"
                    className="text-gray-400 hover:text-white"
                  >
                    サービス一覧
                  </a>
                </li>
                <li>
                  <a href="#safety" className="text-gray-400 hover:text-white">
                    安全と認証
                  </a>
                </li>
                <li>
                  <a
                    href="#estimate"
                    className="text-gray-400 hover:text-white"
                  >
                    お見積りプラン
                  </a>
                </li>
              </ul>
            </div>
            {/* 実績カラム */}
            <div>
              <h4 className="font-semibold mb-4">実績</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#projects"
                    className="text-gray-400 hover:text-white"
                  >
                    施工事例
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonials"
                    className="text-gray-400 hover:text-white"
                  >
                    お客様の声
                  </a>
                </li>
                <li>
                  <a href="#metrics" className="text-gray-400 hover:text-white">
                    今までの実績
                  </a>
                </li>
              </ul>
            </div>
            {/* 情報カラム */}
            <div>
              <h4 className="font-semibold mb-4">情報</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#team" className="text-gray-400 hover:text-white">
                    私たちのチーム
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-gray-400 hover:text-white">
                    よくある質問
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-xs text-gray-400">
            <p>© 2024 〇〇Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
});
