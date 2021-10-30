package com.admin.project.service;

import com.admin.project.entity.User;
import com.admin.project.exceptions.CustomHandlerException;

import java.util.Optional;

public interface UserService {
    Optional<User> findById(Long id) throws  CustomHandlerException;
}
