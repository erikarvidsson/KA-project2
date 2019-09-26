import React from 'react'
import ReactPlayer from 'react-player'
import styled from "styled-components";
import ReactDOM, { findDOMNode } from "react-dom";
import screenfull from "screenfull";
import { Header, P, H3 } from '../typo';

const PlayerWrapper = styled.div`
  position: ${props => props.position ||' absolute'};
  margin-top: ${props => props.marginTop ||''};
  z-index: ${props => props.zIndex || 2};
  height: 100vh;
  width: 100%;
  height: ${props => props.height || "100%"};
  top: ${props => props.top  || '0px'};
`;

const PlayerOverlay = styled.div`
  position: absolute;
  /* background-color: ${props => (props.primary ? "" : "")}; */
  background-color: rgba(39,62,84,0.82);
  height: ${props => props.height || "100%"};
  top: ${props => props.top};
  z-index: 2;
  pointer-events: none;
  `
const InfoText = styled.p`
    font-weight: lighter;
    position: relative;
    margin-left: 12px;
    margin-top: 0px;
  `;


const YPlayer = (props) => {

  return (
    <PlayerWrapper {...props} position="relative">
      {/* <PlayerOverlay /> */}
      <ReactPlayer
        url={props.link}
        className="react-player"
        // playing
        height="100%"
        width="100%"
        overlayZIndex="1"
      />
      <InfoText>DANS</InfoText>
      <H3 text={props.hText} position="initial" fontFamily="Cabin-Bold"></H3>
      <P text={props.pText} position="initial"></P>
    </PlayerWrapper>
  );
  }

  export default YPlayer