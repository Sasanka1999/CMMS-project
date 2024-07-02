package com.alankaa.alankaa_cmms_backend.repository;

import com.alankaa.alankaa_cmms_backend.entity.Skills;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SkillsRepository extends JpaRepository<Skills, Long> {

    @SuppressWarnings("unchecked")
    Skills save(Skills skills);

    Optional<Skills> findById(Long skillId);

    void delete(Skills skills);

}
