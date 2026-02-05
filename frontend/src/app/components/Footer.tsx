import { ScrollReveal } from "./ScrollReveal";

export function Footer() {
  return (
    <footer className="py-12 border-t border-border bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4 lg:px-6">
        <ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center mb-4">
                <span className="font-semibold text-lg">Skill 2 Team</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Интеллектуальное формирование проектных команд для образовательных учреждений
              </p>
            </div>

            {/* Contacts */}
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Email: info@teambuilder.edu</li>
                <li>Телефон: +7 (495) 123-45-67</li>
                <li>Москва, Россия</li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold mb-4">Документы</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Политика конфиденциальности
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Условия использования
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Договор оферты
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>&copy; 2026 Skill 2 Team. Все права защищены.</p>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}