import React from "react";
import Layout from "../components/Layout";
import SearchPage from "../components/SearchPage";
import styled from "styled-components";
import ModalMediaBox from "../components/ModalMediaBox";
import SoundData from "../data/playlists.json";
import VideoData from "../data/youtube.json";
import { P } from "../components/typo";


const SideScroll = styled.div`
display: flex;
width: 100vw;
overflow-x: auto;

`;

const Test = () => {
console.log(SoundData)
  return (
    <div>
      <Layout>
      <SideScroll>
          {SoundData.map(sound => {
            return (
              <ModalMediaBox url={sound.thumbnail} title={sound.title} description={sound.description}>

              </ModalMediaBox >
            );
          })}
        </SideScroll>

          <SideScroll>
              {VideoData.map(video => {
                return (
                  <ModalMediaBox url={video.thumbnail} title={video.title} description={video.description}>
                  </ModalMediaBox >
                );
              })}

          </SideScroll>
      </Layout>
    </div>
  );
};

export default Test;
