import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { useState } from "react";

// ハンバーガーメニューアイコン
const MenuIcon = () => (
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
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

// 閉じるアイコン
const CloseIcon = () => (
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
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "サービス内容", href: "#features" },
    { name: "料金", href: "#pricing" },
    { name: "施工事例", href: "#testimonials" },
    { name: "お問い合わせ", href: "#support" },
    { name: "会社概要", href: "#support" },
    {
      name: "サポート",
      href: "#support",
    },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* ロゴ */}
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-blue-600">
              〇〇工務店
            </Link>
          </div>

          {/* デスクトップ用ナビゲーション */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* ログイン・登録ボタン（デスクトップ） */}
          <div className="hidden md:flex items-center space-x-4">
            <Button className="bg-blue-600 hover:bg-blue-700">
              無料で相談
            </Button>
          </div>

          {/* モバイル用メニューボタン */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-gray-600">
                <MenuIcon />
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-center py-4">
                  <div className="text-xl font-bold text-blue-600">
                    〇〇工務店
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                  >
                    <CloseIcon />
                  </Button>
                </div>
                <nav className="flex flex-col space-y-6 py-6">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-gray-600 text-lg hover:text-blue-600 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto space-y-4 py-6">
                  <Button
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    onClick={() => setIsOpen(false)}
                  >
                    無料で相談
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
