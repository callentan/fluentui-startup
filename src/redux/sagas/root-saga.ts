import { fork, all } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { rootSaga as mailRootSaga } from './mail/root-saga';

export function* rootSaga(): SagaIterator {
    try {
        yield all([fork(mailRootSaga)]);
    } catch (err) {}
}
