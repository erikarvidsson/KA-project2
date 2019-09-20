import React,{ useState } from 'react';
import { Route, Switch, Link } from "react-router-dom";
import styled from "styled-components";
import NavigationButton from '../NavigationButton';


const Section = styled.section`
height: 100vh;
width: 100vw;

`;

const Profile = styled.div`
height: 40px;
display: flex;
align-items: center;
justify-content: flex-start;
border-bottom: 1px solid white;

img {
width: 80px;
height: 80px;
border-radius: 50%;
background-color: #fff;
object-fit: cover;
margin-left: 40px;
box-shadow: 0 8px 6px -6px black;
}

h3 {
margin-left: 20px;
}

h4 {
margin-left: 20px;
}
`;

const Icon = styled.div`
color: #fff;
display: flex;
justify-content:center;
align-items:center;
position:fixed;
top:30px;
left:30px;


`;

const Div = styled.div`
height: 40vh;
width: 100vw;

a {
  color: #fff;
  text-decoration: none;
}

`;

const SettingPage = (props) => {
    return (
    <div>
    <Section>
      <h3>Inställningar</h3>
    <Profile>
      <h4>Uppspelning</h4>
    </Profile>
        <Div>
          <Link to='/Konto'><NavigationButton goTo="Mobilanvändning" img="assets/icons/right-arrow.svg"/></Link>
          <Link to='/Konto'><NavigationButton goTo="Endast Wifi" img="assets/icons/right-arrow.svg"/></Link>
          <Link to='/Konto'><NavigationButton goTo="Videokvalitet" img="assets/icons/right-arrow.svg"/></Link>
          <Link to='/Konto'><NavigationButton goTo="Ta bort alla nedladdningar" img="assets/icons/garbage.svg"/></Link>
      </Div>
    </Section>
  </div>
)}

export default SettingPage;
