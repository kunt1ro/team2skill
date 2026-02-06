interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function Card({ children, className = '', onClick }: CardProps) {
  return (
    <div 
      className={`bg-card border border-border rounded-xl p-6 shadow-sm ${onClick ? 'cursor-pointer hover:border-primary/30 transition-colors' : ''} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export function MetricCard({ 
  title, 
  value, 
  icon 
}: { 
  title: string; 
  value: string | number; 
  icon?: React.ReactNode;
}) {
  return (
    <Card className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <span className="text-sm text-muted-foreground">{title}</span>
        {icon && <span className="text-muted-foreground">{icon}</span>}
      </div>
      <div className="text-3xl font-semibold">{value}</div>
    </Card>
  );
}
