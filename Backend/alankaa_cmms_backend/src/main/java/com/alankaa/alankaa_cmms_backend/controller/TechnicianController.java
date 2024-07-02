package com.alankaa.alankaa_cmms_backend.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.alankaa.alankaa_cmms_backend.dto.TechnicianDTO;
import com.alankaa.alankaa_cmms_backend.service.TechnicianService;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/technicians")
public class TechnicianController {

    @Autowired
    private TechnicianService technicianService;

    @GetMapping
    public List<TechnicianDTO> getAllTechnicians() {
        return technicianService.getAllTechnicians();
    }

    @GetMapping("/{id}")
    public TechnicianDTO getTechnicianById(@PathVariable Long id) {
        return technicianService.getTechnicianById(id);
    }

    @PostMapping
    public TechnicianDTO createTechnician(@RequestBody TechnicianDTO technicianDTO) {
        return technicianService.createTechnician(technicianDTO);
    }

    @PutMapping("/{id}")
    public TechnicianDTO updateTechnician(@PathVariable Long id, @RequestBody TechnicianDTO technicianDTO) {
        return technicianService.updateTechnician(id, technicianDTO);
    }

    @DeleteMapping("/{id}")
    public void deleteTechnician(@PathVariable Long id) {
        technicianService.deleteTechnician(id);
    }
}
