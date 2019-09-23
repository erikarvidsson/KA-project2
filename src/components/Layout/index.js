import React from "react";
import styled from "styled-components";
import Menu from "../Menu";
import { Route, Switch, Link } from "react-router-dom";

const Wrapper = styled.div`
  margin: 0 auto;
  text-align: ${props => props.textAlign || 'left'};
  background-color: #101010;
  margin-bottom: 68px;
`;

const Layout = (props) => {
  return (
    <Wrapper {...props}>
      {props.children}
      <Menu />
    </Wrapper>
  );
}

export default Layout;
