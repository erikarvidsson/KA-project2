import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
import NavigationButton from '../NavigationButton';
import {Header, H2, H3, P} from '../typo';

const ImgStyled = styled.img`
height: 250px;
top: 0;
left:0;
display: flex;
width: 100vw;
justify-content: center;

`;

const IconStyled = styled.div`
color: #fff;
display: flex;
justify-content:center;
align-items:center;
position:fixed;
top:30px;
left:30px;

img {
  width:20px;
  height:auto;
}
`;
const DivStyled = styled.div`
width: 100vw;
a {
color: #fff;
text-decoration: none;
}

`;

const ProfilePage = (props) => {
    return (
    <div>
        <ImgStyled src='assets/icons/Profilbild.svg' alt=''></ImgStyled>
        <DivStyled>
          <H3 text="Namn Efternamn" marginLeft="20px"/>
          <P text="Kulturakademin" marginLeft="20px"/>
            <Link to='/Konto'><NavigationButton goTo="Konto" img="assets/icons/right-arrow.svg"/></Link>
            <Link to='/Settings'><NavigationButton goTo="Inställningar" img="assets/icons/right-arrow.svg"/></Link>
            <Link to='/Help'><NavigationButton goTo="Hjälp" img="assets/icons/right-arrow.svg"/></Link>
            <Link to='/'><NavigationButton goTo="Logga ut" img="assets/icons/logout.svg"/></Link>
        </DivStyled>
    </div>
)}
export default ProfilePage;
