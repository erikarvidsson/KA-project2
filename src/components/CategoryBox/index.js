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
const Box = styled.div`
  /* background: linear-gradient(transparent, #020202); */
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));
  position: absolute;
  height: 100%;
  width: 100%;
  padding-top: 67%;
  z-index: 6;
`;

export const CategoryBox = props => {
  const [value, setValue] = useState({'' : Boolean})

  const chosenCategory = () => {
      if (window.localStorage.getItem(props.value) !== true) {
        window.localStorage.setItem(props.value, true);
      }
      console.log(window.localStorage.getItem(props.value));

      if (window.localStorage.getItem(props.value) === true) {
        window.localStorage.removeItem(props.value);
      }
  }

    // const chosenCategory = () => {
    //   if (value == props.value) {
    //     setValue(props.value, true);
    //   } else {
    //     setValue(props.value, false);
    //   }
    // };

    return (
      <Container {...props} onClick={chosenCategory}>
        <Box>
          <P
            top="0px"
            position="relative"
            textAlign="center"
            marginLeft="0"
            text={props.title}
          />
        </Box>
        <Img src={props.src} />
      </Container>
    );
};
