package com.alankaa.alankaa_cmms_backend.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class InventoryItemDto {
    private Long itemId;
    private String itemName;
    private String description;
    private String location;
    private Integer quantity;
    private Double cost;
    private Boolean deleted;
}
