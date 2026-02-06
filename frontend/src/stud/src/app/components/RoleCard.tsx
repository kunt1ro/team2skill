import { cn } from "./ui/utils";
import { Badge } from "./ui/badge";

interface RoleCardProps {
  role: string;
  selected: boolean;
  priority?: "primary" | "secondary" | null;
  onClick: () => void;
}

export function RoleCard({ role, selected, priority, onClick }: RoleCardProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "relative p-4 rounded-xl border-2 transition-all text-left w-full",
        selected
          ? "border-[#34D399] bg-[#34D399]/5"
          : "border-border hover:border-muted-foreground/30"
      )}
    >
      <div className="font-medium">{role}</div>
      {priority && (
        <Badge
          variant="secondary"
          className={cn(
            "absolute top-2 right-2 text-xs",
            priority === "primary"
              ? "bg-[#34D399]/20 text-[#34D399] border-[#34D399]/30"
              : "bg-muted text-muted-foreground"
          )}
        >
          {priority === "primary" ? "Основная" : "Доп."}
        </Badge>
      )}
    </button>
  );
}
