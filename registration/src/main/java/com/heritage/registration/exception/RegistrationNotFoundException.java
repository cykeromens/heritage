package com.heritage.registration.exception;

public class RegistrationNotFoundException extends RuntimeException {

	private static final String ERROR_MESSAGE = "Registration with UUID %s does not exist!";

	public RegistrationNotFoundException(String id) {
		super(String.format(ERROR_MESSAGE, id));
	}

}
