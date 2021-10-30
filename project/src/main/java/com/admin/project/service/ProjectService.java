package com.admin.project.service;

import com.admin.project.entity.Project;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface ProjectService {
    Page<Project> findProjectsByUserId(Long idUser, Pageable pageable);
}
