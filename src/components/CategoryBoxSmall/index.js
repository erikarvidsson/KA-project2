import React, { useState } from "react";
import { H3,P } from "../typo";
import styled from "styled-components";

const Container = styled.div`
position: relative;
color: white;
display: flex;
align-items: center;
justify-content: center;
flex-direction: row;
background-color: grey;
height: 153px;
width: 170px;
border-radius: 5px;
object-fit: cover;

`;

const Img = styled.img`
position: relative;
object-fit: cover;
height: 183px;
width: 250px;
left: 0;
top: auto;
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
