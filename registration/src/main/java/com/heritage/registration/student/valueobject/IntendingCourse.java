package com.heritage.registration.student.valueobject;

import lombok.Builder;
import lombok.Value;

@Builder
@Value
public class IntendingCourse {
	SchoolType typeOfSchool;
	String schoolName;
	String course;
}
