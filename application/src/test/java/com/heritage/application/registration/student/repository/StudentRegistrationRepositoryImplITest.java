package com.heritage.application.registration.student.repository;

import com.heritage.registration.student.model.StudentRegistrationModel;
import com.heritage.registration.student.repository.StudentRegistrationRepository;
import com.heritage.registration.valueobject.RequestStatus;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import java.util.UUID;

import static com.heritage.registration.valueobject.RequestStatus.CREATED;
import static org.junit.jupiter.api.Assertions.*;

@DataJpaTest
class StudentRegistrationRepositoryImplITest {

	@Autowired
	private StudentRegistrationJpaRepository repository;

	@BeforeEach
	void setUp() {
	}

	@Test
	void save() {
		final var saved = repository.save(buildStudentRegistrationEntity());
		assertEquals(saved.getStatus(), CREATED);
	}

	private static StudentRegistrationEntity buildStudentRegistrationEntity() {
		var entity = new StudentRegistrationEntity();
		entity.setStatus(RequestStatus.CREATED);
		entity.setUuid(UUID.randomUUID().toString());
		return entity;
	}
}