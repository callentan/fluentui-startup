import { SagaIterator } from "redux-saga";
import { call, put, takeLatest } from "redux-saga/effects";
import {
  getLastUploadTimestampApi,
  getUsersApi,
} from "../../../data/services/APIs";
import {
  GetUsersAction,
  MailNotifyActionType,
} from "../../actions/mail-notify-actions";

export function* getLastUploadTimestamp(): SagaIterator {
  try {
    const data = yield call(() => getLastUploadTimestampApi());
    yield put({
      type: MailNotifyActionType.GET_LAST_UPLOAD_TIMESTAMP_FINISHED,
      data,
    });
  } catch (error) {
    yield put({
      type: MailNotifyActionType.GET_LAST_UPLOAD_TIMESTAMP_ERROR,
      error,
    });
  }
}

export function* getUsers(action: GetUsersAction): SagaIterator {
  try {
    const data = yield call(() => getUsersApi(action.file));
    yield put({
      type: MailNotifyActionType.GET_USERS_FINISHED,
      data,
    });
  } catch (error) {
    yield put({
      type: MailNotifyActionType.GET_USERS_ERROR,
      error,
    });
  }
}

export function* getLastUploadTimestampSaga(): SagaIterator {
  yield takeLatest(
    MailNotifyActionType.GET_LAST_UPLOAD_TIMESTAMP,
    getLastUploadTimestamp
  );
}

export function* getUsersSaga(): SagaIterator {
  yield takeLatest(MailNotifyActionType.GET_USERS, getUsers);
}
