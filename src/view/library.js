import React from 'react';
import styled from 'styled-components';
import { Route, Switch, Link } from "react-router-dom";
import Layout from '../components/Layout';
import ProfileIcon from '../components/ProfileIcon';
import NavigationButton from '../components/NavigationButton';


const BackIcon = styled.img `
    height: 20px;
    width: 20px;
`

const Library = (props) => {
    return(
        <div>
            <Layout>
                <BackIcon src='assets/icons/left-arrow.svg' onClick={() => props.history.goBack(props)}/>
                <ProfileIcon />
                <h1>Mitt bibliotek</h1>
                <Link to='/Categories'><NavigationButton goTo='Kategorier' img='assets/icons/right-arrow.svg'/></Link>
                <Link to='/Episodes'><NavigationButton goTo='Avsnitt' img='assets/icons/right-arrow.svg'/></Link>
                <Link to='/Favorites'><NavigationButton goTo='Favoriter' img='assets/icons/right-arrow.svg'/></Link>
            </Layout>
        </div>
    )
};

export default Library;