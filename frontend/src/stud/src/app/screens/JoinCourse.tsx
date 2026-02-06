import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Shield } from "lucide-react";

interface JoinCourseProps {
  onJoin: () => void;
}

export function JoinCourse({ onJoin }: JoinCourseProps) {
  const [inviteCode, setInviteCode] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inviteCode.trim()) {
      onJoin();
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-semibold mb-2 bg-gradient-to-r from-[#34D399] to-[#10B981] bg-clip-text text-transparent">
            Добро пожаловать!
          </h1>
          <p className="text-muted-foreground">
            Присоединитесь к курсу, чтобы начать
          </p>
        </div>

        <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="invite-code">Код приглашения или ссылка</Label>
              <Input
                id="invite-code"
                placeholder="Введите код или вставьте ссылку"
                value={inviteCode}
                onChange={(e) => setInviteCode(e.target.value)}
                className="bg-background border-border"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-[#34D399] hover:bg-[#2CB87E] text-black"
              disabled={!inviteCode.trim()}
            >
              Присоединиться
            </Button>
          </form>

          <div className="mt-6 p-4 bg-accent/50 rounded-xl flex gap-3">
            <Shield className="size-5 text-[#34D399] shrink-0 mt-0.5" />
            <div className="text-sm text-muted-foreground">
              <p className="font-medium text-foreground mb-1">Конфиденциальность</p>
              <p>
                Данные профиля используются только для формирования команд в рамках курса. 
                Мы не передаём информацию третьим лицам.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
