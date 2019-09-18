import React from "react";
import Layout from "../components/Layout"
import Modal from "../components/Modal"
import YPlayer from "../components/YPlayer";
import VideoData from "../data/youtube.json"
import SoundData from "../data/playlists.json"
import SideScroll from "../components/SideScroll";
import AudioPlayer from "../components/AudioPlayer"
import LikeButton from "../components/LikeButton"


const Index = () => {
  console.log(SoundData);
  return (
    <div>
      <Layout>
          <h1> This is the Index page! </h1>
        <SideScroll>
            {VideoData.map(video => {
              return (
                <Modal url={video.thumbnail} title={video.title}>
                  <YPlayer link={video.url} />
                </Modal>
              );
            })}
          <Modal>
            <YPlayer link={VideoData[0].url} />
          </Modal>
        </SideScroll>
        <SideScroll>
          {SoundData.map(sound => {
              return (
                <Modal url={sound.thumbnail} title={sound.title}>
                  <AudioPlayer thumbnail={sound.thumbnail} src="/audio/audiofile1.mp3"></AudioPlayer>
                  <LikeButton id={sound.id}/>
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
}

export default Index;
