import React,{ useState } from 'react';
import { Route, Switch, Link } from "react-router-dom";
import styled from "styled-components";
import NavigationButton from '../NavigationButton';
import Category from '../Category';
import {Header, H2, H3, P} from '../typo';

const Section = styled.section`
height: 100vh;
width: 100vw;

`;


const CategoryDivStyled = styled.div`
height: 56px;
display: flex;
justify-content: space-around;
align-items: center;

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

label{
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
  background-color: rgba(255,255,255, 0.3);
  border-radius: 20px;
  transition: all 0.3s;
}
label::after {
  content: '';
  position: absolute;
  width: 18px;
  height: 18px;
  border-radius:50%;
  background-color: white;
  top: 1px;
  left: 1px;
  transition: all 0.3s;
}

input:checked + label::after {
  left : 20px;
}
input:checked + label {
 background-color: #69df75;
}
input {
 display : none;
}


`;

const SettingPage = (props) => {
    return (
    <div>
    <Section>
      <H3 text='Inställningar'/>
        <P text='Uppspelning'/>
          <Div>
            <Link to='/Konto'><NavigationButton goTo="Mobilanvändning" img="assets/icons/right-arrow.svg"/></Link>
              <NavigationButton goTo="Nedladdningar"/>
                <CategoryDivStyled>
                  <Category text='Endast Wifi'/><input type="checkbox" id="toggle" /><label for="toggle"></label>
                </CategoryDivStyled>

            <Link to='/Konto'><NavigationButton goTo="Videokvalitet" img="assets/icons/right-arrow.svg"/></Link>
            <Link to='/Konto'><NavigationButton goTo="Ta bort alla nedladdningar" img="assets/icons/garbage.svg"/></Link>
      </Div>
    </Section>
  </div>
)}

export default SettingPage;
