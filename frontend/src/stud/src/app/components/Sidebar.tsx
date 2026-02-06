import { Home, User, BookOpen, Users, HelpCircle, X } from "lucide-react";
import { cn } from "./ui/utils";

interface SidebarProps {
  activeScreen: string;
  onNavigate: (screen: string) => void;
  isOpen?: boolean;
  onClose?: () => void;
}

const menuItems = [
  { id: "home", label: "Главная", icon: Home },
  { id: "profile", label: "Мой профиль", icon: User },
  { id: "course", label: "Мой курс", icon: BookOpen },
  { id: "team", label: "Команда и проект", icon: Users },
  { id: "support", label: "Поддержка", icon: HelpCircle },
];

export function Sidebar({ activeScreen, onNavigate, isOpen = true, onClose }: SidebarProps) {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 h-full bg-sidebar border-r border-sidebar-border z-50 w-64 transition-transform duration-300 lg:translate-x-0",
          !isOpen && "-translate-x-full lg:translate-x-0"
        )}
      >
        <div className="flex flex-col h-full">
          <div className="h-16 flex items-center justify-between px-6 border-b border-sidebar-border">
            <h1 className="text-xl font-semibold text-primary">Skill 2 Team</h1>
            <button
              onClick={onClose}
              className="lg:hidden text-sidebar-foreground hover:text-primary"
              aria-label="Закрыть"
            >
              <X className="size-5" />
            </button>
          </div>

          <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeScreen === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  onClose?.();
                }}
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all",
                  isActive
                    ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-sm"
                    : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                )}
              >
                <Icon className="size-5 shrink-0" />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
          </nav>
        </div>
      </aside>
    </>
  );
}