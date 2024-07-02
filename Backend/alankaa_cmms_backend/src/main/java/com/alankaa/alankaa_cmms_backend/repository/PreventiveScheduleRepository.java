package com.alankaa.alankaa_cmms_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.alankaa.alankaa_cmms_backend.entity.PreventiveSchedule;

@Repository
public interface PreventiveScheduleRepository extends JpaRepository<PreventiveSchedule, Long> {
}
