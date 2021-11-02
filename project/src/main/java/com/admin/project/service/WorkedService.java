package com.admin.project.service;

import com.admin.project.dto.WorkedDTO;
import com.admin.project.entity.Worked;
import com.admin.project.exceptions.CustomHandlerException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface WorkedService {
    Page<Worked> findWorkedByUserAndProject(Long idUser, Long idProject, Pageable pageable) throws CustomHandlerException;

    Worked save(WorkedDTO workedDTO) throws CustomHandlerException;

    Worked edit(WorkedDTO workedDTO) throws CustomHandlerException;
}
