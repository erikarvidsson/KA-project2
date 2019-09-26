import React from 'react';
import { P, H3 } from '../typo';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    margin-top: 10px;
`;

const Img = styled.img`
    object-fit: cover;
    width: ${props => props.width || '34vw'};
    height: ${props => props.height || '34vw'};
    border-radius: 5px;
    border: 5px solid #101010;
`;

const TextContainer = styled.div`
    object-fit: cover;
    width: 55vw;
`;

const MaxChar = styled.div`
    height: ${props => props.height};
    margin-left: 12px;
    overflow: hidden;
    width: 100%;
    z-index: 800;
`;

export const SmallMediaBox = props => {
  return (
    <Container {...props}>
      <Img id='smallBox' src={props.src} alt='' />
        <TextContainer>
          <MaxChar height='66px'>
            <H3 overflow='hidden' marginRight='0px' marginLeft='0px' width='90% 'text={props.title} />
          </MaxChar>
          <MaxChar height='56px'>
            <P marginTop='0px' marginLeft='0px' text={props.description} />
          </MaxChar>
        </TextContainer>
    </Container>
  );
};
