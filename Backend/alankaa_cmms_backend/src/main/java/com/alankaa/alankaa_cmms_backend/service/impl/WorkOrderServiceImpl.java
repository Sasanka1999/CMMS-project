package com.alankaa.alankaa_cmms_backend.service.impl;

import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alankaa.alankaa_cmms_backend.dto.WorkOrderDTO;
import com.alankaa.alankaa_cmms_backend.entity.Asset;
import com.alankaa.alankaa_cmms_backend.entity.Technician;
import com.alankaa.alankaa_cmms_backend.entity.WorkOrder;
import com.alankaa.alankaa_cmms_backend.exceotion.ResourceNotFoundException;
import com.alankaa.alankaa_cmms_backend.mapper.WorkOrderMapper;
import com.alankaa.alankaa_cmms_backend.repository.AssetRepository;
import com.alankaa.alankaa_cmms_backend.repository.TechnicianRepository;
import com.alankaa.alankaa_cmms_backend.repository.WorkOrderRepository;
import com.alankaa.alankaa_cmms_backend.service.WorkOrderService;

@Service
public class WorkOrderServiceImpl implements WorkOrderService {

    private final WorkOrderRepository workOrderRepository;
    private final AssetRepository assetRepository;
    private final TechnicianRepository technicianRepository;
    private final WorkOrderMapper workOrderMapper;

    @Autowired
    public WorkOrderServiceImpl(WorkOrderRepository workOrderRepository, AssetRepository assetRepository,
                                TechnicianRepository technicianRepository, WorkOrderMapper workOrderMapper) {
        this.workOrderRepository = workOrderRepository;
        this.assetRepository = assetRepository;
        this.technicianRepository = technicianRepository;
        this.workOrderMapper = workOrderMapper;
    }

    @Override
    public WorkOrderDTO createWorkOrder(WorkOrderDTO workOrderDTO) {
        Objects.requireNonNull(workOrderDTO, "WorkOrderDTO must not be null");

        Long assetId = workOrderDTO.getAssetId();
        Long technicianId = workOrderDTO.getTechnicianId();
        Objects.requireNonNull(assetId, "Asset ID must not be null");
        Objects.requireNonNull(technicianId, "Technician ID must not be null");

        Asset asset = assetRepository.findById(assetId)
                .orElseThrow(() -> new ResourceNotFoundException("Asset not found with id: " + assetId));

        Technician technician = technicianRepository.findById(technicianId)
                .orElseThrow(() -> new ResourceNotFoundException("Technician not found with id: " + technicianId));

        WorkOrder workOrder = workOrderMapper.toEntity(workOrderDTO, asset, technician);
        WorkOrder savedWorkOrder = workOrderRepository.save(workOrder);
        return workOrderMapper.toDTO(savedWorkOrder);
    }

    @Override
    public WorkOrderDTO getWorkOrderById(Long orderId) {
        Objects.requireNonNull(orderId, "Order ID must not be null");

        WorkOrder workOrder = workOrderRepository.findById(orderId)
                .orElseThrow(() -> new ResourceNotFoundException("Work Order not found with id: " + orderId));

        return workOrderMapper.toDTO(workOrder);
    }

    @Override
    public List<WorkOrderDTO> getAllWorkOrders() {
        List<WorkOrder> workOrders = workOrderRepository.findAll();
        return workOrders.stream()
                .map(workOrderMapper::toDTO)
                .collect(Collectors.toList());
    }

    @Override
    public WorkOrderDTO updateWorkOrder(Long orderId, WorkOrderDTO workOrderDTO) {
        Objects.requireNonNull(orderId, "Order ID must not be null");
        Objects.requireNonNull(workOrderDTO, "WorkOrderDTO must not be null");

        Long assetId = workOrderDTO.getAssetId();
        Long technicianId = workOrderDTO.getTechnicianId();
        Objects.requireNonNull(assetId, "Asset ID must not be null");
        Objects.requireNonNull(technicianId, "Technician ID must not be null");

        WorkOrder existingWorkOrder = workOrderRepository.findById(orderId)
                .orElseThrow(() -> new ResourceNotFoundException("Work Order not found with id: " + orderId));

        Asset asset = assetRepository.findById(assetId)
                .orElseThrow(() -> new ResourceNotFoundException("Asset not found with id: " + assetId));

        Technician technician = technicianRepository.findById(technicianId)
                .orElseThrow(() -> new ResourceNotFoundException("Technician not found with id: " + technicianId));

        // Update existingWorkOrder with new data
        existingWorkOrder.setAsset(asset);
        existingWorkOrder.setTechnician(technician);
        existingWorkOrder.setDescription(workOrderDTO.getDescription());
        existingWorkOrder.setStatus(workOrderDTO.getStatus());
        existingWorkOrder.setDeleted(workOrderDTO.isDeleted());

        WorkOrder updatedWorkOrder = workOrderRepository.save(existingWorkOrder);
        return workOrderMapper.toDTO(updatedWorkOrder);
    }

    @Override
    public void deleteWorkOrder(Long orderId) {
        Objects.requireNonNull(orderId, "Order ID must not be null");

        workOrderRepository.deleteById(orderId);
    }
}
