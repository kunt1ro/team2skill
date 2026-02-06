package ru.team2skill.app.auth;

public record AuthUser(String login, String password, String role, String redirect) {}