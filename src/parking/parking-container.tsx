import * as React from "react";
import _ from "lodash";

type Props = {};

class ParkingContainer extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const {} = this.props;
    return (
      <div id="parking-container">
        <div id="parking-content">
          <div id="parking-header">ParkingContainer</div>
          <div id="parking-body"></div>
        </div>
      </div>
    );
  }
}

export default ParkingContainer;
