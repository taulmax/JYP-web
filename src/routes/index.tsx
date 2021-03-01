import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Nav } from "../components/nav/Nav";
import { MainIcon, Home, Help } from "../pages/Preview";
import styled from "styled-components";
import { Court } from "../pages/court";

const MainWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const SubWrapper = styled.div`
  width: calc(100% - 150px);
  height: 100%;
  margin-left: 150px;
`;

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Nav />
      <MainWrapper>
        <SubWrapper>
          <Switch>
            <Route path="/beopjeom" component={MainIcon} exact></Route>
            <Route path="/home" component={Home} exact></Route>
            <Route path="/court" component={Court}></Route>
            <Route path="/help" component={Help}></Route>
          </Switch>
        </SubWrapper>
      </MainWrapper>
    </BrowserRouter>
  );
};

export default Routes;
