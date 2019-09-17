import React from "react";
import Layout from "../components/Layout"
import Modal from "../components/Modal"
import YPlayer from "../components/YPlayer";
import VideoData from "../data/youtube.json"
import SoundData from "../data/playlists.json"


const Index = () => {
  console.log(VideoData);
  return (
    <div>
      <Layout>
        <h1> This is the Index page! </h1>
          {VideoData.map(video => {
            return (
              <Modal url={video.thumbnail}>
                <YPlayer link={video.url} />
              </Modal>
            );
          })}
        <Modal>
          <YPlayer link={VideoData[0].url} />
        </Modal>
      </Layout>
    </div>
  );
}

export default Index;
