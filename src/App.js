import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import MainPage from "./routes/main"

function App() {
  return (
    <Router>
      <Switch>
        <Route path={'/'} exact component={MainPage} />
        <Route component={MainPage} />
      </Switch>
    </Router>
  );
}

export default App;
