package com.alankaa.alankaa_cmms_backend.controller;

import com.alankaa.alankaa_cmms_backend.dto.UtilizedPartsDTO;
import com.alankaa.alankaa_cmms_backend.service.UtilizedPartsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/utilized-parts")
public class UtilizedPartsController {

    @Autowired
    private UtilizedPartsService utilizedPartsService;

    @PostMapping
    public ResponseEntity<UtilizedPartsDTO> createUtilizedParts(@RequestBody UtilizedPartsDTO utilizedPartsDTO) {
        UtilizedPartsDTO createdUtilizedParts = utilizedPartsService.createUtilizedParts(utilizedPartsDTO);
        return ResponseEntity.ok(createdUtilizedParts);
    }

    @GetMapping
    public ResponseEntity<List<UtilizedPartsDTO>> getAllUtilizedParts() {
        List<UtilizedPartsDTO> utilizedPartsList = utilizedPartsService.getAllUtilizedParts();
        return ResponseEntity.ok(utilizedPartsList);
    }

    @GetMapping("/{orderId}/{itemId}")
    public ResponseEntity<UtilizedPartsDTO> getUtilizedPartsById(@PathVariable Long orderId, @PathVariable Long itemId) {
        UtilizedPartsDTO utilizedPartsDTO = utilizedPartsService.getUtilizedPartsById(orderId, itemId);
        return ResponseEntity.ok(utilizedPartsDTO);
    }

    @DeleteMapping("/{orderId}/{itemId}")
    public ResponseEntity<Void> deleteUtilizedParts(@PathVariable Long orderId, @PathVariable Long itemId) {
        utilizedPartsService.deleteUtilizedParts(orderId, itemId);
        return ResponseEntity.noContent().build();
    }
}
