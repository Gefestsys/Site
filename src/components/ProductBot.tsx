import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Bot,
  MessageSquare,
  TrendingUp,
  Shield,
  Zap,
  BarChart3,
  Smartphone,
  Globe,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ProductBot: React.FC = () => {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const features = [
    {
      icon: TrendingUp,
      key: "product.feature1",
      color: "from-crypto-green-500 to-crypto-green-300",
    },
    {
      icon: Zap,
      key: "product.feature2",
      color: "from-yellow-400 to-yellow-200",
    },
    {
      icon: Shield,
      key: "product.feature3",
      color: "from-blue-400 to-blue-200",
    },
    {
      icon: MessageSquare,
      key: "product.feature4",
      color: "from-purple-400 to-purple-200",
    },
    {
      icon: Globe,
      key: "product.feature5",
      color: "from-cyan-400 to-cyan-200",
    },
    {
      icon: BarChart3,
      key: "product.feature6",
      color: "from-pink-400 to-pink-200",
    },
  ];

  return (
    <section
      id="product"
      className="py-20 lg:py-32 relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-crypto-dark-900 via-crypto-dark-800 to-crypto-dark-900" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />

      {/* Floating Orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-crypto-green-500/10 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-20 right-10 w-48 h-48 bg-crypto-green-400/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <div className="inline-flex items-center space-x-2 bg-crypto-dark-800/50 border border-crypto-green-500/30 rounded-full px-6 py-2 mb-6">
              <Bot className="w-5 h-5 text-crypto-green-400" />
              <span className="text-crypto-green-400 font-mono text-sm uppercase tracking-wider">
                Our Product
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">{t("product.title")}</span>
            </h2>

            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t("product.description")}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Screenshots/Visual Content */}
            <motion.div className="relative" variants={itemVariants}>
              {/* Main Bot Interface Mockup */}
              <div className="relative max-w-md mx-auto lg:mx-0">
                {/* Phone Frame */}
                <div className="relative bg-gradient-to-br from-crypto-dark-700 to-crypto-dark-800 rounded-3xl p-2 neon-border">
                  <div className="bg-crypto-dark-900 rounded-2xl overflow-hidden">
                    {/* Phone Header */}
                    <div className="bg-crypto-dark-800 px-4 py-3 flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-crypto-green-500 rounded-full flex items-center justify-center">
                          <Bot className="w-4 h-4 text-black" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-white">
                            CryptoBot
                          </div>
                          <div className="text-xs text-crypto-green-400">
                            online
                          </div>
                        </div>
                      </div>
                      <div className="w-2 h-2 bg-crypto-green-500 rounded-full animate-pulse" />
                    </div>

                    {/* Chat Messages */}
                    <div className="p-4 space-y-4 h-80 overflow-hidden">
                      <motion.div
                        className="bg-crypto-dark-800 rounded-lg p-3 max-w-xs"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 1 }}
                      >
                        <div className="text-sm text-white">
                          Welcome! Ready to start trading?
                        </div>
                      </motion.div>

                      <motion.div
                        className="bg-crypto-green-500 rounded-lg p-3 max-w-xs ml-auto"
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 1.5 }}
                      >
                        <div className="text-sm text-black">
                          Show me BTC analysis
                        </div>
                      </motion.div>

                      <motion.div
                        className="bg-crypto-dark-800 rounded-lg p-3 max-w-xs"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 2 }}
                      >
                        <div className="text-xs text-crypto-green-400 mb-2">
                          📈 BTC/USDT Analysis
                        </div>
                        <div className="text-sm text-white mb-2">
                          Price: $42,350 (+2.5%)
                        </div>
                        <div className="text-xs text-gray-400">
                          🔹 Strong buy signal detected
                          <br />
                          🔹 RSI: 65 (bullish)
                          <br />
                          🔹 Confidence: 85%
                        </div>
                      </motion.div>

                      <motion.div
                        className="bg-crypto-green-500 rounded-lg p-3 max-w-xs ml-auto"
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 2.5 }}
                      >
                        <div className="text-sm text-black">Execute trade</div>
                      </motion.div>
                    </div>

                    {/* Input Area */}
                    <div className="border-t border-crypto-dark-700 p-3">
                      <div className="bg-crypto-dark-800 rounded-full px-4 py-2 flex items-center space-x-2">
                        <div className="text-sm text-gray-400 flex-1">
                          Type a message...
                        </div>
                        <Smartphone className="w-4 h-4 text-crypto-green-400" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Action Icons */}
                <motion.div
                  className="absolute -top-4 -right-4 w-12 h-12 bg-crypto-green-500 rounded-full flex items-center justify-center shadow-lg"
                  animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <TrendingUp className="w-6 h-6 text-black" />
                </motion.div>

                <motion.div
                  className="absolute -bottom-6 -left-6 w-10 h-10 bg-crypto-green-400 rounded-full flex items-center justify-center shadow-lg"
                  animate={{ y: [0, -8, 0], rotate: [0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                >
                  <Zap className="w-5 h-5 text-black" />
                </motion.div>
              </div>
            </motion.div>

            {/* Features List */}
            <motion.div className="space-y-6" variants={containerVariants}>
              {features.map((feature, index) => (
                <motion.div
                  key={feature.key}
                  className="flex items-start space-x-4 group"
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                  >
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-crypto-green-400 transition-colors">
                      {t(feature.key)}
                    </h3>
                    <div className="w-0 h-0.5 bg-crypto-green-500 group-hover:w-12 transition-all duration-500" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div className="text-center mt-16" variants={itemVariants}>
            <motion.button
              className="bg-crypto-green-500 hover:bg-crypto-green-600 text-black font-semibold px-8 py-4 rounded-full text-lg neon-glow transition-all duration-300 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open("https://t.me/your_bot", "_blank")}
            >
              <Bot className="w-5 h-5 mr-2 inline group-hover:animate-pulse" />
              {t("nav.launch_bot")}
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductBot;
