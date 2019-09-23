import React,{ useState } from 'react';
import { Route, Switch, Link } from "react-router-dom";
import styled from "styled-components";
import NavigationButton from '../NavigationButton';
import Category from '../Category';
import {Header, H2, H3, P} from '../typo';
import Line from '../Line'

const CategoryDivStyled = styled.div`
height: 56px;
width: 95vw;
display: flex;
flex-direction: row;
justify-content: flex-end;
align-items: center;

`;


const DivStyled = styled.div`
height: 40vh;
width: 100vw;

a {
  color: #fff;
  text-decoration: none;
}

label{
  position: absolute;
  /* display: inline-block; */
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
            <NavigationButton goTo="Uppspelning"/>
              <Line />
                <DivStyled>
                  <NavigationButton goTo="Mobildataanvändning" img="assets/icons/right-arrow.svg"/>
                      <NavigationButton goTo="Nedladdningar"/>
                        <Line />
                          <CategoryDivStyled>
                            <Category text='Endast Wifi'/>
                              <input type="checkbox" id="toggle" />
                              <label for="toggle"></label>
                            </CategoryDivStyled>
                        <NavigationButton goTo="Videokvalitet" img="assets/icons/right-arrow.svg"/>
                    <NavigationButton goTo="Ta bort allt sparat" img="assets/icons/garbage.svg"/>
                  <Line />
            </DivStyled>
  </div>
)}

export default SettingPage;
