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
    public Page<Worked> findWorkedByUserAndProject(Long idUser, Long idProject, Pageable pageable) throws CustomHandlerException {
        Optional<User> user = userService.findById(idUser);

        if (user.get().getRole().getName().equals("ADMIN"))
            return repository.findAllPagede(idProject, pageable);
        else
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

    //TODO alterar para user worked dto, da forma que est?? h?? muito consumo de dados e muitos n??o sendo nesses??rios e edit??veis
    @Override
    public Worked edit(WorkedDTO workedDTO) throws CustomHandlerException {
        Worked findWorked;

        if (workedDTO.getWorkedId() != null){
            findWorked = repository.findById(workedDTO.getWorkedId()).get();
            Optional<User> user = userService.findById(workedDTO.getUserId());
            Optional<Project> project = projectService.findById(workedDTO.getProjectId());

            if (findWorked.getIdWorked() != null){
                findWorked.setUser(user.get());
                findWorked.setProject(project.get());
                findWorked.setDate(workedDTO.getDate());
                findWorked.setHours(workedDTO.getHours());
                return repository.save(findWorked);
            }
            else
                throw new CustomHandlerException(HttpStatus.NOT_FOUND, "Worked Not Found");
        }
        else
            throw new CustomHandlerException(HttpStatus.CONFLICT, "Worked Null");
    }
}
