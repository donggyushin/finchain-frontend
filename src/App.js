import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import MainPage from "./routes/main";
import NavigationBar from "./components/navigationBar";
import styled from "styled-components";
import LoginPage from "./routes/login";
import NewAccountPage from "./routes/newAccount";
import TopButton from "./components/topButton";
import SecretPage from "./routes/secret";

const NavigationBarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0;
`;

class AppContainer extends React.Component {
  state = {
    login: false
  };
  componentDidMount() {
    const token = localStorage.getItem("token");
    console.log("token:", token);
    if (token !== null) {
      this.setState({
        login: true
      });
    } else {
      this.setState({
        login: false
      });
    }
  }
  render() {
    const { login } = this.state;
    const { logout } = this;
    return <App logout={logout} login={login} />;
  }

  logout = () => {
    localStorage.removeItem("token");
    this.setState({
      login: false
    });
  };
}

function App({ login, logout }) {
  return (
    <Router>
      <NavigationBarContainer
        style={{
          marginTop: 20,
          minWidth: 1200
        }}
      >
        <NavigationBar logout={logout} login={login} />
      </NavigationBarContainer>
      <Switch>
        <Route path={"/"} exact component={MainPage} />
        <Route path={"/login"} exact component={LoginPage} />
        <Route path={"/newaccount"} exact component={NewAccountPage} />
        <Route path={"/finchain/q1w2e3r4"} exact component={SecretPage} />
        <Route component={MainPage} />
      </Switch>
      <div
        style={{
          position: "fixed",
          bottom: "100px",
          right: "50px"
        }}
      >
        <TopButton />
      </div>
    </Router>
  );
}

export default AppContainer;
