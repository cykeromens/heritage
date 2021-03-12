package com.heritage.registration.workflow;

import com.heritage.registration.exception.WorkflowException;
import com.heritage.registration.valueobject.RequestStatus;

import java.util.*;

import static com.heritage.registration.valueobject.RequestStatus.*;
import static com.heritage.registration.valueobject.RequestStatus.DISABLED;
import static com.heritage.registration.valueobject.RequestStatus.WAITING_VERIFICATION;
import static com.heritage.registration.workflow.WorkFlowConstants.ERROR_MESSAGE;
import static com.heritage.registration.workflow.WorkflowAction.*;
import static java.lang.String.format;
import static java.util.Collections.singletonList;
import static java.util.Objects.isNull;

public class RegistrationWorkflow {

	private RegistrationWorkflow() {

	}

	private static final Map<RequestStatus, List<WorkflowAction>> AVAILABLE_ACTIONS = new HashMap<>();
	private static final Map<WorkflowAction, RequestStatus> ACTION_STATUS = new HashMap<>();

	static {
		AVAILABLE_ACTIONS.put(ACTIVE, singletonList(DATAENTRYACCEPT));
		AVAILABLE_ACTIONS.put(WAITING_VERIFICATION, Arrays.asList(REPAIR, APPROVE));
		AVAILABLE_ACTIONS.put(WAITING_REPAIR, singletonList(DATAENTRYACCEPT));
		AVAILABLE_ACTIONS.put(DISABLED, singletonList(DATAENTRYACCEPT));
	}

	static {
		ACTION_STATUS.put(REPAIR, WAITING_REPAIR);
		ACTION_STATUS.put(APPROVE, ACTIVE);
		ACTION_STATUS.put(DATAENTRYACCEPT, WAITING_VERIFICATION);
	}

	public static RequestStatus getStatus(WorkflowAction action) {
		return ACTION_STATUS.get(action);
	}

	public static RequestStatus getStatus(WorkflowAction action, Boolean enabled) {
		return (APPROVE == action && (isNull(enabled) || !enabled)) ? DISABLED : ACTION_STATUS.get(action);
	}

	public static List<WorkflowAction> getAvailableActions(RequestStatus status) {
		return AVAILABLE_ACTIONS.get(status);
	}

	public static boolean canRepair(RequestStatus entityStatus) {
		return ACTIVE == entityStatus || WAITING_REPAIR == entityStatus || DISABLED == entityStatus;
	}

	public static boolean canVerify(RequestStatus entityStatus) {
		return WAITING_VERIFICATION == entityStatus;
	}

	public static void throwIfCannotRepair(RequestStatus status) {
		if (!canRepair(status))
			throw new WorkflowException(format(ERROR_MESSAGE, WorkflowAction.DATAENTRYACCEPT, status));
	}

	public static void throwIfCannotVerify(WorkflowAction action, RequestStatus status) {
		if (!canVerify(status))
			throw new WorkflowException(format(ERROR_MESSAGE, action, status));
	}

}
