package com.heritage.application.registration.student.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface StudentRegistrationJpaRepository extends JpaRepository<StudentRegistrationEntity, Long> {

	Optional<StudentRegistrationEntity> findByUuid(String uuid);

}
