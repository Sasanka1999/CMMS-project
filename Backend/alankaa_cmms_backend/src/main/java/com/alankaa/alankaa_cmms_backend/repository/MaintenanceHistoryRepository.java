package com.alankaa.alankaa_cmms_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.alankaa.alankaa_cmms_backend.entity.MaintenanceHistory;

public interface MaintenanceHistoryRepository extends JpaRepository<MaintenanceHistory, Long> {
    
}

