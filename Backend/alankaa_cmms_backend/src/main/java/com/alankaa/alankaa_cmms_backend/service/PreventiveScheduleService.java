package com.alankaa.alankaa_cmms_backend.service;

import java.util.List;

import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;

import com.alankaa.alankaa_cmms_backend.dto.PreventiveScheduleDTO;

public interface PreventiveScheduleService {
    PreventiveScheduleDTO createPreventiveSchedule(PreventiveScheduleDTO preventiveScheduleDTO);
    PreventiveScheduleDTO getPreventiveScheduleById(Long scheduleId);
    List<PreventiveScheduleDTO> getAllPreventiveSchedules();
    PreventiveScheduleDTO updatePreventiveSchedule(Long scheduleId, PreventiveScheduleDTO preventiveScheduleDTO) throws NotFoundException;
    void deletePreventiveSchedule(Long scheduleId) throws NotFoundException;
}
