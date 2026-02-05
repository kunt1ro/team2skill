import { GraduationCap, Briefcase, Building2 } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export function ForWhom() {
  const audiences = [
    {
      icon: GraduationCap,
      title: "Преподаватель/куратор",
      benefits: [
        "Экономия времени на формирование команд",
        "Меньше конфликтов в процессе работы",
        "Выше шанс успеха проектов",
        "Объективность распределения",
      ],
    },
    {
      icon: Briefcase,
      title: "Руководитель проектной деятельности",
      benefits: [
        "Прозрачность процесса формирования",
        "Сравнимость потоков и групп",
        "Готовая отчётность",
        "Масштабируемость подхода",
      ],
    },
    {
      icon: Building2,
      title: "Акселератор/администрация",
      benefits: [
        "Масштабирование на курсы и программы",
        "Единая методология",
        "Аналитика эффективно��ти",
        "Интеграция с учебным процессом",
      ],
    },
  ];

  return (
    <section id="for-whom" className="py-16 lg:py-24 bg-gradient-to-b from-muted/30 to-background scroll-mt-16">
      <div className="container mx-auto px-4 lg:px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Для кого</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Решение для всех участников образовательного процесса
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <ScrollReveal key={index} delay={index * 0.15}>
              <div className="p-8 bg-card rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <audience.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{audience.title}</h3>
                <ul className="space-y-3">
                  {audience.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}