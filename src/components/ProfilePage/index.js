import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import NavigationButton from '../NavigationButton';
import { H3, P } from '../typo';
import Line from '../Line';

const ImgStyled = styled.img`
  height: 372px;
  display: flex;
  width: 100vw;
  justify-content: center;
  object-fit: cover;
  position: relative;
`;

const DivStyled = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    color: #fff;
    text-decoration: none;
  }
`;

const Box = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(16, 16, 16, 1));
  position: absolute;
  height: 372px;
  width: 100%;
  z-index: 6;
`;

const H3Divstyled = styled.div`
  width: 90vw;
`;

const ProfilePage = () => {
  return (
    <div>
      <Box /> 
      <ImgStyled src='assets/imgs/Erik.jpg' alt='' />
      <DivStyled>
        <H3Divstyled>
          <H3 text='Erik Bergstrand' marginLeft='6px' />
          <P text='Kulturakademin' marginLeft='6px' />
        </H3Divstyled>
        <Link to='/Konto'>
          <NavigationButton goTo='Konto' img='assets/icons/right-arrow.svg' />
        </Link>
        <Line />
        <Link to='/Settings'>
          <NavigationButton
            goTo='Inställningar'
            img='assets/icons/right-arrow.svg'
          />
        </Link>
        <Line />
        <Link to='/Help'>
          <NavigationButton goTo='Hjälp' img='assets/icons/right-arrow.svg' />
        </Link>
        <Line />
        <Link to='/'>
          <NavigationButton goTo='Logga ut' img='assets/icons/logout.svg' />
        </Link>
      </DivStyled>
    </div>
  );
};

export default ProfilePage;
