import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ProfileIcon2 from '../ProfileIcon2';
import { Header } from '../typo';

const MenuDivStyled = styled.div`
    height: 194px;
    width: 100vw;
    margin: 0;
    top: 0;
    left: 0;
    background-color: #101010;
    position: fixed;
    z-index: 900;
`;

const DivStyled = styled.div`
    height: 32px;
    width: 100vw;
    margin-top: 59px;
    display: flex;
    justify-content: space-between;
`;

const LogoStyled = styled.img`
    width: 32px;
    margin-left: 22px;
`;

const MenuTop = (props) => {
    return (
        <MenuDivStyled>
            <DivStyled>
                <Link to='/'><LogoStyled src='assets/icons/kplay-logotyp-elva.svg' /></Link>
                <ProfileIcon2 />
            </DivStyled>
            <Header text={props.text} marginTop='2px' marginLeft='0px' />
        </MenuDivStyled>
    );
}

export default MenuTop;
