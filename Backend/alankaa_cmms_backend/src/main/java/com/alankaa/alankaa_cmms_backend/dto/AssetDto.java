package com.alankaa.alankaa_cmms_backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class AssetDto {
    private Long assetId;
    private String assetName;
    private String location;
    private String description;
    
}

