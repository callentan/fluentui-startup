import React from "react";
import ReactDOM from "react-dom";
import { mergeStyles } from "office-ui-fabric-react";
import { configureStore } from "./redux/configureStore";
import Root from "./root";
import history from './utils/history';
import { initMocks } from "./mocks/mock";


// Inject some global styles
mergeStyles({
  selectors: {
    ":global(body), :global(html), :global(#app)": {
      margin: 0,
      padding: 0,
      height: "100vh",
    },
  },
});

function init() {
  const rootElement = document.getElementById("root");
  const store = configureStore();
  initMocks();
  ReactDOM.render(<Root store={store} history={history} />, rootElement);
}

init();
