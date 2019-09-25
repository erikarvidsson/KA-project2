import React, { useState } from "react";
import { P } from "../typo";
import styled from "styled-components";




const Container = styled.div`
  position: relative;
  color: white;
  background-color: grey;
  height: 153px;
  width: 170px;
  margin-top: 12px;
  border-radius: 5px;
  overflow: hidden;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
`;

const Img = styled.img`
  position:relative;
  object-fit: cover;
  height: 183px;
  width: 190px;
  left: 0;
  top: auto;
  z-index: 2;
`;

const TEST = styled.div`
color: blue;
  height: 183px;
  width: 190px;
`;
const Box = styled.div`
  /* background: linear-gradient(transparent, #020202); */
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));
  position: absolute;
  height: 100%;
  width: 100%;
  padding-top: 67%;
  z-index: 6;
  :active {
    background: linear-gradient(rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.));
  }
`;


export const CategoryBox = props => {
  
  const noFade = () => {
    const newCss = document.getElementById(props.title);
    console.log(newCss)
    newCss.style.background = 'transparent'
  }
  const setFade = () => {
    const newCss = document.getElementById(props.title);
    newCss.style.background = 'rgba(0,0,0,0.3)'
  }

  // SaveCategory(props.name)

    return (
      <Container {...props} value={props.title} onClick={noFade}>
        <Box id={props.title} onClick={setFade}>
          <P
            top="0px"
            position="relative"
            textAlign="center"
            marginLeft="0"
            text={props.title}
          />
        </Box>
        <Img src={props.src} />
        {/* <TEST onClick={save} /> */}
      </Container>
    );

    
};
