import React from 'react'
import ReactPlayer from 'react-player'
import styled from "styled-components";

const PlayerWrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  height: ${props => props.height || "100%"};
  top: ${props => props.top || "58vh"};
  /* padding-top: 56.25%; 720 / 1280 = 0.5625 */
`;

const YPlayer = (props) => {
  console.log(props)
  return (
  <PlayerWrapper {...props}>
    <ReactPlayer
      url={props.link}
      className='react-player'
      playing
      height="100%"
      width="100%"
    />
  </PlayerWrapper>)
  }

  export default YPlayer