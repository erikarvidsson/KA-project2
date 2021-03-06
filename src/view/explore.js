import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import Modal from '../components/Modal';
import ModalMediaBox from '../components/ModalMediaBox';
import styled from 'styled-components';
import YPlayer from '../components/YPlayer';
import VideoData from '../data/youtube.json';
import SoundData from '../data/playlists.json';
import SideScroll from '../components/SideScroll';
import AudioPlayer from '../components/AudioPlayer';
import MenuTop from '../components/MenuTop';
import NavigationButton from '../components/NavigationButton';
import CategoryBoxSmall from '../components/CategoryBoxSmall';
import { H3 } from '../components/typo';

const CategoryDivStyled = styled.div`
    margin-top: 193px;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const SectionDivStyled = styled.div`
    height: 100vh;

`;

const DivStyled = styled.div`
    display: flex;
    width: 100vw;
    overflow-x: auto;
`;

const Explore = () => {
    const categories2 = [
        { name: 'DANS', src: 'assets/imgs/DANS-kategori.jpg' },
        { name: 'MUSIK', src: 'assets/imgs/MUSIK-kategori.jpg' },
        { name: 'HANTVERK', src: 'assets/imgs/KROKI-kategori.jpg' },
        { name: 'SÅNG', src: 'assets/imgs/KROKI-kategori.jpg' },
        { name: 'SCENKONST', src: 'assets/imgs/SCENKONST-kategori.jpg' },
        { name: 'FÄRGLÄRA', src: 'assets/imgs/FARGLARA-kategori.jpg' }
    ];

    return (
        <Layout>
            <CategoryDivStyled>
                <StyledLink to='/latest'>
                    <NavigationButton
                      width='90vw'
                      goTo='Senast tillagt'
                      img='assets/icons/right-arrow.svg'
                    />
                </StyledLink>
            </CategoryDivStyled>
            <MenuTop text='Utforska' />
            <Modal url={VideoData[0].thumbnail} title={VideoData[0].title} description={VideoData[0].description} height='400px' imgWidth='100%' imgMarginLeft='0px'>
                <YPlayer link={VideoData[0].url} hText={VideoData[0].title} pText={VideoData[0].description} height='270px' />
            </Modal>
            <SectionDivStyled>
              <H3 text='Populärt' marginLeft='23px' width='90%' height='auto' marginTop='25px' marginBottom='25px' />
              <SideScroll>
                {VideoData.map(video => {
                    return (
                        <ModalMediaBox url={video.thumbnail} title={video.title} description={video.description}>
                            <YPlayer link={video.url} hText={video.title} pText={video.description} height='270px' />
                        </ModalMediaBox>
                    );
                })}
              </SideScroll>
              <H3 text='Rekommenderade' marginLeft='23px' marginTop='25px'width='90%'/>
              <SideScroll>
                  {SoundData.map(sound => {
                      return (
                          <ModalMediaBox title={sound.title} description={sound.description} url={sound.thumbnailLong}>
                              <AudioPlayer text={sound.title} thumbnail={sound.img} src='/audio/audiofile1.mp3' />
                          </ModalMediaBox >
                      );
                  })}
                  <Modal>
                      <YPlayer link={VideoData[0].url} />
                  </Modal>
              </SideScroll>
              <H3 text='Kategorier' marginLeft='23px' width='90%' marginTop='40px' />
              <DivStyled>
                  {categories2.map(category => {
                      return (
                          <CategoryBoxSmall title={category.name} src={category.src} />
                      );
                  })}
              </DivStyled>
            </SectionDivStyled>
        </Layout>
    );
}

export default Explore;
