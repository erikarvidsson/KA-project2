import React from 'react'
import ReactPlayer from 'react-player'
import styled from 'styled-components';
import { H3, P } from '../typo';

const PlayerWrapper = styled.div`
    position: ${ props => props.position ||'absolute' };
    margin-top: ${ props => props.marginTop ||'' };
    z-index: ${ props => props.zIndex || 2 };
    height: 100vh;
    width: 100%;
    height: ${ props => props.height || '100%' };
    top: ${ props => props.top  || '0px' };
`;

const InfoText = styled.p`
    font-weight: lighter;
    position: relative;
    margin-left: 12px;
    margin-top: 0px;
`;

const YPlayer = (props) => {

  return (
    <PlayerWrapper {...props} position='relative'>
        <ReactPlayer url={props.link} className='react-player' height='100%' width='100%' overlayZIndex='1' />
        <InfoText>DANS</InfoText>
        <H3 text={props.hText} position='initial' fontFamily='Cabin-Bold' />
        <P text={props.pText} position='initial' />
    </PlayerWrapper>
  );
}

export default YPlayer;
