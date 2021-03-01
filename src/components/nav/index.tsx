import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Beopjeom } from "../../assets/images/beopjeom";
import { NavData } from "./NavData";
import Submenu from "./Submenu";

const SidebarNav = styled.div`
  width: 150px;
  height: 1080px;
  background-color: #fff;
  position: fixed;
  top: 0;
  z-index: 10;
`;

const SidebarWrap = styled.div``;

export const Nav: React.FC = () => {
  return (
    <>
      <SidebarNav>
        <Beopjeom />
        <SidebarWrap>
          {NavData.map((item, idx) => {
            return <Submenu key={idx} item={item} />;
          })}
        </SidebarWrap>
      </SidebarNav>
    </>
  );
};
