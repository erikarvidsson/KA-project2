import React from 'react';
import styled from 'styled-components';
import { H3, P } from '../components/typo';
import { Link } from 'react-router-dom';

const DivStyled = styled.div`
    position: absolute;
    width: 100vw;
    height:100vh;
    overflow: hidden;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 3;    
`;

const ImgStyled = styled.img`
    position: absolute;
    object-fit: cover;
    height: 100vh;
    left: 0;
    top: auto;
    z-index: 1;
`;

const LogoStyled = styled.img`
    height: 54px;
    margin-top: 112px;
    z-index: 3;
`;

const GreenButtonStyled = styled.button`
    height: 35px;
    width: 211px;
    background-color: #69DF75;
    border: 0;
    border-radius: 17.5px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    margin-bottom: 22px;
    z-index: 3;
`;

const WhiteButtonStyled = styled.button`
    height: 35px;
    width: 211px;
    background-color: #FFFFFF;
    border: 0;
    border-radius: 17.5px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 22px;
    margin-bottom: 213px;
    z-index: 3;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
    z-index: 3;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const DivLineStyled = styled.div`
    width: 100vw;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    z-index: 3;
`;

const LineStyled = styled.div`
    height: 0;
    width: 35vw;
    border-bottom: 1px solid #C4C4C4;
    z-index: 3;
`;

const Box = styled.div`
    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));
    position: absolute;
    height: 100%;
    width: 100%;  
    z-index: 2;
`;


const Index = () => {
  
    const handleCreateAccount = () => {
        window.location = '/signup';
    }

    const handleLogin = () => {
        window.location = '/login';
    }

    return (  
        <DivStyled>
            <LogoStyled src='assets/icons/kplay-logotyp-elva.svg' alt='' />
            <H3 text='Center för kultur och passion' textAlign='center' marginTop='38px' zIndex='3' />
            <GreenButtonStyled onClick={handleCreateAccount}><P text='Skaffa Kplay-konto' /></GreenButtonStyled>
            <DivLineStyled>
                <LineStyled />
                <P text='eller' width='auto' marginTop='0px' marginLeft='0px' marginBottom='0px' />
                <LineStyled />
            </DivLineStyled>
            <WhiteButtonStyled onClick={handleLogin}><P text='Logga in' color='#000000' /></WhiteButtonStyled>
            <StyledLink to='/ChoseCategry'><P text='Skip' marginLeft='0px'/></StyledLink>
            <Box />
            <ImgStyled src='assets/imgs/Cello.jpg' />
        </DivStyled>  
    );
}

export default Index;
