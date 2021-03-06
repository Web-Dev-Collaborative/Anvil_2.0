import React from "react";
import { Switch, Route } from "react-router-dom";

import { LoginForm, SignUpForm } from "../Forms";
import NavBar from "./NavBar";
import User from "../User";

const LandingPage = () => {
  return (
    <div>
      <NavBar />
      <h1>This is a Landing Page</h1>
      <Switch>
        <Route exact path="/login">
          <h1>Login Form</h1>
          <LoginForm />
        </Route>
        <Route exact path="/sign-up">
          <SignUpForm />
        </Route>
        <Route exact path="/users/:id">
          <User />
        </Route>
      </Switch>
    </div>
  );
};

export default LandingPage;
