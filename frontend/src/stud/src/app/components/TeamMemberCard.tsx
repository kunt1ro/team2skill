import { Avatar, AvatarFallback } from "./ui/avatar";

interface TeamMemberCardProps {
  name: string;
  role: string;
  initials: string;
}

export function TeamMemberCard({ name, role, initials }: TeamMemberCardProps) {
  return (
    <div className="flex items-center gap-3 p-3 bg-card border border-border rounded-xl">
      <Avatar className="size-10">
        <AvatarFallback className="bg-[#34D399]/20 text-[#34D399] text-sm">
          {initials}
        </AvatarFallback>
      </Avatar>
      <div className="flex-1 min-w-0">
        <div className="font-medium truncate">{name}</div>
        <div className="text-sm text-muted-foreground truncate">{role}</div>
      </div>
    </div>
  );
}
