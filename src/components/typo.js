import React from "react";
import styled from "styled-components";



const HeaderStyle = styled.h1`
  /* @font-face {
    font-family: Grand-Hotel;
    src: url(${"fonts/GrandHotel-Regular.otf"}) format("opentype");
  }; */
  font-size: 22px;
  font-weight: ${props => props.fontWeight || "bold"};
  margin-top: ${props => props.top || "300px"};
  margin-left: 12px;
  margin-right: 12px;
  color: white;
  text-align: left;
  width: 90%;  
`;

const H2Style = styled.h2`
  font-size: 38px;
  font-weight: ${props => props.fontWeight || "normal"};
  margin-top: ${props => props.top || "12px"};
  margin-left: 12px;
  margin-right: 12px;
  color: white;
  text-align: left;
  width: 90%; 
`

const PStyle = styled.p`
  top: ${props => props.top};
  margin-left: 12px;
  margin-right: 12px;
  width: 90%;
  font-size: 20px;
  color: white;
  text-align: left;
`;


export const Header = props => {
  return <HeaderStyle {...props}>{props.text}</HeaderStyle>
} 

export const H2 = props => {
  return <H2Style {...props}>{props.text}</H2Style>
} 

export const P = props => {
  return <PStyle {...props}>{props.text}</PStyle>
} 


