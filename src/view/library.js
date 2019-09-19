import React from 'react';
import styled from 'styled-components';
import { Route, Switch, Link } from "react-router-dom";
import Layout from '../components/Layout';
import ProfileIcon from '../components/ProfileIcon';
import NavigationButton from '../components/NavigationButton';
import { Header, P, H2 } from '../components/typo';


const BackIcon = styled.img `
    height: 30px;
    width: 30px;
`
const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const Library = (props) => {
    return(
        <div>
            <Layout>
                <BackIcon src='assets/icons/left-arrow.svg' onClick={() => props.history.goBack(props)}/>
                <ProfileIcon />
                {/* top sätter margin-top värdet */}
                <Header text='Mitt bibliotek' top='12px'/>
                <StyledLink to='/Categories'><NavigationButton goTo='Kategorier' img='assets/icons/right-arrow.svg'/></StyledLink>
                <StyledLink to='/Episodes'><NavigationButton goTo='Avsnitt' img='assets/icons/right-arrow.svg'/></StyledLink>
                <StyledLink to='/Favorites'><NavigationButton goTo='Favoriter' img='assets/icons/right-arrow.svg'/></StyledLink>
                <H2 text='Senaste avsnitt'/>
            </Layout>
        </div>
    )
};

export default Library;