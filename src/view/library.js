import React from 'react';
import styled from 'styled-components';
import { Route, Switch, Link } from "react-router-dom";
import Layout from '../components/Layout';
import ProfileIcon from '../components/ProfileIcon';
import NavigationButton from '../components/NavigationButton';
import { Header, P, H2 } from '../components/typo';

const DivStyled = styled.div`
    width: 100vw;
    height: 56px;
    display: flex;
    justify-content: space-between;
    margin: 0;
`

const BackIconStyled = styled.img `
    height: 30px;
    width: 30px;
    margin-left: 10px;
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
        <Layout>
            < DivStyled >
                <BackIconStyled src='assets/icons/left-arrow.svg' onClick={() => props.history.goBack(props)}/>
                <ProfileIcon />
            </DivStyled>
            {/* top sätter margin-top värdet */}
            <Header text='Mitt bibliotek' top='12px'/>
            <StyledLink to='/Categories'><NavigationButton goTo='Kategorier' img='assets/icons/right-arrow.svg'/></StyledLink>
            <StyledLink to='/Episodes'><NavigationButton goTo='Avsnitt' img='assets/icons/right-arrow.svg'/></StyledLink>
            <StyledLink to='/Favorites'><NavigationButton goTo='Favoriter' img='assets/icons/right-arrow.svg'/></StyledLink>
            <H2 text='Senaste avsnitt'/>
        </Layout>    
    )
};

export default Library;