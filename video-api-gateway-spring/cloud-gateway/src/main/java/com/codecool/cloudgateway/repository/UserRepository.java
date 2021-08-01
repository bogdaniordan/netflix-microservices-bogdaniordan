package com.codecool.cloudgateway.repository;

import com.codecool.cloudgateway.model.DbUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<DbUser, Long> {
}
