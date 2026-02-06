package ru.team2skill.app;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * SPA fallback: любые пути без расширения (например /login, /dashboard)
 * форвардим на index.html, чтобы роутинг отрабатывал на фронте.
 */
@Controller
public class SpaFallbackController {

    @RequestMapping({"/student/account", "/student/account/"})
    public String forwardStudentAccount() {
        return "forward:/student/account/index.html";
    }

    @RequestMapping({"/curator/account", "/curator/account/"})
    public String forwardCuratorAccount() {
        return "forward:/curator/account/index.html";
    }

    @RequestMapping({"/{path:[^.]*}", "/**/{path:[^.]*}"})
    public String forward() {
        return "forward:/index.html";
    }
}