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
  margin: ${props => props.imgMarginLeft || "15px"};
  object-fit: cover;
  border-radius: 5px;
`;
// const Box = styled.div`
//   color: white;
//   margin: 0 auto;
//   position: absolute;
//   left: 0;
//   top: 200px;
//   z-index: 9999;
// `;

const TextContainer = styled.div`
  object-fit: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  /* position: absolute; */
  width: 80%;
  /* height: 54vw; */
  /* margin-top: 150px; */
`;
const MaxChar = styled.div`
  height: ${props => props.height};
  margin-left: 19px;
  overflow: hidden;
  margin: 5px;
  width: 90%;

`;
const ModalColumn = (props) => {
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
        <MaxChar height="52px">
          <P marginLeft="0px" width="0" fontSize="18px" fontWeight="Bold" text={props.title} />

          </MaxChar>

        <MaxChar height="83px">
          <P marginTop="0px" marginLeft="0px" fontSize="13px" text={props.description} />
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
export default ModalColumn;
