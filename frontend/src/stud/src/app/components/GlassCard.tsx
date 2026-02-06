import { cn } from "./ui/utils";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export function GlassCard({ children, className }: GlassCardProps) {
  return (
    <div
      className={cn(
        "bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 shadow-lg transition-all hover:shadow-xl hover:border-[#34D399]/20",
        className
      )}
    >
      {children}
    </div>
  );
}
