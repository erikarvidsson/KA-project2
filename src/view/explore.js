import React,{useState} from "react";
import Layout from "../components/Layout";
import Modal from "../components/Modal";
import styled from 'styled-components';
import YPlayer from "../components/YPlayer";
import VideoData from "../data/youtube.json";
import SoundData from "../data/playlists.json";
import SideScroll from "../components/SideScroll";
import AudioPlayer from "../components/AudioPlayer";
import MenuTop from "../components/MenuTop";
import { MediaBox } from '../components/MediaBox';
import LikeButton from "../components/LikeButton";
import Category from "../components/Category";
import CategoryBoxSmall from "../components/CategoryBoxSmall";
import { P, Header, H3 } from "../components/typo";

const CategoryDivStyled = styled.div`
margin-top: 170px;
`

const SectionDivStyled = styled.div`
height: 100vh;

`;

const DivStyled = styled.div`
  display: flex;
  width: 100vw;
  overflow-x: auto;
`;

const Explore = () => {
  const categories2 = ({name: ["DANS", "HANTVERK", "MUSIK", "TEATER", "SCENOGRAFI"]})
  const [dans, setDanse] = useState(false);

  console.log(categories2)
    return (
      <div>
        <Layout>
          <CategoryDivStyled>
            <Category text='Senast tillagda' img='assets/icons/right-arrow.svg'/>
          </CategoryDivStyled>

            <MenuTop text="Utforska"/>

            <MediaBox
              src={VideoData[0].thumbnail}
              title={VideoData[0].title}
              description={VideoData[0].description}
              position="relative"
              ZIndex="-1"
              />

            <SectionDivStyled>
              <H3 text='Populärt' marginTop="400px"/>

              <SideScroll>
            {VideoData.map(video => {
              return (
                <Modal url={video.thumbnail} title={video.title}>
                  <LikeButton />
                  <YPlayer link={video.url} height="270px" top="120px" />
                  <Header text={video.title}></Header>
                  <P top="300px" text={video.description}></P>
                  </Modal>
                );
              })}
            <Modal>
              <YPlayer link={VideoData[0].url} />
              />
            </Modal>
            </SideScroll>
              <H3 text='Rekommenderade' marginTop="40px" />

            <SideScroll>
              {SoundData.map(sound => {
                return (
                  <Modal url={sound.thumbnail} title={sound.title}>
                    <AudioPlayer
                      thumbnail={sound.thumbnail}
                      src="/audio/audiofile1.mp3"
                    ></AudioPlayer>
                    <LikeButton id={sound.id} />
                  </Modal>
                );
              })}
            <Modal>
              <YPlayer link={VideoData[0].url} />
            </Modal>
              </SideScroll>
            <H3 text="Kategorier" marginTop="40px"/>
          <DivStyled>
            {categories2.name.map(category => {
              return (
                <CategoryBoxSmall title={category}
                />
              );
            })}
          </DivStyled>
          </SectionDivStyled>

        </Layout>
      </div>
    );
};

export default Explore;
