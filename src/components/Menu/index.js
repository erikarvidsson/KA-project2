import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const MenuDiv = styled.div`
  height: 56px;
  width: 100vw;
  background-color: #212121;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  margin: 0;
  z-index: 1000;
`;

const Icons = styled.img`
    height: 30px;
    width: 30px;
    /* transition: 0.4s; */

    &:active{
        transform: scale(1.5, 1.5);

    }
    /* Detta funkar inte */
    /* &::after{
        background-image: url('assets/icons/rocket-launch.svg')
    } */
`;

const Menu = () => {
    return (
        <MenuDiv>
            <Link to = '/Explore'><Icons src='assets/icons/utforska.svg' fill='C27E3C'/></Link>
            <Link to='/Library'><Icons src='assets/icons/bookmark.svg'/></Link>
            <Link to='/Search'><Icons src='assets/icons/search.svg'/></Link>
            <Link to='/Notification'><Icons src='assets/icons/notiser.svg'/></Link>
        </MenuDiv>
    )
}

export default Menu;
