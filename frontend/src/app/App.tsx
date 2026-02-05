import { useRef } from "react";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { ProblemSection } from "./components/ProblemSection";
import { HowItWorks } from "./components/HowItWorks";
import { Features } from "./components/Features";
import { ForWhom } from "./components/ForWhom";
import { Explainability } from "./components/Explainability";
import { CTASection } from "./components/CTASection";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";

export default function App() {
  const ctaRef = useRef<HTMLDivElement>(null);

  const scrollToCTA = () => {
    ctaRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation onCtaClick={scrollToCTA} />
      <Hero onPrimaryClick={scrollToCTA} />
      <ProblemSection />
      <HowItWorks />
      <Features />
      <ForWhom />
      <Explainability />
      <div ref={ctaRef}>
        <CTASection />
      </div>
      <FAQ />
      <Footer />
    </div>
  );
}
