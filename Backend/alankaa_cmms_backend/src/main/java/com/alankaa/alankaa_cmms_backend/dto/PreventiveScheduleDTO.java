package com.alankaa.alankaa_cmms_backend.dto;

import lombok.Data;

@Data
public class PreventiveScheduleDTO {
    private Long scheduleId;
    private Long assetId;
    private String task;
    private String frequency;
    private boolean deleted;
}
