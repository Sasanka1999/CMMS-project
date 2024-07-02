package com.alankaa.alankaa_cmms_backend.dto;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter
@Setter
public class WorkOrderDTO {
    private Long orderId;
    private Long assetId;
    private Long technicianId;
    private String description;
    private String status;
    private boolean deleted;
}


