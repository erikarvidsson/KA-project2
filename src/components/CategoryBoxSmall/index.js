import React, { useState } from "react";
import { H3,P } from "../typo";
import styled from "styled-components";

const Container = styled.div`

  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background-color: grey;
  width: 48vw;
  height: 130px;
  margin-left: 1vw;
  border-radius: 5px;
  top: 0;
  left: 0;
`;

const Img = styled.img`
  text-align: center;
  font-size: 22px;
  margin: 5px;
  width: 45vw;
  left: 0;
  top: auto;
  z-index: 2;
`;

  const CategoryBoxSmall = props => {
         return (
           <Container {...props} onClick={props.name}>
             <P top="0px" textAlign="center" marginLeft="55px" fontSize text={props.title}></P>
             <Img src={props.src} />
           </Container>
         );
       };

export default CategoryBoxSmall
