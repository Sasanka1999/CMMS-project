package com.alankaa.alankaa_cmms_backend.service.impl;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alankaa.alankaa_cmms_backend.dto.TechnicianDTO;
import com.alankaa.alankaa_cmms_backend.entity.Technician;
import com.alankaa.alankaa_cmms_backend.exceotion.ResourceNotFoundException;
import com.alankaa.alankaa_cmms_backend.mapper.TechnicianMapper;
import com.alankaa.alankaa_cmms_backend.repository.TechnicianRepository;
import com.alankaa.alankaa_cmms_backend.service.TechnicianService;

import lombok.AllArgsConstructor;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class TechnicianServiceImpl implements TechnicianService {

    @Autowired
    private TechnicianRepository technicianRepository;

    @Override
    public TechnicianDTO createTechnician(TechnicianDTO technicianDto) {
        Technician technician = TechnicianMapper.mapToTechnician(technicianDto);
        Technician savedTechnician = technicianRepository.save(technician);
        return TechnicianMapper.mapToTechnicianDto(savedTechnician);
    }

    @Override
    public TechnicianDTO getTechnicianById(Long technicianId) {
        Technician technician = technicianRepository.findById(technicianId)
                .orElseThrow(() -> new ResourceNotFoundException("Technician not found with id: " + technicianId));
        return TechnicianMapper.mapToTechnicianDto(technician);
    }

    @Override
    public List<TechnicianDTO> getAllTechnicians() {
        List<Technician> technicians = technicianRepository.findAll();
        return technicians.stream()
                .map(TechnicianMapper::mapToTechnicianDto)
                .collect(Collectors.toList());
    }

    @Override
    public TechnicianDTO updateTechnician(Long technicianId, TechnicianDTO updateTechnician) {
        Technician technician = technicianRepository.findById(technicianId)
                .orElseThrow(() -> new ResourceNotFoundException("Technician not found with id: " + technicianId));

        technician.setTechnicianName(updateTechnician.getTechnicianName());
        Technician updatedTechnician = technicianRepository.save(technician);

        return TechnicianMapper.mapToTechnicianDto(updatedTechnician);
    }

    @Override
    public void deleteTechnician(Long technicianId) {
        Optional<Technician> optionalTechnician = technicianRepository.findById(technicianId);
        optionalTechnician.ifPresentOrElse(
                technicianRepository::delete,
                () -> {
                    throw new ResourceNotFoundException("Technician not found with id: " + technicianId);
                }
        );
    }
}
