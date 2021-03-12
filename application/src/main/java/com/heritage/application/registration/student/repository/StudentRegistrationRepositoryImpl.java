package com.heritage.application.registration.student.repository;

import com.heritage.application.registration.student.mapper.StudentRegistrationMapper;
import com.heritage.registration.exception.RegistrationPersistenceException;
import com.heritage.registration.student.model.StudentRegistrationModel;
import com.heritage.registration.student.repository.StudentRegistrationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@RequiredArgsConstructor
@Repository
public class StudentRegistrationRepositoryImpl implements StudentRegistrationRepository {

	private final StudentRegistrationJpaRepository jpaRepository;
	private final StudentRegistrationMapper mapper;

	@Override
	public StudentRegistrationModel save(StudentRegistrationModel model) {
		try {
			return mapper.toModel(jpaRepository.save(mapper.toEntity(model)));
		} catch (Exception ex) {
			throw new RegistrationPersistenceException(ex);
		}
	}

	@Override
	public Optional<StudentRegistrationModel> findByUuid(String uuid) {
		return jpaRepository.findByUuid(uuid).map(mapper::toModel);
	}
}
