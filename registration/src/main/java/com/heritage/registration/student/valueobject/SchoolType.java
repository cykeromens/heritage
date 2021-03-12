package com.heritage.registration.student.valueobject;

public enum SchoolType {
	UNIVERSITY("UNIVERSITY"),

	POLYTECHNIC("POLYTECHNIC"),

	COLLEGE_OF_EDUCATION("COLLEGE_OF_EDUCATION");

	private String schoolType;

	SchoolType(String schoolType) {
		this.schoolType = schoolType;
	}

	public void setSchoolType(String schoolType) {
		this.schoolType = schoolType;
	}
}
