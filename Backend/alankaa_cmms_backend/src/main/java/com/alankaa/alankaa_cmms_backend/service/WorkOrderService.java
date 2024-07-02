package com.alankaa.alankaa_cmms_backend.service;

import java.util.List;

import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;

import com.alankaa.alankaa_cmms_backend.dto.WorkOrderDTO;

public interface WorkOrderService {
    WorkOrderDTO createWorkOrder(WorkOrderDTO workOrderDTO);
    WorkOrderDTO getWorkOrderById(Long orderId);
    List<WorkOrderDTO> getAllWorkOrders();
    WorkOrderDTO updateWorkOrder(Long orderId, WorkOrderDTO workOrderDTO) throws NotFoundException;
    void deleteWorkOrder(Long orderId) throws NotFoundException;
}
