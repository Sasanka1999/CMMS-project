package com.alankaa.alankaa_cmms_backend.mapper;

import com.alankaa.alankaa_cmms_backend.dto.InventoryItemDto;
import com.alankaa.alankaa_cmms_backend.entity.InventoryItem;

public class InventoryItemMapper {
    public static InventoryItemDto mapToInventoryItemDto(InventoryItem inventoryItem){
        return new InventoryItemDto(
            inventoryItem.getItemId(),
            inventoryItem.getItemName(),
            inventoryItem.getDescription(),
            inventoryItem.getLocation(),
            inventoryItem.getQuantity(),
            inventoryItem.getCost(),
            inventoryItem.getDeleted()
        );
    }

    public static InventoryItem mapToInventoryItem(InventoryItemDto inventoryItemDto){
        return new InventoryItem(
            inventoryItemDto.getItemId(),
            inventoryItemDto.getItemName(),
            inventoryItemDto.getDescription(),
            inventoryItemDto.getLocation(),
            inventoryItemDto.getQuantity(),
            inventoryItemDto.getCost(),
            inventoryItemDto.getDeleted()
        );
    }
}
