package com.heritage.application.registration.student.controller;

import com.heritage.api.model.StudentRegistrationRequest;
import com.heritage.application.registration.student.mapper.StudentRegistrationMapperImpl;
import com.heritage.application.registration.student.service.StudentRegistrationService;
import com.heritage.registration.student.model.StudentRegistrationModel;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import static com.heritage.registration.valueobject.RequestStatus.*;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.*;
import static org.mockito.Mockito.when;

class StudentRegistrationV1ControllerTest {

	@Mock
	private StudentRegistrationService service;

	private StudentRegistrationV1Controller controller;

	@BeforeEach
	void setUp() {
		MockitoAnnotations.initMocks(this);
		controller = new StudentRegistrationV1Controller(service, new StudentRegistrationMapperImpl());
	}

	@Test
	void givenValidRequestWhnStudentRegistrationRequestThenReturnStatusCreated() {
		final var request = buildRegistrationRequest();
		final var model = buildModel();

		when(service.createNewGame(any(StudentRegistrationModel.class))).thenReturn(model);

		final var result = controller.studentRegistrationRequest(request);

		assertNotNull(result.getBody());
		assertEquals(result.getBody().getStatus(), CREATED.name());

	}

	private static StudentRegistrationModel buildModel() {
		return StudentRegistrationModel.builder()
				.email("test@test.com")
				.username("omens")
				.password("1234")
				.status(CREATED)
				.build();
	}

	private static StudentRegistrationRequest buildRegistrationRequest() {
		var request = new StudentRegistrationRequest();

		request.setEmail("test@test.com");
		request.setPassword("1234");
		request.setUsername("omens");
		request.setPhone("09087654321");
		return request;
	}
}