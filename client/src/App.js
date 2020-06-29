import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import LoginPage from "./components/LoginPage/LoginPage";
import RegisterPage from "./components/RegisterPage/RegisterPage";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={LandingPage} />;
        <Route exact path="/login" component={LoginPage} />;
        <Route exact path="/register" component={RegisterPage} />;
      </Switch>
    </div>
  );
}

export default App;
