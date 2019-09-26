import React from 'react';
import styled from 'styled-components';
import NavigationButton from '../NavigationButton';
import Category2 from '../Category2';
import { H2, H3, P } from '../typo';
import Line2 from '../Line2';
import ToggleComponent from '../ToggleComponent';

const DivStyledUppspelning = styled.div`
    margin-top: 25px;
`;

const DivStyled = styled.div`
    width: 100vw;
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

const ToggleDivStyled = styled.div`
    height: 56px;
    width: 100%;

    margin-right: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const Div = styled.div`
    height: 51px;
    width: 105px;
    margin-right: 12px;
    display: flex;
    flex-direction: row;
    align-items: baseline;
    color: #fff;
`;

const TextDivStyled = styled.div`
    height: 51px;
    width: 100vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const SettingPage = () => {
    return (
        <div>
            <DivStyledUppspelning>
                <NavigationButton goTo='Uppspelning' />
            </DivStyledUppspelning>
            <DivStyled>
                <CategoryDivStyled>
                    <Category2 text='Mobildataanvändning' img='assets/icons/right-arrow.svg' />
                </CategoryDivStyled>
                <P text='Automatiskt' fontSize='12px' marginLeft='26px' marginTop='0px' />
                <CategoryDivStyled>
                    <Category2 text='Videokvalitet' img='assets/icons/right-arrow.svg' />
                </CategoryDivStyled>
                <P text='Standard' fontSize='12px' marginLeft='26px' marginTop='0' />
                <ToggleDivStyled>
                    <ToggleComponent text='Endast Wi-Fi' />
                </ToggleDivStyled>
                <Line2 />
                <TextDivStyled>
                    <P text='Textstorlek' fontWeight='bold' marginLeft='26px' width='80%'/>
                    <Div>
                        <P text='Aa' fontWeight='bold' marginTop='0px' marginBottom='0px' marginLeft='0px' marginRight='6px' color='#C27E3C'/>
                        <H3 text='Aa' fontWeight='bold' marginTop='0px' marginBottom='0px' marginLeft='0px' marginRight='6px'/>
                        <H2 text='Aa' fontWeight='bold' marginTop='0px' marginBottom='0px' marginLeft='0px' marginRight='12px'/>
                    </Div>
                </TextDivStyled>
                <Line2 />
                <ToggleDivStyled>
                    <ToggleComponent text='Synkronisera kontakter' />
                </ToggleDivStyled>
                <Line2 />
                <CategoryDivStyled>
                    <Category2 text='Ta bort allt sparat' img="assets/icons/garbage.svg"/>
                </CategoryDivStyled>
                <Line2 />
            </DivStyled>
        </div>
    );
}

export default SettingPage;
