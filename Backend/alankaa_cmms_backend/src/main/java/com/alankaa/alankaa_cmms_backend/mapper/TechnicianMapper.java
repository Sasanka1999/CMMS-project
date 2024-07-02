package com.alankaa.alankaa_cmms_backend.mapper;

import com.alankaa.alankaa_cmms_backend.dto.TechnicianDTO;
import com.alankaa.alankaa_cmms_backend.entity.Technician;

public class TechnicianMapper {
    public static TechnicianDTO mapToTechnicianDto(Technician technician) {
        return new TechnicianDTO(
                technician.getTechnicianId(),
                technician.getTechnicianName()
        );
    }

    public static Technician mapToTechnician(TechnicianDTO technicianDto) {
        return new Technician(
                technicianDto.getTechnicianId(),
                technicianDto.getTechnicianName(),
                false // Assuming 'deleted' defaults to false
        );
    }
}
