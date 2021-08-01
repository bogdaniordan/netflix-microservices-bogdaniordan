package com.codecool.cloudgateway.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity(name = "db_user")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class DbUser {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String username;
    private String password;

    // roles of the user (ADMIN, USER,..)
    @ElementCollection
    @Builder.Default
    private List<String> roles = new ArrayList<>();
}
