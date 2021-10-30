package com.admin.project.service;

import com.admin.project.entity.Worked;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface WorkedService {
    Page<Worked> findWorkedByUserAndProject(Long idUser, Long idProject, Pageable pageable);
}
