package com.alankaa.alankaa_cmms_backend.mapper;

import com.alankaa.alankaa_cmms_backend.dto.TechnicianSkillsDTO;
import com.alankaa.alankaa_cmms_backend.entity.TechnicianSkills;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

@Mapper(componentModel = "spring")
public interface TechnicianSkillsMapper {

    @Mappings({
        @Mapping(source = "id.technicianId", target = "technicianId"),
        @Mapping(source = "id.skillId", target = "skillId")
    })
    TechnicianSkillsDTO toDTO(TechnicianSkills technicianSkills);

    @Mappings({
        @Mapping(source = "technicianId", target = "id.technicianId"),
        @Mapping(source = "skillId", target = "id.skillId")
    })
    TechnicianSkills toEntity(TechnicianSkillsDTO technicianSkillsDTO);
}
