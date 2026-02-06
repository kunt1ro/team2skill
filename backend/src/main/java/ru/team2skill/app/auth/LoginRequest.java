package ru.team2skill.app.auth;

public record LoginRequest(String login, String password, String role) {}