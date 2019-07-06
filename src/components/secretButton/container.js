import Presenter from "./presenter";
import React from "react";
import { withRouter } from "react-router-dom";

class Container extends React.Component {
  render() {
    const { secretButtonClicked } = this;
    return <Presenter secretButtonClicked={secretButtonClicked} />;
  }

  secretButtonClicked = () => {
    this.props.history.push("/finchain/q1w2e3r4");
  };
}

export default withRouter(Container);
