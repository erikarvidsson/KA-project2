import React from "react";
import styled from "styled-components";
import Menu from "../Menu";

const Wrapper = styled.div`
  margin: 0 auto;
  text-align: center;
  background-color: black;
  ul{
    list-style: none;
    padding: 0%; 
  }
`;

const Layout = (props) => {
  return (
    <Wrapper>
      {props.children}
      <Menu />
    </Wrapper>
  );
}

export default Layout;