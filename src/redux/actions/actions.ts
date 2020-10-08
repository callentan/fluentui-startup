import { MailNotifyActionType, MailNotifyAction } from "./mail-notify-actions";

export type ActionType = MailNotifyActionType;

interface ActionBase {
  type: ActionType;
}

export type Action = MailNotifyAction | ActionBase;
