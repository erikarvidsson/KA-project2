import React, { useState } from 'react';
import styled from 'styled-components';
import { P } from '../typo';

const Button = styled.div`
  position: absolute;
  top: 50px;
  width: 28px;
  height: 28px;
  left: 0;
  color: white;
  background-image: url('assets/icons/ner-pil-ikon.svg');
  background-repeat: no-repeat;
  margin-left: 33px;
  z-index: 800;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  text-align: ${props => props.textAlign || 'start'};
  color: white;
`;
const Window = styled.div`
  position: fixed;
  scroll-snap-align: start;
  border-radius: 15px;
  width: 100%;
  height: 100vh;
  color: white;
  margin: 0 auto;
  left: 0;
  top: 0;
  z-index: 9999;
`;
const Img = styled.img`
  position: ${props => props.position || 'relative'};
  width: ${props => props.imgWidth || '150px'};
  margin: ${props => props.imgMarginLeft || '15px'};
  object-fit: cover;
  border-radius: 5px;
`;

const TextContainer = styled.div`
  object-fit: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 80%;
`;
const MaxChar = styled.div`
  height: ${props => props.height};
  margin-left: 19px;
  overflow: hidden;
  margin: 5px;
  width: 90%;
`;
const ModalColumn = props => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => {
    setShow(true);
  };
  
  return (
    <>
      <Container onClick={handleShow} {...props}>
        <Img src={props.url} alt='' />
        <TextContainer>
          <MaxChar height='52px'>
            <P
              marginLeft='0px'
              width='0'
              fontSize='18px'
              fontWeight='Bold'
              text={props.title}
            />
          </MaxChar>

          <MaxChar height='63px'>
            <P
              marginTop='0px'
              marginLeft='0px'
              fontSize='13px'
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
export default ModalColumn;
