package com.alankaa.alankaa_cmms_backend.service;
import java.util.List;
import com.alankaa.alankaa_cmms_backend.dto.InventoryItemDto;
import org.springframework.stereotype.Service;

@Service
public interface InventoryItemService {
    InventoryItemDto createInventoryItem(InventoryItemDto inventoryItemDto);

    InventoryItemDto getInventoryItemById(Long itemId);

    List<InventoryItemDto> getAllInventoryItems();

    InventoryItemDto updateInventoryItem(Long itemId, InventoryItemDto updateInventoryItem);

    void deleteInventoryItem(Long itemId, boolean delete);

}
