import React from "react";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProductSection } from "@/components/sections/ProductSection";
import { DevelopmentSection } from "@/components/sections/DevelopmentSection";
import { FutureSection } from "@/components/sections/FutureSection";
import { CTASection } from "@/components/sections/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <main>
        <div id="home">
          <HeroSection />
        </div>

        <div id="product">
          <ProductSection />
        </div>

        <div id="development">
          <DevelopmentSection />
        </div>

        <div id="roadmap">
          <FutureSection />
        </div>

        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
