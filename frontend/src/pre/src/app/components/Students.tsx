import { useState } from 'react';
import { Button } from './Button';
import { Badge } from './Badge';
import { Input } from './Input';
import { Eye, Search, Filter, CheckCircle, Clock, X } from 'lucide-react';
import { ExplainabilityModal } from './ExplainabilityModal';

interface Student {
  id: number;
  name: string;
  role: string;
  skills: string[];
  hoursPerWeek: number;
  surveyCompleted: boolean;
}

const students: Student[] = [
  {
    id: 1,
    name: 'Иванов Иван',
    role: 'Frontend',
    skills: ['React', 'TypeScript', 'Figma'],
    hoursPerWeek: 12,
    surveyCompleted: true,
  },
  {
    id: 2,
    name: 'Петрова Анна',
    role: 'Backend',
    skills: ['Node.js', 'PostgreSQL', 'Docker'],
    hoursPerWeek: 15,
    surveyCompleted: true,
  },
  {
    id: 3,
    name: 'Сидоров Петр',
    role: 'Дизайнер',
    skills: ['Figma', 'UI/UX Design'],
    hoursPerWeek: 10,
    surveyCompleted: false,
  },
  {
    id: 4,
    name: 'Кузнецова Мария',
    role: 'Frontend',
    skills: ['React', 'CSS', 'JavaScript'],
    hoursPerWeek: 8,
    surveyCompleted: true,
  },
  {
    id: 5,
    name: 'Смирнов Дмитрий',
    role: 'Backend',
    skills: ['Python', 'Django', 'MongoDB'],
    hoursPerWeek: 14,
    surveyCompleted: true,
  },
  {
    id: 6,
    name: 'Федорова Ольга',
    role: 'Аналитик',
    skills: ['SQL', 'Python', 'Excel'],
    hoursPerWeek: 10,
    surveyCompleted: false,
  },
];

export function Students() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRole, setSelectedRole] = useState<string>('all');
  const [surveyFilter, setSurveyFilter] = useState<string>('all');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  
  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         student.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesRole = selectedRole === 'all' || student.role === selectedRole;
    const matchesSurvey = surveyFilter === 'all' || 
                         (surveyFilter === 'completed' && student.surveyCompleted) ||
                         (surveyFilter === 'pending' && !student.surveyCompleted);
    return matchesSearch && matchesRole && matchesSurvey;
  });
  
  const roles = ['all', 'Frontend', 'Backend', 'Дизайнер', 'Аналитик', 'PM'];
  
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-semibold mb-2">Студенты</h1>
        <p className="text-muted-foreground">Список студентов и их профили</p>
      </div>
      
      {/* Search and Filters */}
      <div className="space-y-4">
        <div className="flex gap-3 flex-wrap">
          <div className="flex-1 min-w-[250px] relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
            <input
              type="text"
              placeholder="Поиск по имени или навыкам..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-input-background border border-input rounded-xl pl-10 pr-4 py-2.5 
                focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary
                placeholder:text-muted-foreground transition-all"
            />
          </div>
          <Button 
            variant="outline" 
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter size={20} />
            Фильтры
          </Button>
        </div>
        
        {/* Filter Panel */}
        {showFilters && (
          <div className="bg-card border border-border rounded-xl p-4 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Фильтры</h3>
              <button 
                onClick={() => setShowFilters(false)}
                className="text-muted-foreground hover:text-foreground"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Роль</label>
                <div className="flex flex-wrap gap-2">
                  {roles.map((role) => (
                    <button
                      key={role}
                      onClick={() => setSelectedRole(role)}
                      className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                        selectedRole === role
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                      }`}
                    >
                      {role === 'all' ? 'Все' : role}
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Статус анкеты</label>
                <div className="flex flex-wrap gap-2">
                  {[
                    { value: 'all', label: 'Все' },
                    { value: 'completed', label: 'Заполнена' },
                    { value: 'pending', label: 'Не заполнена' },
                  ].map((option) => (
                    <button
                      key={option.value}
                      onClick={() => setSurveyFilter(option.value)}
                      className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                        surveyFilter === option.value
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Students Table */}
      <div className="bg-card border border-border rounded-xl overflow-hidden">
        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full">
            <thead className="bg-secondary/50 border-b border-border">
              <tr>
                <th className="text-left px-6 py-4 text-sm font-medium">ФИО</th>
                <th className="text-left px-6 py-4 text-sm font-medium">Роль</th>
                <th className="text-left px-6 py-4 text-sm font-medium">Навыки</th>
                <th className="text-left px-6 py-4 text-sm font-medium">Часы/нед</th>
                <th className="text-left px-6 py-4 text-sm font-medium">Анкета</th>
                <th className="text-left px-6 py-4 text-sm font-medium">Действия</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((student) => (
                <tr key={student.id} className="border-b border-border last:border-0 hover:bg-secondary/30 transition-colors">
                  <td className="px-6 py-4 font-medium">{student.name}</td>
                  <td className="px-6 py-4">
                    <Badge variant="default">{student.role}</Badge>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-1">
                      {student.skills.map((skill, index) => (
                        <span key={index} className="text-xs px-2 py-1 bg-secondary rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">{student.hoursPerWeek}</td>
                  <td className="px-6 py-4">
                    <Badge variant={student.surveyCompleted ? 'success' : 'warning'}>
                      {student.surveyCompleted ? (
                        <>
                          <CheckCircle size={14} />
                          Заполнена
                        </>
                      ) : (
                        <>
                          <Clock size={14} />
                          Ожидание
                        </>
                      )}
                    </Badge>
                  </td>
                  <td className="px-6 py-4">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => setSelectedStudent(student)}
                    >
                      <Eye size={16} />
                      Просмотр
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Mobile Cards */}
        <div className="md:hidden space-y-4 p-4">
          {filteredStudents.map((student) => (
            <div key={student.id} className="bg-secondary/30 rounded-xl p-4 space-y-3">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold">{student.name}</h3>
                  <Badge variant="default" className="mt-1">{student.role}</Badge>
                </div>
                <Badge variant={student.surveyCompleted ? 'success' : 'warning'}>
                  {student.surveyCompleted ? <CheckCircle size={14} /> : <Clock size={14} />}
                </Badge>
              </div>
              <div className="flex flex-wrap gap-1">
                {student.skills.map((skill, index) => (
                  <span key={index} className="text-xs px-2 py-1 bg-secondary rounded">
                    {skill}
                  </span>
                ))}
              </div>
              <div className="text-sm text-muted-foreground">
                {student.hoursPerWeek} часов/неделю
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full"
                onClick={() => setSelectedStudent(student)}
              >
                <Eye size={16} />
                Просмотр профиля
              </Button>
            </div>
          ))}
        </div>
      </div>
      
      {/* Student Details Modal */}
      {selectedStudent && (
        <ExplainabilityModal
          isOpen={!!selectedStudent}
          onClose={() => setSelectedStudent(null)}
          studentName={selectedStudent.name}
          teamName="Alpha"
        />
      )}
    </div>
  );
}
