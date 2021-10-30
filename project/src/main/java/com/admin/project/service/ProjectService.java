package com.admin.project.service;

import com.admin.project.entity.Project;
import com.admin.project.exceptions.CustomHandlerException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

public interface ProjectService {
    Page<Project> findProjectsByUserId(Long idUser, Pageable pageable) throws CustomHandlerException;

    Optional<Project> findById(Long idProject) throws CustomHandlerException;

}
