import React, { useState } from "react";
import { H3 } from "../typo";
import styled from "styled-components";

const Container = styled.div`
  /* position: relative; */
  color: white;
  background-color: grey;
  width: 48vw;
  margin-top: 12px;
  margin-left: 1vw;
  /* margin-right: 2vw; */
  /* padding-left: 12px;
  padding-right: 12px; */
  top: 0;
  left: 0;
`;

const Img = styled.img`
  /* display: flex; */
  /* position: absolute; */
  font-size: 22px;
  width: 45vw;
  left: 0;
  top: auto;
  z-index: 2;
`;

export const CategoryBox = props => {

        
         return (
           <Container {...props} onClick={props.name}>
             <H3 top="0px" fontWeight="bold" fontSize text={props.title}></H3>
             <Img src={props.src} />
           </Container>
         );
       };
