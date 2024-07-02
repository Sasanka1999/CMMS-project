package com.alankaa.alankaa_cmms_backend.service;

import com.alankaa.alankaa_cmms_backend.dto.TechnicianSkillsDTO;
import java.util.List;

public interface TechnicianSkillsService {

    List<TechnicianSkillsDTO> getAllTechnicianSkills();

    TechnicianSkillsDTO getTechnicianSkillById(Long technicianId, Long skillId);

    TechnicianSkillsDTO createTechnicianSkill(TechnicianSkillsDTO technicianSkillsDTO);

    void deleteTechnicianSkill(Long technicianId, Long skillId);
}
