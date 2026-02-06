import { MetricCard } from './Card';
import { BookOpen, FileCheck, Users, AlertTriangle, TrendingUp } from 'lucide-react';

const metrics = [
  { title: 'Активные курсы', value: 12, icon: <BookOpen size={20} /> },
  { title: 'Заполнено анкет', value: 156, icon: <FileCheck size={20} /> },
  { title: 'Проектов в работе', value: 8, icon: <Users size={20} /> },
  { title: 'Риски', value: 3, icon: <AlertTriangle size={20} className="text-warning" /> },
];

const recentActivity = [
  {
    id: 1,
    type: 'course',
    title: 'Создан курс "Веб-разработка 2024"',
    time: '2 часа назад',
    icon: BookOpen,
  },
  {
    id: 2,
    type: 'survey',
    title: 'Опубликован опрос для курса "Backend Advanced"',
    time: '5 часов назад',
    icon: FileCheck,
  },
  {
    id: 3,
    type: 'teams',
    title: 'Сформированы команды для проекта "Mobile App"',
    time: '1 день назад',
    icon: Users,
  },
  {
    id: 4,
    type: 'course',
    title: 'Добавлено 12 студентов в курс "Frontend Basics"',
    time: '2 дня назад',
    icon: TrendingUp,
  },
];

export function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-semibold mb-2">Главная</h1>
        <p className="text-muted-foreground">Обзор активности и статистики</p>
      </div>
      
      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <MetricCard 
            key={index}
            title={metric.title}
            value={metric.value}
            icon={metric.icon}
          />
        ))}
      </div>
      
      {/* Recent Activity */}
      <div className="bg-card border border-border rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">Последние действия</h2>
        <div className="space-y-4">
          {recentActivity.map((activity) => {
            const Icon = activity.icon;
            return (
              <div 
                key={activity.id}
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-secondary/50 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                  <Icon size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium">{activity.title}</p>
                  <p className="text-sm text-muted-foreground mt-1">{activity.time}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
