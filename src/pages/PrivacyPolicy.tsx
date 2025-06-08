import React from "react";
import { motion } from "framer-motion";
import {
  Shield,
  ArrowLeft,
  Eye,
  Lock,
  Database,
  UserCheck,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import Header from "@/components/Header";

const PrivacyPolicy: React.FC = () => {
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
              <span className="gradient-text">Your Privacy Matters</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We are committed to protecting your personal information and
              ensuring transparency in how we collect, use, and safeguard your
              data.
            </p>
          </motion.div>

          {/* Content */}
          <motion.div
            className="max-w-4xl mx-auto space-y-12"
            variants={containerVariants}
          >
            {/* Information We Collect */}
            <motion.section
              variants={itemVariants}
              className="bg-crypto-dark-800/30 backdrop-blur-sm border border-crypto-dark-600 rounded-2xl p-8"
            >
              <div className="flex items-center space-x-3 mb-6">
                <Database className="w-6 h-6 text-crypto-green-400" />
                <h2 className="text-2xl font-bold text-white">
                  Information We Collect
                </h2>
              </div>

              <div className="space-y-4 text-gray-300">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Personal Information
                  </h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Telegram username and user ID</li>
                    <li>Email address (if provided)</li>
                    <li>Trading preferences and settings</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    Usage Data
                  </h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Bot interaction history</li>
                    <li>Trading performance metrics</li>
                    <li>System usage analytics</li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* How We Use Your Information */}
            <motion.section
              variants={itemVariants}
              className="bg-crypto-dark-800/30 backdrop-blur-sm border border-crypto-dark-600 rounded-2xl p-8"
            >
              <div className="flex items-center space-x-3 mb-6">
                <Eye className="w-6 h-6 text-crypto-green-400" />
                <h2 className="text-2xl font-bold text-white">
                  How We Use Your Information
                </h2>
              </div>

              <div className="space-y-4 text-gray-300">
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide and improve our trading bot services</li>
                  <li>Personalize your trading experience</li>
                  <li>Send important service updates and notifications</li>
                  <li>
                    Analyze usage patterns to enhance platform performance
                  </li>
                  <li>Comply with legal obligations and prevent fraud</li>
                </ul>
              </div>
            </motion.section>

            {/* Data Protection */}
            <motion.section
              variants={itemVariants}
              className="bg-crypto-dark-800/30 backdrop-blur-sm border border-crypto-dark-600 rounded-2xl p-8"
            >
              <div className="flex items-center space-x-3 mb-6">
                <Lock className="w-6 h-6 text-crypto-green-400" />
                <h2 className="text-2xl font-bold text-white">
                  Data Protection & Security
                </h2>
              </div>

              <div className="space-y-4 text-gray-300">
                <p>
                  We implement industry-standard security measures to protect
                  your data:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>End-to-end encryption for all communications</li>
                  <li>Secure API connections with major exchanges</li>
                  <li>Regular security audits and vulnerability assessments</li>
                  <li>Limited access controls and data minimization</li>
                  <li>Secure cloud infrastructure with backup systems</li>
                </ul>
              </div>
            </motion.section>

            {/* Your Rights */}
            <motion.section
              variants={itemVariants}
              className="bg-crypto-dark-800/30 backdrop-blur-sm border border-crypto-dark-600 rounded-2xl p-8"
            >
              <div className="flex items-center space-x-3 mb-6">
                <UserCheck className="w-6 h-6 text-crypto-green-400" />
                <h2 className="text-2xl font-bold text-white">Your Rights</h2>
              </div>

              <div className="space-y-4 text-gray-300">
                <p>
                  You have the following rights regarding your personal data:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    <strong>Access:</strong> Request access to your personal
                    data
                  </li>
                  <li>
                    <strong>Correction:</strong> Update or correct your
                    information
                  </li>
                  <li>
                    <strong>Deletion:</strong> Request deletion of your data
                  </li>
                  <li>
                    <strong>Portability:</strong> Export your data in a readable
                    format
                  </li>
                  <li>
                    <strong>Opt-out:</strong> Unsubscribe from communications
                  </li>
                </ul>
              </div>
            </motion.section>

            {/* Contact Information */}
            <motion.section
              variants={itemVariants}
              className="bg-crypto-dark-800/30 backdrop-blur-sm border border-crypto-dark-600 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Contact Us</h2>

              <div className="space-y-4 text-gray-300">
                <p>
                  If you have any questions about this Privacy Policy or wish to
                  exercise your rights, please contact us:
                </p>
                <div className="space-y-2">
                  <p>
                    <strong>Email:</strong> privacy@cryptobot.com
                  </p>
                  <p>
                    <strong>Telegram:</strong> @cryptobot_support
                  </p>
                  <p>
                    <strong>Response Time:</strong> Within 30 days
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
                This policy may be updated periodically. We will notify users of
                significant changes.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
