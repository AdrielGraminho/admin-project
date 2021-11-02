package com.admin.project.service.impl;

import com.admin.project.entity.Role;
import com.admin.project.entity.User;
import com.admin.project.exceptions.CustomHandlerException;
import com.admin.project.repository.UserRepository;
import org.junit.Test;
import org.junit.jupiter.api.Assertions;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;


import java.util.Optional;

import static org.mockito.Mockito.*;

@RunWith(MockitoJUnitRunner.class)
public class UserServiceImplTest  {

    @InjectMocks
    private UserServiceImpl service;

    @Mock
    private UserRepository repository;

    @Test
    public void mustBeReturnUserById() throws CustomHandlerException {
        Role role = new Role(1L, "Administrador", "ADMIN");
        User user = new User(1L, "adrielgraminho@gmail.com", "Adriel", role, "123" );

        when(repository.findById(1L)).thenReturn(Optional.of(user));

        Optional<User> userResponse = service.findById(1L);

        Assertions.assertEquals(Optional.of(1l), userResponse.map(User::getIdUser));
        Assertions.assertEquals(Optional.of("Adriel"), userResponse.map(User::getName));
        Assertions.assertEquals(Optional.of("123"), userResponse.map(User::getPassword));
        Assertions.assertEquals(Role.class, userResponse.get().getRole().getClass());
    }
}
