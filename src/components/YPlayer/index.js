import React from 'react'
import ReactPlayer from 'react-player'
import styled from "styled-components";

const PlayerWrapper = styled.div`
    position: relative;
    height: 100%;
    /* padding-top: 56.25%; 720 / 1280 = 0.5625 */
`;

const YPlayer = (props) => {
  return (
  <PlayerWrapper>
    <ReactPlayer
      url={props.link}
      className='react-player'
      playing
      width='100%'
      height='50vh'
    />
  </PlayerWrapper>)
  }

  export default YPlayer