package com.admin.project.controller;

import com.admin.project.entity.User;
import com.admin.project.exceptions.CustomHandlerException;
import com.admin.project.service.UserService;
import io.swagger.annotations.ApiOperation;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping("/user")
public class userController {

    final UserService userService;

    public userController(final UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/{id}")
    @ApiOperation("Find user by Id")
    public Optional<User> findById(@PathVariable ("id") Long idUser) throws CustomHandlerException {
        return userService.findById(idUser);
    }
}
