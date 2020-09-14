import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Login from "./page/login/index";
const BasicRoute = () => (
  <HashRouter>
    <Switch>
      <Route path="/" component={Login}></Route>
    </Switch>
  </HashRouter>
);

export default BasicRoute;
