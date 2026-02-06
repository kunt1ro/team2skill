import { Card } from './Card';
import { Button } from './Button';
import { Badge } from './Badge';
import { FileDown, TrendingUp, AlertTriangle, Users, BarChart3 } from 'lucide-react';

const roleDistribution = [
  { role: 'Frontend', count: 45, percentage: 30 },
  { role: 'Backend', count: 42, percentage: 28 },
  { role: 'Дизайнер', count: 30, percentage: 20 },
  { role: 'Аналитик', count: 21, percentage: 14 },
  { role: 'PM', count: 12, percentage: 8 },
];

const projectRisks = [
  { 
    project: 'Мобильное приложение для туризма', 
    risk: 'medium',
    issues: ['Дисбаланс по времени в команде Beta'],
  },
  { 
    project: 'E-commerce платформа', 
    risk: 'low',
    issues: [],
  },
  { 
    project: 'Аналитическая панель', 
    risk: 'high',
    issues: ['Нехватка аналитиков', 'Временные конфликты'],
  },
];

const workloadBalance = [
  { team: 'Команда Alpha', avgHours: 12, minHours: 10, maxHours: 15, balance: 'good' },
  { team: 'Команда Beta', avgHours: 11, minHours: 6, maxHours: 18, balance: 'poor' },
  { team: 'Команда Gamma', avgHours: 13, minHours: 11, maxHours: 14, balance: 'good' },
];

export function Reports() {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-3xl font-semibold mb-2">Отчёты</h1>
          <p className="text-muted-foreground">Аналитика и статистика по проектам</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <FileDown size={20} />
            Экспорт CSV
          </Button>
          <Button variant="outline">
            <FileDown size={20} />
            Экспорт PDF
          </Button>
        </div>
      </div>
      
      {/* Role Distribution */}
      <Card>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
            <Users className="text-primary" size={20} />
          </div>
          <div>
            <h2 className="text-xl font-semibold">Распределение ролей по командам</h2>
            <p className="text-sm text-muted-foreground">Общая статистика по ролям</p>
          </div>
        </div>
        
        <div className="space-y-4">
          {roleDistribution.map((item) => (
            <div key={item.role} className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium">{item.role}</span>
                <span className="text-muted-foreground">
                  {item.count} студентов ({item.percentage}%)
                </span>
              </div>
              <div className="h-3 bg-secondary rounded-full overflow-hidden">
                <div 
                  className="h-full bg-primary transition-all"
                  style={{ width: `${item.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 pt-6 border-t border-border">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-semibold text-primary">150</div>
              <div className="text-sm text-muted-foreground">Всего студентов</div>
            </div>
            <div>
              <div className="text-2xl font-semibold text-chart-2">8</div>
              <div className="text-sm text-muted-foreground">Активных команд</div>
            </div>
            <div>
              <div className="text-2xl font-semibold text-chart-3">94%</div>
              <div className="text-sm text-muted-foreground">Покрытие ролей</div>
            </div>
          </div>
        </div>
      </Card>
      
      {/* Project Risks */}
      <Card>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-warning/20 flex items-center justify-center">
            <AlertTriangle className="text-warning" size={20} />
          </div>
          <div>
            <h2 className="text-xl font-semibold">Риски по проектам</h2>
            <p className="text-sm text-muted-foreground">Проблемы требующие внимания</p>
          </div>
        </div>
        
        <div className="space-y-4">
          {projectRisks.map((item, index) => {
            const riskColors = {
              low: 'success' as const,
              medium: 'warning' as const,
              high: 'error' as const,
            };
            
            const riskLabels = {
              low: 'Низкий риск',
              medium: 'Средний риск',
              high: 'Высокий риск',
            };
            
            return (
              <div key={index} className="p-4 bg-secondary/30 rounded-xl">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-semibold">{item.project}</h3>
                  <Badge variant={riskColors[item.risk]}>
                    {riskLabels[item.risk]}
                  </Badge>
                </div>
                
                {item.issues.length > 0 ? (
                  <ul className="space-y-1">
                    {item.issues.map((issue, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <AlertTriangle size={16} className="text-warning flex-shrink-0 mt-0.5" />
                        {issue}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-muted-foreground">Проблем не обнаружено</p>
                )}
              </div>
            );
          })}
        </div>
      </Card>
      
      {/* Workload Balance */}
      <Card>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-chart-2/20 flex items-center justify-center">
            <BarChart3 className="text-chart-2" size={20} />
          </div>
          <div>
            <h2 className="text-xl font-semibold">Баланс нагрузки</h2>
            <p className="text-sm text-muted-foreground">Часы работы по командам</p>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-border">
              <tr>
                <th className="text-left px-4 py-3 text-sm font-medium">Команда</th>
                <th className="text-left px-4 py-3 text-sm font-medium">Среднее</th>
                <th className="text-left px-4 py-3 text-sm font-medium">Минимум</th>
                <th className="text-left px-4 py-3 text-sm font-medium">Максимум</th>
                <th className="text-left px-4 py-3 text-sm font-medium">Баланс</th>
              </tr>
            </thead>
            <tbody>
              {workloadBalance.map((item, index) => (
                <tr key={index} className="border-b border-border last:border-0">
                  <td className="px-4 py-3 font-medium">{item.team}</td>
                  <td className="px-4 py-3">{item.avgHours} ч/нед</td>
                  <td className="px-4 py-3 text-muted-foreground">{item.minHours} ч/нед</td>
                  <td className="px-4 py-3 text-muted-foreground">{item.maxHours} ч/нед</td>
                  <td className="px-4 py-3">
                    <Badge variant={item.balance === 'good' ? 'success' : 'warning'}>
                      {item.balance === 'good' ? 'Хороший' : 'Требует внимания'}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-xl">
          <div className="flex items-start gap-3">
            <TrendingUp className="text-primary flex-shrink-0 mt-0.5" size={20} />
            <div>
              <h4 className="font-semibold mb-1">Рекомендация</h4>
              <p className="text-sm text-muted-foreground">
                Команда Beta имеет большой разброс по часам работы (6-18 часов). Рекомендуем 
                перераспределить нагрузку или обсудить график с участниками.
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
