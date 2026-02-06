import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { HelpCircle, Send } from "lucide-react";

const faqItems = [
  {
    id: "1",
    question: "Кто видит мои данные из анкеты?",
    answer: "Ваши данные видят только преподаватели курса и система формирования команд. Другие студенты не имеют доступа к вашей анкете. После формирования команд, участники вашей команды увидят только ваше имя и выбранную роль.",
  },
  {
    id: "2",
    question: "Можно ли изменить анкету после распределения в команды?",
    answer: "Да, вы можете обновить свой профиль в любое время. Однако изменения не повлияют на уже сформированные команды. Изменение команды возможно только в первую неделю после распределения по согласованию с преподавателем.",
  },
  {
    id: "3",
    question: "Почему я не попал в команду X, хотя хотел работать именно с этим проектом?",
    answer: "Алгоритм формирования команд учитывает множество факторов: навыки, роли, доступность по времени, стиль работы и предпочтения всех участников курса. Цель — создать наиболее сбалансированные команды для успешного выполнения проектов.",
  },
  {
    id: "4",
    question: "Что делать, если в команде возникли конфликты?",
    answer: "Сначала попробуйте решить вопрос внутри команды через открытое обсуждение. Если это не помогает, обратитесь к преподавателю курса через форму обратной связи ниже или на очной консультации.",
  },
  {
    id: "5",
    question: "Как изменить состав команды?",
    answer: "Изменение состава возможно только в первую неделю после формирования команд. Для этого необходимо связаться с преподавателем и обосновать причину изменения. Решение принимается индивидуально в каждом случае.",
  },
];

export function SupportScreen() {
  const [formData, setFormData] = useState({
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission
    alert("Ваше сообщение отправлено! Мы ответим в течение 24 часов.");
    setFormData({ subject: "", message: "" });
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 space-y-6">
      <div className="flex items-center gap-2">
        <HelpCircle className="size-6 text-[#34D399]" />
        <h1 className="text-2xl font-semibold">Поддержка</h1>
      </div>

      {/* FAQ */}
      <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Часто задаваемые вопросы</h2>
        
        <Accordion type="single" collapsible className="space-y-2">
          {faqItems.map((item) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className="bg-accent/50 rounded-xl border border-border px-4"
            >
              <AccordionTrigger className="hover:no-underline py-4">
                <span className="text-left font-medium">{item.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground pb-4">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Contact form */}
      <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 shadow-lg">
        <h2 className="text-xl font-semibold mb-2">Связаться с нами</h2>
        <p className="text-muted-foreground mb-6">
          Не нашли ответ на свой вопрос? Отправьте нам сообщение, и мы ответим в течение 24 часов.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="subject">Тема</Label>
            <Input
              id="subject"
              placeholder="Краткое описание вопроса"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              className="bg-background border-border"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Сообщение</Label>
            <Textarea
              id="message"
              placeholder="Подробно опишите ваш вопрос или проблему"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="bg-background border-border min-h-32 resize-none"
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full sm:w-auto bg-[#34D399] hover:bg-[#2CB87E] text-black"
          >
            <Send className="size-4 mr-2" />
            Отправить сообщение
          </Button>
        </form>
      </div>

      {/* Additional resources */}
      <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Дополнительные ресурсы</h2>
        
        <div className="space-y-3">
          <a
            href="#"
            className="block p-4 bg-accent/50 rounded-xl hover:bg-accent transition-colors"
          >
            <div className="font-medium mb-1">Документация платформы</div>
            <div className="text-sm text-muted-foreground">
              Подробное руководство по использованию всех функций
            </div>
          </a>

          <a
            href="#"
            className="block p-4 bg-accent/50 rounded-xl hover:bg-accent transition-colors"
          >
            <div className="font-medium mb-1">Видеоинструкции</div>
            <div className="text-sm text-muted-foreground">
              Короткие видео о работе с профилем и командой
            </div>
          </a>

          <a
            href="#"
            className="block p-4 bg-accent/50 rounded-xl hover:bg-accent transition-colors"
          >
            <div className="font-medium mb-1">Общий чат студентов</div>
            <div className="text-sm text-muted-foreground">
              Обсудите вопросы с другими участниками курса
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
