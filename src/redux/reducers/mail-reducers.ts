import _ from "lodash";
import {
  MailNotifyAction,
  MailNotifyActionType,
} from "../actions/mail-notify-actions";
import { MailNotifyStore } from "../state/mail-store";

const initialState: MailNotifyStore = {
  lastUploadInfo: null,
};

export function mailNotifyReducer(
  state: MailNotifyStore = initialState,
  action: MailNotifyAction
) {
  switch (action.type) {
    case MailNotifyActionType.GET_MAIL_NOTIFY:
      return {
        ...state,
        loading: true,
      };
    case MailNotifyActionType.GET_MAIL_NOTIFY_FINISHED:
      return {
        ...state,
        lastUploadInfo: action.data,
        loading: false,
      };
    case MailNotifyActionType.GET_MAIL_NOTIFY_ERROR:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
}
