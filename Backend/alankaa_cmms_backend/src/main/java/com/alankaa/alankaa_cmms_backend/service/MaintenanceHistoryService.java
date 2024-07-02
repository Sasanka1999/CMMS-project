package com.alankaa.alankaa_cmms_backend.service;

import java.util.List;

import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;

import com.alankaa.alankaa_cmms_backend.dto.MaintenanceHistoryDTO;

public interface MaintenanceHistoryService {
    MaintenanceHistoryDTO createMaintenanceHistory(MaintenanceHistoryDTO maintenanceHistoryDTO);
    MaintenanceHistoryDTO getMaintenanceHistoryById(Long historyId);
    List<MaintenanceHistoryDTO> getAllMaintenanceHistory();
    MaintenanceHistoryDTO updateMaintenanceHistory(Long historyId, MaintenanceHistoryDTO maintenanceHistoryDTO) throws NotFoundException;
    void deleteMaintenanceHistory(Long historyId) throws NotFoundException;
}
