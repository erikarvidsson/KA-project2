import React, { useState } from "react";
import styled from "styled-components";
import { P, H3 } from "../typo";
import YPlayer from "../YPlayer";

const Button = styled.div`
  position: absolute;
  top: 50px;
  width: 28px;
  height: 28px;
  left: 0;
  color: white;
  /* background-color: #101010; */
  background-image: url("assets/icons/left-arrow.svg");
  z-index: 800;
`;
const Container = styled.div`
  position: relative;
  text-align: ${props => props.textAlign || 'center'};
  color: white;
`;
const Window = styled.div`
  position: fixed;
  scroll-snap-align: start;
  border-radius: 15px;
  width: 100%;
  height: 100vh;
  /* background-color: rgba(0, 0, 0, 0.7); */
  background-color: black;
  color: white;
  margin: 0 auto;
  left: 0;
  top: 0;
  z-index: 9999;
`;
const Img = styled.img`
  position: ${props => props.position || "relative"};
  width: ${props => props.imgWidth || "200px"};
  margin-left: ${props => props.imgMarginLeft || "12px"};
  object-fit: cover;
  border-radius: 5px;
`;
const Box = styled.div`
  color: white;
  margin: 0 auto;
  position: absolute;
  left: 0;
  top: 200px;
  z-index: 9999;
`;

const TextContainer = styled.div`
  object-fit: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  /* position: absolute; */
  width: 100%;
  /* height: 54vw; */
  /* margin-top: 150px; */
`;
const MaxChar = styled.div`
  height: ${props => props.height};
  margin-left: 12px;
  overflow: hidden;
  width: 100%;

`;
const ModalMediaBox = (props) => {
  const [show, setShow] = useState(false);


 const handleClose = () => {
    console.log('closed')
    setShow(false);}
 const handleShow = () => {
    console.log('clicked')
    console.log(show)
    setShow(true);}
  console.log(props)
  return (
    <>
      <Container onClick={handleShow} {...props}>

      <Img src={props.url} alt="" />
      <TextContainer>
        <MaxChar height="30px">
          <P marginLeft="0px" width="0" fontSize="13px" fontWeight="Bold" text={props.title} />

          </MaxChar>

        <MaxChar height="33px">
          <P marginTop="0px" marginLeft="0px" fontSize="12px" text={props.description} />
        </MaxChar>
      </TextContainer>

      </Container>
      {show && (
        <Window show={show}  >
          <Button onClick={handleClose}></Button>
            {props.children}
        </Window>
      )}
    </>
  );
};
export default ModalMediaBox;
