import React, { useState } from 'react';
import styled from 'styled-components';
import { P } from '../typo';

const Button = styled.div`
  position: absolute;
  top: 40px;
  width: 28px;
  height: 28px;
  left: 0;
  color: white;
  background-image: url('assets/icons/left-arrow.svg');
  margin-left: 33px;
  z-index: 800;
`;
const Container = styled.div`
  position: relative;
  text-align: ${props => props.textAlign || 'center'};
  color: white;
`;
const Window = styled.div`
  scroll-snap-align: start;
  position: fixed;
  border-radius: 15px;
  width: 100%;
  height: 100vh;
  background-color: black;
  color: white;
  margin: 0 auto;
  left: 0;
  top: 0;
  z-index: 9999;
`;
const Img = styled.img`
  position: ${props => props.position || 'relative'};
  width: ${props => props.imgWidth || '200px'};
  margin: ${props => props.imgMargin || '5px'};
  object-fit: cover;
  border-radius: 5px;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  object-fit: cover;
  width: 100%;
`;

const MaxChar = styled.div`
  height: ${props => props.height};
  margin-left: 12px;
  overflow: hidden;
  width: 100%;
`;
const ModalMediaBox = props => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    console.log('closed');
    setShow(false);
  };
  const handleShow = () => {
    console.log('clicked');
    console.log(show);
    setShow(true);
  };
  console.log(props);
  return (
    <>
      <Container onClick={handleShow} {...props}>
        <Img src={props.url} alt='' />
        <TextContainer>
          <MaxChar height='30px'>
            <P
              marginLeft='0px'
              width='0'
              fontSize='13px'
              fontWeight='Bold'
              text={props.title}
            />
          </MaxChar>

          <MaxChar height='33px'>
            <P
              marginTop='0px'
              marginLeft='0px'
              fontSize='12px'
              text={props.description}
            />
          </MaxChar>
        </TextContainer>
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
export default ModalMediaBox;
