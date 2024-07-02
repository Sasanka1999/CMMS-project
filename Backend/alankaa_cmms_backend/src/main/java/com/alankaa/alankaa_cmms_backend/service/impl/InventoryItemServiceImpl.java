package com.alankaa.alankaa_cmms_backend.service.impl;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.alankaa.alankaa_cmms_backend.dto.InventoryItemDto;
import com.alankaa.alankaa_cmms_backend.entity.InventoryItem;
import com.alankaa.alankaa_cmms_backend.exceotion.ResourceNotFoundException;
import com.alankaa.alankaa_cmms_backend.mapper.InventoryItemMapper;
import com.alankaa.alankaa_cmms_backend.repository.InventoryItemRepository;
import com.alankaa.alankaa_cmms_backend.service.InventoryItemService;

import lombok.AllArgsConstructor;


@Service
@AllArgsConstructor
public class InventoryItemServiceImpl implements InventoryItemService{

    private final InventoryItemRepository inventoryItemRepository;

    @Override
    public InventoryItemDto createInventoryItem(InventoryItemDto inventoryItemDto) {
         InventoryItem inventoryItem = InventoryItemMapper.mapToInventoryItem(inventoryItemDto);
        InventoryItem savedInventoryItem = inventoryItemRepository.save(inventoryItem);
        return InventoryItemMapper.mapToInventoryItemDto(savedInventoryItem);
    }

    @Override
    public InventoryItemDto getInventoryItemById(Long itemId) {
        InventoryItem inventoryItem = inventoryItemRepository.findById(itemId)
                .orElseThrow(() -> new ResourceNotFoundException("Inventory item not found with id: " + itemId));
        return InventoryItemMapper.mapToInventoryItemDto(inventoryItem);
    }

    @Override
    public List<InventoryItemDto> getAllInventoryItems() {
        List<InventoryItem> inventoryItems = inventoryItemRepository.findAll();
        return inventoryItems.stream().map(InventoryItemMapper::mapToInventoryItemDto).collect(Collectors.toList());
    }

    @Override
    public InventoryItemDto updateInventoryItem(Long itemId, InventoryItemDto updateInventoryItem) {
        InventoryItem inventoryItem = inventoryItemRepository.findById(itemId)
                .orElseThrow(() -> new ResourceNotFoundException("Inventory item not found with id: " + itemId));

        inventoryItem.setItemName(updateInventoryItem.getItemName());
        inventoryItem.setDescription(updateInventoryItem.getDescription());
        inventoryItem.setLocation(updateInventoryItem.getLocation());
        inventoryItem.setQuantity(updateInventoryItem.getQuantity());
        inventoryItem.setCost(updateInventoryItem.getCost());

        InventoryItem updatedInventoryItem = inventoryItemRepository.save(inventoryItem);
        return InventoryItemMapper.mapToInventoryItemDto(updatedInventoryItem);
    }

    @Override
    public void deleteInventoryItem(Long itemId, boolean delete) {
        Optional<InventoryItem> optionalInventoryItem = inventoryItemRepository.findById(itemId);
        if (optionalInventoryItem.isPresent()) {
            InventoryItem inventoryItem = optionalInventoryItem.get();
            if (delete) {
                inventoryItemRepository.delete(inventoryItem);
            } else {
                inventoryItem.setDeleted(true);
                inventoryItemRepository.save(inventoryItem);
            }
        } else {
            throw new RuntimeException("Inventory item not found with id: " + itemId);
        }
    }

}
