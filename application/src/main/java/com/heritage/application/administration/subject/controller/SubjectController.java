package com.heritage.application.administration.subject.controller;

import com.heritage.api.SubjectApi;
import com.heritage.api.model.*;
import com.heritage.application.administration.subject.service.SubjectService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;

@RequiredArgsConstructor
public class SubjectController implements SubjectApi {

	private final SubjectService service;

	@Override
	public ResponseEntity<SubjectResponse> getSubjectByUuid(String uuid) {
		return null;
	}

	@Override
	public ResponseEntity<SubjectResponsePage> getSubjects(SubjectFilterRequest filterRequest, PageableModel pageable) {
		return null;
	}

	@Override
	public ResponseEntity<SubjectResponse> subjectRequest(SubjectRequest subjectRequest) {
		return null;
	}

	@Override
	public ResponseEntity<SubjectResponse> subjectsUuidActionPost(String uuid, String action) {
		return null;
	}
}
