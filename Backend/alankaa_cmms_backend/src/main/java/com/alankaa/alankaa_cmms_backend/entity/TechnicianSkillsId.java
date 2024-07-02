package com.alankaa.alankaa_cmms_backend.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Embeddable
public class TechnicianSkillsId implements Serializable {
    @Column(name = "technician_id")
    private Long technicianId;

    @Column(name = "skill_id")
    private Long skillId;
}
