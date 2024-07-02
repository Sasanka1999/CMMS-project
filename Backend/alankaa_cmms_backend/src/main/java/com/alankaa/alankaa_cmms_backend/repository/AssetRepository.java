package com.alankaa.alankaa_cmms_backend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.alankaa.alankaa_cmms_backend.entity.Asset;

@Repository
public interface AssetRepository extends JpaRepository<Asset, Long>{

    @SuppressWarnings("unchecked")
    Asset save(Asset asset);

    Optional<Asset> findById(Long assetId);

    void delete(Asset asset);

}