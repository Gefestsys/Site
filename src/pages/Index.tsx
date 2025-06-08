import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductBot from "@/components/ProductBot";
import TradingBots from "@/components/TradingBots";
import AIPlans from "@/components/AIPlans";
import Footer from "@/components/Footer";

const Index: React.FC = () => {
  useEffect(() => {
    // Set document title and meta description for SEO
    document.title = "CryptoBot - AI-Powered Trading Bot for Telegram";

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Revolutionary AI bot for crypto trading. Automate your trading with advanced machine learning algorithms directly in Telegram. 24/7 market analysis and intelligent trading signals.",
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "Revolutionary AI bot for crypto trading. Automate your trading with advanced machine learning algorithms directly in Telegram. 24/7 market analysis and intelligent trading signals.";
      document.head.appendChild(meta);
    }

    // Add structured data for SEO
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "CryptoBot",
      description:
        "AI-powered trading bot for cryptocurrency trading in Telegram",
      applicationCategory: "FinanceApplication",
      operatingSystem: "Web, Telegram",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      author: {
        "@type": "Organization",
        name: "CryptoBot",
      },
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <motion.div
      className="min-h-screen bg-crypto-dark-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header />

      <main>
        <Hero />
        <ProductBot />
        <TradingBots />
        <AIPlans />
      </main>

      <Footer />
    </motion.div>
  );
};

export default Index;

