import React from 'react';
import { P, Header } from '../typo';
import YPlayer from '../YPlayer'
import styled from 'styled-components'

const Container = styled.div`
  position: absolute;
  text-align: center;
  color: white;
  width: 100vw;
  /* padding-left: 12px;
  padding-right: 12px; */
  top: 0;
  left: 0;
`;



export const MediaBox = (props) => {
  console.log(props)
         return (
           <Container>
             <YPlayer
               fontSize="22px"
               height="270px"
               top="auto"
               link={props.url}
               zIndex="2"
             />
             <Header top="300px" fontSize text={props.title}></Header>
             <P top="300px" text={props.description}></P>
           </Container>
         );
       };
   
