import { SagaIterator } from "redux-saga";
import { call, put, takeLatest } from "redux-saga/effects";
import { MailNotifyActionType } from "../../actions/mail-notify-actions";
import { getLastMailNotifyApi } from "../../../data/services/APIs";

export function* getLastMailNotify(): SagaIterator {
  try {
    const data = yield call(() => getLastMailNotifyApi());
    yield put({ type: MailNotifyActionType.GET_MAIL_NOTIFY_FINISHED, data });
  } catch (error) {
    yield put({ type: MailNotifyActionType.GET_MAIL_NOTIFY_ERROR, error });
  }
}

export function* getProjectSaga(): SagaIterator {
  yield takeLatest(MailNotifyActionType.GET_MAIL_NOTIFY, getLastMailNotify);
}
