package com.heritage.application.config;

import com.heritage.registration.student.repository.StudentRegistrationRepository;
import com.heritage.registration.student.usecase.StudentRegistrationUseCase;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ApplicationConfig {

	@Bean
	public StudentRegistrationUseCase gameUseCase(StudentRegistrationRepository repository) {
		return new StudentRegistrationUseCase(repository);
	}
}
