import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { ScrollReveal } from "./ScrollReveal";

export function FAQ() {
  const faqs = [
    {
      question: "Это нейросеть?",
      answer:
        "Нет, это не нейросеть. Мы используем алгоритмы оптимизации и правила, основанные на педагогической практике. Каждое решение объяснимо и прозрачно, в отличие от «чёрного ящика» нейросетей.",
    },
    {
      question: "Можно ли редактировать команды вручную?",
      answer:
        "Да, безусловно. Система предлагает оптимальные варианты, но окончательное решение всегда остаётся за преподавателем. Вы можете вручную перемещать студентов между командами и запускать перегенерацию.",
    },
    {
      question: "Что именно заполняют студенты?",
      answer:
        "Студенты заполняют простой профиль: навыки по шкале 0-5, предпочитаемые роли, доступное время и временные окна, стиль работы (структурированный/гибкий и т.д.), цели проекта (портфолио, оценка, стартап, грант). Заполнение занимает 5-7 минут.",
    },
    {
      question: "Какие данные хранятся?",
      answer:
        "Мы храним только образовательные данные: навыки, роли, временную доступность и рабочие предпочтения. Никакой психологической информации или персональных данных, не относящихся к учебному процессу. Все данные защищены и могут быть удалены по запросу.",
    },
    {
      question: "Можно ли адаптировать под разные курсы?",
      answer:
        "Да, система полностью настраиваемая. Вы можете задавать свои критерии навыков, роли, приоритеты формирования команд. Подходит для проектных курсов, хакатонов, дипломных проектов, акселераторов и других форматов командной работы.",
    },
  ];

  return (
    <section id="faq" className="py-16 lg:py-24 bg-background scroll-mt-16">
      <div className="container mx-auto px-4 lg:px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Часто задаваемые вопросы</h2>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-border rounded-lg px-6 bg-card"
                >
                  <AccordionTrigger className="hover:no-underline">
                    <span className="text-left font-semibold">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}