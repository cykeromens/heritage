package com.heritage.application.registration.student.repository;

import com.heritage.application.registration.student.mapper.StudentRegistrationMapperImpl;
import com.heritage.registration.student.model.StudentRegistrationModel;
import com.heritage.registration.student.repository.StudentRegistrationRepository;
import com.heritage.registration.valueobject.RequestStatus;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.ArgumentMatchers;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;

import static com.heritage.registration.valueobject.RequestStatus.CREATED;
import static org.junit.jupiter.api.Assertions.assertEquals;

class StudentRegistrationRepositoryImplTest {

	@Mock
	private StudentRegistrationJpaRepository jpaRepository;
	private StudentRegistrationRepository repository;

	@BeforeEach
	void setUp() {
		MockitoAnnotations.initMocks(this);
		repository = new StudentRegistrationRepositoryImpl(jpaRepository, new StudentRegistrationMapperImpl());
	}

	@Test
	void givenStudentEntityWhenSaveThenReturnSavedEntity() {
		final var entity = buildStudentRegistrationEntity();
		Mockito.when(jpaRepository.save(ArgumentMatchers.any(StudentRegistrationEntity.class))).thenReturn(entity);
		final var saved = repository.save(buildRegistrationModel());
		assertEquals(saved.getStatus(), CREATED);
	}

	private static StudentRegistrationModel buildRegistrationModel() {
		return StudentRegistrationModel.builder()
				.email("cykeromens@gmail.com")
				.phone("1234567890")
				.status(CREATED)
				.build();
	}

	private static StudentRegistrationEntity buildStudentRegistrationEntity() {
		var entity = new StudentRegistrationEntity();
		entity.setStatus(RequestStatus.CREATED);
		return entity;
	}

}