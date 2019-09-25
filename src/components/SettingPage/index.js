import React from 'react';
import styled from "styled-components";
import NavigationButton from '../NavigationButton';
import Category from '../Category';
import { P } from '../typo';
import Line2 from '../Line2'

const CategoryDivStyled = styled.div`
    height: 56px;
    width: 95vw;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    margin-right: 0;
`;

const Div = styled.div`
    display: flex;
    flex-direction: row;
    color: #fff;
`;

const DivStyledUppspelning = styled.div`
    margin-left: 14px;
    margin-top: 25px;
`;

const DivStyled = styled.div`
    height: 40vh;
    width: 100vw;
    margin-left: 10px;

    a{
      color: #fff;
      text-decoration: none;
    }

    label{
      position: absolute;
      /* display: inline-block; */
      width: 40px;
      height: 20px;
      background-color: #69df75;
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
      right: 1px;
      transition: all 0.3s;
    }

    input:checked + label::after {
    right : 20px;
    }

    input:checked + label {
    background-color: rgba(255,255,255, 0.3);
    }

    input {
    display : none;
    }
`;

const SettingPage = (props) => {
    return (
        <div>
            <DivStyledUppspelning>
              <NavigationButton goTo="Uppspelning"/>
            </DivStyledUppspelning>
            <Line2 />
            <DivStyled>
                <CategoryDivStyled>
                    <Category text='Mobildataanvändning' img="assets/icons/right-arrow.svg"/>
                </CategoryDivStyled>
                <P text="Automatiskt" fontSize="12px" marginLeft="26px" marginTop="0"/>
                <NavigationButton goTo="Nedladdningar"/>
                <Line2 />
                <CategoryDivStyled>
                    <Category text='Endast Wifi'/>
                    <input type="checkbox" id="toggle" />
                    <label for="toggle"></label>
                </CategoryDivStyled>
                <Line2 />
                <CategoryDivStyled>
                    <Category text='Videokvalitet' img="assets/icons/right-arrow.svg"/>
                </CategoryDivStyled>
                <P text="Standard" fontSize="12px" marginLeft="26px" marginTop="0"/>
                <NavigationButton goTo="Textstorlek"/>
                <Line2 />
                <Div>
                    <P text="Aa" fontWeight="Bold" marginLeft="26px" width="6%"/>
                    <P text="Aa" fontWeight="Bold" marginLeft="0" width="6%"/>
                    <P text="Aa" fontWeight="Bold" marginLeft="0" width="6%"/>
                </Div>
                <CategoryDivStyled>
                    <Category text='Ta bort allt sparat' img="assets/icons/garbage.svg"/>
                </CategoryDivStyled>
                <Line2 />
            </DivStyled>
        </div>
    );
}

export default SettingPage;
