export type MailNotifyActionType =
  | "GET_LAST_UPLOAD_TIMESTAMP"
  | "GET_LAST_UPLOAD_TIMESTAMP_FINISHED"
  | "GET_LAST_UPLOAD_TIMESTAMP_ERROR"
  | "GET_USERS"
  | "GET_USERS_FINISHED"
  | "GET_USERS_ERROR";

export const MailNotifyActionType = {
  GET_LAST_UPLOAD_TIMESTAMP: "GET_LAST_UPLOAD_TIMESTAMP" as MailNotifyActionType,
  GET_LAST_UPLOAD_TIMESTAMP_FINISHED: "GET_LAST_UPLOAD_TIMESTAMP_FINISHED" as MailNotifyActionType,
  GET_LAST_UPLOAD_TIMESTAMP_ERROR: "GET_LAST_UPLOAD_TIMESTAMP_ERROR" as MailNotifyActionType,
  GET_USERS: "GET_USERS" as MailNotifyActionType,
  GET_USERS_FINISHED: "GET_USERS_FINISHED" as MailNotifyActionType,
  GET_USERS_ERROR: "GET_USERS_ERROR" as MailNotifyActionType,
};

interface MailNotifyActionBase {
  type: MailNotifyActionType;
  data?: any;
  error?: string;
}

export interface GetUsersAction extends MailNotifyActionBase {
  file: any;
}

export const getLastUploadTimeStamp = (): MailNotifyActionBase => ({
  type: MailNotifyActionType.GET_LAST_UPLOAD_TIMESTAMP,
});

export const getUsers = (file: any): GetUsersAction => ({
  type: MailNotifyActionType.GET_USERS,
  file: file,
});

export type MailNotifyAction = Partial<MailNotifyActionBase> &
  MailNotifyActionBase;
