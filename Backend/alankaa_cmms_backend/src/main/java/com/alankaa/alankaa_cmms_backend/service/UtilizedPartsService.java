package com.alankaa.alankaa_cmms_backend.service;

import com.alankaa.alankaa_cmms_backend.dto.UtilizedPartsDTO;

import java.util.List;

public interface UtilizedPartsService {
    UtilizedPartsDTO createUtilizedParts(UtilizedPartsDTO utilizedPartsDTO);

    List<UtilizedPartsDTO> getAllUtilizedParts();

    UtilizedPartsDTO getUtilizedPartsById(Long orderId, Long itemId);

    void deleteUtilizedParts(Long orderId, Long itemId);
}
