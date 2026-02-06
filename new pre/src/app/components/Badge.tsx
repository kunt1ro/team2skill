interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'error' | 'primary';
  className?: string;
}

export function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  const variants = {
    default: 'bg-secondary text-secondary-foreground',
    success: 'bg-primary/20 text-primary border border-primary/30',
    warning: 'bg-warning/20 text-warning border border-warning/30',
    error: 'bg-destructive/20 text-destructive border border-destructive/30',
    primary: 'bg-primary text-primary-foreground'
  };
  
  return (
    <span className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
