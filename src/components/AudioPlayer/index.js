import React, { useState } from 'react'
import styled from "styled-components";

const PlayerWrapper = styled.div`
    position: relative;
    height: 100%;
`;

const PlayBttn = styled.button`
    height: 150px;
    width: 150px;
    color: white;
    background-color: blue;
    top: 0;
    left: 0;
`
const Progress = styled.progress`
  height: 150px;
  width: 150px;
  color: white;
  background-color: blue;
  top: 0;
  left: 0;
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
      <img src={props.thumbnail} alt="" />
      {/* <audio id="player" controls autoPlay> */}
      <audio
        id="player"
        src={props.src}
        duration={props.duration}
        // autoPlay
        type="audio/mpeg"
        codecs="mp3"
      ></audio>
      <div>
        <PlayBttn onClick={backwards}>Backwards</PlayBttn>
        <PlayBttn onClick={forward}>Forward</PlayBttn>
      </div>
      <PlayBttn onClick={play}>Play</PlayBttn>
      <PlayBttn onClick={pause}>Pause</PlayBttn>
      <Progress id="progress" min="0" max="100" value="0"></Progress>
    </PlayerWrapper>
  );}

export default AudioPlayer