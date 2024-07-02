package com.alankaa.alankaa_cmms_backend.controller;

import com.alankaa.alankaa_cmms_backend.dto.TechnicianSkillsDTO;
import com.alankaa.alankaa_cmms_backend.service.TechnicianSkillsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/technician-skills")
public class TechnicianSkillsController {

    @Autowired
    private TechnicianSkillsService technicianSkillsService;

    @GetMapping
    public List<TechnicianSkillsDTO> getAllTechnicianSkills() {
        return technicianSkillsService.getAllTechnicianSkills();
    }

    @GetMapping("/{technicianId}/{skillId}")
    public ResponseEntity<TechnicianSkillsDTO> getTechnicianSkillById(@PathVariable Long technicianId, @PathVariable Long skillId) {
        TechnicianSkillsDTO dto = technicianSkillsService.getTechnicianSkillById(technicianId, skillId);
        return dto != null ? ResponseEntity.ok(dto) : ResponseEntity.notFound().build();
    }

    @PostMapping
    public TechnicianSkillsDTO createTechnicianSkill(@RequestBody TechnicianSkillsDTO technicianSkillsDTO) {
        return technicianSkillsService.createTechnicianSkill(technicianSkillsDTO);
    }

    @DeleteMapping("/{technicianId}/{skillId}")
    public ResponseEntity<Void> deleteTechnicianSkill(@PathVariable Long technicianId, @PathVariable Long skillId) {
        technicianSkillsService.deleteTechnicianSkill(technicianId, skillId);
        return ResponseEntity.noContent().build();
    }
}
