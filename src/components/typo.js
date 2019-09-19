import styled from "styled-components";



export const Header = styled.h1`
         @font-face {
           font-family: Grand-Hotel;
           src: url(${("fonts/GrandHotel-Regular.otf")}) format("opentype");
         };
         font-size: 22px;
         font-weight: ${props => props.fontWeight || "bold"};
         color: white;
         text-align: left;
       `;

export const P = styled.p`
         font-size: 20px;
         color: white;
         text-align: left;
       `;

