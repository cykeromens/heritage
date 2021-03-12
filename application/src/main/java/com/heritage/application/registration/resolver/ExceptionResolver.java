package com.heritage.application.registration.resolver;


import com.heritage.registration.exception.RegistrationException;
import com.heritage.registration.exception.WorkflowException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@ControllerAdvice
public class ExceptionResolver extends ResponseEntityExceptionHandler {

	@ExceptionHandler
	public ResponseEntity handle(RegistrationException e) {
		return ResponseEntity.badRequest().body(e.getMessage());
	}

	@ExceptionHandler
	public ResponseEntity handle(WorkflowException e) {
		return ResponseEntity.badRequest().body(e.getMessage());
	}
}
