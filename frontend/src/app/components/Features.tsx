import { Users, Award, Clock, Target, Lightbulb, FileText } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export function Features() {
  const features = [
    {
      icon: Users,
      title: "Роли и покрытие требований",
      description: "Автоматическое распределение ролей в команде с учетом предпочтений и опыта студентов",
    },
    {
      icon: Award,
      title: "Матчинг по навыкам (уровни 0–5)",
      description: "Балансировка команд по уровню навыков для оптимального распределения экспертизы",
    },
    {
      icon: Clock,
      title: "Совместимость по времени",
      description: "Учет доступных часов и временных окон каждого участника команды",
    },
    {
      icon: Target,
      title: "Совместимость по стилю",
      description: "Совмещение рабочих предпочтений, а не психологических тестов",
    },
    {
      icon: Lightbulb,
      title: "Объяснение решения",
      description: "Прозрачная логика: почему именно эти студенты подходят друг другу",
    },
    {
      icon: FileText,
      title: "Ручная корректировка и отчёты",
      description: "Возможность редактирования команд и экспорта результатов",
    },
  ];

  return (
    <section id="features" className="py-16 lg:py-24 bg-gradient-to-b from-background via-muted/30 to-muted/30 scroll-mt-16">
      <div className="container mx-auto px-4 lg:px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Возможности</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Комплексный подход к формированию эффективных команд
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="p-6 bg-card rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow group">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}