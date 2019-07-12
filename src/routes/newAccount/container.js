import React from "react";
import Presenter from "./presenter";
import axios from "axios";

class Container extends React.Component {
  state = {
    iconLoading: false,
    username: "",
    password1: "",
    password2: "",
    name: "",
    phoneNumber: "",
    email: ""
  };
  render() {
    const {
      iconLoading,
      username,
      password1,
      password2,
      name,
      phoneNumber,
      email
    } = this.state;
    const { enterIconLoading, inputChange, submitButtonClicked } = this;
    return (
      <Presenter
        enterIconLoading={enterIconLoading}
        iconLoading={iconLoading}
        username={username}
        password1={password1}
        password2={password2}
        inputChange={inputChange}
        submitButtonClicked={submitButtonClicked}
        name={name}
        phoneNumber={phoneNumber}
        email={email}
      />
    );
  }

  inputChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    switch (name) {
      case "username":
        this.setState({
          username: value
        });
        break;
      case "password1":
        this.setState({
          password1: value
        });
        break;
      case "password2":
        this.setState({
          password2: value
        });
        break;
      case "name":
        this.setState({
          name: value
        });
        break;
      case "phoneNumber":
        this.setState({
          phoneNumber: value
        });
        break;
      case "email":
        this.setState({
          email: value
        });
        break;
      default:
        break;
    }
  };

  enterIconLoading = () => {
    this.setState({
      iconLoading: true
    });
  };

  submitButtonClicked = () => {
    const {
      username,
      password1,
      password2,
      name,
      phoneNumber,
      email
    } = this.state;
    const { postNewAccount } = this;
    let check = false;
    this.setState({
      iconLoading: true
    });
    // Check whether password1, password2 equal or not
    if (password1 === password2) {
      check = true;
    }
    // If password1 and password2 are not equal, then show error message and return;
    if (check === false) {
      alert("비밀번호를 다시 한 번 확인해주세요. ");
      this.setState({
        iconLoading: false
      });
      return;
    }
    if (username === "" || name === "" || phoneNumber === "" || email === "") {
      alert("빠짐없이 기입해주세요. ");
      return;
    }
    // If password1 and password2 are equal, then call post new account
    postNewAccount(username, password1, name, phoneNumber, email);
  };

  postNewAccount = (username, password, name, phoneNumber, email) => {
    console.log(username, password);
    axios
      .post("/api/user/new-account", {
        username,
        password,
        name,
        phoneNumber,
        email
      })
      .then(({ data }) => {
        console.log(data);

        if (data.ok === false) {
          // data.ok is false, then alert error message and return. and iconLoading = false
          alert(data.message);
          this.setState({
            iconLoading: false
          });
          return;
        } else {
          // else, go to the login page
          alert("회원가입에 성공했습니다. ");
          this.props.history.push("/");
          return;
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
}

export default Container;
