import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { ScrollReveal } from "./ScrollReveal";

export function CTASection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Спасибо! Мы свяжемся с вами в ближайшее время.");
    setFormData({ name: "", email: "", organization: "" });
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-primary/5 via-primary/5 to-background">
      <div className="container mx-auto px-4 lg:px-6">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Запустим пилот на вашем курсе</h2>
            <p className="text-lg text-muted-foreground">
              Оставьте заявку, и мы свяжемся с вами для обсуждения деталей
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6 p-8 bg-card rounded-xl border border-border shadow-sm">
              <div>
                <Label htmlFor="name">Ваше имя</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Иван Иванов"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="ivan@university.edu"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="organization">Организация</Label>
                <Input
                  id="organization"
                  type="text"
                  placeholder="Московский государственный университет"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  required
                  className="mt-2"
                />
              </div>

              <Button type="submit" className="w-full" size="lg">
                Запросить пилот
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                Нажимая кнопку, вы соглашаетесь с{" "}
                <a href="#" className="underline hover:text-foreground">
                  политикой конфиденциальности
                </a>
              </p>
            </form>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}