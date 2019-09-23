import React from "react";
import { P, H3 } from "../typo";
import YPlayer from "../YPlayer";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  margin-top: 10px;
  /* margin-left: 20px; */
`;
const Img = styled.img`
  object-fit: cover;
  width: 34vw;
  height: 34vw;
  /* margin-top: 150px; */
  /* margin-left: 20px; */
  border-radius: 5px;
`;
const TextContainer = styled.div`
  object-fit: cover;
  width: 55vw;
  height: 34vw;
  /* margin-top: 150px; */
`;
const MaxChar = styled.div`
  height: ${props => props.height};
  margin-left: 12px;
  overflow: hidden;
  width: 100%;
  z-index: 800;
`;
const Overlay = styled.div``;

export const SmallMediaBox = props => {
  return (
    <Container {...props}>
      <Img src={props.src} alt="" />
      <TextContainer>
        <MaxChar height="66px">
          <H3 marginLeft="0px" width="100%" text={props.title} />
        </MaxChar>
        <MaxChar height="56px">
          <P marginTop="0px" marginLeft="0px" text={props.description} />
        </MaxChar>
      </TextContainer>
    </Container>
  );
};
