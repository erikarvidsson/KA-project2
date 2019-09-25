import React from 'react'
import ReactPlayer from 'react-player'
import styled from "styled-components";
import ReactDOM, { findDOMNode } from "react-dom";
import screenfull from "screenfull";
import { Header, P } from '../typo';

const PlayerWrapper = styled.div`
  position: absolute;
  z-index: ${props => props.zIndex || -2};
  height: 100vh;
  width: 100%;
  height: ${props => props.height || "100%"};
  top: ${props => props.top || "58vh"};

  /* padding-top: 56.25%; 720 / 1280 = 0.5625 */
`;

const PlayerOverlay = styled.div`
  position: absolute;
  /* background-color: ${props => (props.primary ? "" : "")}; */
  background-color: rgba(39,62,84,0.82);
  height: ${props => props.height || "100%"};
  top: ${props => props.top || "58vh"};
  z-index: 2;
  pointer-events: none;
  `


const YPlayer = (props) => {
  var player, iframe;

  const playFullscreen = () => {
    // player.playVideo();//won't work on mobile

    var requestFullScreen = iframe.requestFullScreen || iframe.mozRequestFullScreen || iframe.webkitRequestFullScreen;
    if (requestFullScreen) {
      requestFullScreen.bind(iframe)();
    }
  }
  return (
    <PlayerWrapper {...props}>
      <PlayerOverlay />
      <ReactPlayer
        url={props.link}
        className="react-player"
        // playing
        height="100%"
        width="100%"
        overlayZIndex="1"
        onClick={playFullscreen}
      />

      <Header text={props.hText}></Header>
      <P text={props.pText} top="300px"></P>

    </PlayerWrapper>
  );
  }

  export default YPlayer