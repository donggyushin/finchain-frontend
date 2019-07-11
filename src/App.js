import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import MainPage from "./routes/main";
import NavigationBar from "./components/navigationBar";
import styled from "styled-components";
import LoginPage from "./routes/login";
import NewAccountPage from "./routes/newAccount";
import TopButton from "./components/topButton";
import SecretPage from "./routes/secret";
import AdminButton from "./components/adminButton";
import ChangePasswordButton from "./components/changePassword";
import ChangePasswordPage from "./routes/changePassword";
import axios from "axios";

const NavigationBarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0;
`;

class AppContainer extends React.Component {
  state = {
    login: false,
    admin: false
  };
  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token !== null) {
      this.setState({
        login: true
      });
    } else {
      this.setState({
        login: false
      });
    }

    this.checkUserAdim();
  }
  render() {
    const { login, admin } = this.state;
    const { logout } = this;
    return <App logout={logout} admin={admin} login={login} />;
  }

  logout = () => {
    localStorage.removeItem("token");
    this.setState({
      login: false,
      admin: false
    });
  };

  checkUserAdim = () => {
    axios
      .get("/api/user/admin", {
        headers: {
          token: localStorage.getItem("token")
        }
      })
      .then(res => res.data)
      .then(data => {
        if (data.ok) {
          console.log("admin:", data.admin);
          this.setState({
            admin: data.admin
          });
        }
      })
      .catch(err => console.log(err));
  };
}

function App({ login, logout, admin }) {
  return (
    <Router>
      {admin && <AdminButton />}
      {admin && <ChangePasswordButton />}
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
        <Route
          path={"/change-password-only-master"}
          exact
          component={ChangePasswordPage}
        />
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
