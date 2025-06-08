import React from "react";
import { motion } from "framer-motion";
import {
  FileText,
  ArrowLeft,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Scale,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";

const TermsOfService: React.FC = () => {
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

  return (
    <div className="min-h-screen bg-crypto-dark-900 relative">
      {/* Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-crypto-dark-900 via-crypto-dark-800 to-crypto-dark-900" />

      {/* Animated Grid */}
      <motion.div
        className="fixed inset-0 opacity-5"
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

      {/* Header */}
      <div className="relative z-20">
        <Header />
      </div>

      <div className="relative z-10 pt-20">
        <motion.div
          className="container mx-auto px-4 lg:px-8 py-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Header */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <Link
              to="/"
              className="inline-flex items-center space-x-2 text-crypto-green-400 hover:text-crypto-green-300 transition-colors mb-8"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">Terms of Service</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Please read these terms carefully before using our AI-powered
              trading bot service.
            </p>
          </motion.div>

          {/* Content */}
          <motion.div
            className="max-w-4xl mx-auto space-y-12"
            variants={containerVariants}
          >
            {/* Acceptance of Terms */}
            <motion.section
              variants={itemVariants}
              className="bg-crypto-dark-800/30 backdrop-blur-sm border border-crypto-dark-600 rounded-2xl p-8"
            >
              <div className="flex items-center space-x-3 mb-6">
                <CheckCircle className="w-6 h-6 text-crypto-green-400" />
                <h2 className="text-2xl font-bold text-white">
                  Acceptance of Terms
                </h2>
              </div>

              <div className="space-y-4 text-gray-300">
                <p>
                  By accessing and using CryptoBot, you accept and agree to be
                  bound by the terms and provision of this agreement.
                </p>
                <p>
                  If you do not agree to abide by the above, please do not use
                  this service.
                </p>
              </div>
            </motion.section>

            {/* Service Description */}
            <motion.section
              variants={itemVariants}
              className="bg-crypto-dark-800/30 backdrop-blur-sm border border-crypto-dark-600 rounded-2xl p-8"
            >
              <div className="flex items-center space-x-3 mb-6">
                <FileText className="w-6 h-6 text-crypto-green-400" />
                <h2 className="text-2xl font-bold text-white">
                  Service Description
                </h2>
              </div>

              <div className="space-y-4 text-gray-300">
                <p>CryptoBot provides:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>AI-powered cryptocurrency trading automation</li>
                  <li>Market analysis and trading signals</li>
                  <li>Portfolio management tools</li>
                  <li>Real-time market data and insights</li>
                  <li>Risk management features</li>
                </ul>
              </div>
            </motion.section>

            {/* Risk Disclaimer */}
            <motion.section
              variants={itemVariants}
              className="bg-red-900/20 backdrop-blur-sm border border-red-500/30 rounded-2xl p-8"
            >
              <div className="flex items-center space-x-3 mb-6">
                <AlertTriangle className="w-6 h-6 text-red-400" />
                <h2 className="text-2xl font-bold text-white">
                  Important Risk Disclaimer
                </h2>
              </div>

              <div className="space-y-4 text-gray-300">
                <p className="text-red-300 font-semibold">
                  TRADING CRYPTOCURRENCIES INVOLVES SUBSTANTIAL RISK OF LOSS
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Past performance does not guarantee future results</li>
                  <li>You may lose all or part of your investment</li>
                  <li>
                    Our AI algorithms are not infallible and may make losing
                    trades
                  </li>
                  <li>
                    Market volatility can result in rapid and substantial losses
                  </li>
                  <li>You trade at your own risk and responsibility</li>
                </ul>
              </div>
            </motion.section>

            {/* User Responsibilities */}
            <motion.section
              variants={itemVariants}
              className="bg-crypto-dark-800/30 backdrop-blur-sm border border-crypto-dark-600 rounded-2xl p-8"
            >
              <div className="flex items-center space-x-3 mb-6">
                <Scale className="w-6 h-6 text-crypto-green-400" />
                <h2 className="text-2xl font-bold text-white">
                  User Responsibilities
                </h2>
              </div>

              <div className="space-y-4 text-gray-300">
                <p>As a user, you agree to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide accurate and complete information</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Not use the service for illegal activities</li>
                  <li>Not attempt to manipulate or hack the system</li>
                  <li>Monitor your trades and account activity regularly</li>
                </ul>
              </div>
            </motion.section>

            {/* Prohibited Uses */}
            <motion.section
              variants={itemVariants}
              className="bg-crypto-dark-800/30 backdrop-blur-sm border border-crypto-dark-600 rounded-2xl p-8"
            >
              <div className="flex items-center space-x-3 mb-6">
                <XCircle className="w-6 h-6 text-red-400" />
                <h2 className="text-2xl font-bold text-white">
                  Prohibited Uses
                </h2>
              </div>

              <div className="space-y-4 text-gray-300">
                <p>You may not use our service to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Engage in money laundering or terrorist financing</li>
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe upon intellectual property rights</li>
                  <li>Distribute malware or harmful code</li>
                  <li>Attempt unauthorized access to our systems</li>
                  <li>Manipulate markets or engage in fraudulent activity</li>
                </ul>
              </div>
            </motion.section>

            {/* Limitation of Liability */}
            <motion.section
              variants={itemVariants}
              className="bg-crypto-dark-800/30 backdrop-blur-sm border border-crypto-dark-600 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold text-white mb-6">
                Limitation of Liability
              </h2>

              <div className="space-y-4 text-gray-300">
                <p>CryptoBot and its operators shall not be liable for:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Trading losses or missed opportunities</li>
                  <li>Technical failures or system downtime</li>
                  <li>Third-party exchange issues</li>
                  <li>Market manipulation by external parties</li>
                  <li>Regulatory changes affecting trading</li>
                </ul>
                <p className="text-yellow-300 font-semibold mt-4">
                  Our maximum liability is limited to the fees paid for our
                  service.
                </p>
              </div>
            </motion.section>

            {/* Service Availability */}
            <motion.section
              variants={itemVariants}
              className="bg-crypto-dark-800/30 backdrop-blur-sm border border-crypto-dark-600 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold text-white mb-6">
                Service Availability
              </h2>

              <div className="space-y-4 text-gray-300">
                <p>
                  We strive to maintain high uptime but cannot guarantee
                  uninterrupted service due to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Scheduled maintenance and updates</li>
                  <li>Technical issues beyond our control</li>
                  <li>Third-party service dependencies</li>
                  <li>Network connectivity issues</li>
                </ul>
              </div>
            </motion.section>

            {/* Termination */}
            <motion.section
              variants={itemVariants}
              className="bg-crypto-dark-800/30 backdrop-blur-sm border border-crypto-dark-600 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold text-white mb-6">
                Termination
              </h2>

              <div className="space-y-4 text-gray-300">
                <p>
                  We reserve the right to terminate or suspend your account if
                  you:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Violate these terms of service</li>
                  <li>Engage in fraudulent or illegal activities</li>
                  <li>Attempt to harm our systems or other users</li>
                  <li>Provide false or misleading information</li>
                </ul>
              </div>
            </motion.section>

            {/* Contact Information */}
            <motion.section
              variants={itemVariants}
              className="bg-crypto-dark-800/30 backdrop-blur-sm border border-crypto-dark-600 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h2>

              <div className="space-y-4 text-gray-300">
                <p>For questions about these Terms of Service:</p>
                <div className="space-y-2">
                  <p>
                    <strong>Email:</strong> legal@cryptobot.com
                  </p>
                  <p>
                    <strong>Telegram:</strong> @cryptobot_support
                  </p>
                  <p>
                    <strong>Business Hours:</strong> 24/7 Support Available
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Last Updated */}
            <motion.div
              variants={itemVariants}
              className="text-center text-gray-400 text-sm pb-16"
            >
              <p>Last updated: January 2025</p>
              <p>
                These terms may be updated periodically. Continued use
                constitutes acceptance of changes.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;
