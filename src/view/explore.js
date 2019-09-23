import React from "react";
import Layout from "../components/Layout";
import Modal from "../components/Modal";
import YPlayer from "../components/YPlayer";
import VideoData from "../data/youtube.json";
import SoundData from "../data/playlists.json";
import SideScroll from "../components/SideScroll";
import AudioPlayer from "../components/AudioPlayer";
import MenuTop from "../components/MenuTop";
import LikeButton from "../components/LikeButton";
import { P, Header } from "../components/typo";

const Explore = () => {
    return (
      <div>
        <Layout>
          <MenuTop/>
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
        </Layout>
      </div>
    );
};

export default Explore;
