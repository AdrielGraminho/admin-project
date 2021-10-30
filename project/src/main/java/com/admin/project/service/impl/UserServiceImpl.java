package com.admin.project.service.impl;

import com.admin.project.entity.User;
import com.admin.project.exceptions.CustomHandlerException;
import com.admin.project.repository.UserRepository;
import com.admin.project.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository repository;

    public UserServiceImpl(final UserRepository repository) {
        this.repository = repository;
    }

    @Override
    public Optional<User> findById(Long id) throws CustomHandlerException {
        Optional<User> user = repository.findById(id);
        if (user.isPresent())
            return user;
        else
            throw new CustomHandlerException(HttpStatus.NOT_FOUND, "User not found");
    }
}
