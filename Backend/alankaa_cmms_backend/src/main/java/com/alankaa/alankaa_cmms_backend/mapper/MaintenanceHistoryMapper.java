package com.alankaa.alankaa_cmms_backend.mapper;

import com.alankaa.alankaa_cmms_backend.dto.MaintenanceHistoryDTO;
import com.alankaa.alankaa_cmms_backend.entity.Asset;
import com.alankaa.alankaa_cmms_backend.entity.MaintenanceHistory;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

@Mapper(componentModel = "spring")
public interface MaintenanceHistoryMapper {

    @Mappings({
            @Mapping(target = "assetId", source = "maintenanceHistory.asset.assetId"),
            @Mapping(target = "maintenanceDate", source = "maintenanceHistory.maintenanceDate"),
            @Mapping(target = "description", source = "maintenanceHistory.description"),
            @Mapping(target = "deleted", source = "maintenanceHistory.deleted")
    })
    MaintenanceHistoryDTO toDTO(MaintenanceHistory maintenanceHistory);

    @Mappings({
            @Mapping(target = "asset.assetId", source = "maintenanceHistoryDTO.assetId"),
            @Mapping(target = "maintenanceDate", source = "maintenanceHistoryDTO.maintenanceDate"),
            @Mapping(target = "description", source = "maintenanceHistoryDTO.description"),
            @Mapping(target = "deleted", source = "maintenanceHistoryDTO.deleted")
    })
    MaintenanceHistory toEntity(MaintenanceHistoryDTO maintenanceHistoryDTO, Asset asset);
}
