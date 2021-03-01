import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Nav } from "../components/nav/Nav";
import { MainIcon, Home, Judge, Help } from "../pages/Preview";
import { Signup } from "../pages/Signup";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route path="/beopjeom" component={MainIcon} exact></Route>
        <Route path="/home" component={Home} exact></Route>
        <Route path="/signup" component={Signup} exact></Route>
        <Route path="/judge" component={Judge}></Route>
        <Route path="/help" component={Help}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
