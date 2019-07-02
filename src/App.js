import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import MainPage from "./routes/main"
import NavigationBar from './components/navigationBar'
import styled from 'styled-components'
import LoginPage from './routes/login'
import NewAccountPage from './routes/newAccount'

const NavigationBarContainer = styled.div`
  width:100%;
  display:flex;
  justify-content:center;
  position:absolute;
  top:0;
`

function App() {
  return (
    <Router>
      <NavigationBarContainer style={{
        marginTop: 20
      }}>
        <NavigationBar />
      </NavigationBarContainer>
      <Switch>
        <Route path={'/'} exact component={MainPage} />
        <Route path={'/login'} exact component={LoginPage} />
        <Route path={'/newaccount'} exact component={NewAccountPage} />
        <Route component={MainPage} />
      </Switch>
    </Router>
  );
}

export default App;
