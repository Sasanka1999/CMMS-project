package com.alankaa.alankaa_cmms_backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.alankaa.alankaa_cmms_backend.dto.WorkOrderDTO;
import com.alankaa.alankaa_cmms_backend.service.WorkOrderService;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/work-orders")
public class WorkOrderController {

    @Autowired
    private final WorkOrderService workOrderService;

    @Autowired
    public WorkOrderController(WorkOrderService workOrderService) {
        this.workOrderService = workOrderService;
    }

    @PostMapping
    public ResponseEntity<WorkOrderDTO> createWorkOrder(@RequestBody WorkOrderDTO workOrderDTO) {
        WorkOrderDTO createdWorkOrder = workOrderService.createWorkOrder(workOrderDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdWorkOrder);
    }

    @GetMapping("/{orderId}")
    public ResponseEntity<WorkOrderDTO> getWorkOrderById(@PathVariable Long orderId) {
        WorkOrderDTO workOrder = workOrderService.getWorkOrderById(orderId);
        return ResponseEntity.ok(workOrder);
    }

    @GetMapping
    public ResponseEntity<List<WorkOrderDTO>> getAllWorkOrders() {
        List<WorkOrderDTO> workOrders = workOrderService.getAllWorkOrders();
        return ResponseEntity.ok(workOrders);
    }

    @PutMapping("/{orderId}")
    public ResponseEntity<WorkOrderDTO> updateWorkOrder(@PathVariable Long orderId, @RequestBody WorkOrderDTO workOrderDTO) throws NotFoundException {
        WorkOrderDTO updatedWorkOrder = workOrderService.updateWorkOrder(orderId, workOrderDTO);
        return ResponseEntity.ok(updatedWorkOrder);
    }

    @DeleteMapping("/{orderId}")
    public ResponseEntity<Void> deleteWorkOrder(@PathVariable Long orderId) throws NotFoundException {
        workOrderService.deleteWorkOrder(orderId);
        return ResponseEntity.noContent().build();
    }
}
