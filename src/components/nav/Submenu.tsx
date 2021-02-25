import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { NavbarItem } from "../../interfaces/NavbarItem";

type NavbarLinkProps = {
  item: NavbarItem;
};

const NavbarLink = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  margin-top: 30px;
  height: 100px;
  font-size: 1.125rem;
  text-decoration: none;
  text-
  font-color: #15366d;
  font-weight: bold;

  &:hover {
    background-color: #e7edf7;
    border-left: 10px solid #134eb0;
  }
`;

const Submenu: React.FC<NavbarLinkProps> = ({ item }) => {
  return (
    <>
      <NavbarLink to={item.path}>
        <div>{item.icon}</div>
        <div>
          <span>{item.title}</span>
        </div>
      </NavbarLink>
    </>
  );
};

export default Submenu;
