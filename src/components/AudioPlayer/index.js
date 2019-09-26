import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import Menu from '../Menu';
import { P } from '../typo';
import { Link } from 'react-router-dom';

const PlayerWrapper = styled.div`
    position: relative;
    height: 93vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
`;

const ThumbnailStyled = styled.img`
    position: absolute;
    object-fit: cover;
    height: 100%;
    z-index: -2;
`;

const ButtonDivStyled = styled.div`
    height: 66px;
    width: 236px;
    display: flex;
    justify-content: space-between;
    margin-top: 2vh;
`;

const PlayBttn = styled.button`
    height: 66px;
    width: 66px;
    color: white;
    top: 0;
    left: 0;
`

const RewindBttn = styled.button `
    height: 66px;
    width: 66px;
    color: white;
    top: 0;
    left: 0;
`

const Progress = styled.progress`
  height: 3px;
  width: 310px;
  color: white;
  background-color: blue;
  top: 0;
  left: 0;
  margin-top: 70vh;
`;
const DivPlacement = styled.div`
width: 100vw;
display: flex;
flex-direction: row;

`;
const DivStyled = styled.div`
width: 100vw;
height: 40px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-end;

`;
const ButtonDown = styled.img`
  margin-left: 33px;
  height: 15px;
`;

const MenuIcon = styled.img`
  margin-right: 33px;
  height: 5px;

`;


const AudioPlayer = (props) => {

  const [percent, setPercent] = useState('')
  const [playButton, setPlaybutton] = useState(true)
  const [button, setButton] = useState("assets/icons/play-button.svg")

  // function seek(e) {
  //   // var percent = e.offsetX / this.offsetWidth;
  //   var percent = e.duration
  //   e.currentTime = percent * e.duration;
  //   setPercent('100')
  // }
  // const testTimer = () => {
  //   const player = document.getElementById("player");
  //         console.log(player.currentTime);
  //         console.log(player.duration);
  // }

  const play = () => {
    if (playButton === true){
      var progressBar = document.getElementById("progress");
      const play = document.getElementById("player").play();
      // seek(play);
      setPlaybutton(false)
      setButton("assets/icons/pause.svg");
    } else{
      const pause = document.getElementById("player").pause();
      setPlaybutton(true);
      setButton("assets/icons/play-button.svg");
    }
  }

  const forward = () => {
      const forward = document.getElementById("player");
      forward.currentTime += 5.0;
      console.log(forward.currentTime);
      console.log(forward.duration);
      return forward;
  }

  const backwards = () => {
      const backwards = document.getElementById("player");
      backwards.currentTime -= 5.0;
      alert(backwards.currentTime);
      return backwards;
  }

  return (
    <PlayerWrapper {...props}>

    <DivPlacement>
      <DivStyled>
        <P text={props.text} fontWeight="Bold" overflow="hidden" width="49%" marginRight="25px" height="20px"/>
        <MenuIcon src="assets/icons/Meny.svg"></MenuIcon>
      </DivStyled>
    
  </DivPlacement>



      <ThumbnailStyled src={props.thumbnail} alt="" />
      {/* <audio id="player" controls autoPlay> */}
      <audio
        id="player"
        src={props.src}
        duration={props.duration}
        // autoPlay
        type="audio/mpeg"
        codecs="mp3"
      ></audio>
      <Progress id="progress" min="0" max="100" value="0"></Progress>
      <ButtonDivStyled >
        <RewindBttn onClick={backwards}><img src='assets/icons/rewind.svg'/></RewindBttn>
        <PlayBttn onClick={play}><img src={button}/></PlayBttn>
        {/* <PlayBttn onClick={pause}>Pause<img src='assets/icons/rewind.svg'/></PlayBttn> */}
        <RewindBttn onClick={forward}><img src='assets/icons/forward.svg'/></RewindBttn>
      </ButtonDivStyled >
      <Menu/>
    </PlayerWrapper>
  );
}

export default AudioPlayer
