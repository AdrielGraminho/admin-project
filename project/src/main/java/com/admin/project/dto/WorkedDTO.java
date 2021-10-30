package com.admin.project.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class WorkedDTO {
    private Long userId;
    private Long projectId;
    private LocalDate date;
    private Integer hours;
}
