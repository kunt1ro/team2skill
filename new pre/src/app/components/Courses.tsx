import { useState } from 'react';
import { Button } from './Button';
import { Modal } from './Modal';
import { Input, Select } from './Input';
import { Badge } from './Badge';
import { Plus, Settings, FileText, Eye, Calendar, Users as UsersIcon } from 'lucide-react';

interface Course {
  id: number;
  name: string;
  period: string;
  students: number;
  surveys: number;
  projects: number;
  status: 'active' | 'completed' | 'draft';
}

const courses: Course[] = [
  {
    id: 1,
    name: 'Веб-разработка 2024',
    period: '15.01.2024 - 30.06.2024',
    students: 24,
    surveys: 2,
    projects: 3,
    status: 'active',
  },
  {
    id: 2,
    name: 'Backend Advanced',
    period: '01.02.2024 - 31.05.2024',
    students: 18,
    surveys: 1,
    projects: 2,
    status: 'active',
  },
  {
    id: 3,
    name: 'Frontend Basics',
    period: '10.12.2023 - 28.02.2024',
    students: 30,
    surveys: 3,
    projects: 4,
    status: 'completed',
  },
];

const roles = [
  { value: 'backend', label: 'Backend' },
  { value: 'frontend', label: 'Frontend' },
  { value: 'designer', label: 'Дизайнер' },
  { value: 'analyst', label: 'Аналитик' },
  { value: 'pm', label: 'PM' },
];

export function Courses() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    startDate: '',
    endDate: '',
    teamSize: '4',
    priority: 'balance',
  });
  
  const statusColors = {
    active: 'success' as const,
    completed: 'default' as const,
    draft: 'warning' as const,
  };
  
  const statusLabels = {
    active: 'Активный',
    completed: 'Завершён',
    draft: 'Черновик',
  };
  
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-3xl font-semibold mb-2">Курсы и группы</h1>
          <p className="text-muted-foreground">Управление учебными курсами</p>
        </div>
        <Button onClick={() => setIsModalOpen(true)}>
          <Plus size={20} />
          Создать курс
        </Button>
      </div>
      
      {/* Courses Table */}
      <div className="bg-card border border-border rounded-xl overflow-hidden">
        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full">
            <thead className="bg-secondary/50 border-b border-border">
              <tr>
                <th className="text-left px-6 py-4 text-sm font-medium">Название</th>
                <th className="text-left px-6 py-4 text-sm font-medium">Период</th>
                <th className="text-left px-6 py-4 text-sm font-medium">Студенты</th>
                <th className="text-left px-6 py-4 text-sm font-medium">Анкеты</th>
                <th className="text-left px-6 py-4 text-sm font-medium">Проекты</th>
                <th className="text-left px-6 py-4 text-sm font-medium">Статус</th>
                <th className="text-left px-6 py-4 text-sm font-medium">Действия</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course) => (
                <tr key={course.id} className="border-b border-border last:border-0 hover:bg-secondary/30 transition-colors">
                  <td className="px-6 py-4 font-medium">{course.name}</td>
                  <td className="px-6 py-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      {course.period}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <UsersIcon size={16} className="text-muted-foreground" />
                      {course.students}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">{course.surveys}</td>
                  <td className="px-6 py-4 text-center">{course.projects}</td>
                  <td className="px-6 py-4">
                    <Badge variant={statusColors[course.status]}>
                      {statusLabels[course.status]}
                    </Badge>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm">
                        <Eye size={16} />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Settings size={16} />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <FileText size={16} />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Mobile Cards */}
        <div className="md:hidden space-y-4 p-4">
          {courses.map((course) => (
            <div key={course.id} className="bg-secondary/30 rounded-xl p-4 space-y-3">
              <div className="flex items-start justify-between">
                <h3 className="font-semibold">{course.name}</h3>
                <Badge variant={statusColors[course.status]}>
                  {statusLabels[course.status]}
                </Badge>
              </div>
              <div className="text-sm text-muted-foreground space-y-2">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  {course.period}
                </div>
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <UsersIcon size={16} />
                    {course.students} студентов
                  </span>
                  <span>Анкеты: {course.surveys}</span>
                  <span>Проекты: {course.projects}</span>
                </div>
              </div>
              <div className="flex gap-2 pt-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Eye size={16} />
                  Открыть
                </Button>
                <Button variant="ghost" size="sm">
                  <Settings size={16} />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Create Course Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Создать курс"
        footer={
          <>
            <Button variant="outline" onClick={() => setIsModalOpen(false)}>
              Отмена
            </Button>
            <Button onClick={() => {
              console.log('Creating course:', formData);
              setIsModalOpen(false);
            }}>
              Создать
            </Button>
          </>
        }
      >
        <div className="space-y-4">
          <Input
            label="Название курса"
            placeholder="Введите название курса"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="Дата начала"
              type="date"
              value={formData.startDate}
              onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
            />
            <Input
              label="Дата окончания"
              type="date"
              value={formData.endDate}
              onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
            />
          </div>
          
          <Input
            label="Размер команды"
            type="number"
            min="2"
            max="10"
            value={formData.teamSize}
            onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
          />
          
          <div>
            <label className="text-sm font-medium mb-2 block">Обязательные роли</label>
            <div className="flex flex-wrap gap-2">
              {roles.map((role) => (
                <label key={role.value} className="flex items-center gap-2 px-3 py-2 bg-secondary rounded-lg cursor-pointer hover:bg-secondary/80 transition-colors">
                  <input type="checkbox" className="rounded border-border" />
                  <span className="text-sm">{role.label}</span>
                </label>
              ))}
            </div>
          </div>
          
          <div>
            <label className="text-sm font-medium mb-3 block">Приоритеты формирования команд</label>
            <div className="space-y-2">
              {[
                { value: 'balance', label: 'Баланс навыков' },
                { value: 'workload', label: 'Равномерная нагрузка' },
                { value: 'conflicts', label: 'Минимум конфликтов' },
              ].map((priority) => (
                <label key={priority.value} className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg cursor-pointer hover:bg-secondary transition-colors">
                  <input
                    type="radio"
                    name="priority"
                    value={priority.value}
                    checked={formData.priority === priority.value}
                    onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                    className="text-primary"
                  />
                  <span>{priority.label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
