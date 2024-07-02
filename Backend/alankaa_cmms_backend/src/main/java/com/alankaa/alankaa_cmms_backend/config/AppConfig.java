package com.alankaa.alankaa_cmms_backend.config;

import org.mapstruct.factory.Mappers;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.alankaa.alankaa_cmms_backend.mapper.WorkOrderMapper;

@Configuration
public class AppConfig {
    
    @Bean
    public WorkOrderMapper workOrderMapper() {
        return Mappers.getMapper(WorkOrderMapper.class);
    }
}
