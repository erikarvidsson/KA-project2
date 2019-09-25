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
  background-color: #101010;
  background-image: url("assets/icons/left-arrow.svg");
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
  width: ${props => props.imgWidth || "100%"};
  margin-left: ${props => props.imgMarginLeft};
  object-fit: cover;
  height: auto;
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
const Modal = (props) => {
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
        <Img src={props.url} />
        <H3
          top="0px"
          width="90%"
          fontWeight="bold"
          fontSize="22px;"
          text={props.title}
          zIndex="888"
          marginLeft="23px"
        ></H3>
        <P
          text={props.description}
          width="90%"
          marginLeft="23px"
          marginTop="22px"
        ></P>
      </Container>

      {show && (
        <Window show={show}>
          <Button onClick={handleClose}></Button>
          {props.children}
        </Window>
      )}
    </>
  );
};
export default Modal;
