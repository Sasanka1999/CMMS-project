package com.alankaa.alankaa_cmms_backend.mapper;

import com.alankaa.alankaa_cmms_backend.dto.SkillsDto;
import com.alankaa.alankaa_cmms_backend.entity.Skills;

public class SkillsMapper {
    public static SkillsDto mapToSkillsDto(Skills skills) {
        return new SkillsDto(
            skills.getSkillId(),
            skills.getSkillName()
        );
    }

    public static Skills mapToSkills(SkillsDto skillsDto) {
        return new Skills(
            skillsDto.getSkillId(),
            skillsDto.getSkillName(), false
        );
    }
}

