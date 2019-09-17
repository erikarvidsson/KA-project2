import React, { useState, useEffect } from "react";
import styled from "styled-components";

// const Button = styled.button`
//     width: 100px;
//     height: 50px;
//     background: blue;
//     color: white;
// `

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
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  margin: 0 auto;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 3;
`;

const Modal = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

  return (
    <>
      <Container>
        <Img src={props.url} alt="" onClick={handleShow} />
        <Title>{props.title}</Title>
      </Container>

      {/* <Button onClick={handleShow}>This button opens a modal</Button> */}

      {show && (
        <Window show={show} onClick={handleClose}>
          <div closeButton>
            {props.children}
          </div>
        </Window>
      )}
    </>
  );
};

export default Modal;
