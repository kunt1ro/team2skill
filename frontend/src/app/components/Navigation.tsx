import { useState, type FormEvent } from "react";
import { Button } from "./ui/button";
import { motion } from "motion/react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

interface NavigationProps {
  onCtaClick: () => void;
}

interface LoginDialogProps {
  trigger: React.ReactNode;
}

function LoginDialog({ trigger }: LoginDialogProps) {
  const [mode, setMode] = useState<"login" | "forgot">("login");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"student" | "teacher">("student");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isLogin = mode === "login";
  const resetForm = () => {
    setLogin("");
    setPassword("");
    setRole("student");
    setError("");
    setIsSubmitting(false);
  };

  const handleLoginSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          login,
          password,
          role,
        }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        setError(data?.message ?? "Неверный логин или пароль для выбранной роли.");
        return;
      }

      const data: { redirect: string } = await response.json();
      window.location.href = data.redirect;
    } catch (err) {
      setError("Не удалось связаться с сервером. Попробуйте позже.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <Dialog
      onOpenChange={(open) => {
        if (!open) {
          setMode("login");
          resetForm();
        }
      }}
    >
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{isLogin ? "Авторизация" : "Восстановление пароля"}</DialogTitle>
          <DialogDescription>
            {isLogin
              ? "Введите данные для входа в личный кабинет."
              : "Введите почту, мы пришлем ссылку для восстановления."}
          </DialogDescription>
        </DialogHeader>
        <form
          className="space-y-4"
          onSubmit={isLogin ? handleLoginSubmit : (event) => event.preventDefault()}
        >
          {isLogin ? (
            <>
              <div className="space-y-2">
                <Label htmlFor="login-email">Логин</Label>
                <Input
                  id="login-email"
                  type="text"
                  placeholder="Введите логин"
                  value={login}
                  onChange={(event) => setLogin(event.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="login-password">Пароль</Label>
                <Input
                  id="login-password"
                  type="password"
                  placeholder="Введите пароль"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label>Выберите роль</Label>
                <RadioGroup
                  value={role}
                  onValueChange={(value) => setRole(value as "student" | "teacher")}
                  className="flex flex-wrap gap-4"
                >
                  <div className="flex items-center gap-2">
                    <RadioGroupItem id="role-student" value="student" />
                    <Label htmlFor="role-student" className="text-sm font-normal">
                      Студент
                    </Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem id="role-teacher" value="teacher" />
                    <Label htmlFor="role-teacher" className="text-sm font-normal">
                      Преподаватель
                    </Label>
                  </div>
                </RadioGroup>
              </div>
              {error ? <p className="text-sm text-destructive">{error}</p> : null}
              <button
                type="button"
                className="text-sm text-primary hover:text-primary/80 transition-colors"
                onClick={() => setMode("forgot")}
              >
                Забыли пароль?
              </button>
            </>
          ) : (
            <>
              <div className="space-y-2">
                <Label htmlFor="forgot-email">Почта</Label>
                <Input id="forgot-email" type="email" placeholder="name@example.com" />
              </div>
              <button
                type="button"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMode("login")}
              >
                Назад к авторизации
              </button>
            </>
          )}
          <DialogFooter>
            <Button type="submit" disabled={isSubmitting}>
              {isLogin ? "Войти" : "Отправить ссылку"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export function Navigation({ onCtaClick }: NavigationProps) {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border"
    >
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <span className="font-semibold text-lg hidden sm:inline">Skill 2 Team</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Как работает
            </a>
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Возможности
            </a>
            <a href="#for-whom" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Для кого
            </a>
            <a href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              FAQ
            </a>
            <div className="flex items-center gap-3">
              <Button onClick={onCtaClick}>Запросить пилот</Button>
              <LoginDialog trigger={<Button variant="outline">Войти</Button>} />
            </div>
          </div>

          {/* Mobile CTA */}
          <div className="md:hidden flex items-center gap-2">
            <Button onClick={onCtaClick} size="sm">
              Запросить пилот
            </Button>
            <LoginDialog
              trigger={
                <Button variant="outline" size="sm">
                  Войти
                </Button>
              }
            />
          </div>
        </div>
      </div>
    </motion.nav>
  );
}