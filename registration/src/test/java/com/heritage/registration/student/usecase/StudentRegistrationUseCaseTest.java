package com.heritage.registration.student.usecase;

import com.heritage.registration.exception.RegistrationPersistenceException;
import com.heritage.registration.student.model.StudentRegistrationModel;
import com.heritage.registration.student.repository.StudentRegistrationRepository;
import com.heritage.registration.valueobject.RequestStatus;
import com.heritage.registration.workflow.WorkflowAction;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.ArgumentMatchers;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;

import java.util.Arrays;
import java.util.Collections;

import static com.heritage.registration.valueobject.RequestStatus.*;
import static com.heritage.registration.workflow.WorkflowAction.*;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.doThrow;
import static org.mockito.Mockito.when;

class StudentRegistrationUseCaseTest {

	@Mock
	private StudentRegistrationRepository repository;

	private StudentRegistrationUseCase useCase;

	@BeforeEach
	void setUp() {
		MockitoAnnotations.initMocks(this);
		useCase = new StudentRegistrationUseCase(repository);

	}

	@Test
	void givenValidRegistrationWhenCreateNewRegistrationThenStatusIsCreated() {
		final var model = buildRegistrationModel();
		when(repository.save(ArgumentMatchers.any(StudentRegistrationModel.class))).thenReturn(model);

		final var registered = useCase.createNewRegistration(model);

		assertEquals(registered.getStatus(), WAITING_VERIFICATION);
		assertEquals(registered.getAvailableActions(), Arrays.asList(REPAIR, APPROVE));
	}

	@Test
	void givenDuplicateRegistrationWhenCreateNewRegistrationThenThrow() {
		final var model = buildRegistrationModel();
		when(repository.save(ArgumentMatchers.any(StudentRegistrationModel.class))).thenThrow(RegistrationPersistenceException.class);

		assertThrows(RegistrationPersistenceException.class, () -> useCase.createNewRegistration(model));
	}

	private static StudentRegistrationModel buildRegistrationModel() {
		return StudentRegistrationModel.builder()
				.status(WAITING_VERIFICATION)
				.availableActions(Collections.singletonList(DATAENTRYACCEPT))
				.build();
	}
}