import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Slider } from "../components/ui/slider";
import { Checkbox } from "../components/ui/checkbox";
import { SkillChip } from "../components/SkillChip";
import { RoleCard } from "../components/RoleCard";
import { Plus, Save, CheckCircle2 } from "lucide-react";

const availableRoles = ["Backend", "Frontend", "Дизайнер", "Аналитик", "PM"];
const goals = [
  { id: "grant", label: "Грант" },
  { id: "grade", label: "Оценка" },
  { id: "portfolio", label: "Портфолио" },
  { id: "startup", label: "Стартап" },
];

export function ProfileScreen() {
  const [skills, setSkills] = useState([
    { id: 1, name: "React", level: 4, hasLink: true },
    { id: 2, name: "TypeScript", level: 3, hasLink: false },
    { id: 3, name: "Tailwind CSS", level: 4, hasLink: true },
  ]);

  const [selectedRoles, setSelectedRoles] = useState<Record<string, "primary" | "secondary" | null>>({
    Frontend: "primary",
    Backend: "secondary",
  });

  const [hoursPerWeek, setHoursPerWeek] = useState("15");
  const [timeSlots, setTimeSlots] = useState({
    weekdaysDay: false,
    weekdaysEvening: true,
    weekends: true,
  });

  const [workStyle, setWorkStyle] = useState({
    planning: [50],
    prototyping: [65],
    communication: [45],
  });

  const [selectedGoals, setSelectedGoals] = useState(["portfolio", "grade"]);
  const [saved, setSaved] = useState(false);

  const handleRoleClick = (role: string) => {
    const current = selectedRoles[role];
    const newRoles = { ...selectedRoles };
    
    if (!current) {
      newRoles[role] = "primary";
    } else if (current === "primary") {
      newRoles[role] = "secondary";
    } else {
      delete newRoles[role];
    }
    
    setSelectedRoles(newRoles);
  };

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Мой профиль</h1>
        {saved && (
          <div className="flex items-center gap-2 text-[#34D399] text-sm">
            <CheckCircle2 className="size-4" />
            <span>Сохранено 2 минуты назад</span>
          </div>
        )}
      </div>

      {/* Hard Skills */}
      <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Hard Skills</h2>
        
        <div className="space-y-3 mb-4">
          {skills.map((skill) => (
            <SkillChip
              key={skill.id}
              name={skill.name}
              level={skill.level}
              hasLink={skill.hasLink}
              onRemove={() => setSkills(skills.filter((s) => s.id !== skill.id))}
            />
          ))}
        </div>

        <Button variant="outline" className="w-full sm:w-auto border-[#34D399]/30 text-[#34D399] hover:bg-[#34D399]/10">
          <Plus className="size-4 mr-2" />
          Добавить навык
        </Button>
      </div>

      {/* Roles */}
      <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 shadow-lg">
        <h2 className="text-lg font-semibold mb-2">Роли</h2>
        <p className="text-sm text-muted-foreground mb-4">
          Выберите основную и дополнительные роли (нажмите несколько раз для изменения приоритета)
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {availableRoles.map((role) => (
            <RoleCard
              key={role}
              role={role}
              selected={!!selectedRoles[role]}
              priority={selectedRoles[role]}
              onClick={() => handleRoleClick(role)}
            />
          ))}
        </div>
      </div>

      {/* Availability */}
      <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Занятость</h2>
        
        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="hours">Часов в неделю</Label>
            <Input
              id="hours"
              type="number"
              value={hoursPerWeek}
              onChange={(e) => setHoursPerWeek(e.target.value)}
              className="max-w-xs bg-background border-border"
            />
          </div>

          <div className="space-y-3">
            <Label>Удобное время</Label>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Checkbox
                  id="weekdays-day"
                  checked={timeSlots.weekdaysDay}
                  onCheckedChange={(checked) =>
                    setTimeSlots({ ...timeSlots, weekdaysDay: !!checked })
                  }
                />
                <label htmlFor="weekdays-day" className="text-sm cursor-pointer">
                  Будни днём
                </label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox
                  id="weekdays-evening"
                  checked={timeSlots.weekdaysEvening}
                  onCheckedChange={(checked) =>
                    setTimeSlots({ ...timeSlots, weekdaysEvening: !!checked })
                  }
                />
                <label htmlFor="weekdays-evening" className="text-sm cursor-pointer">
                  Будни вечером
                </label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox
                  id="weekends"
                  checked={timeSlots.weekends}
                  onCheckedChange={(checked) =>
                    setTimeSlots({ ...timeSlots, weekends: !!checked })
                  }
                />
                <label htmlFor="weekends" className="text-sm cursor-pointer">
                  Выходные
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Work Style */}
      <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Стиль работы</h2>
        
        <div className="space-y-6">
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Люблю план</span>
              <span className="text-muted-foreground">Люблю хаос</span>
            </div>
            <Slider
              value={workStyle.planning}
              onValueChange={(value) => setWorkStyle({ ...workStyle, planning: value })}
              max={100}
              step={1}
              className="[&_[role=slider]]:bg-[#34D399]"
            />
          </div>

          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Быстро прототипирую</span>
              <span className="text-muted-foreground">Вылизываю качество</span>
            </div>
            <Slider
              value={workStyle.prototyping}
              onValueChange={(value) => setWorkStyle({ ...workStyle, prototyping: value })}
              max={100}
              step={1}
              className="[&_[role=slider]]:bg-[#34D399]"
            />
          </div>

          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Общительный</span>
              <span className="text-muted-foreground">Интроверт</span>
            </div>
            <Slider
              value={workStyle.communication}
              onValueChange={(value) => setWorkStyle({ ...workStyle, communication: value })}
              max={100}
              step={1}
              className="[&_[role=slider]]:bg-[#34D399]"
            />
          </div>
        </div>
      </div>

      {/* Goals */}
      <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Цели</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {goals.map((goal) => (
            <button
              key={goal.id}
              onClick={() => {
                if (selectedGoals.includes(goal.id)) {
                  setSelectedGoals(selectedGoals.filter((g) => g !== goal.id));
                } else {
                  setSelectedGoals([...selectedGoals, goal.id]);
                }
              }}
              className={`p-4 rounded-xl border-2 transition-all font-medium ${
                selectedGoals.includes(goal.id)
                  ? "border-[#34D399] bg-[#34D399]/5 text-[#34D399]"
                  : "border-border hover:border-muted-foreground/30"
              }`}
            >
              {goal.label}
            </button>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-3 sticky bottom-4 bg-background/80 backdrop-blur-sm p-4 rounded-2xl border border-border">
        <Button
          onClick={handleSave}
          className="flex-1 bg-[#34D399] hover:bg-[#2CB87E] text-black"
        >
          <Save className="size-4 mr-2" />
          Сохранить
        </Button>
        <Button
          onClick={handleSave}
          variant="outline"
          className="flex-1"
        >
          Сохранить и выйти
        </Button>
      </div>
    </div>
  );
}
