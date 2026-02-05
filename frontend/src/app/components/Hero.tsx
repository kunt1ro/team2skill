import { Button } from "./ui/button";
import { Check, Network, Eye, Settings } from "lucide-react";
import { motion } from "motion/react";

interface HeroProps {
  onPrimaryClick: () => void;
}

export function Hero({ onPrimaryClick }: HeroProps) {
  return (
    <section className="pb-16 pt-0 lg:pb-24 lg:pt-0 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
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

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative mx-auto w-full max-w-[360px]"
            >
              <div className="aspect-square bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-6 flex items-center justify-center">
                <Network className="w-full h-full max-w-[220px] text-primary/20" strokeWidth={0.5} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-4">
                    {[...Array(9)].map((_, i) => (
                      <div
                        key={i}
                        className="w-10 h-10 bg-primary/10 rounded-lg border-2 border-primary/20"
                        style={{
                        animation: `pulse ${2 + i * 0.2}s ease-in-out infinite`,
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}