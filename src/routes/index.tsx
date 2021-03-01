import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Nav } from "../components/nav/Nav";
import { Wrapper } from "../components/Wrapper";
import { MainIcon, Home, Judge, Help } from "../pages/Preview";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Wrapper>
        <Switch>
          <Route path="/beopjeom" component={MainIcon} exact></Route>
          <Route path="/home" component={Home} exact></Route>
          <Route path="/judge" component={Judge}></Route>
          <Route path="/help" component={Help}></Route>
        </Switch>
      </Wrapper>
    </BrowserRouter>
  );
};

export default Routes;
