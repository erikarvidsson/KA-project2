import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Category from '../components/Category';
import ProfileIcon from '../components/ProfileIcon';
import { Header, P, H2, H3 } from '../components/typo';
import ModalColumn from "../components/ModalColumn";
import SoundData from "../data/playlists.json";
import VideoData from "../data/youtube.json";

const DivStyled = styled.div `
    width: 100vw;
    height: 56px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    margin-bottom: 20px;
`

const BackIconStyled = styled.img `
    height: 25px;
    width: 25px;
    margin-left: 10px;
`

const Favorites = (props) => {
    return(
        <div>
            <Layout>
                <DivStyled>
                    <BackIconStyled src='assets/icons/left-arrow.svg' onClick={() => props.history.goBack(props)}/>
                    <H3 text='Favoriter' textAlign='center' marginRight='0px'/>
                    <ProfileIcon />
                </DivStyled>

                {SoundData.map(sound => {
                  return (
                    <ModalColumn url={sound.thumbnail} title={sound.title} description={sound.description}>

                    </ModalColumn >
                  );
                })}
            </Layout>
        </div>
    )
}

export default Favorites;
