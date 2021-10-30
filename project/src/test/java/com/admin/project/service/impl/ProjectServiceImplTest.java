package com.admin.project.service.impl;

import com.admin.project.entity.Project;
import com.admin.project.entity.Role;
import com.admin.project.entity.User;
import com.admin.project.repository.ProjectRepository;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.boot.test.context.SpringBootTest;

@RunWith(MockitoJUnitRunner.class)
@SpringBootTest
public class ProjectServiceImplTest {

    @InjectMocks
    ProjectServiceImpl service;

    @Mock
    ProjectRepository repository;

    @Test
    public void MustBeReturnNullForDevProjects(){
        Role role = new Role(1L, "Desenvolvedor", "DEV");
        User user = new User(1L, "Adriel", role, "123" );
        Project project = null;



    }

}
