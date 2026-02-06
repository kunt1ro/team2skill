package ru.team2skill.app.auth;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {
    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/api/auth/login")
    public ResponseEntity<Object> login(@RequestBody LoginRequest request) {
        return authService
                .authenticate(request)
                .map(
                        user ->
                                ResponseEntity.<Object>ok(
                                        new LoginResponse(user.role(), user.redirect())))
                .orElseGet(
                        () ->
                                ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                                        .body(
                                                new ErrorResponse(
                                                        "Неверный логин или пароль для выбранной роли.")));
    }
}