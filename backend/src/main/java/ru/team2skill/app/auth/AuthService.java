package ru.team2skill.app.auth;

import java.util.Locale;
import java.util.Map;
import java.util.Optional;
import org.springframework.stereotype.Service;

@Service
public class AuthService {
    private final Map<String, AuthUser> users =
            Map.of(
                    "student", new AuthUser("student", "student123", "student", "/student/account"),
                    "teacher", new AuthUser("teacher", "teacher123", "teacher", "/curator/account"));

    public Optional<AuthUser> authenticate(LoginRequest request) {
        if (request == null) {
            return Optional.empty();
        }

        String login = normalize(request.login());
        String password = normalizeRaw(request.password());
        String role = normalize(request.role());

        if (login.isBlank() || password.isBlank() || role.isBlank()) {
            return Optional.empty();
        }

        AuthUser user = users.get(role);
        if (user == null) {
            return Optional.empty();
        }

        if (!user.login().equals(login) || !user.password().equals(password)) {
            return Optional.empty();
        }

        return Optional.of(user);
    }

    private String normalize(String value) {
        if (value == null) {
            return "";
        }
        return value.trim().toLowerCase(Locale.ROOT);
    }

    private String normalizeRaw(String value) {
        if (value == null) {
            return "";
        }
        return value.trim();
    }
}