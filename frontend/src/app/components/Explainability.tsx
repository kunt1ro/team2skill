import { Check, AlertTriangle } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export function Explainability() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-background via-muted/20 to-primary/5">
      <div className="container mx-auto px-4 lg:px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Объяснение каждого решения</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Вы всегда понимаете, почему студент подходит или не подходит для команды
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="max-w-2xl mx-auto">
            {/* Mock Product UI */}
            <div className="p-6 bg-card rounded-xl border-2 border-border shadow-lg">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-primary/10 rounded-full"></div>
                  <div>
                    <p className="font-semibold">Иванов Иван</p>
                    <p className="text-sm text-muted-foreground">Frontend разработчик</p>
                  </div>
                </div>
              </div>

              <h4 className="font-semibold mb-4">Почему вы подходите для команды «Alpha»</h4>

              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3 p-3 bg-primary/5 rounded-lg">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Соответствие роли</p>
                    <p className="text-xs text-muted-foreground">Команде нужен Frontend-разработчик, ваш профиль идеально подходит</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-primary/5 rounded-lg">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Необходимые навыки</p>
                    <p className="text-xs text-muted-foreground">React (4/5), TypeScript (3/5) — команде нужны эти навыки</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-amber-50 rounded-lg border border-amber-200">
                  <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-amber-900">Частичное совпадение по времени</p>
                    <p className="text-xs text-amber-700">Можете выделить 8 часов/неделю, команде нужно 10. Рекомендуем обсудить</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-primary/5 rounded-lg">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium">Совместимость по стилю</p>
                    <p className="text-xs text-muted-foreground">Предпочитаете структурированную работу — совпадает со стилем команды</p>
                  </div>
                </div>
              </div>

              {/* Score Meter */}
              <div className="pt-4 border-t border-border">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-medium">Общая совместимость</p>
                  <p className="text-2xl font-bold text-primary">87/100</p>
                </div>
                <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                  <div className="bg-primary h-full rounded-full" style={{ width: "87%" }}></div>
                </div>
                <p className="text-xs text-muted-foreground mt-2">Высокая совместимость с командой</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}