package com.admin.project.service;

import com.admin.project.entity.Project;
import com.admin.project.exceptions.CustomHandlerException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ProjectService {
    Page<Project> findProjectsByUserId(Long idUser, Pageable pageable) throws CustomHandlerException;
}
