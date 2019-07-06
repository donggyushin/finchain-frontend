import React from "react";
import Presenter from "./presenter";
import axios from "axios";

class Container extends React.Component {
  state = {
    datas: []
  };

  componentDidMount() {
    this.getUserDatas();
  }

  render() {
    const { datas } = this.state;
    return <Presenter datas={datas} />;
  }

  getUserDatas = () => {
    axios
      .get("/api/user/")
      .then(response => response.data)
      .then(data => {
        const { users } = data;
        this.setState({
          datas: users
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
}

export default Container;
