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
          "fixed lg:sticky top-0 left-0 h-screen w-64 bg-card/50 backdrop-blur-sm border-r border-border flex flex-col z-50 transition-transform duration-300",
          !isOpen && "-translate-x-full lg:translate-x-0"
        )}
      >
        <div className="h-16 flex items-center justify-between px-6 border-b border-border lg:hidden">
          <h2 className="font-semibold">Меню</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-accent rounded-lg transition-colors"
            aria-label="Закрыть"
          >
            <X className="size-5" />
          </button>
        </div>
        
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
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
                  "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all",
                  isActive
                    ? "bg-[#34D399]/10 text-[#34D399]"
                    : "text-muted-foreground hover:bg-accent hover:text-foreground"
                )}
              >
                <Icon className="size-5 shrink-0" />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
