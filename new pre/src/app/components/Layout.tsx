import { useState } from 'react';
import { 
  Home, 
  BookOpen, 
  FileText, 
  Users, 
  GraduationCap, 
  BarChart3, 
  Settings,
  Menu,
  X,
  Bell,
  ChevronRight
} from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  currentPage: string;
}

const navigation = [
  { name: 'Главная', icon: Home, href: 'home' },
  { name: 'Курсы / Группы', icon: BookOpen, href: 'courses' },
  { name: 'Опросы', icon: FileText, href: 'surveys' },
  { name: 'Проекты и команды', icon: Users, href: 'projects' },
  { name: 'Студенты', icon: GraduationCap, href: 'students' },
  { name: 'Отчёты', icon: BarChart3, href: 'reports' },
  { name: 'Настройки', icon: Settings, href: 'settings' },
];

export function Layout({ children, currentPage }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  return (
    <div className="min-h-screen bg-background">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <aside className={`
        fixed top-0 left-0 h-full bg-sidebar border-r border-sidebar-border z-50
        w-64 transition-transform duration-300 lg:translate-x-0
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="h-16 flex items-center justify-between px-6 border-b border-sidebar-border">
            <h1 className="text-xl font-semibold text-primary">Skill 2 Team</h1>
            <button 
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden text-sidebar-foreground hover:text-primary"
            >
              <X size={20} />
            </button>
          </div>
          
          {/* Navigation */}
          <nav className="flex-1 px-3 py-4 space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.href;
              return (
                <a
                  key={item.name}
                  href={`#${item.href}`}
                  className={`
                    flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all
                    ${isActive 
                      ? 'bg-sidebar-primary text-sidebar-primary-foreground shadow-sm' 
                      : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
                    }
                  `}
                  onClick={() => setSidebarOpen(false)}
                >
                  <Icon size={20} />
                  <span>{item.name}</span>
                </a>
              );
            })}
          </nav>
        </div>
      </aside>
      
      {/* Main content */}
      <div className="lg:pl-64">
        {/* Top bar */}
        <header className="h-16 bg-card border-b border-border sticky top-0 z-30 flex items-center justify-between px-4 lg:px-6">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden text-foreground hover:text-primary"
            >
              <Menu size={24} />
            </button>
            
            {/* Breadcrumbs */}
            <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground">
              <span>Главная</span>
              <ChevronRight size={16} />
              <span className="text-foreground">
                {navigation.find(nav => nav.href === currentPage)?.name || 'Главная'}
              </span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="relative p-2 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-colors">
              <Bell size={20} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary rounded-full" />
            </button>
            
            <div className="flex items-center gap-3 pl-4 border-l border-border">
              <div className="hidden sm:block text-right">
                <div className="text-sm font-medium">Преподаватель</div>
                <div className="text-xs text-muted-foreground">Иванова М.С.</div>
              </div>
              <div className="w-10 h-10 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center text-primary font-semibold">
                ИМ
              </div>
            </div>
          </div>
        </header>
        
        {/* Page content */}
        <main className="p-4 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
