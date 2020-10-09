import React from "react";
import ReactDOM from "react-dom";
import * as History from "history";
import { configureStore } from "./redux/configureStore";
import Root from "./root";
import { initMocks } from "./mocks/mock";

function init() {
  initMocks();
  const rootElement = document.getElementById("root");
  const history = History.createBrowserHistory();
  const store = configureStore();
  ReactDOM.render(<Root store={store} history={history} />, rootElement);
}

init();
