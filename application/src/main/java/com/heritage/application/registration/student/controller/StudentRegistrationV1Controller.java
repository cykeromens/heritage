package com.heritage.application.registration.student.controller;


import com.heritage.api.StudentRegistrationApi;
import com.heritage.api.model.StudentRegistrationRequest;
import com.heritage.api.model.StudentRegistrationResponse;
import com.heritage.application.registration.student.mapper.StudentRegistrationMapper;
import com.heritage.application.registration.student.service.StudentRegistrationService;
import com.heritage.registration.workflow.WorkflowAction;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;


@RestController
@RequiredArgsConstructor
public class StudentRegistrationV1Controller extends BaseController implements StudentRegistrationApi {

	private final StudentRegistrationService service;
	private final StudentRegistrationMapper mapper;

	@Override
	public ResponseEntity<StudentRegistrationResponse> editStudentRegistration(String uuid, StudentRegistrationRequest studentRegistrationRequest) {
		return ResponseEntity.ok(addLinks(mapper.toResponse(service.editRegistration(uuid, mapper.toModel(studentRegistrationRequest)))));
	}

	@Override
	public ResponseEntity<StudentRegistrationResponse> getStudentRegistrationByUuid(String uuid) {
		return ResponseEntity.ok(addLinks(mapper.toResponse(service.getStudentRegistration(uuid))));
	}

	@Override
	public ResponseEntity<StudentRegistrationResponse> studentRegistrationRequest(StudentRegistrationRequest studentRegistrationRequest) {
		return ResponseEntity.ok(addLinks(mapper.toResponse(service.createNewGame(mapper.toModel(studentRegistrationRequest)))));
	}

	@Override
	public ResponseEntity<StudentRegistrationResponse> verifyAction(String uuid, String action) {
		return ResponseEntity.ok(addLinks(mapper.toResponse(service.action(uuid, WorkflowAction.valueOf(action)))));
	}

	@Override
	public String selfLink(String uuid) {
		return linkTo(methodOn(StudentRegistrationApi.class).getStudentRegistrationByUuid(uuid)).withSelfRel().getHref();
	}

	@Override
	public String repairLink(String uuid) {
		return linkTo(methodOn(StudentRegistrationApi.class).editStudentRegistration(uuid, null)).withSelfRel().getHref();
	}

	@Override
	public String decisionLink(String uuid, WorkflowAction action) {
		return linkTo(methodOn(StudentRegistrationApi.class).verifyAction(uuid, action.name())).withSelfRel().getHref();
	}

	private StudentRegistrationResponse addLinks(StudentRegistrationResponse response) {
		response.setHref(selfLink(response.getUuid()));
//		actionLinks(response.getUuid(), response.getAvailableActions());
		return response;
	}
}