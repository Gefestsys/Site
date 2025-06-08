import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "ru" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

const translations = {
  ru: {
    // Header
    "nav.product": "Продукт",
    "nav.features": "Возможности",
    "nav.technologies": "Технологии",
    "nav.about": "О нас",
    "nav.contacts": "Контакты",
    "nav.launch_bot": "Запустить бота",

    // Hero
    "hero.title": "ИИ-бот для трейдинга",
    "hero.subtitle":
      "Автоматизируйте торговлю с помощью передовых алгоритмов машинного обучения прямо в Telegram",
    "hero.launch_bot": "Запустить бота",
    "hero.learn_more": "Узнать больше",
    "hero.uptime": "Время работы",
    "hero.active_trading": "Активная торговля",
    "hero.active_users": "Активные пользователи",

    // Product
    "product.title": "Наш продукт",
    "product.description":
      "Наш Telegram-бот использует передовые алгоритмы машинного обучения для анализа криптовалютного рынка и автоматического выполнения торговых операций.",
    "product.feature1": "Автоматический анализ рынка 24/7",
    "product.feature2": "Интеллектуальные торговые сигналы",
    "product.feature3": "Управление рисками с ИИ",
    "product.feature4": "Простой интерфейс в Telegram",
    "product.feature5": "Поддержка множества бирж",
    "product.feature6": "Реальная торговая статистика",

    // Development
    "development.title": "В разработке",
    "development.description":
      "Мы работаем над созданием более продвинутых торговых алгоритмов с использованием глубокого обучения и нейронных сетей.",
    "development.tooltip1": "Глубокое обучение для анализа рыночных пат��ернов",
    "development.tooltip2": "Адаптивные алгоритмы торговли с самообучением",
    "development.tooltip3": "Многоуровневая система управления рисками",
    "development.algorithm": "Разработка алгоритмов",
    "development.neural_training": "Обучение нейронных сетей",
    "development.risk_management": "Системы управления рисками",
    "development.performance": "Оптимизация производительности",
    "development.backtesting": "Бэктестинг и валидация",
    "development.progress": "Прогресс разработки",

    // AI Plans
    "ai.title": "Будущие планы",
    "ai.subtitle":
      "Будущее автоматической торговли с искусственным интеллектом",
    "ai.card1.title": "Предиктивная аналитика",
    "ai.card1.desc": "ИИ-модели для точного прогнозирования движения цен",
    "ai.card2.title": "Анализ настроений",
    "ai.card2.desc": "Анализ настроений рынка и новостей в реальном времени",
    "ai.card3.title": "Оптимизация портфеля",
    "ai.card3.desc": "Автоматическая оптимизация и ребалансировка портфеля",
    "ai.code.title": "Симуляция обучения модели",
    "ai.start_training": "Начать обучение",

    // Trading Interface
    "trading.current_price": "Текущая цена",
    "trading.24h_change": "Изменение за 24ч",
    "trading.session_change": "Изменение сессии",
    "trading.price_movement": "Движение цены",

    // Footer
    "footer.privacy": "Политика конфиденциальности",
    "footer.terms": "Условия использования",
    "footer.contacts": "Контакты",
    "footer.support": "Поддержка",
    "footer.copyright": "© 2025 CryptoBot. Все права защищены.",
    "footer.newsletter.title": "Будьте в курсе",
    "footer.newsletter.desc":
      "Получайте последние обновления о новых функциях и рыночной аналитике.",
    "footer.newsletter.placeholder": "Введите ваш email",
    "footer.newsletter.button": "Подписаться",
    "footer.newsletter.privacy":
      "Мы уважаем вашу конфиденциальность. Отписаться можно в любое время.",
    "footer.built_with_love": "Создано с ❤️ для крипто-сообщества",
    "footer.follow_us": "Следите за нами",
    "footer.systems_operational": "Все системы работают",
    "footer.legal": "Правовая информация",
    "footer.support_section": "Поддержка",
    "footer.description_text":
      "Революцион��зируем криптотрейдинг с помощью ИИ-автоматизации. Присоединяйтесь к тысячам трейдеров, которые доверяют нашим передовым алгоритмам.",
  },
  en: {
    // Header
    "nav.product": "Product",
    "nav.features": "Features",
    "nav.technologies": "Technologies",
    "nav.about": "About",
    "nav.contacts": "Contacts",
    "nav.launch_bot": "Launch Bot",

    // Hero
    "hero.title": "AI Trading Bot",
    "hero.subtitle":
      "Automate trading with advanced machine learning algorithms directly in Telegram",
    "hero.launch_bot": "Launch Bot",
    "hero.learn_more": "Learn More",
    "hero.uptime": "Uptime",
    "hero.active_trading": "Active Trading",
    "hero.active_users": "Active Users",

    // Product
    "product.title": "Our Product",
    "product.description":
      "Our Telegram bot uses advanced machine learning algorithms to analyze the cryptocurrency market and automatically execute trading operations.",
    "product.feature1": "Automatic market analysis 24/7",
    "product.feature2": "Intelligent trading signals",
    "product.feature3": "AI-powered risk management",
    "product.feature4": "Simple Telegram interface",
    "product.feature5": "Multiple exchange support",
    "product.feature6": "Real trading statistics",

    // Development
    "development.title": "In Development",
    "development.description":
      "We are working on creating more advanced trading algorithms using deep learning and neural networks.",
    "development.tooltip1": "Deep learning for market pattern analysis",
    "development.tooltip2": "Adaptive self-learning trading algorithms",
    "development.tooltip3": "Multi-level risk management system",
    "development.algorithm": "Algorithm Development",
    "development.neural_training": "Neural Network Training",
    "development.risk_management": "Risk Management Systems",
    "development.performance": "Performance Optimization",
    "development.backtesting": "Backtesting & Validation",
    "development.progress": "Development Progress",

    // AI Plans
    "ai.title": "Future Plans",
    "ai.subtitle":
      "The future of automated trading with artificial intelligence",
    "ai.card1.title": "Predictive Analytics",
    "ai.card1.desc": "AI models for accurate price movement prediction",
    "ai.card2.title": "Sentiment Analysis",
    "ai.card2.desc": "Real-time market sentiment and news analysis",
    "ai.card3.title": "Portfolio Optimization",
    "ai.card3.desc": "Automatic portfolio optimization and rebalancing",
    "ai.code.title": "Model Training Simulation",
    "ai.start_training": "Start Training",

    // Trading Interface
    "trading.current_price": "Current Price",
    "trading.24h_change": "24h Change",
    "trading.session_change": "Session Change",
    "trading.price_movement": "Price Movement",

    // Footer
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.contacts": "Contacts",
    "footer.support": "Support",
    "footer.copyright": "© 2025 CryptoBot. All rights reserved.",
    "footer.newsletter.title": "Stay Updated",
    "footer.newsletter.desc":
      "Get the latest updates on new features and market analytics.",
    "footer.newsletter.placeholder": "Enter your email",
    "footer.newsletter.button": "Subscribe",
    "footer.newsletter.privacy":
      "We respect your privacy. Unsubscribe at any time.",
    "footer.built_with_love": "Built with ❤️ for the crypto community",
    "footer.follow_us": "Follow us",
    "footer.systems_operational": "All systems operational",
    "footer.legal": "Legal",
    "footer.support_section": "Support",
    "footer.description_text":
      "Revolutionizing crypto trading with AI-powered automation. Join thousands of traders who trust our advanced algorithms.",
  },
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return (
      translations[language][
        key as keyof (typeof translations)[typeof language]
      ] || key
    );
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
