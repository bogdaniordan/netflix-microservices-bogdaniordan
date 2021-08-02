package com.codecool.cloudgateway;

//import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.cloud.netflix.zuul.EnableZuulProxy;
import org.springframework.security.crypto.bcrypt.BCrypt;
//import com.codecool.cloudgateway.model.DbUser;
//import com.codecool.cloudgateway.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;
//import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;

import java.util.List;


@SpringBootApplication
@EnableEurekaClient
@EnableZuulProxy
//@EnableGlobalMethodSecurity(prePostEnabled = true)
public class CloudGatewayApplication {

	public static void main(String[] args) {
		SpringApplication.run(CloudGatewayApplication.class, args);
	}

//	@Bean
//	CommandLineRunner initDatabase(UserRepository userRepository) {
//		return args -> {
//			DbUser dbUser = DbUser.builder().id(1L)
//							.username("bogdan").password(BCrypt.hashpw("ilovejs", BCrypt.gensalt(12)))
//					.roles(List.of("ROLE_USER")).build();
//			userRepository.save(dbUser);
////			userRepository.save(new DbUser(1L, "bogdan", (BCrypt.hashpw("ilovejs"), BCrypt.gensalt(12)), List.of("ROLE_USER", "ADMIN_USER")));
//		};
//	}

}
