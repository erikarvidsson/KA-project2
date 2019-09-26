import React from 'react';
import styled from 'styled-components';
import Form from '../Form';
import Line2 from '../Line2';
import { H3 } from '../typo';

const ProfileStyled = styled.div`
  height: 28vw;
  width: 100vw;
  margin-bottom: 39px;
  margin-top: 25px;
  display: flex;
`;

const ImgStyled = styled.img`
  width: 28vw;
  height: 28vw;
  margin-left: 33px;
  border-radius: 50%;
  background-color: #fff;
  object-fit: cover;
`;

const H3DivStyled = styled.div`
  width: 50vw;
  margin-left: 10px;
`;

const KontoPage = () => {
  return (
    <div>
      <ProfileStyled>
        <ImgStyled src='assets/imgs/Erik.jpg' alt='profilepicture' />
        <H3DivStyled>
          <H3
            text='Ändra profilbild'
            fontWeight='Bold'
            marginLeft='10px'
            marginTop='35px'
          />
        </H3DivStyled>
      </ProfileStyled>
      <Line2 />
      <Form />
    </div>
  );
};

export default KontoPage;
