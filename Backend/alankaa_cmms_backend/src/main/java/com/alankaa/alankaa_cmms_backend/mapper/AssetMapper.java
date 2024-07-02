package com.alankaa.alankaa_cmms_backend.mapper;

import com.alankaa.alankaa_cmms_backend.dto.AssetDto;
import com.alankaa.alankaa_cmms_backend.entity.Asset;

public class AssetMapper {
    public static AssetDto mapToAssetDto(Asset asset){
        return new AssetDto(
            asset.getAssetId(),
            asset.getAssetName(),
            asset.getLocation(),
            asset.getDescription()
        );
    }

    public static Asset mapToAsset(AssetDto assetDto){
        return new Asset(
            assetDto.getAssetId(),
            assetDto.getAssetName(),
            assetDto.getLocation(),
            assetDto.getDescription(), null
           
        );
    }
}
