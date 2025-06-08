import React from "react";
import { motion } from "framer-motion";
import { Bot, ArrowRight, Play, TrendingUp, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import AnimatedBackground from "./AnimatedBackground";

const Hero: React.FC = () => {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const scrollToProduct = () => {
    const element = document.getElementById("product");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-crypto-dark-900/50 via-transparent to-crypto-dark-900/80" />

      <motion.div
        className="relative z-10 container mx-auto px-4 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-4xl mx-auto">
          {/* Floating Icons */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              className="absolute top-20 left-10 text-crypto-green-400 opacity-30"
              animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <TrendingUp className="w-8 h-8" />
            </motion.div>
            <motion.div
              className="absolute top-32 right-16 text-crypto-green-400 opacity-30"
              animate={{ y: [0, -15, 0], rotate: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            >
              <Zap className="w-6 h-6" />
            </motion.div>
            <motion.div
              className="absolute bottom-32 left-20 text-crypto-green-400 opacity-30"
              animate={{ y: [0, -25, 0], rotate: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 2 }}
            >
              <Bot className="w-10 h-10" />
            </motion.div>
          </div>

          {/* Main Content */}
          <motion.div className="mb-8" variants={itemVariants}>
            <div className="inline-flex items-center space-x-2 bg-crypto-dark-800/50 border border-crypto-green-500/30 rounded-full px-6 py-2 mb-6">
              <div className="w-2 h-2 bg-crypto-green-500 rounded-full animate-pulse" />
              <span className="text-crypto-green-400 font-mono text-sm uppercase tracking-wider">
                AI Trading Bot
              </span>
            </div>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            variants={itemVariants}
          >
            <span className="gradient-text">{t("hero.title")}</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            {t("hero.subtitle")}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12"
            variants={itemVariants}
          >
            {/* Primary CTA */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-crypto-green-500 hover:bg-crypto-green-600 text-black font-semibold px-8 py-4 rounded-full text-lg neon-glow transition-all duration-300 group"
                onClick={() => window.open("https://t.me/your_bot", "_blank")}
              >
                <Bot className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                {t("hero.launch_bot")}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            {/* Secondary CTA */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                variant="outline"
                className="border-crypto-green-500 text-crypto-green-400 hover:bg-crypto-green-500 hover:text-black font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 group glass-effect"
                onClick={scrollToProduct}
              >
                <Play className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                {t("hero.learn_more")}
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto"
            variants={containerVariants}
          >
            {[
              { number: "99.7%", label: t("hero.uptime"), icon: TrendingUp },
              { number: "24/7", label: t("hero.active_trading"), icon: Bot },
              { number: "500+", label: t("hero.active_users"), icon: Zap },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="glass-effect rounded-lg p-6 hover-lift"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <stat.icon className="w-8 h-8 text-crypto-green-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white mb-1">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator - Positioned at bottom of viewport */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
        onClick={scrollToProduct}
      >
        <motion.div
          className="w-6 h-10 border-2 border-crypto-green-500 rounded-full flex justify-center hover:border-crypto-green-400 transition-colors"
          animate={{ borderColor: ["#1eb85c", "#4ec975", "#1eb85c"] }}
          transition={{ duration: 2, repeat: Infinity }}
          whileHover={{ scale: 1.1 }}
        >
          <motion.div
            className="w-1 h-2 bg-crypto-green-500 rounded-full mt-2"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
