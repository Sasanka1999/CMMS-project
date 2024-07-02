package com.alankaa.alankaa_cmms_backend.repository;

import com.alankaa.alankaa_cmms_backend.entity.Technician;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TechnicianRepository extends JpaRepository<Technician, Long> {
}
