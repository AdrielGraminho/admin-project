package com.admin.project.service.impl;

import com.admin.project.entity.Project;
import com.admin.project.entity.User;
import com.admin.project.exceptions.CustomHandlerException;
import com.admin.project.repository.ProjectRepository;
import com.admin.project.service.ProjectService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ProjectServiceImpl implements ProjectService {

    private final ProjectRepository repository;

    private final UserServiceImpl userService;

    public ProjectServiceImpl(ProjectRepository repository, UserServiceImpl userService) {
        this.repository = repository;
        this.userService = userService;
    }

    @Override
    public Page<Project> findProjectsByUserId(Long idUser, Pageable pageable) throws CustomHandlerException {
        Optional<User> user = userService.findById(idUser);

        if (user.get().getRole().getName().equals("ADMIN"))
            return repository.findAllProjects(pageable);
        else
            return repository.findProjectsByUserId(idUser, pageable);
    }
}
