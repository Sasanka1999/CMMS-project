package com.alankaa.alankaa_cmms_backend.service.impl;

import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alankaa.alankaa_cmms_backend.dto.MaintenanceHistoryDTO;
import com.alankaa.alankaa_cmms_backend.entity.Asset;
import com.alankaa.alankaa_cmms_backend.entity.MaintenanceHistory;
import com.alankaa.alankaa_cmms_backend.exceotion.ResourceNotFoundException;
import com.alankaa.alankaa_cmms_backend.mapper.MaintenanceHistoryMapper;
import com.alankaa.alankaa_cmms_backend.repository.AssetRepository;
import com.alankaa.alankaa_cmms_backend.repository.MaintenanceHistoryRepository;
import com.alankaa.alankaa_cmms_backend.service.MaintenanceHistoryService;

@Service
public class MaintenanceHistoryServiceImpl implements MaintenanceHistoryService {

    private final MaintenanceHistoryRepository maintenanceHistoryRepository;
    private final AssetRepository assetRepository;
    private final MaintenanceHistoryMapper maintenanceHistoryMapper;

    @Autowired
    public MaintenanceHistoryServiceImpl(MaintenanceHistoryRepository maintenanceHistoryRepository,
            AssetRepository assetRepository, MaintenanceHistoryMapper maintenanceHistoryMapper) {
        this.maintenanceHistoryRepository = maintenanceHistoryRepository;
        this.assetRepository = assetRepository;
        this.maintenanceHistoryMapper = maintenanceHistoryMapper;
    }

    @Override
    public MaintenanceHistoryDTO createMaintenanceHistory(MaintenanceHistoryDTO maintenanceHistoryDTO) {
        Objects.requireNonNull(maintenanceHistoryDTO, "MaintenanceHistoryDTO must not be null");

        Long assetId = maintenanceHistoryDTO.getAssetId();
        Objects.requireNonNull(assetId, "Asset ID must not be null");

        Asset asset = assetRepository.findById(assetId)
                .orElseThrow(() -> new ResourceNotFoundException("Asset not found with id: " + assetId));

        MaintenanceHistory maintenanceHistory = maintenanceHistoryMapper.toEntity(maintenanceHistoryDTO, asset);
        MaintenanceHistory savedMaintenanceHistory = maintenanceHistoryRepository.save(maintenanceHistory);
        return maintenanceHistoryMapper.toDTO(savedMaintenanceHistory);
    }

    @Override
    public MaintenanceHistoryDTO getMaintenanceHistoryById(Long historyId) {
        Objects.requireNonNull(historyId, "History ID must not be null");

        MaintenanceHistory maintenanceHistory = maintenanceHistoryRepository.findById(historyId)
                .orElseThrow(() -> new ResourceNotFoundException("Maintenance History not found with id: " + historyId));

        return maintenanceHistoryMapper.toDTO(maintenanceHistory);
    }

    @Override
    public List<MaintenanceHistoryDTO> getAllMaintenanceHistory() {
        List<MaintenanceHistory> maintenanceHistories = maintenanceHistoryRepository.findAll();
        return maintenanceHistories.stream()
                .map(maintenanceHistoryMapper::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    public MaintenanceHistoryDTO updateMaintenanceHistory(Long historyId, MaintenanceHistoryDTO maintenanceHistoryDTO) {
        Objects.requireNonNull(historyId, "History ID must not be null");
        Objects.requireNonNull(maintenanceHistoryDTO, "MaintenanceHistoryDTO must not be null");

        Long assetId = maintenanceHistoryDTO.getAssetId();
        Objects.requireNonNull(assetId, "Asset ID must not be null");

        MaintenanceHistory existingMaintenanceHistory = maintenanceHistoryRepository.findById(historyId)
                .orElseThrow(() -> new ResourceNotFoundException("Maintenance History not found with id: " + historyId));

        Asset asset = assetRepository.findById(assetId)
                .orElseThrow(() -> new ResourceNotFoundException("Asset not found with id: " + assetId));

        // Update existingMaintenanceHistory with new data
        existingMaintenanceHistory.setAsset(asset);
        existingMaintenanceHistory.setMaintenanceDate(maintenanceHistoryDTO.getMaintenanceDate());
        existingMaintenanceHistory.setDescription(maintenanceHistoryDTO.getDescription());
        existingMaintenanceHistory.setDeleted(maintenanceHistoryDTO.isDeleted());

        MaintenanceHistory updatedMaintenanceHistory = maintenanceHistoryRepository.save(existingMaintenanceHistory);
        return maintenanceHistoryMapper.toDTO(updatedMaintenanceHistory);
    }

    @Override
    public void deleteMaintenanceHistory(Long historyId) {
        Objects.requireNonNull(historyId, "History ID must not be null");

        maintenanceHistoryRepository.deleteById(historyId);
    }
}
