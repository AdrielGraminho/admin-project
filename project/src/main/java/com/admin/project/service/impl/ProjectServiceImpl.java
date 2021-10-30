package com.admin.project.service.impl;

import com.admin.project.entity.Project;
import com.admin.project.repository.ProjectRepository;
import com.admin.project.service.ProjectService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjectServiceImpl implements ProjectService {

    private final ProjectRepository repository;

    public ProjectServiceImpl(ProjectRepository repository) {
        this.repository = repository;
    }

    @Override
    public Page<Project> findProjectsByUserId(Long idUser, Pageable pageable) {
        return repository.findProjectsByUserId(idUser, pageable);
    }
}
