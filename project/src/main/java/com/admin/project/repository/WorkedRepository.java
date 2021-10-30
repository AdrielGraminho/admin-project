package com.admin.project.repository;

import com.admin.project.entity.Project;
import com.admin.project.entity.Worked;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface WorkedRepository extends JpaRepository<Worked, Long> {


    @Query(value = "select w from Worked w " +
            " inner join User u on u.idUser = w.user.idUser" +
            " inner join w.project p on p.idProject = w.project.idProject" +
            " where u.idUser = :idUser " +
            " and p.idProject = :idProject")
    Page<Worked> findWorkedByUserAndProject(Long idUser, Long idProject, Pageable pageable);
}
