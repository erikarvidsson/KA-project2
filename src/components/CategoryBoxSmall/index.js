import React from 'react';
import { P } from '../typo';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background-color: grey;
  height: 153px;
  width: 100vw;
  margin: 5px;
  border-radius: 5px;
  border: 5px solid #101010;
  object-fit: cover;
  z-index: 2;
`;

const Img = styled.img`
  position: relative;
  object-fit: cover;
  height: 153px;
  width: 190px;
  object-fit: cover;
`;

const Box = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 6;
`;

const CategoryBoxSmall = props => {
  return (
    <Container {...props} onClick={props.name}>
      <Box>
        <P
          top='0px'
          position='relative'
          textAlign='center'
          marginLeft='0'
          marginTop='70px'
          text={props.title}
        />
      </Box>
      <Img src={props.src} />
    </Container>
  );
};

export default CategoryBoxSmall;
