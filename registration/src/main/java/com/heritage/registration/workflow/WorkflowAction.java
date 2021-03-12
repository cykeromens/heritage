package com.heritage.registration.workflow;


import static com.heritage.registration.workflow.CompleteAction.*;

public enum WorkflowAction {
	APPROVE(DECISION),
	REPAIR(DECISION),
	DATAENTRYACCEPT(CompleteAction.REPAIR),
	DISABLE(CompleteAction.REPAIR),
	REJECT(DECISION),
	DISABLE_APPROVE(DECISION),
	TRANSFER_REJECT(CompleteAction.REPAIR),
	SAVE(DECISION),
	DELETE(DECISION),
	SUBMIT(DECISION);

	private CompleteAction action;

	WorkflowAction(CompleteAction action) {
		this.action = action;
	}

	public CompleteAction getAction() {
		return action;
	}

	public String getName() {
		return this.name();
	}

}
