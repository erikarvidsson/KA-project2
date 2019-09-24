import React from 'react';
import styled from 'styled-components';
import { Route, Switch, Link } from "react-router-dom";
import ProfileIcon2 from '../ProfileIcon2'
import {Header, H2, H3, P} from '../typo';

const MenuDivStyled = styled.div`
height: 190px;
top: 0;
left: 0;
margin: 0;
width: 100vw;
background-color: #101010;
position: fixed;
z-index: 900;
`;

const DivStyled = styled.div`
display: flex;
justify-content: space-between;
height: 80px;
width: 100vw;
`;

const LogoStyled = styled.img `
width: 25px;
height: 29px;
margin-top: 40px;
margin-left: 21px;
`;


const MenuTop = (props) => {
    return(
        <MenuDivStyled>
          <DivStyled>
            <Link to='/'><LogoStyled src='assets/icons/kplay-logotyp-elva.svg'/></Link>
              <ProfileIcon2 />
            </DivStyled>
        <Header text={props.text}/>
      </MenuDivStyled>
  )
}

export default MenuTop;
