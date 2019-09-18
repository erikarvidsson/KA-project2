import React from 'react';
import { Route, Switch, Link } from "react-router-dom";
import styled from 'styled-components';

import Library from '../../view/library';
import Explore from '../../view/explore';
import Serch from '../../view/serch';
import Notification from '../../view/notification';

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
            <Link to='/Serch'>Serch</Link>
            <Link to='/Notification'>Notification</Link>

            <Route path="/Library" component={Library} />
            <Route path="/Explore" component={Explore} />
            <Route path="/Serch" component={Serch} />
            <Route path="/Notification" component={Notification} />
        </MenuDiv>
    )
}

export default Menu;