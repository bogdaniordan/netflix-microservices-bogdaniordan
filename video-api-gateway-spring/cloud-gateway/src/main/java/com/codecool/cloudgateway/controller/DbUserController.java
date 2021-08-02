package com.codecool.cloudgateway.controller;

import com.codecool.cloudgateway.model.DbUser;
import com.codecool.cloudgateway.model.UserCredentials;
import com.codecool.cloudgateway.model.UserCredentialsResponse;
import com.codecool.cloudgateway.repository.UserRepository;
import com.codecool.cloudgateway.security.JwtTokenServices;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@CrossOrigin(origins = "*")
@RestController
public class DbUserController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtTokenServices jwtTokenServices;

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/register")
    public ResponseEntity<DbUser> registerUser(@RequestBody UserCredentials userCredentials) {
        log.info("Creating a new user: " + userCredentials);
        DbUser newUser = DbUser.builder()
                .username(userCredentials.getUsername())
                .password(BCrypt.hashpw(userCredentials.getPassword(), BCrypt.gensalt(12)))
                .roles(List.of("ROLE_USER"))
                .build();
        userRepository.save(newUser);
        return new ResponseEntity<>(newUser, HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<UserCredentialsResponse> signIn(@RequestBody DbUser data) {
        try {
            String username = data.getUsername();
            // authenticationManager.authenticate calls loadUserByUsername in CustomUserDetailsService
            Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, data.getPassword()));
            List<String> roles = authentication.getAuthorities()
                    .stream()
                    .map(GrantedAuthority::getAuthority)
                    .collect(Collectors.toList());

            String token = jwtTokenServices.createToken(username, roles);

            UserCredentialsResponse userCredentialsResponse = new UserCredentialsResponse(username, token, roles);

            System.out.println(userCredentialsResponse);

            return ResponseEntity.ok(userCredentialsResponse);
        } catch (AuthenticationException e) {
            throw new BadCredentialsException("Invalid username/password supplied");
        }
    }
}
