package com.admin.project.repository;

import com.admin.project.entity.Project;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface ProjectRepository extends JpaRepository<Project, Long> {

    @Query(value = "select p from Project p " +
            " inner join RlUserProject rl on rl.project.idProject = p.idProject " +
            " inner join User u on rl.user.idUser = u.idUser " +
            " where u.idUser = :idUser")
    Page<Project> findProjectsByUserId(Long idUser, Pageable pageable);
}
