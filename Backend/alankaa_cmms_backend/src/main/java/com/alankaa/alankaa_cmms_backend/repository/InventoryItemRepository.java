package com.alankaa.alankaa_cmms_backend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.alankaa.alankaa_cmms_backend.entity.InventoryItem;


public interface InventoryItemRepository extends JpaRepository<InventoryItem, Long>{

    @SuppressWarnings("unchecked")
    InventoryItem save(InventoryItem inventoryItem);

    Optional<InventoryItem> findById(Long itemId);

    void delete(InventoryItem inventoryItem);

}
