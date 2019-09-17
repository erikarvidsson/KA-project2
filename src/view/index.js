import React from "react";
import Layout from "../components/Layout"
import Modal from "../components/Modal"
import YPlayer from "../components/YPlayer";
import VideoData from "../data/youtube.json"
import SoundData from "../data/playlists.json"
import SideScroll from "../components/SideScroll";


const Index = () => {
  console.log(VideoData);
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
      </Layout>

    </div>
  );
}

export default Index;
