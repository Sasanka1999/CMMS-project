package com.alankaa.alankaa_cmms_backend.service.impl;

import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alankaa.alankaa_cmms_backend.dto.PreventiveScheduleDTO;
import com.alankaa.alankaa_cmms_backend.entity.Asset;
import com.alankaa.alankaa_cmms_backend.entity.PreventiveSchedule;
import com.alankaa.alankaa_cmms_backend.exceotion.ResourceNotFoundException;
import com.alankaa.alankaa_cmms_backend.mapper.PreventiveScheduleMapper;
import com.alankaa.alankaa_cmms_backend.repository.AssetRepository;
import com.alankaa.alankaa_cmms_backend.repository.PreventiveScheduleRepository;
import com.alankaa.alankaa_cmms_backend.service.PreventiveScheduleService;

@Service
public class PreventiveScheduleServiceImpl implements PreventiveScheduleService {

    private final PreventiveScheduleRepository preventiveScheduleRepository;
    private final AssetRepository assetRepository;
    private final PreventiveScheduleMapper preventiveScheduleMapper;

    @Autowired
    public PreventiveScheduleServiceImpl(PreventiveScheduleRepository preventiveScheduleRepository,
                                         AssetRepository assetRepository, PreventiveScheduleMapper preventiveScheduleMapper) {
        this.preventiveScheduleRepository = preventiveScheduleRepository;
        this.assetRepository = assetRepository;
        this.preventiveScheduleMapper = preventiveScheduleMapper;
    }

    @Override
    public PreventiveScheduleDTO createPreventiveSchedule(PreventiveScheduleDTO preventiveScheduleDTO) {
        Objects.requireNonNull(preventiveScheduleDTO, "PreventiveScheduleDTO must not be null");

        Long assetId = preventiveScheduleDTO.getAssetId();
        Objects.requireNonNull(assetId, "Asset ID must not be null");

        Asset asset = assetRepository.findById(assetId)
                .orElseThrow(() -> new ResourceNotFoundException("Asset not found with id: " + assetId));

        PreventiveSchedule preventiveSchedule = preventiveScheduleMapper.toEntity(preventiveScheduleDTO, asset);
        PreventiveSchedule savedPreventiveSchedule = preventiveScheduleRepository.save(preventiveSchedule);
        return preventiveScheduleMapper.toDTO(savedPreventiveSchedule);
    }

    @Override
    public PreventiveScheduleDTO getPreventiveScheduleById(Long scheduleId) {
        Objects.requireNonNull(scheduleId, "Schedule ID must not be null");

        PreventiveSchedule preventiveSchedule = preventiveScheduleRepository.findById(scheduleId)
                .orElseThrow(() -> new ResourceNotFoundException("Preventive Schedule not found with id: " + scheduleId));

        return preventiveScheduleMapper.toDTO(preventiveSchedule);
    }

    @Override
    public List<PreventiveScheduleDTO> getAllPreventiveSchedules() {
        List<PreventiveSchedule> preventiveSchedules = preventiveScheduleRepository.findAll();
        return preventiveSchedules.stream()
                .map(preventiveScheduleMapper::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    public PreventiveScheduleDTO updatePreventiveSchedule(Long scheduleId, PreventiveScheduleDTO preventiveScheduleDTO) {
        Objects.requireNonNull(scheduleId, "Schedule ID must not be null");
        Objects.requireNonNull(preventiveScheduleDTO, "PreventiveScheduleDTO must not be null");

        Long assetId = preventiveScheduleDTO.getAssetId();
        Objects.requireNonNull(assetId, "Asset ID must not be null");

        PreventiveSchedule existingPreventiveSchedule = preventiveScheduleRepository.findById(scheduleId)
                .orElseThrow(() -> new ResourceNotFoundException("Preventive Schedule not found with id: " + scheduleId));

        Asset asset = assetRepository.findById(assetId)
                .orElseThrow(() -> new ResourceNotFoundException("Asset not found with id: " + assetId));

        // Update existingPreventiveSchedule with new data
        existingPreventiveSchedule.setAsset(asset);
        existingPreventiveSchedule.setTask(preventiveScheduleDTO.getTask());
        existingPreventiveSchedule.setFrequency(preventiveScheduleDTO.getFrequency());

        PreventiveSchedule updatedPreventiveSchedule = preventiveScheduleRepository.save(existingPreventiveSchedule);
        return preventiveScheduleMapper.toDTO(updatedPreventiveSchedule);
    }

    @Override
    public void deletePreventiveSchedule(Long scheduleId) {
        Objects.requireNonNull(scheduleId, "Schedule ID must not be null");

        preventiveScheduleRepository.deleteById(scheduleId);
    }
}
