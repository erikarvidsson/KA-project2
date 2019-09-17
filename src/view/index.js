import React from "react";
import Layout from "../components/Layout"
import Modal from "../components/Modal"
import YPlayer from "../components/YPlayer";
import VideoData from "../data/youtube.json"
import SoundData from "../data/playlists.json"


const Index = () => {
  console.log(SoundData);
  return (
    <div>
      <Layout>
        <h1> This is the Index page! </h1>
        <Modal>
          <YPlayer link={VideoData[0].url} />
        </Modal>
      </Layout>
    </div>
  );
}

export default Index;
