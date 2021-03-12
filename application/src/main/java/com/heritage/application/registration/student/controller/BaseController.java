package com.heritage.application.registration.student.controller;


import com.heritage.api.model.WorkflowActionResponse;
import com.heritage.registration.workflow.CompleteAction;
import com.heritage.registration.workflow.WorkflowAction;

import java.util.List;

import static java.util.Objects.isNull;

public abstract class BaseController {

	protected void actionLinks(String uuid, List<WorkflowActionResponse> availableActions) {
		if (isNull(availableActions))
			return;
		availableActions.forEach(x -> {
			WorkflowAction action = WorkflowAction.valueOf(x.getAction());
			if (action.getAction() == CompleteAction.REPAIR) {
				x.setHref(repairLink(uuid));
			} else {
				x.setHref(decisionLink(uuid, action));
			}
		});
	}

	public abstract String selfLink(String uuid);

	public abstract String repairLink(String uuid);

	public abstract String decisionLink(String uuid, WorkflowAction action);


}
