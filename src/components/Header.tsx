import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Bot, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/contexts/LanguageContext";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { key: "nav.product", href: "#product" },
    { key: "nav.features", href: "#features" },
    { key: "nav.technologies", href: "#technologies" },
    { key: "nav.about", href: "#about" },
    { key: "nav.contacts", href: "#contacts" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-crypto-dark-900/95 backdrop-blur-md border-b border-crypto-dark-700"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative">
              <Bot className="w-8 h-8 text-crypto-green-500" />
              <div className="absolute inset-0 w-8 h-8 bg-crypto-green-500 rounded-full blur-md opacity-50 animate-pulse" />
            </div>
            <span className="text-xl font-bold gradient-text">CryptoBot</span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center space-x-8 ml-auto"
            style={{ width: "528.5px" }}
          >
            {navItems.map((item, index) => (
              <motion.button
                key={item.key}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-300 hover:text-crypto-green-400 font-medium transition-colors relative group"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {t(item.key)}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-crypto-green-500 transition-all duration-300 group-hover:w-full" />
              </motion.button>
            ))}
          </nav>

          {/* Language Switcher & Launch Bot Button */}
          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="hidden sm:flex items-center space-x-1 text-gray-300 hover:text-crypto-green-400 hover:bg-crypto-dark-800"
                >
                  <Globe className="w-4 h-4" />
                  <span className="font-mono uppercase">{language}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="bg-crypto-dark-800 border-crypto-dark-600"
              >
                <DropdownMenuItem
                  onClick={() => setLanguage("en")}
                  className="text-gray-300 hover:text-crypto-green-400 hover:bg-crypto-dark-700 cursor-pointer"
                >
                  English
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setLanguage("ru")}
                  className="text-gray-300 hover:text-crypto-green-400 hover:bg-crypto-dark-700 cursor-pointer"
                >
                  Русский
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Launch Bot Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                className="bg-crypto-green-500 hover:bg-crypto-green-600 text-black font-semibold px-6 py-2 rounded-full neon-glow transition-all duration-300"
                onClick={() => window.open("https://t.me/your_bot", "_blank")}
              >
                <Bot className="w-4 h-4 mr-2" />
                {t("nav.launch_bot")}
              </Button>
            </motion.div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-gray-300 hover:text-crypto-green-400 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className="lg:hidden overflow-hidden"
          initial={false}
          animate={{
            height: isMobileMenuOpen ? "auto" : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="py-4 space-y-4 border-t border-crypto-dark-700">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left text-gray-300 hover:text-crypto-green-400 font-medium transition-colors"
              >
                {t(item.key)}
              </button>
            ))}

            {/* Mobile Language Switcher */}
            <div className="flex items-center space-x-4 pt-4 border-t border-crypto-dark-700">
              <span className="text-gray-400 text-sm">Language:</span>
              <button
                onClick={() => setLanguage("en")}
                className={`text-sm font-mono uppercase px-2 py-1 rounded transition-colors ${
                  language === "en"
                    ? "text-crypto-green-400 bg-crypto-dark-800"
                    : "text-gray-400 hover:text-crypto-green-400"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage("ru")}
                className={`text-sm font-mono uppercase px-2 py-1 rounded transition-colors ${
                  language === "ru"
                    ? "text-crypto-green-400 bg-crypto-dark-800"
                    : "text-gray-400 hover:text-crypto-green-400"
                }`}
              >
                RU
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
