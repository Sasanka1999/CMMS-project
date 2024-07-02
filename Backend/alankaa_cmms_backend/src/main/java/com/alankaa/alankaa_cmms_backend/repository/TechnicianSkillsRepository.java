package com.alankaa.alankaa_cmms_backend.repository;

import com.alankaa.alankaa_cmms_backend.entity.TechnicianSkills;
import com.alankaa.alankaa_cmms_backend.entity.TechnicianSkillsId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TechnicianSkillsRepository extends JpaRepository<TechnicianSkills, TechnicianSkillsId> {
}
