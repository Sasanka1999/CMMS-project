package com.alankaa.alankaa_cmms_backend.service;
import java.util.List;
import com.alankaa.alankaa_cmms_backend.dto.AssetDto;

public interface AssetService {
    AssetDto createAsset(AssetDto assetDto);

    AssetDto getAssetById(Long assetId);

    List<AssetDto> getAllAssets();

    AssetDto updateAsset(Long assetId, AssetDto updateAsset);

    void deleteAsset(Long assetId, boolean delete);

}
