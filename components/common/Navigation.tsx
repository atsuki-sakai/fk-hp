import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { useState, memo, useCallback } from "react";
import { DialogTitle } from "@radix-ui/react-dialog";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";

const navItems = [
  { name: "私たちについて", href: "#about" },
  { name: "サービス", href: "#services" },
  { name: "施工事例", href: "#projects" },
  { name: "お見積りプラン", href: "#estimate" },
  { name: "よくある質問", href: "#faq" },
];

export const Navigation = memo(function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = useCallback(() => setIsOpen(false), []);

  return (
    <header className="bg-black  shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* ロゴ */}
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-white">
              〇〇工務店
            </Link>
          </div>

          {/* デスクトップ用ナビゲーション */}
          <motion.nav
            className="hidden md:flex items-center space-x-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "tween", duration: 0.4 }}
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white hover:text-gray-800 transition"
                onClick={closeMenu}
              >
                <motion.span
                  layout
                  whileHover={{ scale: 1.05 }}
                  className="relative inline-block"
                >
                  {item.name}
                  <motion.span
                    className="absolute left-0 bottom-0 h-0.5 bg-white"
                    layout
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.span>
              </Link>
            ))}
          </motion.nav>

          {/* ログイン・登録ボタン（デスクトップ） */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="#contact">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  size="lg"
                  className="px-8 py-4 border border-white bg-white text-black hover:bg-gray-800 transition"
                >
                  無料で相談
                </Button>
              </motion.div>
            </Link>
          </div>

          {/* モバイル用メニューボタン */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-white">
                <Menu size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[300px] sm:w-[400px] p-0">
              <DialogTitle className="sr-only">
                ナビゲーションメニュー
              </DialogTitle>
              <motion.div
                className="flex flex-col h-full p-4"
                initial={{ x: 200 }}
                animate={{ x: 0 }}
                exit={{ x: 200 }}
                transition={{ type: "tween", duration: 0.4 }}
              >
                <nav className="flex flex-col space-y-6 py-6 list-none">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-black text-base hover:text-gray-800 hover:underline leading-5 transition"
                      onClick={closeMenu}
                    >
                      <motion.span
                        layout
                        whileHover={{ scale: 1.05 }}
                        className="relative inline-block"
                      >
                        {item.name}
                        <motion.span
                          className="absolute left-0 bottom-0 h-0.5 bg-black"
                          layout
                          initial={{ width: 0 }}
                          whileHover={{ width: "100%" }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.span>
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto space-y-4 py-6">
                  <Button
                    size="lg"
                    className="w-full px-8 py-4 border border-black bg-black text-white hover:bg-gray-800 transition"
                    onClick={closeMenu}
                  >
                    無料で相談
                  </Button>
                </div>
              </motion.div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
});
