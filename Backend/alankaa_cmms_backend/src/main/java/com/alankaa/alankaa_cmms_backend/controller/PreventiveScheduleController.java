package com.alankaa.alankaa_cmms_backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.alankaa.alankaa_cmms_backend.dto.PreventiveScheduleDTO;
import com.alankaa.alankaa_cmms_backend.service.PreventiveScheduleService;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/preventive-schedules")
public class PreventiveScheduleController {

    private final PreventiveScheduleService preventiveScheduleService;

    @Autowired
    public PreventiveScheduleController(PreventiveScheduleService preventiveScheduleService) {
        this.preventiveScheduleService = preventiveScheduleService;
    }

    @PostMapping
    public ResponseEntity<PreventiveScheduleDTO> createPreventiveSchedule(@RequestBody PreventiveScheduleDTO preventiveScheduleDTO) {
        PreventiveScheduleDTO createdPreventiveSchedule = preventiveScheduleService.createPreventiveSchedule(preventiveScheduleDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdPreventiveSchedule);
    }

    @GetMapping("/{scheduleId}")
    public ResponseEntity<PreventiveScheduleDTO> getPreventiveScheduleById(@PathVariable Long scheduleId) {
        PreventiveScheduleDTO preventiveSchedule = preventiveScheduleService.getPreventiveScheduleById(scheduleId);
        return ResponseEntity.ok(preventiveSchedule);
    }

    @GetMapping
    public ResponseEntity<List<PreventiveScheduleDTO>> getAllPreventiveSchedules() {
        List<PreventiveScheduleDTO> preventiveSchedules = preventiveScheduleService.getAllPreventiveSchedules();
        return ResponseEntity.ok(preventiveSchedules);
    }

    @PutMapping("/{scheduleId}")
    public ResponseEntity<PreventiveScheduleDTO> updatePreventiveSchedule(@PathVariable Long scheduleId, @RequestBody PreventiveScheduleDTO preventiveScheduleDTO) throws NotFoundException {
        PreventiveScheduleDTO updatedPreventiveSchedule = preventiveScheduleService.updatePreventiveSchedule(scheduleId, preventiveScheduleDTO);
        return ResponseEntity.ok(updatedPreventiveSchedule);
    }

    @DeleteMapping("/{scheduleId}")
    public ResponseEntity<Void> deletePreventiveSchedule(@PathVariable Long scheduleId) throws NotFoundException {
        preventiveScheduleService.deletePreventiveSchedule(scheduleId);
        return ResponseEntity.noContent().build();
    }
}
