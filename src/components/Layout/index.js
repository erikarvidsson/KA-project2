import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 0 auto;
  text-align: center;
  ul{
    list-style: none;
    padding: 0%; 
  }
`;

const Layout = (props) => {
  return (
    <Wrapper>
      {/* <ul>
          <Link href="/about">
            <a>About</a>
          </Link>
          <br />
          <Link href="/index">
            <a>Home</a>
          </Link>
          <br />
          <Link href="/login">
            <a>Login</a>
          </Link>
      </ul> */}
      {props.children}
    </Wrapper>
  );
}

export default Layout;