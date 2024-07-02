package com.alankaa.alankaa_cmms_backend.service;

import com.alankaa.alankaa_cmms_backend.dto.SkillsDto;

import java.util.List;

public interface SkillsService {
    SkillsDto createSkill(SkillsDto skillsDto);

    SkillsDto getSkillById(Long skillId);

    List<SkillsDto> getAllSkills();

    SkillsDto updateSkill(Long skillId, SkillsDto skillsDto);

    void deleteSkill(Long skillId);
}

