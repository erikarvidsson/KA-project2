import React from 'react'
import styled from "styled-components";

const PlayerWrapper = styled.div`
    position: relative;
    height: 100%;
`;


const AudioPlayer = (props) => {
  return (
  <PlayerWrapper>
    <img src={props.thumbnail} alt=""/>
        <audio controls autoPlay>
          <source src={props.src} typ="audio/mpeg" />
        </audio>
  </PlayerWrapper>
)}

export default AudioPlayer