package com.alankaa.alankaa_cmms_backend.mapper;

import com.alankaa.alankaa_cmms_backend.dto.UtilizedPartsDTO;
import com.alankaa.alankaa_cmms_backend.entity.UtilizedParts;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

@Mapper(componentModel = "spring")
public interface UtilizedPartsMapper {

    @Mappings({
        @Mapping(source = "id.orderId", target = "orderId"),
        @Mapping(source = "id.itemId", target = "itemId")
    })
    UtilizedPartsDTO toDTO(UtilizedParts utilizedParts);

    @Mappings({
        @Mapping(source = "orderId", target = "id.orderId"),
        @Mapping(source = "itemId", target = "id.itemId")
    })
    UtilizedParts toEntity(UtilizedPartsDTO utilizedPartsDTO);
}
