package com.admin.project.controller;

import com.admin.project.dto.WorkedDTO;
import com.admin.project.entity.Worked;
import com.admin.project.exceptions.CustomHandlerException;
import com.admin.project.service.WorkedService;
import io.swagger.annotations.ApiOperation;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/worked")
public class workedController {

    private final WorkedService service;

    public workedController(final WorkedService service) {
        this.service = service;
    }

    @GetMapping("/{idUser}/{idProject}")
    @ApiOperation("Find worked by Id user and project")
    public Page<Worked> findProjectsByUserId(@PathVariable("idUser") Long idUser,
                                             @PathVariable("idProject") Long idProject,
                                             @RequestParam(value = "page", required = false, defaultValue = "0") Integer page,
                                             @RequestParam(value = "size", required = false, defaultValue = "10") Integer size
    ) throws CustomHandlerException {
        Pageable pageable = PageRequest.of(page, size);
        return service.findWorkedByUserAndProject(idUser, idProject, pageable);
    }

    @PostMapping()
    @ApiOperation("Save worked")
    public Worked save(@RequestBody WorkedDTO workedDTO ) throws CustomHandlerException {
        return service.save(workedDTO);
    }

    @PutMapping()
    @ApiOperation("Edit Worked")
    public Worked edit(@RequestBody Worked worked ) throws CustomHandlerException {
        return service.edit(worked);
    }
}

