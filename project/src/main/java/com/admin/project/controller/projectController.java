package com.admin.project.controller;

import com.admin.project.entity.Project;
import com.admin.project.service.ProjectService;
import io.swagger.annotations.ApiOperation;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/project")
public class projectController {

    final ProjectService service;


    public projectController(final ProjectService service) {
        this.service = service;
    }

    @GetMapping("/{idUser}")
    @ApiOperation("Find projects by Id user")
    public Page<Project> findProjectsByUserId(@PathVariable("idUser") Long idUser,
                                              @RequestParam(value = "page", required = false, defaultValue = "0") Integer page,
                                              @RequestParam(value = "size", required = false, defaultValue = "10") Integer size
    ){
        Pageable pageable = PageRequest.of(page, size);
        return service.findProjectsByUserId(idUser, pageable);
    }
}
