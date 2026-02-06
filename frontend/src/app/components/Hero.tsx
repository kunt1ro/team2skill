import { Button } from "./ui/button";
import { Check, Eye, Settings } from "lucide-react";
import { motion } from "motion/react";
import { HeroInfographic } from "./HeroInfographic";

interface HeroProps {
  onPrimaryClick: () => void;
}

export function Hero({ onPrimaryClick }: HeroProps) {
  return (
    <section className="pb-16 pt-6 lg:pb-24 lg:pt-10 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:pl-4"
          >
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-6">
              Собирайте проектные команды объективно — по навыкам, ролям и загрузке
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Сервис помогает преподавателю быстро сформировать сбалансированные команды и заранее увидеть риски: перекос по навыкам, времени и ролям, потенциальные конфликты.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" onClick={onPrimaryClick}>
                Запросить пилот
              </Button>
              <Button size="lg" variant="outline">
                Посмотреть пример
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: Check, text: "Объяснимый скоринг" },
                { icon: Eye, text: "Прозрачные правила" },
                { icon: Settings, text: "Ручная правка + перегенерация" },
              ].map((badge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-center justify-center gap-3 p-4 bg-card rounded-lg border border-border text-center"
                >
                  <badge.icon className="w-5 h-5 text-primary flex-shrink-0" />
                  <p className="text-sm font-medium">{badge.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <HeroInfographic />
        </div>
      </div>
    </section>
  );
}