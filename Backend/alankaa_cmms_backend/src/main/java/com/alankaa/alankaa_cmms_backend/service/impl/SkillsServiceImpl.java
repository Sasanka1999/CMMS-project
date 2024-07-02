package com.alankaa.alankaa_cmms_backend.service.impl;

import com.alankaa.alankaa_cmms_backend.dto.SkillsDto;
import com.alankaa.alankaa_cmms_backend.entity.Skills;
import com.alankaa.alankaa_cmms_backend.exceotion.ResourceNotFoundException;
import com.alankaa.alankaa_cmms_backend.mapper.SkillsMapper;
import com.alankaa.alankaa_cmms_backend.repository.SkillsRepository;
import com.alankaa.alankaa_cmms_backend.service.SkillsService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service

public class SkillsServiceImpl implements SkillsService {

    @Autowired
    private SkillsRepository skillsRepository;

    @Override
    public SkillsDto createSkill(SkillsDto skillsDto) {
        Skills skills = SkillsMapper.mapToSkills(skillsDto);
        Skills savedSkills = skillsRepository.save(skills);
        return SkillsMapper.mapToSkillsDto(savedSkills);
    }

    @Override
    public SkillsDto getSkillById(Long skillId) {
        Skills skills = skillsRepository.findById(skillId)
        .orElseThrow(() -> 
        new ResourceNotFoundException("Skills is not exists with given id: "+ skillId));
        return SkillsMapper.mapToSkillsDto(skills);
    }


    @Override
    public List<SkillsDto> getAllSkills() {
        List<Skills> skillsList = skillsRepository.findAll();
        return skillsList.stream().map(SkillsMapper::mapToSkillsDto)
            .collect(Collectors.toList());
    }


    @Override
    public SkillsDto updateSkill(Long skillId, SkillsDto skillsDto) {
        Skills skills = skillsRepository.findById(skillId).orElseThrow(
            () -> new ResourceNotFoundException("Skills is not exists with given id: " + skillId)
        );

        skills.setSkillName(updateSkill(skillId, skillsDto).getSkillName());
        // Set other fields as needed
        
        Skills updatedSkillsObj = skillsRepository.save(skills);
        
        return SkillsMapper.mapToSkillsDto(updatedSkillsObj);
    }

    @Override
    public void deleteSkill(Long skillId) {
        Optional<Skills> optionalSkills = skillsRepository.findById(skillId);
        if (optionalSkills.isPresent()) {
            Skills skills = optionalSkills.get();
            skillsRepository.delete(skills);
        } else {
            throw new ResourceNotFoundException("Skills not found with id: " + skillId);
        }
    }

}