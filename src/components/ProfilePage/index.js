import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
import NavigationButton from '../NavigationButton';
const Section = styled.section`
  height: 100vh;
  width: 100vw;

  .profilePicture {
    height: 200px;
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
  a {
    display:flex;
    align-items:center;
  }

  img {
    width:20px;
    height:auto;
  }
`;
const Div = styled.div`
  /* height: 40vh; */
  width: 100vw;
  a {
    color: #fff;
    text-decoration: none;
  }

  h3 {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 100vw;
    padding: 20px;
  }
  h5 {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 100vw;
    padding-left: 20px;
    line-height: 0;
  }
`;

const ProfilePage = () => {
    return (
    <div>
      <Section>
      <Icon>
        <Link to='/'><img src='assets/icons/left-arrow.svg'/></Link>
      </Icon>
        <img className='profilePicture'src='assets/icons/Profilbild.svg' alt=""></img>
        <Div>
          <h3>Namn Efternamn</h3>
          <h5>Kulturförvaltare</h5>
          <Link to='/Konto'><NavigationButton goTo="Konto" img="assets/icons/right-arrow.svg"/></Link>
          <Link to='/Konto'><NavigationButton goTo="Inställningar" img="assets/icons/right-arrow.svg"/></Link>
          <Link to='/Konto'><NavigationButton goTo="Hjälp" img="assets/icons/right-arrow.svg"/></Link>
          <Link to='/Konto'><NavigationButton goTo="Logga ut" img="assets/icons/logout.svg"/></Link>
          </Div>
      </Section>
    </div>
)}
export default ProfilePage;
