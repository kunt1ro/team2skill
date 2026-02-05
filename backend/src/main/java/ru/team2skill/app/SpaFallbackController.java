package ru.team2skill.app;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * SPA fallback: любые пути без расширения (например /login, /dashboard)
 * форвардим на index.html, чтобы роутинг отрабатывал на фронте.
 */
@Controller
public class SpaFallbackController {

    @RequestMapping({"/{path:[^.]*}", "/**/{path:[^.]*}"})
    public String forward() {
        return "forward:/index.html";
    }
}
