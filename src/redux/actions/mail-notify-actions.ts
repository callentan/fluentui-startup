export type MailNotifyActionType =
  | "GET_PROJECT"
  | "GET_PROJECT_FINISHED"
  | "GET_PROJECT_ERROR";

export const MailNotifyActionType = {
  GET_MAIL_NOTIFY: "GET_PROJECT" as MailNotifyActionType,
  GET_MAIL_NOTIFY_FINISHED: "GET_PROJECT_FINISHED" as MailNotifyActionType,
  GET_MAIL_NOTIFY_ERROR: "GET_PROJECT_ERROR" as MailNotifyActionType,
};

interface MailNotifyActionBase {
  type: MailNotifyActionType;
  data?: any;
  error?: string;
}

export const getMailNotifyAction = (): MailNotifyActionBase => ({
  type: MailNotifyActionType.GET_MAIL_NOTIFY,
});

export type MailNotifyAction = Partial<MailNotifyActionBase> &
  MailNotifyActionBase;
