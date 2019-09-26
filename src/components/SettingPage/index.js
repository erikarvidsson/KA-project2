import React from 'react';
import styled from "styled-components";
import NavigationButton from '../NavigationButton';
import Category2 from '../Category2';
import { P } from '../typo';
import Line2 from '../Line2';

const DivStyledUppspelning = styled.div`
    margin-top: 25px;
`;

const DivStyled = styled.div`
    width: 100vw;

    a {
        color: #fff;
        text-decoration: none;
    }

    label {
        position: absolute;
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
        right: 20px;
    }

    input:checked + label {
        background-color: rgba(255,255,255, 0.3);
    }

    input {
        display: none;
    }
`;

const CategoryDivStyled = styled.div`
    height: 56px;
    width: 100%;
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

const SettingPage = () => {
    return (
        <div>
            <DivStyledUppspelning>
                <NavigationButton goTo='Uppspelning' />
            </DivStyledUppspelning>
            <Line2 />
            <DivStyled>
                <CategoryDivStyled>
                    <Category2 text='Mobildataanvändning' img='assets/icons/right-arrow.svg' />
                </CategoryDivStyled>
                <P text='Automatiskt' fontSize='12px' marginLeft='26px' marginTop='0px' />
                <NavigationButton goTo='Nedladdningar' />
                <Line2 />
                <CategoryDivStyled>
                    <Category2 text='Endast Wifi' />
                    <input type='checkbox' id='toggle' />
                    <label for="toggle"></label>
                </CategoryDivStyled>
                <Line2 />
                <CategoryDivStyled>
                    <Category2 text='Videokvalitet' img='assets/icons/right-arrow.svg' />
                </CategoryDivStyled>
                <P text='Standard' fontSize='12px' marginLeft='26px' marginTop='0' />
                <NavigationButton goTo='Textstorlek'/>
                <Line2 />
                <Div>
                    <P text='Aa' fontWeight='Bold' marginLeft='26px' width='6%' />
                    <P text='Aa' fontWeight='Bold' marginLeft='0px' width='6%' />
                    <P text='Aa' fontWeight='Bold' marginLeft='0px' width='6%' />
                </Div>
                <CategoryDivStyled>
                    <Category2 text='Ta bort allt sparat' img="assets/icons/garbage.svg"/>
                </CategoryDivStyled>
                <Line2 />
            </DivStyled>
        </div>
    );
}

export default SettingPage;
