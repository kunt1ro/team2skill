import { Modal } from './Modal';
import { Button } from './Button';
import { CheckCircle, AlertTriangle, User } from 'lucide-react';

interface ExplainabilityModalProps {
  isOpen: boolean;
  onClose: () => void;
  studentName?: string;
  teamName?: string;
}

export function ExplainabilityModal({ 
  isOpen, 
  onClose, 
  studentName = 'Иванов Иван',
  teamName = 'Alpha'
}: ExplainabilityModalProps) {
  const compatibilityScore = 87;
  
  const explanations = [
    {
      icon: CheckCircle,
      variant: 'success' as const,
      title: 'Соответствие роли',
      description: 'Ваш профиль Frontend разработчика полностью соответствует требованиям проекта. У вас есть все необходимые компетенции для этой роли.',
    },
    {
      icon: CheckCircle,
      variant: 'success' as const,
      title: 'Необходимые навыки',
      description: 'Ваши навыки отлично подходят для проекта:',
      skills: [
        { name: 'React', level: 4, max: 5 },
        { name: 'TypeScript', level: 3, max: 5 },
        { name: 'Figma', level: 4, max: 5 },
        { name: 'UI/UX Design', level: 3, max: 5 },
      ],
    },
    {
      icon: AlertTriangle,
      variant: 'warning' as const,
      title: 'Частичное совпадение по времени',
      description: 'Ваши временные окна частично пересекаются с командой. Рекомендуем обсудить график встреч. Вы доступны вечером, но некоторые члены команды предпочитают утренние встречи.',
    },
    {
      icon: CheckCircle,
      variant: 'success' as const,
      title: 'Совместимость по стилю',
      description: 'Ваш стиль работы хорошо сочетается с командой. Вы предпочитаете структурированный подход и качество, что совпадает с приоритетами других участников.',
    },
  ];
  
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={`Почему вы подходите для команды «${teamName}»`}
      size="lg"
      footer={
        <>
          <Button variant="outline" onClick={onClose}>
            Закрыть
          </Button>
          <Button variant="outline">
            <User size={18} />
            Открыть профиль
          </Button>
        </>
      }
    >
      <div className="space-y-6">
        {/* Student Header */}
        <div className="flex items-center gap-4 p-4 bg-secondary/30 rounded-xl">
          <div className="w-16 h-16 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center text-primary text-xl font-semibold flex-shrink-0">
            ИИ
          </div>
          <div>
            <h3 className="text-lg font-semibold">{studentName}</h3>
            <p className="text-sm text-muted-foreground">Frontend разработчик</p>
          </div>
        </div>
        
        {/* Explanation Cards */}
        <div className="space-y-4">
          {explanations.map((explanation, index) => {
            const Icon = explanation.icon;
            const isWarning = explanation.variant === 'warning';
            
            return (
              <div 
                key={index}
                className={`p-4 rounded-xl border-2 ${
                  isWarning 
                    ? 'bg-warning/5 border-warning/30' 
                    : 'bg-primary/5 border-primary/30'
                }`}
              >
                <div className="flex items-start gap-3">
                  <Icon 
                    size={24} 
                    className={`flex-shrink-0 mt-0.5 ${
                      isWarning ? 'text-warning' : 'text-primary'
                    }`}
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold mb-2">{explanation.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {explanation.description}
                    </p>
                    
                    {/* Skills Display */}
                    {explanation.skills && (
                      <div className="mt-3 space-y-2">
                        {explanation.skills.map((skill) => (
                          <div key={skill.name} className="flex items-center gap-3">
                            <span className="text-sm w-32">{skill.name}</span>
                            <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-primary transition-all"
                                style={{ width: `${(skill.level / skill.max) * 100}%` }}
                              />
                            </div>
                            <span className="text-sm font-medium w-12 text-right">
                              {skill.level}/{skill.max}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Overall Compatibility Score */}
        <div className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/30 rounded-xl">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold mb-1">Общая совместимость</h3>
              <p className="text-sm text-muted-foreground">Высокая совместимость с командой</p>
            </div>
            <div className="text-5xl font-bold text-primary">
              {compatibilityScore}
              <span className="text-2xl text-muted-foreground">/100</span>
            </div>
          </div>
          
          <div className="h-3 bg-secondary rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary transition-all rounded-full shadow-lg shadow-primary/50"
              style={{ width: `${compatibilityScore}%` }}
            />
          </div>
        </div>
        
        {/* Additional Actions */}
        <div className="flex gap-3 pt-2">
          <Button variant="outline" className="flex-1">
            Пересчитать команды
          </Button>
          <Button variant="outline" className="flex-1">
            Заменить участника
          </Button>
        </div>
      </div>
    </Modal>
  );
}
