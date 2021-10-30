package com.admin.project.service.impl;

import com.admin.project.entity.Worked;
import com.admin.project.repository.WorkedRepository;
import com.admin.project.service.WorkedService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class WorkedServiceImpl implements WorkedService {

    private final WorkedRepository repository;

    public WorkedServiceImpl(WorkedRepository repository) {
        this.repository = repository;
    }

    @Override
    public Page<Worked> findWorkedByUserAndProject(Long idUser, Long idProject, Pageable pageable) {
        return repository.findWorkedByUserAndProject(idUser, idProject, pageable);
    }
}
