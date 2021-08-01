package com.codecool.cloudgateway.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class UserCredentialsResponse {
    private String username;
    private String token;
    private List<String> roles;
}
