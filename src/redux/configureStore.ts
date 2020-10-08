import { createStore, applyMiddleware, Store } from "redux";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./sagas/root-saga";
import { StoreState } from "./state/store-state";
import { Action } from "./actions/actions";
import rootReducer from "./reducers/reducers";

export const configureStore = (): Store<StoreState, Action> => {
  const sagaMiddleware = createSagaMiddleware();
  const store = (createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
  ) as unknown) as Store<StoreState, Action>;
  sagaMiddleware.run(rootSaga);

  return store;
};

export default configureStore;
