import { useState } from 'react';
import { Button } from './Button';
import { Card } from './Card';
import { Badge } from './Badge';
import { Modal } from './Modal';
import { Input, TextArea } from './Input';
import { Plus, Settings, Users, CheckCircle, AlertTriangle, Eye, Sparkles } from 'lucide-react';

interface Project {
  id: number;
  name: string;
  roles: string[];
  intensity: string;
  teamsGenerated: boolean;
}

interface Team {
  id: number;
  name: string;
  members: string[];
  roleCoverage: number;
  skillBalance: number;
  timeBalance: number;
  risk: 'low' | 'medium' | 'high';
}

const projects: Project[] = [
  {
    id: 1,
    name: 'Мобильное приложение для туризма',
    roles: ['Frontend', 'Backend', 'Дизайнер'],
    intensity: 'Высокая',
    teamsGenerated: true,
  },
  {
    id: 2,
    name: 'E-commerce платформа',
    roles: ['Frontend', 'Backend', 'PM', 'Дизайнер'],
    intensity: 'Средняя',
    teamsGenerated: true,
  },
  {
    id: 3,
    name: 'Аналитическая панель',
    roles: ['Frontend', 'Аналитик'],
    intensity: 'Низкая',
    teamsGenerated: false,
  },
];

const generatedTeams: Team[] = [
  {
    id: 1,
    name: 'Команда Alpha',
    members: ['Иванов И.', 'Петрова А.', 'Сидоров П.', 'Кузнецова М.'],
    roleCoverage: 100,
    skillBalance: 92,
    timeBalance: 88,
    risk: 'low',
  },
  {
    id: 2,
    name: 'Команда Beta',
    members: ['Смирнов Д.', 'Федорова О.', 'Морозов К.', 'Новикова Е.'],
    roleCoverage: 100,
    skillBalance: 85,
    timeBalance: 95,
    risk: 'low',
  },
  {
    id: 3,
    name: 'Команда Gamma',
    members: ['Волков А.', 'Соколова Н.', 'Лебедев В.'],
    roleCoverage: 75,
    skillBalance: 78,
    timeBalance: 70,
    risk: 'medium',
  },
];

export function Projects() {
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [isGenerateModalOpen, setIsGenerateModalOpen] = useState(false);
  const [showTeams, setShowTeams] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);
  
  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'low': return 'success';
      case 'medium': return 'warning';
      case 'high': return 'error';
      default: return 'default';
    }
  };
  
  const getRiskLabel = (risk: string) => {
    switch (risk) {
      case 'low': return 'Низкий риск';
      case 'medium': return 'Средний риск';
      case 'high': return 'Высокий риск';
      default: return 'Неизвестно';
    }
  };
  
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-3xl font-semibold mb-2">Проекты и команды</h1>
          <p className="text-muted-foreground">Управление проектами и формирование команд</p>
        </div>
        <Button onClick={() => setIsProjectModalOpen(true)}>
          <Plus size={20} />
          Добавить проект
        </Button>
      </div>
      
      {/* Projects List */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Список проектов</h2>
        <div className="grid grid-cols-1 gap-4">
          {projects.map((project) => (
            <Card key={project.id}>
              <div className="flex items-start justify-between mb-4 flex-wrap gap-4">
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-lg mb-2">{project.name}</h3>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.roles.map((role) => (
                      <Badge key={role} variant="default">{role}</Badge>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Интенсивность: <span className="text-foreground">{project.intensity}</span>
                  </p>
                </div>
                <div className="flex gap-2 flex-wrap">
                  {project.teamsGenerated ? (
                    <>
                      <Button variant="outline" size="sm" onClick={() => setShowTeams(true)}>
                        <Users size={16} />
                        Посмотреть команды
                      </Button>
                      <Button variant="outline" size="sm">
                        <Eye size={16} />
                        Отчёт
                      </Button>
                    </>
                  ) : (
                    <Button size="sm" onClick={() => setIsGenerateModalOpen(true)}>
                      <Sparkles size={16} />
                      Сформировать команды
                    </Button>
                  )}
                  <Button variant="ghost" size="sm">
                    <Settings size={16} />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
      
      {/* Generated Teams */}
      {showTeams && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Сформированные команды</h2>
            <Button variant="outline" onClick={() => setShowTeams(false)}>
              Скрыть
            </Button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {generatedTeams.map((team) => (
              <Card key={team.id} className="hover:border-primary/50 cursor-pointer" onClick={() => setSelectedTeam(team)}>
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-semibold text-lg">{team.name}</h3>
                  <Badge variant={getRiskColor(team.risk) as any}>
                    {team.risk === 'low' ? <CheckCircle size={14} /> : <AlertTriangle size={14} />}
                    {getRiskLabel(team.risk)}
                  </Badge>
                </div>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Покрытие ролей</span>
                    <span className="font-semibold">{team.roleCoverage}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary transition-all"
                      style={{ width: `${team.roleCoverage}%` }}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Баланс навыков</span>
                    <span className="font-semibold">{team.skillBalance}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-chart-2 transition-all"
                      style={{ width: `${team.skillBalance}%` }}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Баланс времени</span>
                    <span className="font-semibold">{team.timeBalance}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-chart-3 transition-all"
                      style={{ width: `${team.timeBalance}%` }}
                    />
                  </div>
                </div>
                
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Участники:</p>
                  <div className="flex flex-wrap gap-2">
                    {team.members.map((member, index) => (
                      <span key={index} className="text-sm px-2 py-1 bg-secondary rounded">
                        {member}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Button variant="outline" size="sm" className="w-full mt-4">
                  <Eye size={16} />
                  Подробнее
                </Button>
              </Card>
            ))}
          </div>
        </div>
      )}
      
      {/* Add Project Modal */}
      <Modal
        isOpen={isProjectModalOpen}
        onClose={() => setIsProjectModalOpen(false)}
        title="Добавить проект"
        footer={
          <>
            <Button variant="outline" onClick={() => setIsProjectModalOpen(false)}>
              Отмена
            </Button>
            <Button onClick={() => setIsProjectModalOpen(false)}>
              Создать
            </Button>
          </>
        }
      >
        <div className="space-y-4">
          <Input label="Название проекта" placeholder="Введите название проекта" />
          <TextArea label="Описание" placeholder="Опишите проект" />
          
          <div>
            <label className="text-sm font-medium mb-2 block">Необходимые роли</label>
            <div className="grid grid-cols-2 gap-2">
              {['Backend', 'Frontend', 'Дизайнер', 'Аналитик', 'PM', 'DevOps'].map((role) => (
                <label key={role} className="flex items-center gap-2 px-3 py-2 bg-secondary/50 rounded-lg cursor-pointer hover:bg-secondary transition-colors text-sm">
                  <input type="checkbox" className="rounded border-border accent-primary" />
                  <span>{role}</span>
                </label>
              ))}
            </div>
          </div>
          
          <div>
            <label className="text-sm font-medium mb-2 block">Интенсивность</label>
            <div className="space-y-2">
              {['Высокая (15+ часов/нед)', 'Средняя (10-15 часов/нед)', 'Низкая (до 10 часов/нед)'].map((intensity) => (
                <label key={intensity} className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg cursor-pointer hover:bg-secondary transition-colors">
                  <input type="radio" name="intensity" className="accent-primary" />
                  <span className="text-sm">{intensity}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </Modal>
      
      {/* Generate Teams Modal */}
      <Modal
        isOpen={isGenerateModalOpen}
        onClose={() => setIsGenerateModalOpen(false)}
        title="Настройки формирования команд"
        footer={
          <>
            <Button variant="outline" onClick={() => setIsGenerateModalOpen(false)}>
              Отмена
            </Button>
            <Button onClick={() => {
              setIsGenerateModalOpen(false);
              setShowTeams(true);
            }}>
              <Sparkles size={18} />
              Сформировать
            </Button>
          </>
        }
      >
        <div className="space-y-4">
          <Input label="Размер команды" type="number" defaultValue="4" min="2" max="10" />
          
          <div>
            <label className="text-sm font-medium mb-2 block">Тип результата</label>
            <div className="space-y-2">
              <label className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg cursor-pointer hover:bg-secondary transition-colors">
                <input type="radio" name="output" defaultChecked className="accent-primary" />
                <div>
                  <div className="text-sm font-medium">Топ-5 команд</div>
                  <div className="text-xs text-muted-foreground">Лучшие комбинации для проекта</div>
                </div>
              </label>
              <label className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg cursor-pointer hover:bg-secondary transition-colors">
                <input type="radio" name="output" className="accent-primary" />
                <div>
                  <div className="text-sm font-medium">Топ-10 кандидатов</div>
                  <div className="text-xs text-muted-foreground">Подходящие студенты с оценками</div>
                </div>
              </label>
            </div>
          </div>
          
          <div>
            <label className="text-sm font-medium mb-2 block">Учитывать ограничения</label>
            <div className="space-y-2">
              {['Совместимость по стилю работы', 'Временные окна встреч', 'Минимизация конфликтов'].map((constraint) => (
                <label key={constraint} className="flex items-center gap-2 px-3 py-2 bg-secondary/50 rounded-lg cursor-pointer hover:bg-secondary transition-colors text-sm">
                  <input type="checkbox" defaultChecked className="rounded border-border accent-primary" />
                  <span>{constraint}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
