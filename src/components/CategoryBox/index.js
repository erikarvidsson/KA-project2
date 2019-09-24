import React, { useState } from "react";
import { H3, P } from "../typo";
import styled from "styled-components";

const Container = styled.div`
  color: white;
  background-color: grey;
  height: 153px;
  width: 170px;
  margin-top: 12px;
  border-radius: 5px;
  top: 0;
  left: 0;
  display: flex;
  
  align-items: center;
`;

const Img = styled.img`
  position: absolute;
  object-fit: cover;
  /* font-size: 22px; */
  width: 100%;
  left: 0;
  top: auto;
  z-index: 2;
`;

export const CategoryBox = props => {

        
         return (
           <Container {...props} onClick={props.name}>
             <P top="0px" textAlign='center' marginLeft='0' text={props.title}></P>
             <Img src={props.src} />
           </Container>
         );
       };
