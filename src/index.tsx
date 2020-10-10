import React from "react";
import ReactDOM from "react-dom";
import { initializeIcons } from "office-ui-fabric-react/lib/Icons";
import * as History from "history";
import { configureStore } from "./redux/configureStore";
import Root from "./root";
import { initMocks } from "./mocks/mock";

import "./index.css";

function init() {
  initMocks();
  initializeIcons();
  const rootElement = document.getElementById("root");
  const history = History.createBrowserHistory();
  const store = configureStore();
  ReactDOM.render(<Root store={store} history={history} />, rootElement);
}

init();
