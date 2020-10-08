import { all, fork } from "redux-saga/effects";
import { SagaIterator } from "redux-saga";
import { getProjectSaga } from "./get-mail";

export function* rootSaga(): SagaIterator {
  yield all([fork(getProjectSaga)]);
}
