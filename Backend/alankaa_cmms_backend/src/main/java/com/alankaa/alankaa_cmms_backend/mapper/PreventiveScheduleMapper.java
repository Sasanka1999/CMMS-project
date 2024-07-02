package com.alankaa.alankaa_cmms_backend.mapper;

import com.alankaa.alankaa_cmms_backend.dto.PreventiveScheduleDTO;
import com.alankaa.alankaa_cmms_backend.entity.Asset;
import com.alankaa.alankaa_cmms_backend.entity.PreventiveSchedule;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

@Mapper(componentModel = "spring")
public interface PreventiveScheduleMapper {

    @Mappings({
            @Mapping(target = "assetId", source = "preventiveSchedule.asset.assetId"),
            @Mapping(target = "task", source = "preventiveSchedule.task"),
            @Mapping(target = "frequency", source = "preventiveSchedule.frequency"),
            @Mapping(target = "deleted", source = "preventiveSchedule.deleted")
    })
    PreventiveScheduleDTO toDTO(PreventiveSchedule preventiveSchedule);

    @Mappings({
            @Mapping(target = "asset", source = "asset"),
            @Mapping(target = "task", source = "preventiveScheduleDTO.task"),
            @Mapping(target = "frequency", source = "preventiveScheduleDTO.frequency"),
            @Mapping(target = "deleted", source = "preventiveScheduleDTO.deleted")
    })
    PreventiveSchedule toEntity(PreventiveScheduleDTO preventiveScheduleDTO, Asset asset);
}
