import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Brain,
  Cpu,
  Activity,
  Target,
  Layers,
  Zap,
  TrendingUp,
  Shield,
  Settings,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useLanguage } from "@/contexts/LanguageContext";

const TradingBots: React.FC = () => {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

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
      icon: Brain,
      title: "Deep Learning Engine",
      tooltip: t("development.tooltip1"),
      position: { top: "20%", left: "15%" },
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Cpu,
      title: "Neural Networks",
      tooltip: t("development.tooltip2"),
      position: { top: "40%", right: "20%" },
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Target,
      title: "Risk Management",
      tooltip: t("development.tooltip3"),
      position: { bottom: "30%", left: "25%" },
      color: "from-red-500 to-orange-500",
    },
  ];

  return (
    <section
      id="features"
      className="py-20 lg:py-32 relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-crypto-dark-800 via-crypto-dark-900 to-crypto-dark-800" />

        {/* Moving Grid */}
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(30, 184, 92, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(30, 184, 92, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
          animate={{
            backgroundPosition: ["0px 0px", "50px 50px"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Floating Data Streams */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 bg-gradient-to-b from-transparent via-crypto-green-500 to-transparent opacity-30"
            style={{
              height: "200px",
              left: `${10 + i * 12}%`,
              top: "-200px",
            }}
            animate={{
              y: ["0px", "calc(100vh + 200px)"],
            }}
            transition={{
              duration: 5 + i * 0.5,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.8,
            }}
          />
        ))}
      </div>

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
              <Activity className="w-5 h-5 text-crypto-green-400 animate-pulse" />
              <span className="text-crypto-green-400 font-mono text-sm uppercase tracking-wider">
                In Development
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">{t("development.title")}</span>
            </h2>

            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t("development.description")}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Interactive Illustration */}
            <motion.div
              className="relative h-96 lg:h-[500px]"
              variants={itemVariants}
            >
              {/* Central Bot Brain */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <motion.div
                  className="w-24 h-24 bg-gradient-to-br from-crypto-green-500 to-crypto-green-300 rounded-full flex items-center justify-center shadow-2xl"
                  animate={{
                    scale: [1, 1.1, 1],
                    boxShadow: [
                      "0 0 20px rgba(30, 184, 92, 0.5)",
                      "0 0 40px rgba(30, 184, 92, 0.8)",
                      "0 0 20px rgba(30, 184, 92, 0.5)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                >
                  <Brain className="w-12 h-12 text-black" />
                </motion.div>

                {/* Neural Network Connections */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  viewBox="0 0 200 200"
                >
                  {features.map((feature, index) => (
                    <motion.line
                      key={index}
                      x1="100"
                      y1="100"
                      x2={feature.position.left ? "50" : "150"}
                      y2={feature.position.top ? "50" : "150"}
                      stroke="rgba(30, 184, 92, 0.6)"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                      initial={{ pathLength: 0 }}
                      animate={isInView ? { pathLength: 1 } : {}}
                      transition={{ duration: 2, delay: index * 0.5 }}
                    />
                  ))}
                </svg>
              </div>

              {/* Feature Nodes */}
              <TooltipProvider>
                {features.map((feature, index) => (
                  <Tooltip key={index}>
                    <TooltipTrigger asChild>
                      <motion.div
                        className="absolute cursor-pointer"
                        style={feature.position}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={isInView ? { scale: 1, opacity: 1 } : {}}
                        transition={{ delay: 1 + index * 0.3, duration: 0.5 }}
                        whileHover={{ scale: 1.2 }}
                        onHoverStart={() => setHoveredFeature(index)}
                        onHoverEnd={() => setHoveredFeature(null)}
                      >
                        <div
                          className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-shadow duration-300`}
                        >
                          <feature.icon className="w-8 h-8 text-white" />
                        </div>

                        {/* Pulsing Ring */}
                        <motion.div
                          className="absolute inset-0 rounded-full border-2 border-crypto-green-500"
                          animate={{
                            scale: hoveredFeature === index ? [1, 1.5, 1] : 1,
                            opacity: hoveredFeature === index ? [1, 0, 1] : 0,
                          }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        />
                      </motion.div>
                    </TooltipTrigger>
                    <TooltipContent
                      side="top"
                      className="bg-crypto-dark-800 border-crypto-dark-600 text-white max-w-xs"
                    >
                      <p className="font-semibold mb-1">{feature.title}</p>
                      <p className="text-sm text-gray-300">{feature.tooltip}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </TooltipProvider>

              {/* Data Particles */}
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-crypto-green-400 rounded-full"
                  style={{
                    top: "50%",
                    left: "50%",
                  }}
                  animate={{
                    x: [0, Math.cos((i * 30 * Math.PI) / 180) * 150],
                    y: [0, Math.sin((i * 30 * Math.PI) / 180) * 150],
                    opacity: [1, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeOut",
                  }}
                />
              ))}
            </motion.div>

            {/* Development Progress */}
            <motion.div className="space-y-8" variants={containerVariants}>
              {/* Progress Indicators */}
              {[
                { name: t("development.algorithm"), progress: 75, icon: Brain },
                {
                  name: t("development.neural_training"),
                  progress: 60,
                  icon: Layers,
                },
                {
                  name: t("development.risk_management"),
                  progress: 85,
                  icon: Shield,
                },
                { name: t("development.performance"), progress: 45, icon: Zap },
                {
                  name: t("development.backtesting"),
                  progress: 90,
                  icon: TrendingUp,
                },
              ].map((item, index) => (
                <motion.div
                  key={item.name}
                  className="space-y-3"
                  variants={itemVariants}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-crypto-dark-700 rounded-lg flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-crypto-green-400" />
                      </div>
                      <span className="text-white font-medium">
                        {item.name}
                      </span>
                    </div>
                    <span className="text-crypto-green-400 font-mono text-sm">
                      {item.progress}%
                    </span>
                  </div>

                  <div className="w-full bg-crypto-dark-700 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-crypto-green-500 to-crypto-green-300 rounded-full"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${item.progress}%` } : {}}
                      transition={{ duration: 1.5, delay: index * 0.2 }}
                    />
                  </div>
                </motion.div>
              ))}

              {/* Status Update */}
              <motion.div
                className="bg-crypto-dark-800/50 border border-crypto-green-500/30 rounded-lg p-6 mt-8"
                variants={itemVariants}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-3 h-3 bg-crypto-green-500 rounded-full animate-pulse" />
                  <span className="text-crypto-green-400 font-mono text-sm uppercase">
                    Latest Update
                  </span>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed">
                  Successfully implemented advanced neural network architecture
                  with multi-layer LSTM models. Currently optimizing for
                  real-time market analysis and risk assessment algorithms.
                </p>

                <div className="flex items-center space-x-4 mt-4 text-xs text-gray-400">
                  <span>🔄 Last sync: 2 hours ago</span>
                  <span>📊 Performance: +15.7%</span>
                  <span>⚡ Speed: 0.3ms</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TradingBots;
