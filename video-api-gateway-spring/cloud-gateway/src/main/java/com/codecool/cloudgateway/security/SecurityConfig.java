package com.codecool.cloudgateway.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfiguration;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.stereotype.Component;

@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private JwtTokenServices jwtTokenServices;

    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .httpBasic().disable()
                .csrf().disable()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                    .authorizeRequests()
                    .antMatchers("/auth/sign-in", "/auth/register").permitAll()
                    .antMatchers(HttpMethod.GET, "/", "video/**", "videos").permitAll()
                    .antMatchers(HttpMethod.POST, "/list").authenticated()
                    .antMatchers(HttpMethod.POST, "/video/**").authenticated()
//                    .antMatchers(HttpMethod.GET,"/todos/**").hasRole("ADMIN")
//                    .antMatchers(HttpMethod.DELETE,"/todos/**").hasRole("ADMIN")
                    .antMatchers(HttpMethod.PUT,"/todos/**").authenticated()
                    .anyRequest().denyAll()
                .and()
                    .addFilterBefore(new JwtTokenFilter(jwtTokenServices), UsernamePasswordAuthenticationFilter.class);
    }
}
