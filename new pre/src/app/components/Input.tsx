interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export function Input({ label, error, className = '', ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && <label className="text-sm font-medium">{label}</label>}
      <input
        className={`bg-input-background border border-input rounded-xl px-4 py-2.5 
          focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary
          placeholder:text-muted-foreground transition-all ${className}`}
        {...props}
      />
      {error && <span className="text-xs text-destructive">{error}</span>}
    </div>
  );
}

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export function TextArea({ label, error, className = '', ...props }: TextAreaProps) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && <label className="text-sm font-medium">{label}</label>}
      <textarea
        className={`bg-input-background border border-input rounded-xl px-4 py-2.5 
          focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary
          placeholder:text-muted-foreground transition-all min-h-[100px] ${className}`}
        {...props}
      />
      {error && <span className="text-xs text-destructive">{error}</span>}
    </div>
  );
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: { value: string; label: string }[];
}

export function Select({ label, error, options, className = '', ...props }: SelectProps) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && <label className="text-sm font-medium">{label}</label>}
      <select
        className={`bg-input-background border border-input rounded-xl px-4 py-2.5 
          focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary
          transition-all ${className}`}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <span className="text-xs text-destructive">{error}</span>}
    </div>
  );
}
