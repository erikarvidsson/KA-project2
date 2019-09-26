import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import NavigationButton from '../components/NavigationButton';
import { H3 } from '../components/typo';
import VideoData from '../data/youtube.json';
import { MediaBox } from '../components/MediaBox';
import Line from '../components/Line';
import MenuTop from '../components/MenuTop';

const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const NavigationDivStyled = styled.div`
    margin-top: 193px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Library = () => {
    return (
        <Layout>
            <MenuTop text='Mitt bibliotek' />
            <NavigationDivStyled>
                <StyledLink to='/Categories'>
                    <NavigationButton
                        goTo='Kategorier'
                        img='assets/icons/right-arrow.svg'
                    />
                </StyledLink>
                <Line />
                <StyledLink to='/Episodes'>
                    <NavigationButton
                        goTo='Avsnitt'
                        img='assets/icons/right-arrow.svg'
                    />
                </StyledLink>
                <Line />
                <StyledLink to='/Favorites'>
                    <NavigationButton
                        goTo='Favoriter'
                        img='assets/icons/right-arrow.svg'
                    />
                </StyledLink>
            </NavigationDivStyled>
            <H3 text='Senaste avsnitt' />
            <MediaBox
                src={VideoData[0].thumbnail}
                title={VideoData[0].title}
                description={VideoData[0].description}
            />
        </Layout>
    );
}

export default Library;
