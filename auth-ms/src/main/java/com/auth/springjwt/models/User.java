package com.auth.springjwt.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Setter
@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@Entity
@Table(schema = "public")
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@EqualsAndHashCode.Include
	@Column(name = "id_user")
	private Long idUser;

	private String emailAddress;

	private String name;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "id_role")
	private Role role;

	@JsonIgnore
	private String password;


//	public User(String emailAddress, String name, String password) {
//		this.emailAddress = emailAddress;
//		this.name = name;
//		this.password = password;
//	}
}
