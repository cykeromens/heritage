package com.heritage.application.registration.student.repository;

import com.heritage.application.entity.BaseEntity;
import lombok.Data;
import lombok.EqualsAndHashCode;

import javax.persistence.*;
import java.util.List;

@EqualsAndHashCode(callSuper = true)
@Entity
@Table(name = "student_registration", indexes = @Index(name = "IDX_UUID", columnList = "uuid", unique = true))

@Data
public class StudentRegistrationEntity extends BaseEntity {

	private String username;

	private String password;

	private String email;

	private String phone;

	@Embedded
	private BioDataEmbeddable bioData;

	@ElementCollection
	private List<SchoolEmbeddable> schoolsAttended;

	@ElementCollection
	private List<SubjectEmbeddable> jambSubjects;


	@ElementCollection
	private List<CourseEmbeddable> intendingCourses;
}
