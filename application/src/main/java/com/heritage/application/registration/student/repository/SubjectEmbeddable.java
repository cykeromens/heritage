package com.heritage.application.registration.student.repository;

import lombok.Data;

import javax.persistence.Embeddable;

@Embeddable
@Data
public class SubjectEmbeddable {
	private String code;
	private String name;
}
