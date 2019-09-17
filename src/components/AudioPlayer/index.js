import React from 'react'
import ReactAudioPlayer from "react-audio-player";
import styled from "styled-components";

const PlayerWrapper = styled.div`
    position: relative;
    height: 100%;
`;

const AudioPlayer = (props) => {
  return (
    <PlayerWrapper>
      <ReactAudioPlayer
        src={props.src}
        autoPlay
        controls
      />
    </PlayerWrapper>
  );
}

export default AudioPlayer