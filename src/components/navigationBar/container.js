import React from "react";
import Presenter from "./presenter";

class Container extends React.Component {
  render() {
    const { login } = this.props;
    const { logoutButtonClicked, navItemClicked } = this;
    return (
      <Presenter
        navItemClicked={navItemClicked}
        logoutButtonClicked={logoutButtonClicked}
        login={login}
      />
    );
  }

  logoutButtonClicked = () => {
    const { logout } = this.props;
    logout();
  };

  navItemClicked = e => {
    const id = e.target.id;
    console.log(id);

    switch (id) {
      case "1":
        window.scrollTo(0, 0);
        break;
      case "2":
        window.scrollTo(0, 800);
        break;
      case "3":
        window.scrollTo(0, 1519);
        break;
      case "4":
        window.scrollTo(0, 2921);
        break;
      case "5":
        window.scrollTo(0, 5845);
        break;
      default:
        break;
    }
  };
}

export default Container;
