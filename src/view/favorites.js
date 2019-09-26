import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import ProfileIcon from '../components/ProfileIcon';
import { H3 } from '../components/typo';
import ModalColumn from '../components/ModalColumn';
import SoundData from '../data/playlists.json';
import AudioPlayer from '../components/AudioPlayer';

const DivStyled = styled.div`
    width: 100vw;
    height: 56px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    margin-top: 59px;
    margin-bottom: 20px;
`;

const BackIconStyled = styled.img`
    width: 25px;
    margin-left: 21px;
    z-index: 800;;
`;

const Favorites = (props) => {
    return (
        <div>
            <Layout>
                <DivStyled>
                    <BackIconStyled src='assets/icons/left-arrow.svg' onClick={() => props.history.goBack(props)}/>
                    <H3 text='Favoriter' textAlign='center' marginRight='0px' />
                    <ProfileIcon />
                </DivStyled>
                {SoundData.map(sound => {
                    return (
                        <ModalColumn
                            url={sound.thumbnail}
                            title={sound.title}
                            description={sound.description}>
                            <AudioPlayer
                                text={sound.title}
                                thumbnail={sound.thumbnail}
                                src="/audio/audiofile1.mp3"
                            ></AudioPlayer>
                        </ModalColumn >
                    );
                })}
            </Layout>
        </div>
    );
}

export default Favorites;
