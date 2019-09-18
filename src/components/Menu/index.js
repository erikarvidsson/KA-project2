import React from 'react';
import { Route, Switch, Link } from "react-router-dom";
import styled from 'styled-components';

const MenuDiv = styled.div`
    height: 56px;
    width: 100%;
    background-color: aqua;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: absolute;
    bottom: 0;
    margin: 0;
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
            <Link to='/Library'><Icons src='assets/icons/bookmark.svg'/></Link>
            <Link to = '/Explore'><Icons src='assets/icons/utforska.svg'/></Link>
            <Link to='/Search'><Icons src='assets/icons/search.svg'/></Link>
            <Link to='/Notification'><Icons src='assets/icons/notiser.svg'/></Link>            
        </MenuDiv>
    )
}

export default Menu;