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

import com.alankaa.alankaa_cmms_backend.dto.InventoryItemDto;
import com.alankaa.alankaa_cmms_backend.service.InventoryItemService;

import lombok.AllArgsConstructor;


@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/inventory-items")

public class InventoryItemController {

    private InventoryItemService inventoryItemService;

    @PostMapping
    public ResponseEntity<InventoryItemDto> createInventoryItem(@RequestBody InventoryItemDto inventoryItemDto){
        InventoryItemDto savedInventoryItem = inventoryItemService.createInventoryItem(inventoryItemDto);
        return new ResponseEntity<>(savedInventoryItem, HttpStatus.CREATED);
    }

    @GetMapping("/{itemId}")
    public ResponseEntity<InventoryItemDto> getInventoryItemById(@PathVariable Long itemId){
        InventoryItemDto inventoryItemDto = inventoryItemService.getInventoryItemById(itemId);
        return ResponseEntity.ok(inventoryItemDto);
    }
    
    @GetMapping
    public ResponseEntity<List<InventoryItemDto>> getAllInventoryItems(){
        List<InventoryItemDto> inventoryItems = inventoryItemService.getAllInventoryItems();
        return ResponseEntity.ok(inventoryItems);
    }

    @PutMapping("/{itemId}")
    public ResponseEntity<InventoryItemDto> updateInventoryItem(@PathVariable Long itemId, 
                                                                @RequestBody InventoryItemDto updateInventoryItem){
        InventoryItemDto inventoryItemDto = inventoryItemService.updateInventoryItem(itemId, updateInventoryItem);
        return ResponseEntity.ok(inventoryItemDto);
    }

    @DeleteMapping("/{itemId}")
    public ResponseEntity<String> deleteInventoryItem(@PathVariable Long itemId) {
        inventoryItemService.deleteInventoryItem(itemId, true); // Assuming true for the delete flag
        return ResponseEntity.ok("Inventory item deleted successfully!");
    }

}
