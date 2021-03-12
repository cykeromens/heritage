package com.heritage.registration.student.model;

import com.heritage.registration.student.valueobject.BioData;
import com.heritage.registration.student.valueobject.IntendingCourse;
import com.heritage.registration.student.valueobject.JambSubject;
import com.heritage.registration.student.valueobject.School;
import com.heritage.registration.valueobject.RequestStatus;
import com.heritage.registration.workflow.RegistrationWorkflow;
import com.heritage.registration.workflow.WorkflowAction;
import lombok.Builder;
import lombok.Data;

import java.io.Serializable;
import java.util.List;

import static com.heritage.registration.workflow.MakerCheckerWorkflow.getAvailableActions;

@Data
@Builder
public class StudentRegistrationModel implements Serializable {
	private Long id;
	private String uuid;

	private RequestStatus status;
	private boolean enabled;

	private String username;

	private String password;

	private String email;

	private String phone;

	private BioData bioData;

	private List<School> schoolsAttended;

	private List<JambSubject> jambSubjects;

	private List<IntendingCourse> intendingCourses;

	private List<WorkflowAction> availableActions;

	public List<WorkflowAction> getAvailableActions() {
		return RegistrationWorkflow.getAvailableActions(status);
	}
}
