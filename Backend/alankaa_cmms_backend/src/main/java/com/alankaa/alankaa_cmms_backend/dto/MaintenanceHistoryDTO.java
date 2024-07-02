package com.alankaa.alankaa_cmms_backend.dto;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import java.time.LocalDate;

@Data
@Getter
@Setter
public class MaintenanceHistoryDTO {
    private Long historyId;
    private Long assetId;
    private LocalDate maintenanceDate;
    private String description;
    private boolean deleted;
}
