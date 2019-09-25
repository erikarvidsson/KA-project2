import React, { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  position: absolute;
  top: 50px;
  width: 28px;
  height: 28px;
  left: 0;
  background: white;
  color: white;
  background-image: url("assets/icons/left-arrow.svg");
`;

const Img = styled.img`
  width: 100px;
  height: 150px;
  background: blue;
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
`;

const Modal = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log(show)
  

  return (
    <>
    
      <Container>
        <Img src={props.url} alt="" onClick={handleShow} />
        <Title>{props.title}</Title>
      </Container>


      {show && (
        <Window show={show} >
          <Button onClick={handleClose}></Button>
          <div closeButton>
            {props.children}
          </div>
        </Window>
      )}
    </>
  );
};

export default Modal;