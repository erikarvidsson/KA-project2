import React, { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  position: absolute;
  top: 50px;
  width: 50px;
  height: 50px;
  left: 0;
`;

const IconImgStyled = styled.img`
  height: 100%;
  width: 100%;
`;

const Img = styled.img`
  width: 100px;
  height: 150px;
  color: white;
  min-width: 200px;
  margin: 5px;
`;

const Title = styled.h3`
  font-size: 12px;
  position: absolute;
  bottom: 8px;
  left: 16px;
`;

const Container = styled.div`
  position: relative;
  text-align: center;
  color: white;
`;

const Window = styled.div`
  scroll-snap-align: start;
  border-radius: 15px;
  width: 100%;
  /* height: 100vh; */
  /* background-color: rgba(0, 0, 0, 0.7); */
  background-color: black;
  color: white;
  margin: 0 auto;
  position: absolute;
  /* padding-left: 12px;
  padding-right: 12px; */
  left: 0;
  top: 0;
  z-index: 3;
  pointer-events: none;
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


  return (
    <>

      <Container onClick={handleShow} {...props}>
          {props.children}
      </Container>


      {show && (
        <Window show={show} >
          <Button onClick={handleClose}><IconImgStyled src='assets/icons/left-arrow.svg' /></Button>
          <div closeButton>
            {props.children}
          </div>
        </Window>
      )}
    </>
  );
};

export default Modal;
