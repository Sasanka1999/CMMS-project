package com.alankaa.alankaa_cmms_backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.alankaa.alankaa_cmms_backend.dto.MaintenanceHistoryDTO;
import com.alankaa.alankaa_cmms_backend.service.MaintenanceHistoryService;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/maintenance-history")
public class MaintenanceHistoryController {

    private final MaintenanceHistoryService maintenanceHistoryService;

    @Autowired
    public MaintenanceHistoryController(MaintenanceHistoryService maintenanceHistoryService) {
        this.maintenanceHistoryService = maintenanceHistoryService;
    }

    @PostMapping
    public ResponseEntity<MaintenanceHistoryDTO> createMaintenanceHistory(@RequestBody MaintenanceHistoryDTO maintenanceHistoryDTO) {
        MaintenanceHistoryDTO createdMaintenanceHistory = maintenanceHistoryService.createMaintenanceHistory(maintenanceHistoryDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdMaintenanceHistory);
    }

    @GetMapping("/{historyId}")
    public ResponseEntity<MaintenanceHistoryDTO> getMaintenanceHistoryById(@PathVariable Long historyId) {
        MaintenanceHistoryDTO maintenanceHistory = maintenanceHistoryService.getMaintenanceHistoryById(historyId);
        return ResponseEntity.ok(maintenanceHistory);
    }

    @GetMapping
    public ResponseEntity<List<MaintenanceHistoryDTO>> getAllMaintenanceHistory() {
        List<MaintenanceHistoryDTO> maintenanceHistoryList = maintenanceHistoryService.getAllMaintenanceHistory();
        return ResponseEntity.ok(maintenanceHistoryList);
    }

    @PutMapping("/{historyId}")
    public ResponseEntity<MaintenanceHistoryDTO> updateMaintenanceHistory(@PathVariable Long historyId, @RequestBody MaintenanceHistoryDTO maintenanceHistoryDTO) throws NotFoundException {
        MaintenanceHistoryDTO updatedMaintenanceHistory = maintenanceHistoryService.updateMaintenanceHistory(historyId, maintenanceHistoryDTO);
        return ResponseEntity.ok(updatedMaintenanceHistory);
    }

    @DeleteMapping("/{historyId}")
    public ResponseEntity<Void> deleteMaintenanceHistory(@PathVariable Long historyId) throws NotFoundException {
        maintenanceHistoryService.deleteMaintenanceHistory(historyId);
        return ResponseEntity.noContent().build();
    }
}
