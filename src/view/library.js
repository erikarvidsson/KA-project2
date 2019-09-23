import React from 'react';
import styled from 'styled-components';
import { Route, Switch, Link } from "react-router-dom";
import Layout from '../components/Layout';
import ProfileIcon from '../components/ProfileIcon';
import NavigationButton from '../components/NavigationButton';
import { Header, P, H2 } from '../components/typo';
import VideoData from '../data/youtube.json';
import { MediaBox } from '../components/MediaBox';
import Line from '../components/Line';
import MenuTop from '../components/MenuTop';

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

const NavigationDivStyled = styled.div `
    margin-top: 45px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Library = (props) => {
    return(
        <Layout>
          <MenuTop text="Mitt bibliotek"/>
            // < DivStyled >
            //     <BackIconStyled src='assets/icons/left-arrow.svg' onClick={() => props.history.goBack(props)}/>
            //     <ProfileIcon />
            // </DivStyled>
            {/* top sätter margin-top värdet */}
            <Header text='Mitt bibliotek' top='12px'/>
            <NavigationDivStyled>
                <StyledLink to='/Categories'><NavigationButton goTo='Kategorier' img='assets/icons/right-arrow.svg'/></StyledLink>
                <Line/>
                <StyledLink to='/Episodes'><NavigationButton goTo='Avsnitt' img='assets/icons/right-arrow.svg'/></StyledLink>
                <Line/>
                <StyledLink to='/Favorites'><NavigationButton goTo='Favoriter' img='assets/icons/right-arrow.svg'/></StyledLink>
            </NavigationDivStyled>
            <H2 text='Senaste avsnitt'/>
            <MediaBox
                src={VideoData[0].thumbnail}
                title={VideoData[0].title}
                description={VideoData[0].description}
            />
        </Layout>
    )
};

export default Library;
