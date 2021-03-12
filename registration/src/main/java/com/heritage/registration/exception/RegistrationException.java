package com.heritage.registration.exception;

public abstract class RegistrationException extends RuntimeException {

	protected RegistrationException(Throwable e) {
		super(e);
	}

	protected RegistrationException(String s) {
		super(s);
	}

}
