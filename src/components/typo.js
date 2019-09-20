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

const PStyle = styled.p`
  top: ${props => props.top};
  margin-left: 12px;
  margin-right: 12px;
  width: 90%;
  font-size: 16px;
  color: white;
  text-align: left;
`;


export const Header = props => {
  return <HeaderStyle {...props}>{props.text}</HeaderStyle>
}
export const P = props => {
  return <PStyle {...props}>{props.text}</PStyle>
}
