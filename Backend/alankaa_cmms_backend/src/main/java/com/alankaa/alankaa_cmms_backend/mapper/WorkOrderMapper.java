package com.alankaa.alankaa_cmms_backend.mapper;

import com.alankaa.alankaa_cmms_backend.dto.WorkOrderDTO;
import com.alankaa.alankaa_cmms_backend.entity.Asset;
import com.alankaa.alankaa_cmms_backend.entity.Technician;
import com.alankaa.alankaa_cmms_backend.entity.WorkOrder;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

@Mapper(componentModel = "spring")
public interface WorkOrderMapper {

    @Mappings({
            @Mapping(target = "assetId", source = "workOrder.asset.assetId"),
            @Mapping(target = "technicianId", source = "workOrder.technician.technicianId"),
            @Mapping(target = "description", source = "workOrder.description"),
            @Mapping(target = "status", source = "workOrder.status"),
            @Mapping(target = "deleted", source = "workOrder.deleted")
    })
    WorkOrderDTO toDTO(WorkOrder workOrder);

    @Mappings({
            @Mapping(target = "asset.assetId", source = "workOrderDTO.assetId"),
            @Mapping(target = "technician.technicianId", source = "workOrderDTO.technicianId"),
            @Mapping(target = "description", source = "workOrderDTO.description"),
            @Mapping(target = "status", source = "workOrderDTO.status"),
            @Mapping(target = "deleted", source = "workOrderDTO.deleted")
    })
    WorkOrder toEntity(WorkOrderDTO workOrderDTO, Asset asset, Technician technician);
}
