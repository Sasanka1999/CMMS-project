package com.alankaa.alankaa_cmms_backend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.alankaa.alankaa_cmms_backend.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    @SuppressWarnings("unchecked")
    User save(User user);

    Optional<User> findById(Long userId);

    void delete(User user);

    User findByUsername(String username);

}
