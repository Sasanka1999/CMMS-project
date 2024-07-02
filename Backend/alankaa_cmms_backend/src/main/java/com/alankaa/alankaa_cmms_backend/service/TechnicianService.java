package com.alankaa.alankaa_cmms_backend.service;

import java.util.List;

import com.alankaa.alankaa_cmms_backend.dto.TechnicianDTO;

public interface TechnicianService {
    List<TechnicianDTO> getAllTechnicians();
    TechnicianDTO getTechnicianById(Long id);
    TechnicianDTO createTechnician(TechnicianDTO technicianDTO);
    TechnicianDTO updateTechnician(Long id, TechnicianDTO technicianDTO);
    void deleteTechnician(Long id);
}
