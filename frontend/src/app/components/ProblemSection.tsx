import { AlertCircle, Shuffle, Users, Eye } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export function ProblemSection() {
  const problems = [
    {
      icon: Users,
      text: "В группе одни тянут, другие — балласт",
    },
    {
      icon: Shuffle,
      text: "Команды собираются случайно",
    },
    {
      icon: AlertCircle,
      text: "Конфликты и неравномерная нагрузка",
    },
    {
      icon: Eye,
      text: "Нет объективности: всё 'на глаз'",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-muted/20 via-muted/30 to-muted/30">
      <div className="container mx-auto px-4 lg:px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Что болит сейчас</h2>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {problems.map((problem, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <div className="p-6 bg-card rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
                <problem.icon className="w-8 h-8 text-primary mb-4" />
                <p className="text-sm leading-relaxed">{problem.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Quote Card */}
        <ScrollReveal delay={0.4}>
          <div className="max-w-3xl mx-auto">
            <div className="p-8 bg-card rounded-xl border border-border shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex-shrink-0"></div>
                <div>
                  <p className="text-lg italic text-muted-foreground mb-3">
                    "Раньше на формирование команд уходило несколько часов. Студенты жаловались на несправедливое распределение. Теперь процесс занимает 10 минут, и я вижу все риски заранее."
                  </p>
                  <p className="font-medium">Анна Петрова</p>
                  <p className="text-sm text-muted-foreground">Преподаватель проектной деятельности, МГУ</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}