package com.alankaa.alankaa_cmms_backend.service.impl;

import com.alankaa.alankaa_cmms_backend.dto.UtilizedPartsDTO;
import com.alankaa.alankaa_cmms_backend.entity.UtilizedParts;
import com.alankaa.alankaa_cmms_backend.entity.UtilizedPartsId;
import com.alankaa.alankaa_cmms_backend.mapper.UtilizedPartsMapper;
import com.alankaa.alankaa_cmms_backend.repository.UtilizedPartsRepository;
import com.alankaa.alankaa_cmms_backend.service.UtilizedPartsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UtilizedPartsServiceImpl implements UtilizedPartsService {

    @Autowired
    private UtilizedPartsRepository utilizedPartsRepository;

    @Autowired
    private UtilizedPartsMapper utilizedPartsMapper;

    @Override
    public UtilizedPartsDTO createUtilizedParts(UtilizedPartsDTO utilizedPartsDTO) {
        UtilizedParts utilizedParts = utilizedPartsMapper.toEntity(utilizedPartsDTO);
        utilizedParts = utilizedPartsRepository.save(utilizedParts);
        return utilizedPartsMapper.toDTO(utilizedParts);
    }

    @Override
    public List<UtilizedPartsDTO> getAllUtilizedParts() {
        return utilizedPartsRepository.findAll().stream()
                .map(utilizedPartsMapper::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    public UtilizedPartsDTO getUtilizedPartsById(Long orderId, Long itemId) {
        UtilizedPartsId id = new UtilizedPartsId(orderId, itemId);
        UtilizedParts utilizedParts = utilizedPartsRepository.findById(id).orElse(null);
        return utilizedPartsMapper.toDTO(utilizedParts);
    }

    @Override
    public void deleteUtilizedParts(Long orderId, Long itemId) {
        UtilizedPartsId id = new UtilizedPartsId(orderId, itemId);
        utilizedPartsRepository.deleteById(id);
    }
}
