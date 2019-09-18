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

const Menu = () => {
    return (
        <MenuDiv>
            <Link to='/Library'>Library</Link>
            <Link to = '/Explore'> Explore </Link>
            <Link to='/Search'>Search</Link>
            <Link to='/Notification'>Notification</Link>            
        </MenuDiv>
    )
}

export default Menu;