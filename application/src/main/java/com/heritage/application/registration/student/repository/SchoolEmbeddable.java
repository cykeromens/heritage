package com.heritage.application.registration.student.repository;

import lombok.Data;

import javax.persistence.Embeddable;

@Embeddable
@Data
public class SchoolEmbeddable {
	String name;
	String address;
	String yearOfGraduation;
}
