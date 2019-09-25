import React from 'react';
import { P, H3 } from "../typo";
import YPlayer from '../YPlayer'
import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  margin-bottom: 50px;
  /* text-align: center; */
  color: white;
  width: 100%;
  border-radius: 5px;

`;

const Img = styled.img`
  position: ${props => props.position || 'relative'} ;
  display: flex;
  justify-content: center;
  font-size: 22px;
  height: 270px;
  width: 100%;
  /* margin: 5px; */
  /* left: 0;
  top: auto; */
  z-index: ${props => props.ZIndex || 1};
  /* margin-bottom: 60px; */
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
             <MaxChar top="220px" height="60px">
               <P
                 position="absolute"
                 zIndex="999"
                 fontWeight="thin"
                 text="DANS"
                 width="90%"
                 marginLeft="23px"
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
                marginLeft="23px"
               ></H3>
             </MaxChar>
             <MaxChar height={props => props.Height || "60px"} top="280px">
               <P
                top="300px"
                width="90%"
                text={props.description}
                marginLeft="23px"
                marginBottom="52px"
                marginTop="22px"

                ></P>
             </MaxChar>
           </Container>
         );
       };
