package com.admin.project.service.impl;

import com.admin.project.entity.Role;
import com.admin.project.entity.User;
import com.admin.project.repository.UserRepository;
import junit.framework.TestCase;
import lombok.NoArgsConstructor;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.client.AutoConfigureWebClient;
import org.springframework.boot.test.autoconfigure.web.client.RestClientTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Optional;

import static org.junit.Assert.assertEquals;
import static org.mockito.ArgumentMatchers.anyInt;
import static org.mockito.Mockito.*;

@RunWith(MockitoJUnitRunner.class)
@SpringBootTest
public class UserServiceImplTest  {

    @InjectMocks
    private UserServiceImpl service;

    @Mock
    private UserRepository repository;

    @Test
    public void mustBeReturnUserById(){
        Role role = new Role(1L, "Administrador", "ADMIN");
        User user = new User(1L, "Adriel", role, "123" );

        when(repository.findById(1L)).thenReturn(Optional.of(user));

        Optional<User> userResponse = service.findById(1L);

        Assertions.assertEquals(Optional.of(1l), userResponse.map(User::getIdUser));
        Assertions.assertEquals(Optional.of("Adriel"), userResponse.map(User::getName));
        Assertions.assertEquals(Optional.of("123"), userResponse.map(User::getPassword));
        Assertions.assertEquals(Role.class, userResponse.get().getRole().getClass());
    }
}
