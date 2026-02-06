import { Home, User, Users, BookOpen } from "lucide-react";
import { cn } from "./ui/utils";

interface BottomNavProps {
  activeScreen: string;
  onNavigate: (screen: string) => void;
}

const navItems = [
  { id: "home", label: "Главная", icon: Home },
  { id: "profile", label: "Профиль", icon: User },
  { id: "team", label: "Команда", icon: Users },
  { id: "course", label: "Курс", icon: BookOpen },
];

export function BottomNav({ activeScreen, onNavigate }: BottomNavProps) {
  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-sm border-t border-border z-50 safe-area-inset-bottom">
      <div className="flex items-center justify-around px-2 py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeScreen === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={cn(
                "flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all min-w-[64px]",
                isActive
                  ? "text-[#34D399]"
                  : "text-muted-foreground"
              )}
            >
              <Icon className={cn("size-5", isActive && "scale-110")} />
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
