package com.heritage.registration.exception;

public class GameNotFoundException extends RuntimeException {
	private static final String ERROR_MESSAGE = "Game with ID %s does not exist!";

	public GameNotFoundException(String id) {
		super(String.format(ERROR_MESSAGE, id));
	}
}
