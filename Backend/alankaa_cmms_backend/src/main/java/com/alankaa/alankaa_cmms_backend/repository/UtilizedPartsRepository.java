package com.alankaa.alankaa_cmms_backend.repository;

import com.alankaa.alankaa_cmms_backend.entity.UtilizedParts;
import com.alankaa.alankaa_cmms_backend.entity.UtilizedPartsId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UtilizedPartsRepository extends JpaRepository<UtilizedParts, UtilizedPartsId> {
}
