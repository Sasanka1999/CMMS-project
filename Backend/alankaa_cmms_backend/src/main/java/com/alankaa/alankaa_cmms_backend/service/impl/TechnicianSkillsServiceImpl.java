package com.alankaa.alankaa_cmms_backend.service.impl;

import com.alankaa.alankaa_cmms_backend.dto.TechnicianSkillsDTO;
import com.alankaa.alankaa_cmms_backend.entity.TechnicianSkills;
import com.alankaa.alankaa_cmms_backend.entity.TechnicianSkillsId;
import com.alankaa.alankaa_cmms_backend.mapper.TechnicianSkillsMapper;
import com.alankaa.alankaa_cmms_backend.repository.TechnicianSkillsRepository;
import com.alankaa.alankaa_cmms_backend.service.TechnicianSkillsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class TechnicianSkillsServiceImpl implements TechnicianSkillsService {

    @Autowired
    private TechnicianSkillsRepository technicianSkillsRepository;

    @Autowired
    private TechnicianSkillsMapper technicianSkillsMapper;

    @Override
    public List<TechnicianSkillsDTO> getAllTechnicianSkills() {
        return technicianSkillsRepository.findAll().stream()
                .map(technicianSkillsMapper::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    public TechnicianSkillsDTO getTechnicianSkillById(Long technicianId, Long skillId) {
        TechnicianSkillsId id = new TechnicianSkillsId(technicianId, skillId);
        return technicianSkillsRepository.findById(id)
                .map(technicianSkillsMapper::toDTO)
                .orElse(null);
    }

    @Override
    public TechnicianSkillsDTO createTechnicianSkill(TechnicianSkillsDTO technicianSkillsDTO) {
        TechnicianSkills technicianSkills = technicianSkillsMapper.toEntity(technicianSkillsDTO);
        technicianSkills.setId(new TechnicianSkillsId(technicianSkillsDTO.getTechnicianId(), technicianSkillsDTO.getSkillId()));
        return technicianSkillsMapper.toDTO(technicianSkillsRepository.save(technicianSkills));
    }


    @Override
    public void deleteTechnicianSkill(Long technicianId, Long skillId) {
        TechnicianSkillsId id = new TechnicianSkillsId(technicianId, skillId);
        technicianSkillsRepository.deleteById(id);
    }

}
