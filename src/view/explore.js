import React,{useState} from "react";
import { Link } from "react-router-dom";
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
import {SmallMediaBox} from "../components/SmallMediaBox";
import CategoryBoxSmall from "../components/CategoryBoxSmall";
import { P, Header, H3 } from "../components/typo";

const CategoryDivStyled = styled.div`
margin-top: 170px;
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
    { name: "DANS", src: "assets/imgs/DANS-kategori.jpg" },
    { name: "MUSIK", src: "assets/imgs/MUSIK-kategori.jpg" },
    { name: "HANTVERK", src: "assets/imgs/KROKI-kategori.jpg" },
    { name: "SÅNG", src: "assets/imgs/KROKI-kategori.jpg" },
    { name: "SCENKONST", src: "assets/imgs/SCENKONST-kategori.jpg" },
    { name: "FÄRGLÄRA", src: "assets/imgs/FARGLARA-kategori.jpg" }
  ];
  const [dans, setDanse] = useState(false);

  console.log(categories2)
    return (
      <div>
        <Layout>
          <CategoryDivStyled>
            <Link to='/Latest'><Category text='Senast tillagda' img='assets/icons/right-arrow.svg'/></Link>
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
              <H3 text='Populärt' marginLeft="12px" marginTop="400px"/>

              <SideScroll>
            {VideoData.map(video => {
              return (
                <Modal url={video.thumbnail} title={video.title}>

                  <SmallMediaBox
                  src={VideoData[0].thumbnail}
                  title={VideoData[0].title}
                  description={VideoData[0].description}
                    />
                </Modal>
                );
              })}

            <Modal>
              <SmallMediaBox
              src={VideoData[0].thumbnail}
              title={VideoData[0].title}
              description={VideoData[0].description}
              />
            </Modal>
            </SideScroll>

              <H3 text='Rekommenderade' marginLeft="12px" marginTop="40px" />

            <SideScroll>
              {SoundData.map(sound => {
                return (
                  <Modal url={sound.thumbnail} title={sound.title}>
                  <SmallMediaBox
                  src={VideoData[0].thumbnail}
                  title={VideoData[0].title}
                  description={VideoData[0].description}
                  />
                  </Modal>
                );
              })}
            <Modal>
              <YPlayer link={VideoData[0].url} />
            </Modal>
              </SideScroll>

            <H3 text="Kategorier" marginLeft="12px" marginTop="40px"/>
          <DivStyled>
            {categories2.map(category => {
              return (
                <CategoryBoxSmall title={category.name} src={category.src}
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
