package com.heritage.registration.student.valueobject;

import lombok.Builder;
import lombok.Value;

@Builder
@Value
public class JambSubject {
	String code;
	String name;
}
