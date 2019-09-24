import React from 'react';
import { P, H3 } from "../typo";
import YPlayer from '../YPlayer'
import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  text-align: center;
  color: white;
  width: 100vw;
  /* padding-left: 12px;
  padding-right: 12px; */
  /* top: 0;
  left: 0; */
`;

const Img = styled.img`
  position: ${props => props.position || 'absolute'} ;
  font-size: 22px;
  height: 270px;
  width: 100%;
  left: 0;
  top: auto;
  z-index: ${props => props.ZIndex || 1};
  border-radius: 5px;
`;
const MaxChar = styled.div`
  position: ${props => props.position || 'absolute'} ;
  height: ${props => props.height};
  overflow: hidden;
  top: ${props => props.top || '250px'};
  z-index: ${props => props.ZIndex || 800};
`;
const Overlay = styled.div`

`;



export const MediaBox = (props) => {
  console.log(props)
         return (
           <Container {...props}>
             <Img src={props.src} />
             <MaxChar top="208px" height="60px">
               <P
                 position="absolute"
                 zIndex="999"
                 fontWeight="thin"
                 text="Dans"
                 width="90%"
               ></P>
             </MaxChar>
             <MaxChar height="38px">
               <H3
                 top="0px"
                 width="90%"
                 fontWeight="bold"
                 fontSize
                 text={props.title}
                 zIndex="999"
               ></H3>
             </MaxChar>
             <MaxChar height="69px" top="280px">
               <P top="300px" width="90%" text={props.description}></P>
             </MaxChar>
           </Container>
         );
       };
