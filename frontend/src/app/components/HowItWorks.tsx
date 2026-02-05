import { User, Sliders, Zap } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export function HowItWorks() {
  const steps = [
    {
      icon: User,
      number: "01",
      title: "Профиль студента",
      description:
        "Hard skills 0–5, роли, часы/неделя и окна, стиль работы (простые шкалы), цели (портфолио/оценка/стартап/грант)",
      details: [
        "Навыки по шкале 0–5",
        "Предпочитаемые роли",
        "Доступное время и расписание",
        "Стиль работы и цели проекта",
      ],
    },
    {
      icon: Sliders,
      number: "02",
      title: "Настройки преподавателя",
      description:
        "Размер команд, обязательные роли, приоритеты (баланс навыков / нагрузка / минимизация конфликтов)",
      details: [
        "Размер и количество команд",
        "Требуемые роли в команде",
        "Приоритеты формирования",
        "Ограничения по времени",
      ],
    },
    {
      icon: Zap,
      number: "03",
      title: "Генерация",
      description:
        "Список команд или топ-кандидатов + индикаторы риска + «почему подходят»",
      details: [
        "Автоматическое формирование команд",
        "Оценка рисков по каждой команде",
        "Объяснение каждого решения",
        "Возможность корректировки",
      ],
    },
  ];

  return (
    <section id="how-it-works" className="py-16 lg:py-24 bg-gradient-to-b from-muted/30 to-background scroll-mt-16">
      <div className="container mx-auto px-4 lg:px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Как это работает</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Три простых шага от сбора данных до готовых команд
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <ScrollReveal key={index} delay={index * 0.15}>
              <div className="relative">
                {/* Connector Line (Desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 left-full w-full h-0.5 bg-border -translate-x-1/2 z-0"></div>
                )}

                {/* Step Card */}
                <div className="relative z-10 p-6 bg-card rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="text-4xl font-bold text-muted/30">{step.number}</span>
                  </div>

                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {step.description}
                  </p>

                  <ul className="space-y-2">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}