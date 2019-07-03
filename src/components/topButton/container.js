import React from "react";
import Presenter from "./presenter";

class Container extends React.Component {
  render() {
    const { topButtonClicked } = this;
    return <Presenter topButtonClicked={topButtonClicked} />;
  }

  topButtonClicked = () => {
    window.scrollTo(0, 0);
  };
}

export default Container;
