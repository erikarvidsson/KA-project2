import React, { useState } from 'react'
import styled from "styled-components";

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
  margin-top: 80vh;
`;


const AudioPlayer = (props) => {

  const [percent, setPercent] = useState('')

  function seek(e) {
    // var percent = e.offsetX / this.offsetWidth;
    var percent = e.duration
    e.currentTime = percent * e.duration;
    setPercent('100')
  }

  const play = () => {
    var progressBar = document.getElementById("progress");
    const play = document.getElementById("player").play();
    seek(play);
    console.log(progressBar);
    progressBar.value = percent / 100;
      
      return play
  }

  const pause = () => {
      const play = document.getElementById("player").pause();
      return play
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

  const testTimer = () => {
    const player = document.getElementById("player");
          console.log(player.currentTime);
          console.log(player.duration);  
  }

  return (
    <PlayerWrapper>
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
        <PlayBttn onClick={play}><img src='assets/icons/play-button.svg'/></PlayBttn>
        {/* <PlayBttn onClick={pause}>Pause<img src='assets/icons/rewind.svg'/></PlayBttn> */}
        <RewindBttn onClick={forward}><img src='assets/icons/forward.svg'/></RewindBttn>
      </ButtonDivStyled >
    </PlayerWrapper>
  );
}

export default AudioPlayer