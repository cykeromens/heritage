package com.heritage.application.registration.student.repository;

import lombok.Data;

import javax.persistence.Embeddable;

@Data
@Embeddable
public class BioDataEmbeddable {

	private String firstName;
	private String middleName;
	private String lastName;
	private String kindred;
	private String village;
	private String community;
	private String town;
	private String lga;
	private String state;
	private String dob;
}
