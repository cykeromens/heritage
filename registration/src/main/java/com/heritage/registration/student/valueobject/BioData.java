package com.heritage.registration.student.valueobject;

import lombok.Builder;
import lombok.Value;

import javax.validation.constraints.NotBlank;

@Builder
@Value
public class BioData {
	@NotBlank
	String firstName;
	@NotBlank
	String middleName;
	@NotBlank
	String lastName;
	@NotBlank
	String kindred;
	@NotBlank
	String village;
	@NotBlank
	String community;
	@NotBlank
	String town;
	@NotBlank
	String lga;
	@NotBlank
	String state;
	@NotBlank
	String dob;
}
