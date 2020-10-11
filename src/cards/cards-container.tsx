import * as React from "react";
import _ from "lodash";

type Props = {};

class CardsContainer extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const {} = this.props;
    return (
      <div id="cards-container">
        <div id="cards-content">
          <div id="cards-header">CardsContainer</div>
          <div id="cards-body"></div>
        </div>
      </div>
    );
  }
}

export default CardsContainer;
