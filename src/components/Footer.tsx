import React from "react";
import { motion } from "framer-motion";
import {
  Bot,
  Mail,
  MessageSquare,
  Github,
  Twitter,
  Linkedin,
  ExternalLink,
  Shield,
  FileText,
  HeadphonesIcon,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer: React.FC = () => {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
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

  const socialLinks = [
    {
      icon: Twitter,
      href: "https://twitter.com/cryptobot",
      label: "Twitter",
      color: "hover:text-blue-400",
    },
    {
      icon: MessageSquare,
      href: "https://t.me/cryptobot_community",
      label: "Telegram",
      color: "hover:text-blue-500",
    },
    {
      icon: Github,
      href: "https://github.com/cryptobot",
      label: "GitHub",
      color: "hover:text-gray-400",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/company/cryptobot",
      label: "LinkedIn",
      color: "hover:text-blue-600",
    },
  ];

  const footerLinks = [
    {
      title: t("footer.legal"),
      links: [
        { key: "footer.privacy", href: "/privacy", icon: Shield },
        { key: "footer.terms", href: "/terms", icon: FileText },
      ],
    },
    {
      title: t("footer.support_section"),
      links: [
        { key: "footer.contacts", href: "/contact", icon: Mail },
        { key: "footer.support", href: "/support", icon: HeadphonesIcon },
      ],
    },
  ];

  return (
    <footer
      id="contacts"
      className="relative bg-crypto-dark-900 border-t border-crypto-dark-700 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-crypto-dark-900 via-crypto-dark-800 to-crypto-dark-900" />

        {/* Animated Grid */}
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(30, 184, 92, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(30, 184, 92, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
          animate={{
            backgroundPosition: ["0px 0px", "60px 60px"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="relative z-10">
        <motion.div
          className="mx-auto px-8 lg:px-16 xl:px-24 py-16 w-4/5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 items-start">
            {/* Brand Section */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center space-x-3 mb-4">
                <div className="relative">
                  <Bot className="w-10 h-10 text-crypto-green-500" />
                  <div className="absolute inset-0 w-10 h-10 bg-crypto-green-500 rounded-full blur-md opacity-50 animate-pulse" />
                </div>
                <span className="text-2xl font-bold gradient-text">
                  CryptoBot
                </span>
              </div>

              <p className="text-gray-400 text-sm mb-6 max-w-xs">
                {t("footer.description_text")}
              </p>
            </motion.div>

            {/* Newsletter - Center */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold text-white mb-4">
                {t("footer.newsletter.title")}
              </h3>

              <p className="text-gray-300 text-sm mb-4">
                {t("footer.newsletter.desc")}
              </p>

              <div className="space-y-3">
                <div className="flex flex-col gap-2">
                  <input
                    type="email"
                    placeholder={t("footer.newsletter.placeholder")}
                    className="w-full bg-crypto-dark-800 border border-crypto-dark-600 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-crypto-green-500 transition-colors"
                  />
                  <motion.button
                    className="bg-crypto-green-500 hover:bg-crypto-green-600 text-black px-4 py-2 rounded-lg font-medium text-sm transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {t("footer.newsletter.button")}
                  </motion.button>
                </div>

                <p className="text-xs text-gray-400">
                  {t("footer.newsletter.privacy")}
                </p>
              </div>
            </motion.div>

            {/* Legal Section */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold text-white mb-4">
                {t("footer.legal")}
              </h3>

              <ul className="space-y-3">
                {footerLinks[0].links.map((link) => (
                  <li key={link.key}>
                    <motion.a
                      href={link.href}
                      className="flex items-center space-x-2 text-gray-300 hover:text-crypto-green-400 transition-colors group"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <link.icon className="w-4 h-4 group-hover:text-crypto-green-400" />
                      <span>{t(link.key)}</span>
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Support Section */}
            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold text-white mb-4">
                {t("footer.support_section")}
              </h3>

              <ul className="space-y-3">
                {footerLinks[1].links.map((link) => (
                  <li key={link.key}>
                    <motion.a
                      href={link.href}
                      className="flex items-center space-x-2 text-gray-300 hover:text-crypto-green-400 transition-colors group"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <link.icon className="w-4 h-4 group-hover:text-crypto-green-400" />
                      <span>{t(link.key)}</span>
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div
            className="border-t border-crypto-dark-700 pt-8"
            variants={itemVariants}
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Copyright */}
              <div className="text-gray-400 text-sm">
                {t("footer.copyright")}
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-4">
                <span className="text-gray-400 text-sm hidden sm:block whitespace-nowrap">
                  {t("footer.follow_us")}:
                </span>

                <div className="flex items-center space-x-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-gray-400 ${social.color} transition-colors`}
                      whileHover={{ scale: 1.2, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Status */}
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-crypto-green-500 rounded-full animate-pulse" />
                <span className="text-gray-400 text-sm">
                  {t("footer.systems_operational")}
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Love Message */}
        <motion.div
          className="border-t border-crypto-dark-700 py-4"
          variants={itemVariants}
        >
          <div className="text-center">
            <span className="text-gray-400 text-sm">
              {t("footer.built_with_love").split("❤️")[0]}
              <span className="text-red-500 animate-pulse">❤️</span>
              {t("footer.built_with_love").split("❤️")[1]}
            </span>
          </div>
        </motion.div>

        {/* Bottom Glow Effect */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-crypto-green-500 to-transparent opacity-50" />
      </div>
    </footer>
  );
};

export default Footer;
