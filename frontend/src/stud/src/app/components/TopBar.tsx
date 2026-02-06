import { Avatar, AvatarFallback } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Menu } from "lucide-react";

interface TopBarProps {
  onMenuClick?: () => void;
}

export function TopBar({ onMenuClick }: TopBarProps) {
  return (
    <div className="h-16 border-b border-border bg-card/50 backdrop-blur-sm flex items-center justify-between px-6 sticky top-0 z-40">
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 hover:bg-accent rounded-lg transition-colors"
          aria-label="Menu"
        >
          <Menu className="size-5" />
        </button>
        <h1 className="text-xl font-semibold bg-gradient-to-r from-[#34D399] to-[#10B981] bg-clip-text text-transparent">
          Skill 2 Team
        </h1>
      </div>
      
      <div className="flex items-center gap-3">
        <Badge variant="secondary" className="bg-[#34D399]/10 text-[#34D399] border-[#34D399]/20 hidden sm:inline-flex">
          Студент
        </Badge>
        <div className="flex items-center gap-2">
          <Avatar className="size-8">
            <AvatarFallback className="bg-[#34D399]/20 text-[#34D399]">ИИ</AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium hidden sm:inline">Иванов Иван</span>
        </div>
      </div>
    </div>
  );
}
