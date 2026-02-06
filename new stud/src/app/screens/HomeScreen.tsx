import { Button } from "../components/ui/button";
import { Progress } from "../components/ui/progress";
import { CheckCircle2, Clock, Users, Bell } from "lucide-react";

interface HomeScreenProps {
  onNavigate: (screen: string) => void;
}

export function HomeScreen({ onNavigate }: HomeScreenProps) {
  const notifications = [
    { id: 1, text: "Команда сформирована — проверьте раздел «Команда и проект»", time: "2 часа назад" },
    { id: 2, text: "Преподаватель обновил требования к проектам", time: "1 день назад" },
    { id: 3, text: "Напоминание: заполните анкету до конца недели", time: "2 дня назад" },
  ];

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6 space-y-6">
      {/* Status card */}
      <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Ваш статус</h2>
        
        <div className="space-y-4">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">Курс</span>
              <span className="font-medium">Проектный практикум, весна 2026</span>
            </div>
          </div>

          <div className="p-4 bg-accent/50 rounded-xl">
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium">Анкета</span>
              <span className="text-sm text-muted-foreground">80% заполнено</span>
            </div>
            <Progress value={80} className="h-2 mb-3" />
            <Button
              onClick={() => onNavigate("profile")}
              className="w-full sm:w-auto bg-[#34D399] hover:bg-[#2CB87E] text-black"
            >
              Заполнить / Обновить
            </Button>
          </div>

          <div className="p-4 bg-[#34D399]/5 border border-[#34D399]/20 rounded-xl flex items-center gap-3">
            <CheckCircle2 className="size-5 text-[#34D399] shrink-0" />
            <div>
              <div className="font-medium text-[#34D399]">Команда назначена</div>
              <div className="text-sm text-muted-foreground">Вы в команде «Alpha»</div>
            </div>
          </div>
        </div>
      </div>

      {/* Next steps */}
      <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Следующие шаги</h2>
        
        <div className="space-y-3">
          <div className="flex items-start gap-3 p-3 bg-accent/50 rounded-xl">
            <CheckCircle2 className="size-5 text-[#34D399] shrink-0 mt-0.5" />
            <div className="flex-1">
              <div className="font-medium line-through opacity-50">Заполните анкету</div>
              <div className="text-sm text-muted-foreground">Завершено</div>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 bg-accent/50 rounded-xl">
            <CheckCircle2 className="size-5 text-[#34D399] shrink-0 mt-0.5" />
            <div className="flex-1">
              <div className="font-medium line-through opacity-50">Дождитесь распределения</div>
              <div className="text-sm text-muted-foreground">Завершено</div>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 bg-[#34D399]/5 border border-[#34D399]/20 rounded-xl">
            <Clock className="size-5 text-[#34D399] shrink-0 mt-0.5" />
            <div className="flex-1">
              <div className="font-medium">Ознакомьтесь с проектом и командой</div>
              <div className="text-sm text-muted-foreground mb-2">Изучите состав команды и детали проекта</div>
              <Button
                onClick={() => onNavigate("team")}
                variant="outline"
                size="sm"
                className="border-[#34D399]/30 text-[#34D399] hover:bg-[#34D399]/10"
              >
                Перейти
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Notifications */}
      <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 shadow-lg">
        <div className="flex items-center gap-2 mb-4">
          <Bell className="size-5 text-[#34D399]" />
          <h2 className="text-xl font-semibold">Уведомления</h2>
        </div>
        
        <div className="space-y-3">
          {notifications.map((notif) => (
            <div
              key={notif.id}
              className="p-4 bg-accent/50 rounded-xl hover:bg-accent transition-colors"
            >
              <p className="text-sm mb-1">{notif.text}</p>
              <p className="text-xs text-muted-foreground">{notif.time}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
