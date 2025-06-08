import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "@/lib/i18n";
import { Bot, Github, Twitter, MessageCircle, Mail } from "lucide-react";

export const Footer: React.FC = () => {
  const t = useTranslation();

  const socialLinks = [
    {
      icon: MessageCircle,
      href: "https://t.me/your_channel",
      label: "Telegram",
    },
    {
      icon: Twitter,
      href: "https://twitter.com/your_handle",
      label: "Twitter",
    },
    { icon: Github, href: "https://github.com/your_repo", label: "GitHub" },
    { icon: Mail, href: "mailto:support@cryptobot.com", label: "Email" },
  ];

  const links = [
    { label: t("footer.privacy"), href: "/privacy" },
    { label: t("footer.terms"), href: "/terms" },
  ];

  return (
    <footer className="relative border-t border-border/50 bg-card/20 backdrop-blur-sm">
      {/* Background Pattern */}
      <div
        className={
          'absolute inset-0 bg-[url(\'data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%2322c55e" fill-opacity="0.02"%3E%3Cpath d="M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z"/%3E%3C/g%3E%3C/svg%3E\')] opacity-50'
        }
      ></div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo and Description */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-crypto-500 to-crypto-600 rounded-lg flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-crypto-400 to-crypto-600 bg-clip-text text-transparent">
                CryptoBot
              </span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs mx-auto md:mx-0">
              Next-generation AI-powered trading bots for cryptocurrency
              markets.
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center space-x-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-card/50 hover:bg-crypto-500/20 border border-border/50 hover:border-crypto-500/50 rounded-lg flex items-center justify-center transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5 text-muted-foreground hover:text-crypto-400 transition-colors duration-300" />
              </motion.a>
            ))}
          </motion.div>

          {/* Links and Copyright */}
          <motion.div
            className="text-center md:text-right"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center md:justify-end space-x-6 mb-4">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-crypto-400 transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              {t("footer.copyright")}
            </p>
          </motion.div>
        </div>

        {/* Bottom Border */}
        <motion.div
          className="mt-8 pt-8 border-t border-border/50 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-xs text-muted-foreground">
            Built with ❤️ for the crypto community
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
