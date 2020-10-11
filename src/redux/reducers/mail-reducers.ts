import {
  MailNotifyAction,
  MailNotifyActionType,
} from "../actions/mail-notify-actions";
import { MailNotifyStore } from "../state/mail-store";

const initialState: MailNotifyStore = {
  lastUpload: null,
  users: null,
};

export function mailNotifyReducer(
  state: MailNotifyStore = initialState,
  action: MailNotifyAction
) {
  switch (action.type) {
    case MailNotifyActionType.GET_LAST_UPLOAD_TIMESTAMP:
      return {
        ...state,
        loading: true,
      };
    case MailNotifyActionType.GET_LAST_UPLOAD_TIMESTAMP_FINISHED:
      return {
        ...state,
        lastUpload: action.data,
        loading: false,
      };
    case MailNotifyActionType.GET_LAST_UPLOAD_TIMESTAMP_ERROR:
      return {
        ...state,
        error: action.error,
      };
    case MailNotifyActionType.GET_USERS:
      return {
        ...state,
        loading: true,
      };
    case MailNotifyActionType.GET_USERS_FINISHED:
      return {
        ...state,
        users: action.data,
        loading: false,
      };
    case MailNotifyActionType.GET_USERS_ERROR:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
}
