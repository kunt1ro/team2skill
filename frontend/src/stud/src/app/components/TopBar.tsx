import { Avatar, AvatarFallback } from "./ui/avatar";
import { Menu, Bell, ChevronRight } from "lucide-react";

interface TopBarProps {
  onMenuClick?: () => void;
  activeScreen: string;
}

const screenLabels: Record<string, string> = {
  home: "Главная",
  profile: "Мой профиль",
  course: "Мой курс",
  team: "Команда и проект",
  support: "Поддержка",
};

export function TopBar({ onMenuClick, activeScreen }: TopBarProps) {
  const currentLabel = screenLabels[activeScreen] ?? "Главная";

  return (
    <header className="h-16 bg-card border-b border-border sticky top-0 z-30 flex items-center justify-between px-4 lg:px-6">
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="lg:hidden text-foreground hover:text-primary"
          aria-label="Меню"
        >
          <Menu size={24} />
        </button>
        <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground">
          <span>Главная</span>
          <ChevronRight size={16} />
          <span className="text-foreground">{currentLabel}</span>
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <button className="relative p-2 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-colors">
          <Bell size={20} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary rounded-full" />
        </button>

        <div className="flex items-center gap-3 pl-4 border-l border-border">
          <div className="hidden sm:block text-right">
            <div className="text-sm font-medium">Студент</div>
            <div className="text-xs text-muted-foreground">Иванов Иван</div>
          </div>
          <Avatar className="size-10">
            <AvatarFallback className="bg-primary/20 text-primary">ИИ</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
