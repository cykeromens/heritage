package com.heritage.registration.student.usecase;

import com.heritage.registration.exception.RegistrationNotFoundException;
import com.heritage.registration.student.model.StudentRegistrationModel;
import com.heritage.registration.student.repository.StudentRegistrationRepository;
import com.heritage.registration.workflow.WorkflowAction;
import lombok.RequiredArgsConstructor;

import java.util.UUID;

import static com.heritage.registration.valueobject.RequestStatus.WAITING_VERIFICATION;
import static com.heritage.registration.workflow.MakerCheckerWorkflow.*;

@RequiredArgsConstructor
public class StudentRegistrationUseCase {

	private final StudentRegistrationRepository repository;

	public StudentRegistrationModel createNewRegistration(StudentRegistrationModel registrationModel) {
		registrationModel.setUuid(UUID.randomUUID().toString());
		registrationModel.setStatus(WAITING_VERIFICATION);
		registrationModel.setEnabled(true);
		return repository.save(registrationModel);
	}

	public StudentRegistrationModel getRegistration(String uuid) {
		return repository.findByUuid(uuid)
				.map(this::action)
				.orElseThrow(() -> new RegistrationNotFoundException(uuid));
	}

	private StudentRegistrationModel action(StudentRegistrationModel registrationModel) {
		registrationModel.setAvailableActions(getAvailableActions(registrationModel.getStatus()));
		return registrationModel;
	}

	public StudentRegistrationModel performAction(String uuid, WorkflowAction action) {
		var model = getRegistration(uuid);
		WorkflowAction decision = WorkflowAction.valueOf(action.getName());
		throwIfCannotVerify(decision, model.getStatus());
		model.setStatus(getStatus(decision, model.isEnabled()));
//		model.setAvailableActions(getAvailableActions(model.getStatus()));
		return repository.save(model);
	}

	public StudentRegistrationModel repairRegistration(String uuid, StudentRegistrationModel updateModel) {

		var model = repository.findByUuid(uuid).orElseThrow(() -> new RegistrationNotFoundException(uuid));
		throwIfCannotRepair(model.getStatus());
		model.setBioData(updateModel.getBioData());
		model.setIntendingCourses(updateModel.getIntendingCourses());
		model.setJambSubjects(updateModel.getJambSubjects());
		model.setSchoolsAttended(updateModel.getSchoolsAttended());
		model.setUsername(updateModel.getUsername());
		model.setPassword(updateModel.getPassword());
		model.setPhone(updateModel.getPhone());
		model.setEmail(updateModel.getEmail());

		return repository.save(model);
	}
}
