import Presenter from "./presenter";
import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

class Container extends React.Component {
  state = {
    password: ""
  };
  render() {
    const { password } = this.state;
    const { handleInput, changePassword } = this;
    return (
      <Presenter
        handleInput={handleInput}
        changePassword={changePassword}
        password={password}
      />
    );
  }

  changePassword = () => {
    const { password } = this.state;
    axios
      .post("/api/user/change-password", {
        password
      })
      .then(res => res.data)
      .then(data => {
        if (data.ok) {
          alert("비밀 번호 변경에 성공하였습니다. ");
          this.props.history.push("/");
        } else {
          alert(data.error);
          return;
        }
      })
      .catch(err => console.log(err));
  };

  handleInput = e => {
    const { value } = e.target;
    this.setState({
      password: value
    });
  };
}

export default withRouter(Container);
