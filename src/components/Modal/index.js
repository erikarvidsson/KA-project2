import React, { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
    width: 100px;
    height: 50px;
    background: blue;
    color: white;
`
const Window = styled.div`
  border-radius: 15px;
  width: 80vw;
  height: 80vh;
  background: transparent;
  color: white;
  margin: 0 auto;
  position: fixed;
  left: 10vw;
  top: 10vh;
  z-index: 3;
`;

const Modal = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <img src={props.url} alt="" onClick={handleShow} />
      {/* <Button onClick={handleShow}>This button opens a modal</Button> */}

      {show && (
        <Window show={show} onHide={handleClose}>
          <div closeButton>
            {/* <h1>Modal heading</h1>
          </div>
          <h1>Välkommen till modalen</h1>
          <div> */}
            {props.children}
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </div>
        </Window>
      )}
    </>
  );
};

export default Modal;
