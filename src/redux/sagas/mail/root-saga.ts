import { all, fork } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import { getLastUploadTimestampSaga, getUsersSaga } from "./mail-get";

export function* rootSaga(): SagaIterator {
  yield all([fork(getLastUploadTimestampSaga), fork(getUsersSaga)]);
}
