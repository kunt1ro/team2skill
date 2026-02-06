import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Button } from "./ui/button";
import { CheckCircle2, AlertTriangle } from "lucide-react";
import { Progress } from "./ui/progress";

interface ExplainabilityModalProps {
  open: boolean;
  onClose: () => void;
  onViewProfile: () => void;
}

export function ExplainabilityModal({ open, onClose, onViewProfile }: ExplainabilityModalProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-xl">Почему вы подходите для команды «Alpha»</DialogTitle>
        </DialogHeader>
        
        {/* Student info */}
        <div className="flex items-center gap-4 p-4 bg-accent/50 rounded-xl">
          <Avatar className="size-12">
            <AvatarFallback className="bg-[#34D399]/20 text-[#34D399]">ИИ</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-medium">Иванов Иван</div>
            <div className="text-sm text-muted-foreground">Frontend разработчик</div>
          </div>
        </div>
        
        {/* Explanation cards */}
        <div className="space-y-3 mt-4">
          {/* Role match */}
          <div className="p-4 bg-[#34D399]/5 border border-[#34D399]/20 rounded-xl">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="size-5 text-[#34D399] shrink-0 mt-0.5" />
              <div className="flex-1">
                <h4 className="font-medium text-[#34D399] mb-1">Соответствие роли</h4>
                <p className="text-sm text-muted-foreground">
                  Ваш основной профиль «Frontend разработчик» точно соответствует требованиям проекта. Команда нуждается в специалисте с вашими компетенциями.
                </p>
              </div>
            </div>
          </div>
          
          {/* Skills match */}
          <div className="p-4 bg-[#34D399]/5 border border-[#34D399]/20 rounded-xl">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="size-5 text-[#34D399] shrink-0 mt-0.5" />
              <div className="flex-1">
                <h4 className="font-medium text-[#34D399] mb-2">��еобходимые навыки</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-foreground">React</span>
                    <span className="text-muted-foreground">4/5</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-foreground">TypeScript</span>
                    <span className="text-muted-foreground">3/5</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-foreground">Tailwind CSS</span>
                    <span className="text-muted-foreground">4/5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Time warning */}
          <div className="p-4 bg-yellow-500/5 border border-yellow-500/20 rounded-xl">
            <div className="flex items-start gap-3">
              <AlertTriangle className="size-5 text-yellow-500 shrink-0 mt-0.5" />
              <div className="flex-1">
                <h4 className="font-medium text-yellow-500 mb-1">Совпадение по времени</h4>
                <p className="text-sm text-muted-foreground">
                  Ваша доступность (будни вечером) частично пересекается с предпочтениями команды. Рекомендуем обсудить график на первой встрече.
                </p>
              </div>
            </div>
          </div>
          
          {/* Work style */}
          <div className="p-4 bg-[#34D399]/5 border border-[#34D399]/20 rounded-xl">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="size-5 text-[#34D399] shrink-0 mt-0.5" />
              <div className="flex-1">
                <h4 className="font-medium text-[#34D399] mb-1">Совместимость по стилю</h4>
                <p className="text-sm text-muted-foreground">
                  Ваш подход к работе (баланс между планированием и гибкостью, качество кода) хорошо дополняет стиль других участников команды.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Overall score */}
        <div className="mt-6 p-4 bg-accent/50 rounded-xl">
          <div className="flex items-center justify-between mb-2">
            <span className="font-medium">Общая совместимость</span>
            <span className="text-2xl font-semibold text-[#34D399]">87/100</span>
          </div>
          <Progress value={87} className="h-2 mb-2" />
          <p className="text-sm text-muted-foreground">Высокая совместимость с командой</p>
        </div>
        
        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 mt-4">
          <Button
            variant="outline"
            onClick={onClose}
            className="flex-1"
          >
            Закрыть
          </Button>
          <Button
            onClick={onViewProfile}
            className="flex-1 bg-[#34D399] hover:bg-[#2CB87E] text-black"
          >
            Открыть профиль
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
