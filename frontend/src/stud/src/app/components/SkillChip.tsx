import { X, ExternalLink } from "lucide-react";
import { Badge } from "./ui/badge";

interface SkillChipProps {
  name: string;
  level: number;
  hasLink?: boolean;
  onRemove?: () => void;
}

export function SkillChip({ name, level, hasLink, onRemove }: SkillChipProps) {
  return (
    <div className="flex items-center gap-2 p-3 bg-card border border-border rounded-xl">
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium truncate">{name}</span>
          {hasLink && (
            <ExternalLink className="size-3 text-muted-foreground shrink-0" />
          )}
        </div>
        <div className="flex items-center gap-2 mt-1">
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className={`w-6 h-1.5 rounded-full ${
                  i <= level ? "bg-[#34D399]" : "bg-muted"
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">{level}/5</span>
        </div>
      </div>
      {onRemove && (
        <button
          onClick={onRemove}
          className="p-1 hover:bg-accent rounded-lg transition-colors shrink-0"
          aria-label="Удалить"
        >
          <X className="size-4" />
        </button>
      )}
    </div>
  );
}
