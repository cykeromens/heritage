package com.heritage.registration.exception;

public class RegistrationExistException extends RegistrationException {

	private static final String ERROR_MESSAGE = "SPACE_TAKEN";

	public RegistrationExistException() {
		super(ERROR_MESSAGE);
	}

}
