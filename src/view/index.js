import React from "react";
import Layout from "../components/Layout"
import VideoData from "../data/youtube.json"
import { MediaBox } from "../components/MediaBox";

const Index = () => {
  // console.log(VideoData[0]);
  return (
    <div>
      <Layout>
        <MediaBox
          url={VideoData[0].url}
          title={VideoData[0].title}
          description={VideoData[0].description}
        />
      </Layout>
    </div>
  );
}

export default Index;
