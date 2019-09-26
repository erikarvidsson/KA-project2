import React from "react";
import Layout from "../components/Layout";
import SearchPage from "../components/SearchPage";
import styled from "styled-components";
import ModalColumn from "../components/ModalColumn";
import MenuIcon from "../components/MenuIcon";
import SoundData from "../data/playlists.json";
import VideoData from "../data/youtube.json";
import { P } from "../components/typo";


const Column = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
width: 100vw;


`;

const Test = () => {
  const categories2 = [
    { name: "DANS", src: "assets/imgs/DANS-kategori.jpg" },
    { name: "MUSIK", src: "assets/imgs/MUSIK-kategori.jpg" },
    { name: "HANTVERK", src: "assets/imgs/KROKI-kategori.jpg" },
    { name: "SÅNG", src: "assets/imgs/KROKI-kategori.jpg" },
    { name: "SCENKONST", src: "assets/imgs/SCENKONST-kategori.jpg" },
    { name: "FÄRGLÄRA", src: "assets/imgs/FARGLARA-kategori.jpg" }
  ];

  return (
    <div>
      <Layout>
          <MenuIcon fill='#fff' src="assets/icons/bookmark.svg"/>


            {categories2.map(category => {
              return (
                <ModalColumn title={category.name} url={category.src} />
              );
            })}

            {SoundData.map(sound => {
              return (
                <ModalColumn url={sound.thumbnail} title={sound.title} description={sound.description}>

                </ModalColumn >
              );
            })}




      </Layout>
    </div>
  );
};

export default Test;
