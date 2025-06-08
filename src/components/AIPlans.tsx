import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import {
  Brain,
  BarChart3,
  Target,
  Zap,
  TrendingUp,
  Eye,
  Settings,
  Code,
  Terminal,
  Activity,
  DollarSign,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const AIPlans: React.FC = () => {
  const { t } = useLanguage();
  const sectionRef = useRef(null);
  const codeRef = useRef(null);
  const codeContainerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const isCodeInView = useInView(codeRef, { once: true, amount: 0.5 });

  const [currentLine, setCurrentLine] = useState(0);
  const [displayedCode, setDisplayedCode] = useState<string[]>([
    "# AI Model Training Setup",
    "import tensorflow as tf",
    "import numpy as np",
    "from datetime import datetime",
    "from sklearn.preprocessing import MinMaxScaler",
    "from sklearn.model_selection import train_test_split",
    "",
    "# Initialize environment",
    'print("Setting up training environment...")',
    'print(f"TensorFlow version: {tf.__version__}")',
    'print("Environment ready ✅")',
    "",
    "# Ready for training...",
  ]);
  const [isTraining, setIsTraining] = useState(false);
  const [hasInitialCode, setHasInitialCode] = useState(true);
  const [trainingProgress, setTrainingProgress] = useState(0);
  const [currentPrice, setCurrentPrice] = useState(0);
  const [priceChange, setPriceChange] = useState(0);
  const [graphData, setGraphData] = useState<number[]>([]);
  const [initialPrice, setInitialPrice] = useState(0);
  const [displayPrice, setDisplayPrice] = useState(0);
  const [displayChange, setDisplayChange] = useState(0);

  const additionalCodeLines = [
    "",
    "# Loading market data...",
    'print("📈 Connecting to exchange APIs...")',
    'data = load_crypto_data("BTC", "1h", days=365)',
    'print(f"✅ Loaded {len(data)} data points")',
    'print(f"Date range: {data.index[0]} to {data.index[-1]}")',
    "",
    "# Data preprocessing",
    'print("🔄 Preprocessing data...")',
    "scaler = MinMaxScaler()",
    "scaled_data = scaler.fit_transform(data)",
    'print("✅ Data normalized")',
    "",
    "# Feature engineering",
    'print("⚙️ Creating features...")',
    "X, y = create_sequences(scaled_data, lookback=60)",
    "X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)",
    'print(f"Training shape: {X_train.shape}")',
    'print(f"Testing shape: {X_test.shape}")',
    "",
    "# Building advanced LSTM model",
    'print("🧠 Building neural network...")',
    "model = tf.keras.Sequential([",
    "    tf.keras.layers.LSTM(128, return_sequences=True, input_shape=(60, 1)),",
    "    tf.keras.layers.Dropout(0.2),",
    "    tf.keras.layers.LSTM(64, return_sequences=True),",
    "    tf.keras.layers.Dropout(0.2),",
    "    tf.keras.layers.LSTM(32, return_sequences=False),",
    "    tf.keras.layers.Dense(25),",
    "    tf.keras.layers.Dense(1)",
    "])",
    "",
    "# Model compilation",
    'print("⚡ Compiling model...")',
    "model.compile(",
    "    optimizer=tf.keras.optimizers.Adam(learning_rate=0.001),",
    '    loss="mean_squared_error",',
    '    metrics=["mae"]',
    ")",
    'print("✅ Model compiled successfully")',
    'print(f"Total parameters: {model.count_params():,}")',
    "",
    "# Setting up callbacks",
    "early_stopping = tf.keras.callbacks.EarlyStopping(",
    '    monitor="val_loss", patience=10, restore_best_weights=True',
    ")",
    "reduce_lr = tf.keras.callbacks.ReduceLROnPlateau(",
    '    monitor="val_loss", factor=0.5, patience=5, min_lr=0.0001',
    ")",
    "",
    "# Starting training process...",
    'print("🚀 Starting training process...")',
    'print("Epoch 1/100 - loss: 0.0245 - val_loss: 0.0198")',
    'print("Epoch 5/100 - loss: 0.0156 - val_loss: 0.0143")',
    'print("Epoch 10/100 - loss: 0.0098 - val_loss: 0.0087")',
    'print("Epoch 15/100 - loss: 0.0076 - val_loss: 0.0069")',
    'print("Epoch 25/100 - loss: 0.0054 - val_loss: 0.0051")',
    'print("Epoch 35/100 - loss: 0.0043 - val_loss: 0.0041")',
    'print("Epoch 42/100 - loss: 0.0039 - val_loss: 0.0038")',
    'print("Early stopping triggered at epoch 42")',
    "",
    "# Model evaluation",
    'print("📊 Evaluating model performance...")',
    "train_loss = model.evaluate(X_train, y_train, verbose=0)",
    "test_loss = model.evaluate(X_test, y_test, verbose=0)",
    'print(f"Training loss: {train_loss:.6f}")',
    'print(f"Testing loss: {test_loss:.6f}")',
    "",
    "# Making predictions",
    'print("🔮 Generating predictions...")',
    "predictions = model.predict(X_test)",
    "predictions = scaler.inverse_transform(predictions)",
    "accuracy = calculate_accuracy(y_test, predictions)",
    'print(f"Prediction accuracy: {accuracy:.2f}%")',
    "",
    "# Saving model",
    'print("💾 Saving trained model...")',
    'model.save("crypto_lstm_model.h5")',
    'print("✅ Model saved successfully")',
    "",
    "# Results summary",
    'print("=" * 50)',
    'print("🎉 TRAINING COMPLETED SUCCESSFULLY!")',
    'print(f"📈 Final accuracy: {accuracy:.2f}%")',
    'print(f"⏱️ Training time: 3.7 minutes")',
    'print(f"🎯 Ready for live trading!")',
    'print("=" * 50)',
  ];

  // Fetch real BTC price
  useEffect(() => {
    const fetchBTCPrice = async () => {
      try {
        const response = await fetch(
          "https://api.binance.com/api/v3/ticker/24hr?symbol=BTCUSDT",
        );
        const data = await response.json();
        const price = parseFloat(data.lastPrice);
        const change = parseFloat(data.priceChangePercent);

        setCurrentPrice(price);
        setPriceChange(change);
        setInitialPrice(price);
        setDisplayPrice(price);
        setDisplayChange(change);

        // Start with empty graph
        setGraphData([]);
      } catch (error) {
        console.error("Failed to fetch BTC price:", error);
        // Fallback to static price if API fails
        setCurrentPrice(43250);
        setPriceChange(2.1);
        setInitialPrice(43250);
        setDisplayPrice(43250);
        setDisplayChange(2.1);

        // Start with empty graph
        setGraphData([]);
      }
    };

    fetchBTCPrice();

    // Update price every 30 seconds
    const priceInterval = setInterval(fetchBTCPrice, 30000);
    return () => clearInterval(priceInterval);
  }, []);

  // Auto scroll to bottom of code with improved behavior
  useEffect(() => {
    if (codeContainerRef.current) {
      const container = codeContainerRef.current;
      // Small delay to ensure DOM is updated
      setTimeout(() => {
        container.scrollTo({
          top: container.scrollHeight,
          behavior: "smooth",
        });
      }, 50);
    }
  }, [displayedCode]);

  // Additional scroll when training completes to show results
  useEffect(() => {
    if (
      !isTraining &&
      !hasInitialCode &&
      currentLine >= additionalCodeLines.length
    ) {
      if (codeContainerRef.current) {
        const container = codeContainerRef.current;
        setTimeout(() => {
          container.scrollTo({
            top: container.scrollHeight,
            behavior: "smooth",
          });
        }, 500);
      }
    }
  }, [isTraining, hasInitialCode, currentLine]);

  // Simulate new price data during training (only add new bars)
  useEffect(() => {
    if (isTraining && initialPrice > 0) {
      const interval = setInterval(() => {
        setGraphData((prev) => {
          // Only add new bars, don't modify existing ones
          const lastPrice = prev[prev.length - 1] || initialPrice;
          const volatility = 0.002; // 0.2% volatility
          const change = (Math.random() - 0.5) * volatility * lastPrice;
          const newPrice = lastPrice + change;

          // Keep last 20 bars for better visualization
          const newData = [...prev, newPrice].slice(-20);

          // Update display price to reflect current simulation
          setDisplayPrice(newPrice);

          // Calculate session change from the first bar in current data
          if (newData.length > 1) {
            const firstPrice = newData[0];
            const priceChangePercent =
              ((newPrice - firstPrice) / firstPrice) * 100;
            setDisplayChange(priceChangePercent);
          }

          return newData;
        });

        setTrainingProgress((prev) => Math.min(prev + 1.5, 100));
      }, 800);

      return () => clearInterval(interval);
    }
  }, [isTraining, initialPrice]);

  useEffect(() => {
    if (!isTraining) return;

    const interval = setInterval(() => {
      if (currentLine < additionalCodeLines.length) {
        setDisplayedCode((prev) => [...prev, additionalCodeLines[currentLine]]);
        setCurrentLine((prev) => prev + 1);
      } else {
        setIsTraining(false);
        setTrainingProgress(100);
      }
    }, 150);

    return () => clearInterval(interval);
  }, [isTraining, currentLine]);

  const startTraining = () => {
    if (hasInitialCode && currentPrice > 0) {
      setIsTraining(true);
      setCurrentLine(0);
      setHasInitialCode(false);
      setTrainingProgress(0);
      // Start simulation from current real price
      setGraphData([currentPrice]);
      setDisplayPrice(currentPrice);
      setDisplayChange(0); // Reset change for new training session
    }
  };

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

  const bounceVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        type: "spring",
        bounce: 0.5,
      },
    },
  };

  const aiCards = [
    {
      icon: Brain,
      title: t("ai.card1.title"),
      description: t("ai.card1.desc"),
      color: "from-purple-500 to-pink-500",
      features: [
        "LSTM Networks",
        "Time Series Analysis",
        "Pattern Recognition",
      ],
      progress: 40,
    },
    {
      icon: Eye,
      title: t("ai.card2.title"),
      description: t("ai.card2.desc"),
      color: "from-blue-500 to-cyan-500",
      features: ["NLP Processing", "Social Media Analysis", "News Sentiment"],
      progress: 25,
    },
    {
      icon: Target,
      title: t("ai.card3.title"),
      description: t("ai.card3.desc"),
      color: "from-green-500 to-emerald-500",
      features: [
        "Risk Assessment",
        "Portfolio Balancing",
        "Dynamic Allocation",
      ],
      progress: 15,
    },
  ];

  return (
    <section
      id="technologies"
      className="py-20 lg:py-32 relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-crypto-dark-900 via-crypto-dark-800 to-crypto-dark-900" />

      {/* Animated Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border border-crypto-green-500/20"
            style={{
              width: `${100 + i * 50}px`,
              height: `${100 + i * 50}px`,
              top: `${10 + i * 15}%`,
              left: `${5 + i * 10}%`,
            }}
            animate={{
              rotate: [0, 360],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "linear",
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
              <Zap className="w-5 h-5 text-crypto-green-400" />
              <span className="text-crypto-green-400 font-mono text-sm uppercase tracking-wider">
                Future Plans
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">{t("ai.title")}</span>
            </h2>

            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t("ai.subtitle")}
            </p>
          </motion.div>

          {/* AI Cards Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 items-stretch"
            variants={containerVariants}
          >
            {aiCards.map((card, index) => (
              <motion.div
                key={index}
                variants={bounceVariants}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 },
                }}
                className="group h-full"
              >
                <div className="relative bg-crypto-dark-800/50 backdrop-blur-sm border border-crypto-dark-600 rounded-2xl p-6 hover:border-crypto-green-500/50 transition-all duration-300 overflow-hidden h-full flex flex-col">
                  {/* Card Background Gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
                  />

                  {/* Icon */}
                  <div
                    className={`relative w-16 h-16 bg-gradient-to-br ${card.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <card.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="relative flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-crypto-green-400 transition-colors">
                      {card.title}
                    </h3>

                    <p className="text-gray-300 text-sm mb-4 leading-relaxed flex-1">
                      {card.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 mb-4">
                      {card.features.map((feature, i) => (
                        <motion.div
                          key={i}
                          className="flex items-center space-x-2 text-xs text-gray-400"
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.5 + index * 0.2 + i * 0.1 }}
                        >
                          <div className="w-1.5 h-1.5 bg-crypto-green-500 rounded-full" />
                          <span>{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Progress */}
                    <div className="space-y-2 mt-auto">
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-400">
                          {t("development.progress")}
                        </span>
                        <span className="text-xs text-crypto-green-400 font-mono">
                          {card.progress}%
                        </span>
                      </div>

                      <div className="w-full bg-crypto-dark-700 rounded-full h-1.5 overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${card.color} rounded-full`}
                          initial={{ width: 0 }}
                          animate={
                            isInView ? { width: `${card.progress}%` } : {}
                          }
                          transition={{ duration: 1.5, delay: 1 + index * 0.2 }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-20 blur-xl`}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Code and Graph Section */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Animated Code Section */}
            <motion.div
              className="bg-crypto-dark-800/30 backdrop-blur-sm border border-crypto-dark-600 rounded-2xl overflow-hidden"
              variants={itemVariants}
              ref={codeRef}
            >
              {/* Terminal Header */}
              <div className="bg-crypto-dark-800 px-6 py-4 border-b border-crypto-dark-600">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full" />
                      <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                      <div className="w-3 h-3 bg-green-500 rounded-full" />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Terminal className="w-4 h-4 text-crypto-green-400" />
                      <span className="text-xs font-mono text-gray-300">
                        {t("ai.code.title")}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-2">
                      <Code className="w-4 h-4 text-crypto-green-400" />
                      <span className="text-xs text-gray-400 font-mono">
                        Python 3.13
                      </span>
                    </div>

                    {hasInitialCode && (
                      <motion.button
                        onClick={startTraining}
                        disabled={isTraining || currentPrice === 0}
                        className="bg-crypto-green-500 hover:bg-crypto-green-600 disabled:bg-crypto-dark-600 disabled:cursor-not-allowed text-black disabled:text-gray-400 px-3 py-1 rounded text-xs font-medium transition-all duration-300"
                        whileHover={{
                          scale: isTraining || currentPrice === 0 ? 1 : 1.05,
                        }}
                        whileTap={{
                          scale: isTraining || currentPrice === 0 ? 1 : 0.95,
                        }}
                      >
                        {isTraining
                          ? "Training..."
                          : currentPrice === 0
                            ? "Loading..."
                            : t("ai.start_training")}
                      </motion.button>
                    )}
                  </div>
                </div>
              </div>

              {/* Code Content */}
              <div
                ref={codeContainerRef}
                className="p-4 font-mono text-sm h-80 overflow-y-auto scrollbar-thin scrollbar-track-crypto-dark-700 scrollbar-thumb-crypto-green-500"
              >
                <div className="space-y-1">
                  {displayedCode.map((line, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.1 }}
                    >
                      <span className="text-gray-500 text-xs w-8 text-right select-none">
                        {line ? index + 1 : ""}
                      </span>

                      <span
                        className={`
                        ${line.startsWith("#") ? "text-gray-400" : ""}
                        ${line.startsWith("import") || line.startsWith("from") ? "text-purple-400" : ""}
                        ${line.includes("def ") || line.includes("class ") ? "text-blue-400" : ""}
                        ${line.includes("=") && !line.startsWith("#") ? "text-white" : ""}
                        ${line.includes('"') || line.includes("'") ? "text-green-400" : ""}
                        ${line.includes("print") ? "text-yellow-400" : ""}
                        ${!line ? "text-gray-600" : ""}
                        ${!line.startsWith("#") && !line.startsWith("import") && !line.startsWith("from") && !line.includes("def ") && !line.includes("class ") && !line.includes("=") && !line.includes('"') && !line.includes("'") && !line.includes("print") && line ? "text-gray-300" : ""}
                      `}
                      >
                        {line}
                        {index === displayedCode.length - 1 && isTraining && (
                          <motion.span
                            className="inline-block w-2 h-4 bg-crypto-green-500 ml-1"
                            animate={{ opacity: [1, 0, 1] }}
                            transition={{ duration: 1, repeat: Infinity }}
                          />
                        )}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Output Section */}
                {currentLine >= additionalCodeLines.length &&
                  !isTraining &&
                  !hasInitialCode && (
                    <motion.div
                      className="mt-4 pt-3 border-t border-crypto-dark-600"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      onAnimationComplete={() => {
                        // Ensure scroll to bottom when output appears
                        if (codeContainerRef.current) {
                          setTimeout(() => {
                            codeContainerRef.current?.scrollTo({
                              top: codeContainerRef.current.scrollHeight,
                              behavior: "smooth",
                            });
                          }, 200);
                        }
                      }}
                    >
                      <div className="text-crypto-green-400 text-xs mb-1">
                        OUTPUT:
                      </div>
                      <motion.div
                        className="text-green-400 text-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        Accuracy: 0.925
                      </motion.div>
                      <motion.div
                        className="text-green-400 text-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                      >
                        Training complete! 🚀
                      </motion.div>
                    </motion.div>
                  )}
              </div>
            </motion.div>

            {/* Graph Simulation Panel */}
            <motion.div
              className="bg-crypto-dark-800/30 backdrop-blur-sm border border-crypto-dark-600 rounded-2xl overflow-hidden"
              variants={itemVariants}
            >
              {/* Graph Header */}
              <div className="bg-crypto-dark-800 px-6 py-4 border-b border-crypto-dark-600">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Activity className="w-4 h-4 text-crypto-green-400" />
                    <span className="text-sm font-mono text-gray-300">
                      Live Market Simulation
                    </span>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="text-xs text-gray-400">BTC/USDT</div>
                    <div
                      className={`text-sm font-mono ${priceChange >= 0 ? "text-green-400" : "text-red-400"}`}
                    >
                      {currentPrice > 0
                        ? `$${currentPrice.toFixed(2)}`
                        : "Loading..."}
                    </div>
                  </div>
                </div>
              </div>

              {/* Graph Content */}
              <div className="p-4 h-80">
                {/* Price Display */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-crypto-dark-700/50 rounded-lg p-3">
                    <div className="flex items-center space-x-2 mb-1">
                      <DollarSign className="w-3 h-3 text-crypto-green-400" />
                      <span className="text-xs text-gray-400">
                        {t("trading.current_price")}
                      </span>
                    </div>
                    <div className="text-lg font-mono text-white">
                      {displayPrice > 0
                        ? `$${displayPrice.toFixed(2)}`
                        : "Loading..."}
                    </div>
                  </div>

                  <div className="bg-crypto-dark-700/50 rounded-lg p-3">
                    <div className="flex items-center space-x-2 mb-1">
                      <TrendingUp className="w-3 h-3 text-crypto-green-400" />
                      <span className="text-xs text-gray-400">
                        {isTraining
                          ? t("trading.session_change")
                          : t("trading.24h_change")}
                      </span>
                    </div>
                    <div
                      className={`text-lg font-mono ${displayChange >= 0 ? "text-green-400" : "text-red-400"}`}
                    >
                      {displayPrice > 0
                        ? `${displayChange >= 0 ? "+" : ""}${displayChange.toFixed(2)}%`
                        : "Loading..."}
                    </div>
                  </div>
                </div>

                {/* Improved Chart Visualization */}
                <div className="bg-crypto-dark-700/30 rounded-lg p-4 h-48">
                  <div className="text-xs text-gray-400 mb-3">
                    {t("trading.price_movement")}{" "}
                    {isTraining && (
                      <span className="text-crypto-green-400">(Live)</span>
                    )}
                  </div>
                  <div className="relative h-32 w-full overflow-hidden">
                    {graphData.length > 0 ? (
                      <div className="flex items-end justify-start h-full w-full gap-0.5">
                        {graphData.map((price, index) => {
                          const minPrice = Math.min(...graphData);
                          const maxPrice = Math.max(...graphData);
                          const range = maxPrice - minPrice;
                          const height =
                            range > 0 ? ((price - minPrice) / range) * 100 : 50;
                          const isNew =
                            index === graphData.length - 1 && isTraining;
                          // Calculate width to fill entire space with minimal gaps
                          const barWidth = Math.max(95 / graphData.length, 2);

                          return (
                            <motion.div
                              key={`bar-${index}-${price.toFixed(2)}`}
                              className={`rounded-t-sm ${isNew ? "bg-crypto-green-400 shadow-lg" : "bg-crypto-green-500"}`}
                              style={{
                                width: `${barWidth}%`,
                                minWidth: "2px",
                                minHeight: "3px",
                                flex: 1,
                                opacity: 0.7 + (index / graphData.length) * 0.3,
                              }}
                              initial={{
                                height: isNew
                                  ? "3px"
                                  : `${Math.max(height, 8)}%`,
                                scale: isNew ? 0.8 : 1,
                              }}
                              animate={{
                                height: `${Math.max(height, 8)}%`,
                                scale: 1,
                              }}
                              transition={{
                                duration: isNew ? 0.6 : 0,
                                ease: "easeOut",
                                type: isNew ? "spring" : "tween",
                                bounce: isNew ? 0.3 : 0,
                              }}
                            />
                          );
                        })}
                      </div>
                    ) : (
                      <div className="text-xs text-gray-500 flex items-center justify-center w-full h-full">
                        {currentPrice > 0
                          ? "Start training to see price simulation"
                          : "Loading BTC price..."}
                      </div>
                    )}
                  </div>

                  {/* Price range indicator */}
                  {graphData.length > 1 && (
                    <div className="flex justify-between text-xs text-gray-500 mt-2">
                      <span>${Math.min(...graphData).toFixed(0)}</span>
                      <span className="text-center">
                        {graphData.length} bars
                      </span>
                      <span>${Math.max(...graphData).toFixed(0)}</span>
                    </div>
                  )}
                </div>

                {/* Training Progress */}
                {isTraining && (
                  <motion.div
                    className="mt-4 bg-crypto-dark-700/50 rounded-lg p-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs text-gray-400">
                        Training Progress
                      </span>
                      <span className="text-xs text-crypto-green-400">
                        {trainingProgress.toFixed(0)}%
                      </span>
                    </div>
                    <div className="w-full bg-crypto-dark-600 rounded-full h-2">
                      <motion.div
                        className="bg-crypto-green-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${trainingProgress}%` }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AIPlans;
