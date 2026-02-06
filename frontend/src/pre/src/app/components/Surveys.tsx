import { useState } from 'react';
import { Button } from './Button';
import { Card } from './Card';
import { Badge } from './Badge';
import { Copy, QrCode, Edit, CheckCircle, Clock, Minus, Plus } from 'lucide-react';

const skills = [
  'React', 'Node.js', 'Python', 'Java', 'TypeScript', 'Docker', 
  'PostgreSQL', 'MongoDB', 'Figma', 'UI/UX Design'
];

export function Surveys() {
  const [surveyStatus, setSurveyStatus] = useState<'published' | 'draft'>('published');
  const [selectedSkills, setSelectedSkills] = useState<Record<string, number>>({
    'React': 4,
    'TypeScript': 3,
  });
  
  const handleCopyLink = () => {
    navigator.clipboard.writeText('https://skill2team.ru/survey/abc123');
  };
  
  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-3xl font-semibold mb-2">Опрос для студентов</h1>
          <p className="text-muted-foreground">Настройка анкеты для сбора информации</p>
        </div>
        <Button>
          <Edit size={20} />
          Редактировать вопросы
        </Button>
      </div>
      
      {/* Survey Link Card */}
      <Card>
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="font-semibold mb-1">Ссылка на опрос</h3>
            <p className="text-sm text-muted-foreground">Поделитесь этой ссылкой со студентами</p>
          </div>
          <Badge variant={surveyStatus === 'published' ? 'success' : 'warning'}>
            {surveyStatus === 'published' ? (
              <>
                <CheckCircle size={14} />
                Опубликован
              </>
            ) : (
              <>
                <Clock size={14} />
                Черновик
              </>
            )}
          </Badge>
        </div>
        
        <div className="flex gap-3 flex-wrap">
          <div className="flex-1 min-w-0 bg-secondary/50 rounded-lg px-4 py-3 font-mono text-sm overflow-x-auto">
            https://skill2team.ru/survey/abc123
          </div>
          <Button variant="outline" onClick={handleCopyLink}>
            <Copy size={18} />
            Копировать
          </Button>
          <Button variant="outline">
            <QrCode size={18} />
            QR-код
          </Button>
        </div>
      </Card>
      
      {/* Survey Builder */}
      <div className="space-y-6">
        {/* Hard Skills Section */}
        <Card>
          <h3 className="font-semibold mb-4">1. Технические навыки</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Оцените свой уровень владения технологиями от 0 до 5
          </p>
          
          <div className="space-y-3">
            {skills.map((skill) => (
              <div key={skill} className="flex items-center gap-4">
                <span className="text-sm w-32">{skill}</span>
                <div className="flex-1 flex items-center gap-2">
                  <input 
                    type="range" 
                    min="0" 
                    max="5" 
                    value={selectedSkills[skill] || 0}
                    onChange={(e) => setSelectedSkills({ ...selectedSkills, [skill]: Number(e.target.value) })}
                    className="flex-1 accent-primary"
                  />
                  <span className="text-sm font-medium w-8 text-center">
                    {selectedSkills[skill] || 0}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Card>
        
        {/* Roles Section */}
        <Card>
          <h3 className="font-semibold mb-4">2. Предпочитаемые роли</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Выберите роли, в которых вы хотите работать (можно несколько)
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {['Backend', 'Frontend', 'Дизайнер', 'Аналитик', 'PM', 'DevOps'].map((role) => (
              <label key={role} className="flex items-center gap-2 px-4 py-3 bg-secondary/50 rounded-lg cursor-pointer hover:bg-secondary transition-colors">
                <input type="checkbox" className="rounded border-border accent-primary" />
                <span className="text-sm">{role}</span>
              </label>
            ))}
          </div>
        </Card>
        
        {/* Availability Section */}
        <Card>
          <h3 className="font-semibold mb-4">3. Занятость</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Укажите сколько часов в неделю вы готовы работать над проектом
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="text-sm w-32">Часов в неделю:</span>
              <div className="flex items-center gap-3">
                <Button variant="outline" size="sm">
                  <Minus size={16} />
                </Button>
                <span className="text-lg font-semibold w-12 text-center">10</span>
                <Button variant="outline" size="sm">
                  <Plus size={16} />
                </Button>
              </div>
            </div>
            
            <div>
              <label className="text-sm font-medium mb-2 block">Удобное время для встреч:</label>
              <div className="grid grid-cols-2 gap-2">
                {['Утро (9-12)', 'День (12-18)', 'Вечер (18-21)', 'Выходные'].map((time) => (
                  <label key={time} className="flex items-center gap-2 px-3 py-2 bg-secondary/50 rounded-lg cursor-pointer hover:bg-secondary transition-colors text-sm">
                    <input type="checkbox" className="rounded border-border accent-primary" />
                    <span>{time}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </Card>
        
        {/* Work Style Section */}
        <Card>
          <h3 className="font-semibold mb-4">4. Стиль работы</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Выберите что вам ближе по стилю работы
          </p>
          
          <div className="space-y-4">
            {[
              { left: 'Люблю план', right: 'Люблю хаос' },
              { left: 'Быстро прототипирую', right: 'Вылизываю качество' },
              { left: 'Общительный', right: 'Интроверт' },
            ].map((style, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>{style.left}</span>
                  <span>{style.right}</span>
                </div>
                <input 
                  type="range" 
                  min="0" 
                  max="10" 
                  defaultValue="5"
                  className="w-full accent-primary"
                />
              </div>
            ))}
          </div>
        </Card>
        
        {/* Goals Section */}
        <Card>
          <h3 className="font-semibold mb-4">5. Цели участия в проекте</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Что для вас важно в этом проекте?
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {['Грант или финансирование', 'Высокая оценка', 'Портфолио', 'Запустить стартап'].map((goal) => (
              <label key={goal} className="flex items-center gap-2 px-4 py-3 bg-secondary/50 rounded-lg cursor-pointer hover:bg-secondary transition-colors">
                <input type="checkbox" className="rounded border-border accent-primary" />
                <span className="text-sm">{goal}</span>
              </label>
            ))}
          </div>
        </Card>
      </div>
      
      {/* Preview Button */}
      <div className="flex justify-center">
        <Button variant="outline" size="lg">
          Предпросмотр формы студента
        </Button>
      </div>
    </div>
  );
}
