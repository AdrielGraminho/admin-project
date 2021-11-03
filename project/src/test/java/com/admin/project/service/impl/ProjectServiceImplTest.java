package com.admin.project.service.impl;

import com.admin.project.entity.Project;
import com.admin.project.entity.Role;
import com.admin.project.entity.User;
import com.admin.project.exceptions.CustomHandlerException;
import com.admin.project.repository.ProjectRepository;
import com.admin.project.repository.UserRepository;
import org.junit.Test;
import org.junit.jupiter.api.Assertions;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;


import static org.mockito.Mockito.when;

@RunWith(MockitoJUnitRunner.class)
public class ProjectServiceImplTest {

    @InjectMocks
    ProjectServiceImpl service;

    @Mock
    ProjectRepository repository;

    @Mock
    UserServiceImpl userService;

    @Mock
    UserRepository userRepository;

    @Test
    public void MustBeReturnEmptyForDevProjects() throws CustomHandlerException {
        Pageable pageable = PageRequest.of(0, 10);
        Role role = new Role(1L, "Desenvolvedor", "DEV");
        User dev = new User(1L, "adrielgraminho@gmail.com", "Adriel", role, "123" );
        Page<Project> project = Page.empty();

        when(userService.findById(1L)).thenReturn(java.util.Optional.of(dev));

        when(repository.findProjectsByUserId(1L, pageable)).thenReturn(project);

        Page<Project> responseProject = service.findProjectsByUserId(1L, pageable);

        Assertions.assertEquals(true, responseProject.getContent().isEmpty() );

    }

    @Test
    public void MustBeReturnEmptyForAdminProjects() throws CustomHandlerException {
        Pageable pageable = PageRequest.of(0, 10);
        Role role = new Role(1L, "Desenvolvedor", "ADMIN");
        User dev = new User(1L, "adrielgraminho@gmail.com", "Adriel", role, "123" );
        Page<Project> project = Page.empty();

        when(userService.findById(1L)).thenReturn(java.util.Optional.of(dev));

        when(repository.findAllProjects(pageable)).thenReturn(project);

        Page<Project> responseProject = service.findProjectsByUserId(1L, pageable);

        Assertions.assertEquals(true, responseProject.getContent().isEmpty() );

    }


}
