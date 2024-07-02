package com.alankaa.alankaa_cmms_backend.service.impl;

import java.util.List;
import java.util.stream.Collectors;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.alankaa.alankaa_cmms_backend.dto.AssetDto;
import com.alankaa.alankaa_cmms_backend.entity.Asset;
import com.alankaa.alankaa_cmms_backend.exceotion.ResourceNotFoundException;
import com.alankaa.alankaa_cmms_backend.mapper.AssetMapper;
import com.alankaa.alankaa_cmms_backend.repository.AssetRepository;
import com.alankaa.alankaa_cmms_backend.service.AssetService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class AssetServiceImpl implements AssetService{

    private AssetRepository assetRepository;

    @Override
    public AssetDto createAsset(AssetDto assetDto) {
        Asset asset = AssetMapper.mapToAsset(assetDto);
       Asset savedAsset = assetRepository.save(asset); 
       return AssetMapper.mapToAssetDto(savedAsset);
    }

    @Override
    public AssetDto getAssetById(Long assetId) {
       Asset asset = assetRepository.findById(assetId)
            .orElseThrow(() -> 
            new ResourceNotFoundException("Asset is not exists with given id: "+ assetId));
       return AssetMapper.mapToAssetDto(asset);
    }

    @Override
    public List<AssetDto> getAllAssets() {
        List<Asset> assets = assetRepository.findAll();
        return assets.stream().map((asset) -> AssetMapper.mapToAssetDto(asset))
            .collect(Collectors.toList());
    }

    @Override
    public AssetDto updateAsset(Long assetId, AssetDto updateAsset) {
        Asset asset = assetRepository.findById(assetId).orElseThrow(
            () -> new ResourceNotFoundException("Asset is not exists with given id:" + assetId)
        );

        asset.setAssetName(updateAsset.getAssetName());
        asset.setLocation(updateAsset.getLocation());
        asset.setDescription(updateAsset.getDescription());
        
        Asset updateAssetObj = assetRepository.save(asset);
        
        return AssetMapper.mapToAssetDto(updateAssetObj);
    }

    @Override
    public void deleteAsset(Long assetId, boolean delete) {
        Optional<Asset> optionalAsset = assetRepository.findById(assetId);
        if (optionalAsset.isPresent()) {
            Asset asset = optionalAsset.get();
            if (delete) {
                assetRepository.delete(asset);
            } else {
                asset.setDeleted(true); // Assuming 'deleted' is the boolean delete column
                assetRepository.save(asset);
            }
        } else {
            throw new RuntimeException("Asset not found with id: " + assetId);
        }
    }

}
