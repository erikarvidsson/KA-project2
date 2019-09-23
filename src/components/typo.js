import React from "react";
import styled from "styled-components";

const HeaderStyle = styled.h1`
  /* @font-face {
    font-family: Grand-Hotel;
    src: url(${"fonts/GrandHotel-Regular.otf"}) format("opentype");
  }; */
  font-size: 48px;
  font-weight: ${props => props.fontWeight || "normal"};
  margin-top: ${props => props.marginTop || "12px"};
  margin-left: 12px;
  margin-right: 12px;
  color: white;
  text-align: ${props => props.textAlign || 'center'};
  width: 90%;
`;

const H2Style = styled.h2`
  font-size: 38px;
  font-weight: ${props => props.fontWeight || "normal"};
  margin-top: ${props => props.marginTop || "12px"};
  margin-left: 12px;
  margin-right: 12px;
  color: white;
  text-align: ${props => props.textAlign || 'left'};
  width: 90%;
`;

const H3Style = styled.h3 `
  font-size: 22px;
  font-weight: ${props => props.fontWeight || "normal"};
  margin-top: ${props => props.marginTop || "12px"};
  margin-left: 12px;
  margin-right: 12px;
  color: white;
  text-align: ${props => props.textAlign || 'left'};
  width: 90%; 
  z-index: ${props => props.zIndex};
  position: ${props => props.zIndex};
`;

const PStyle = styled.p`
  font-size: 16px;
  font-weight: ${props => props.fontWeight || "normal"};
  top: ${props => props.top};
  margin-left: 12px;
  margin-right: 12px;
  color: white;
  text-align: ${props => props.textAlign || 'left'};
  width: 90%;
  z-index: ${props => props.zIndex};
  position: ${props => props.zIndex};
`;


export const Header = props => {
  return <HeaderStyle {...props}>{props.text}</HeaderStyle>
}

export const H2 = props => {
  return <H2Style {...props}>{props.text}</H2Style>
}

export const H3 = props => {
  return <H3Style {...props}>{props.text}</H3Style>
}

export const P = props => {
  return <PStyle {...props}>{props.text}</PStyle>
}
