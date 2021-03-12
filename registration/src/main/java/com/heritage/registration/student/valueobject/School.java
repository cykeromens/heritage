package com.heritage.registration.student.valueobject;

import lombok.Builder;
import lombok.Value;

@Builder
@Value
public class School {
	String name;
	String address;
	String yearOfGraduation;
//	private List<Certificate> certificate = new ArrayList<>();
}
