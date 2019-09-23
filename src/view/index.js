import React from "react";
import styled from 'styled-components';
import { H3, P } from '../components/typo';
import { Link } from "react-router-dom";

const LogoStyled = styled.img`
    height: 54px;
    margin-top: 112px;
`;

const DivStyled = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const GreenButtonStyled = styled.button `
    height: 35px;
    width: 211px;
    background-color: #69DF75;
    border: 0;
    border-radius: 17.5px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 93px;
    margin-bottom: 6px;
`;

const WhiteButtonStyled = styled.button `
    height: 35px;
    width: 211px;
    background-color: #FFFFFF;
    border: 0;
    border-radius: 17.5px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 6px;
    margin-bottom: 213px;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const DivLineStyled = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const LineStyled = styled.div `
    height: 0;
    width: 36vw;
    border-bottom: 1px solid #323232;
`;

const Index = () => {
  
  const handleCreateAccount = () => {
    window.location = '/signup';
  }

  const handleLogin = () => {
    window.location = '/login';
  }

  return (
    <div>
        <DivStyled>
          <LogoStyled src='assets/icons/kplay-logotyp-elva.svg' alt=''></LogoStyled>
          <H3 text='Någon catchig text om Kplay.' textAlign='center' marginTop='38px'/>
          <GreenButtonStyled onClick={handleCreateAccount}><P text='Skaffa Kplay-konto'/></GreenButtonStyled>
          <DivLineStyled>
            <LineStyled></LineStyled>
            <P text='eller' width='auto' marginTop='0px'/>
            <LineStyled></LineStyled>
          </DivLineStyled>
          <WhiteButtonStyled onClick={handleLogin}><P text='Logga in' color='#000000'/></WhiteButtonStyled>
          <StyledLink to='/ChoseCategry'><P text='Skip'/></StyledLink>
        </DivStyled>  
    </div>
  )
}

export default Index;
