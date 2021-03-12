package com.heritage.registration.student.repository;

import com.heritage.registration.student.model.StudentRegistrationModel;

import java.util.Optional;

public interface StudentRegistrationRepository {

	StudentRegistrationModel save(StudentRegistrationModel model);

	Optional<StudentRegistrationModel> findByUuid(String uuid);
}
