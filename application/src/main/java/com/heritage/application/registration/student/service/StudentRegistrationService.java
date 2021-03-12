package com.heritage.application.registration.student.service;

import com.heritage.registration.student.model.StudentRegistrationModel;
import com.heritage.registration.student.usecase.StudentRegistrationUseCase;
import com.heritage.registration.workflow.WorkflowAction;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class StudentRegistrationService {

	private final StudentRegistrationUseCase useCase;

	public StudentRegistrationModel createNewGame(StudentRegistrationModel model) {
		return useCase.createNewRegistration(model);
	}


	public StudentRegistrationModel getStudentRegistration(String uuid) {
		return useCase.getRegistration(uuid);
	}

	public StudentRegistrationModel action(String uuid, WorkflowAction action) {
		return useCase.performAction(uuid, action);
	}

	public StudentRegistrationModel editRegistration(String uuid, StudentRegistrationModel model) {
		return useCase.repairRegistration(uuid, model);
	}
}
