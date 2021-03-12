package com.heritage.application.registration.student.repository;

import com.heritage.registration.student.valueobject.SchoolType;
import lombok.Data;

import javax.persistence.Embeddable;

@Embeddable
@Data
public class CourseEmbeddable {
	SchoolType typeOfSchool;
	String schoolName;
	String course;
}
