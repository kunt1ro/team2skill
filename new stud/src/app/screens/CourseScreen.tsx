import { Badge } from "../components/ui/badge";
import { BookOpen, User, Calendar, Target, Users } from "lucide-react";

export function CourseScreen() {
  const projects = [
    {
      id: 1,
      name: "Alpha — Платформа онлайн-обучения",
      description: "Разработка веб-приложения для управления курсами с интерактивными заданиями",
      requiredRoles: ["Frontend", "Backend", "Дизайнер"],
    },
    {
      id: 2,
      name: "Beta — Мобильное приложение для фитнеса",
      description: "Создание приложения для отслеживания тренировок и питания",
      requiredRoles: ["Frontend", "Backend", "Аналитик"],
    },
    {
      id: 3,
      name: "Gamma — Система аналитики данных",
      description: "Инструмент для визуализации и анализа больших данных",
      requiredRoles: ["Backend", "Аналитик", "Дизайнер"],
    },
  ];

  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-6 space-y-6">
      <h1 className="text-2xl font-semibold">Мой курс</h1>

      {/* Course info card */}
      <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 shadow-lg">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold mb-1">Проектный практикум, весна 2026</h2>
            <p className="text-muted-foreground">Формирование команд для работы над реальными проектами</p>
          </div>
          <Badge className="bg-[#34D399]/10 text-[#34D399] border-[#34D399]/20 shrink-0">
            Активен
          </Badge>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex items-start gap-3 p-4 bg-accent/50 rounded-xl">
            <User className="size-5 text-[#34D399] shrink-0 mt-0.5" />
            <div>
              <div className="text-sm text-muted-foreground mb-1">Преподаватель</div>
              <div className="font-medium">Проф. Петрова Анна Сергеевна</div>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 bg-accent/50 rounded-xl">
            <Users className="size-5 text-[#34D399] shrink-0 mt-0.5" />
            <div>
              <div className="text-sm text-muted-foreground mb-1">Размер команды</div>
              <div className="font-medium">4–6 человек</div>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 bg-accent/50 rounded-xl">
            <Calendar className="size-5 text-[#34D399] shrink-0 mt-0.5" />
            <div>
              <div className="text-sm text-muted-foreground mb-1">Длительность</div>
              <div className="font-medium">12 недель</div>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 bg-accent/50 rounded-xl">
            <Target className="size-5 text-[#34D399] shrink-0 mt-0.5" />
            <div>
              <div className="text-sm text-muted-foreground mb-1">Дедлайн</div>
              <div className="font-medium">15 мая 2026</div>
            </div>
          </div>
        </div>
      </div>

      {/* Requirements */}
      <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 shadow-lg">
        <div className="flex items-center gap-2 mb-4">
          <BookOpen className="size-5 text-[#34D399]" />
          <h2 className="text-xl font-semibold">Требования к проектам</h2>
        </div>

        <p className="text-muted-foreground mb-6">
          Каждая команда выбирает один из предложенных проектов. Все проекты требуют кроссфункциональной команды с разными ролями.
        </p>

        <div className="space-y-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="p-5 bg-accent/50 rounded-xl hover:bg-accent transition-colors"
            >
              <h3 className="font-semibold mb-2">{project.name}</h3>
              <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {project.requiredRoles.map((role) => (
                  <Badge
                    key={role}
                    variant="secondary"
                    className="bg-[#34D399]/10 text-[#34D399] border-[#34D399]/20"
                  >
                    {role}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Course rules */}
      <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Правила курса</h2>
        
        <div className="space-y-3 text-sm text-muted-foreground">
          <div className="flex gap-3">
            <span className="text-[#34D399] shrink-0">•</span>
            <p>Команды формируются автоматически на основе анкет студентов</p>
          </div>
          <div className="flex gap-3">
            <span className="text-[#34D399] shrink-0">•</span>
            <p>Изменение состава команды возможно только в первую неделю после распределения</p>
          </div>
          <div className="flex gap-3">
            <span className="text-[#34D399] shrink-0">•</span>
            <p>Финальная презентация проекта обязательна для всех участников команды</p>
          </div>
          <div className="flex gap-3">
            <span className="text-[#34D399] shrink-0">•</span>
            <p>Оценка выставляется индивидуально с учётом вклада каждого участника</p>
          </div>
        </div>
      </div>
    </div>
  );
}