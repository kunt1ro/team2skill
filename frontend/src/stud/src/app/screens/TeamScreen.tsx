import { useState } from "react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { TeamMemberCard } from "../components/TeamMemberCard";
import { ExplainabilityModal } from "../components/ExplainabilityModal";
import { EmptyState } from "../components/EmptyState";
import { Sparkles, AlertTriangle, Copy, Download, Users as UsersIcon } from "lucide-react";

interface TeamScreenProps {
  onNavigate: (screen: string) => void;
}

export function TeamScreen({ onNavigate }: TeamScreenProps) {
  const [showExplainability, setShowExplainability] = useState(false);
  const [hasTeam, setHasTeam] = useState(true); // Set to false to show empty state

  const teamMembers = [
    { id: 1, name: "Иванов Иван", role: "Frontend разработчик", initials: "ИИ" },
    { id: 2, name: "Петрова Мария", role: "Backend разработчик", initials: "ПМ" },
    { id: 3, name: "Сидоров Алексей", role: "Дизайнер", initials: "СА" },
    { id: 4, name: "Козлова Анна", role: "Аналитик", initials: "КА" },
    { id: 5, name: "Новиков Дмитрий", role: "Project Manager", initials: "НД" },
  ];

  const risks = [
    { id: 1, type: "warning", text: "Частичное совпадение по времени с 2 участниками" },
  ];

  return (
    <>
      <div className="max-w-5xl mx-auto p-4 sm:p-6 space-y-6">
        <h1 className="text-2xl font-semibold">Команда и проект</h1>

        {/* Team card */}
        {hasTeam ? (
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 shadow-lg">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-xl font-semibold mb-1">Команда «Alpha»</h2>
                <p className="text-muted-foreground">5 участников</p>
              </div>
              <Badge className="bg-[#34D399]/10 text-[#34D399] border-[#34D399]/20 shrink-0">
                Сформирована
              </Badge>
            </div>

            {/* Project info */}
            <div className="mb-6 p-4 bg-accent/50 rounded-xl">
              <h3 className="font-semibold mb-2">Проект: Платформа онлайн-обучения</h3>
              <p className="text-sm text-muted-foreground">
                Разработка веб-приложения для управления курсами с интерактивными заданиями, 
                системой оценивания и аналитикой прогресса студентов.
              </p>
            </div>

            {/* Team members */}
            <div className="mb-6">
              <h3 className="font-semibold mb-3">Состав команды</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {teamMembers.map((member) => (
                  <TeamMemberCard
                    key={member.id}
                    name={member.name}
                    role={member.role}
                    initials={member.initials}
                  />
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                variant="outline"
                className="flex-1"
              >
                <Copy className="size-4 mr-2" />
                Копировать состав
              </Button>
              <Button
                variant="outline"
                className="flex-1"
              >
                <Download className="size-4 mr-2" />
                Скачать
              </Button>
            </div>
          </div>
        ) : (
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 shadow-lg">
            <EmptyState
              icon={UsersIcon}
              title="Команда ещё формируется"
              description="Заполните анкету — это повысит точность распределения. Вы получите уведомление, как только команда будет сформирована."
              action={
                <Button
                  onClick={() => onNavigate("profile")}
                  className="bg-[#34D399] hover:bg-[#2CB87E] text-black"
                >
                  Заполнить анкету
                </Button>
              }
            />
          </div>
        )}

        {/* Risks */}
        {hasTeam && risks.length > 0 && (
          <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="size-5 text-yellow-500" />
              <h2 className="text-xl font-semibold">Потенциальные риски</h2>
            </div>
            
            <div className="space-y-2">
              {risks.map((risk) => (
                <div key={risk.id} className="flex gap-3 text-sm">
                  <span className="text-yellow-500 shrink-0">⚠</span>
                  <p className="text-muted-foreground">{risk.text}</p>
                </div>
              ))}
            </div>

            <p className="text-sm text-muted-foreground mt-4">
              Рекомендуем обсудить эти моменты на первой встрече команды и найти компромисс.
            </p>
          </div>
        )}

        {/* Explainability */}
        {hasTeam && (
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 shadow-lg">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="size-5 text-[#34D399]" />
              <h2 className="text-xl font-semibold">Почему я в этой команде?</h2>
            </div>
            
            <p className="text-muted-foreground mb-4">
              Хотите узнать, как алгоритм подобрал для вас эту команду? 
              Посмотрите детальную информацию о совместимости.
            </p>

            <Button
              onClick={() => setShowExplainability(true)}
              className="bg-[#34D399] hover:bg-[#2CB87E] text-black"
            >
              <Sparkles className="size-4 mr-2" />
              Посмотреть объяснение
            </Button>
          </div>
        )}

        {/* Contact info */}
        {hasTeam && (
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Следующие шаги</h2>
            
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex gap-3">
                <span className="text-[#34D399] shrink-0">1.</span>
                <p>Свяжитесь с командой через общий чат или email (контакты доступны в полном списке)</p>
              </div>
              <div className="flex gap-3">
                <span className="text-[#34D399] shrink-0">2.</span>
                <p>Назначьте первую встречу для обсуждения проекта и распределения задач</p>
              </div>
              <div className="flex gap-3">
                <span className="text-[#34D399] shrink-0">3.</span>
                <p>Создайте совместное рабочее пространство (GitHub, Figma, Notion и т.д.)</p>
              </div>
              <div className="flex gap-3">
                <span className="text-[#34D399] shrink-0">4.</span>
                <p>Начните планирование проекта и разбивку на задачи</p>
              </div>
            </div>
          </div>
        )}
      </div>

      <ExplainabilityModal
        open={showExplainability}
        onClose={() => setShowExplainability(false)}
        onViewProfile={() => {
          setShowExplainability(false);
          onNavigate("profile");
        }}
      />
    </>
  );
}