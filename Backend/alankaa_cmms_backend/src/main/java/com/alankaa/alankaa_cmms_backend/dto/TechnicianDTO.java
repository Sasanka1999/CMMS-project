package com.alankaa.alankaa_cmms_backend.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

@Data
public class TechnicianDTO {
    private Long technicianId;
    private String technicianName;
}

