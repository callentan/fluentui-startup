import * as React from "react";
import { Fabric } from "office-ui-fabric-react";
import { Provider } from "react-redux";
import { Store } from "redux";
import { Router } from "react-router-dom";
import { History } from "history";
import { StoreState } from "./redux/state/store-state";
import { Action } from "./redux/actions/actions";
import { App } from "./app";

interface Props {
  store: Store<StoreState, Action>;
  history: History;
}

class Root extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    console.log(this.props.history);
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <Router history={this.props.history}>
          <Fabric>
            <App />
          </Fabric>
        </Router>
      </Provider>
    );
  }
}

export default Root;
