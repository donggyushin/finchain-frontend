import React from "react";
import Presenter from "./presenter";
import axios from "axios";

class Container extends React.Component {
  state = {
    iconLoading: false,
    username: "",
    password: ""
  };
  render() {
    const { iconLoading, username, password } = this.state;
    const { enterIconLoading, submitButtonClicked, inputChange } = this;
    return (
      <Presenter
        iconLoading={iconLoading}
        submitButtonClicked={submitButtonClicked}
        enterIconLoading={enterIconLoading}
        username={username}
        password={password}
        inputChange={inputChange}
      />
    );
  }

  enterIconLoading = () => {
    this.setState({
      iconLoading: true
    });
  };

  submitButtonClicked = () => {
    const { username, password } = this.state;

    this.enterIconLoading();
    axios
      .post("/api/user/login", {
        username,
        password
      })
      .then(({ data }) => {
        // if data.ok is false, show error message and make iconLoading false, and return.
        if (data.ok === false) {
          alert(data.message);
          this.setState({
            iconLoading: false
          });
          return;
        }
        // if data.ok is true, get the jwt token into the localstorage, and then redirect to the home page
        const jwt = data.jwt;
        localStorage.setItem("token", jwt);
        window.location.href = "/";
      })
      .catch(err => {
        console.log(err);
      });
  };

  inputChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    switch (name) {
      case "username":
        this.setState({
          username: value
        });
        break;
      case "password":
        this.setState({
          password: value
        });
        break;
      default:
        break;
    }
  };
}

export default Container;
