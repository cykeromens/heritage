package com.heritage.application.registration.student.mapper;

import com.heritage.api.model.StudentRegistrationRequest;
import com.heritage.api.model.StudentRegistrationResponse;
import com.heritage.application.registration.student.repository.StudentRegistrationEntity;
import com.heritage.registration.student.model.StudentRegistrationModel;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface StudentRegistrationMapper {

	StudentRegistrationModel toModel(StudentRegistrationEntity entity);

	StudentRegistrationEntity toEntity(StudentRegistrationModel model);

	StudentRegistrationModel toModel(StudentRegistrationRequest studentRegistrationRequest);

	StudentRegistrationResponse toResponse(StudentRegistrationModel registrationModel);
}
