package com.admin.project.service.impl;

import com.admin.project.dto.WorkedDTO;
import com.admin.project.entity.Project;
import com.admin.project.entity.User;
import com.admin.project.entity.Worked;
import com.admin.project.exceptions.CustomHandlerException;
import com.admin.project.repository.WorkedRepository;
import com.admin.project.service.WorkedService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class WorkedServiceImpl implements WorkedService {

    private final WorkedRepository repository;

    private final UserServiceImpl userService;

    private final ProjectServiceImpl projectService;

    public WorkedServiceImpl(WorkedRepository repository, UserServiceImpl userService, ProjectServiceImpl projectService) {
        this.repository = repository;
        this.userService = userService;
        this.projectService = projectService;
    }

    @Override
    public Page<Worked> findWorkedByUserAndProject(Long idUser, Long idProject, Pageable pageable) {
        return repository.findWorkedByUserAndProject(idUser, idProject, pageable);
    }

    @Override
    public Worked save(WorkedDTO workedDTO) throws CustomHandlerException {
        if (workedDTO.getWorkedId() != null)
            throw new CustomHandlerException(HttpStatus.CONFLICT, "Worked Exist");

        Optional<User> user = userService.findById(workedDTO.getUserId());
        Optional<Project> project = projectService.findById(workedDTO.getProjectId());

        Worked worked = new Worked();
        worked.setUser(user.get());
        worked.setProject(project.get());
        worked.setDate(workedDTO.getDate());
        worked.setHours(workedDTO.getHours());

        return repository.save(worked);
    }

    //TODO alterar para user worked dto, da forma que está há muito consumo de dados e muitos não sendo nessesários e editáveis
    @Override
    public Worked edit(Worked worked) throws CustomHandlerException {
        Worked findWorked;
        if (worked.getIdWorked() != null){
            findWorked = repository.findById(worked.getIdWorked()).get();
            if (findWorked.getIdWorked() != null){
                findWorked.setUser(worked.getUser());
                findWorked.setProject(worked.getProject());
                findWorked.setDate(worked.getDate());
                findWorked.setHours(worked.getHours());
                return repository.save(findWorked);
            }
            else
                throw new CustomHandlerException(HttpStatus.NOT_FOUND, "Worked Not Found");
        }
        else
            throw new CustomHandlerException(HttpStatus.CONFLICT, "Worked Null");



    }
}
