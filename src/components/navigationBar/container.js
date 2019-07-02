import React from "react";
import Presenter from "./presenter";

class Container extends React.Component {
  render() {
    const { login } = this.props;
    const { logoutButtonClicked } = this;
    return (
      <Presenter logoutButtonClicked={logoutButtonClicked} login={login} />
    );
  }

  logoutButtonClicked = () => {
    const { logout } = this.props;
    logout();
  };
}

export default Container;
