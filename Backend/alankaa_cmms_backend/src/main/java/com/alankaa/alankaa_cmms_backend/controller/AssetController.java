package com.alankaa.alankaa_cmms_backend.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.alankaa.alankaa_cmms_backend.dto.AssetDto;
import com.alankaa.alankaa_cmms_backend.service.AssetService;

import lombok.AllArgsConstructor;


@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/assets")
public class AssetController {

    private AssetService assetService;

    // build add asset rest api
    @PostMapping
    public ResponseEntity<AssetDto> createAsset(@RequestBody AssetDto assetDto){
        AssetDto savedAsset = assetService.createAsset(assetDto);
        return new ResponseEntity<>(savedAsset, HttpStatus.CREATED);
    }

    // build get asset rest api
    @GetMapping("/{assetId}")
    public ResponseEntity<AssetDto> getAssetById(@PathVariable Long assetId){
        AssetDto assetDto = assetService.getAssetById(assetId);
        return ResponseEntity.ok(assetDto);
    }
    
    // build get all asset rest api
    @GetMapping
    public ResponseEntity<List<AssetDto>> getAllAsset(){
         List<AssetDto> assets = assetService.getAllAssets();
         return ResponseEntity.ok(assets);
    }

    // build update employee rest api
    @PutMapping("/{assetId}")
    public ResponseEntity<AssetDto> updateAsset(@PathVariable Long assetId, 
                                                @RequestBody AssetDto updateAsset){
        AssetDto assetDto = assetService.updateAsset(assetId, updateAsset);
        return ResponseEntity.ok(assetDto);        
    }

    // build delete employee rest api
    @DeleteMapping("/{assetId}")
    public ResponseEntity<String> deleteAsset(@PathVariable Long assetId) {
        assetService.deleteAsset(assetId, true); // Assuming true for the delete flag
        return ResponseEntity.ok("Asset deleted successfully!");
    }

}
