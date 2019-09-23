import React,{ useState } from 'react';
import { Route, Switch, Link } from "react-router-dom";
import styled from "styled-components";
import FormStyled from '../Form';
import {Header, H2, H3, P} from '../typo';


const ProfileStyled = styled.div`
height: 130px;
display: flex;
align-items: center;
justify-content: flex-start;
border-bottom: 1px solid white;
`;

const ImgStyled = styled.img `
width: 130px;
height: 90px;
border-radius: 50%;
margin-left: 33px;
background-color: #fff;
object-fit: cover;

`;

const KontoPage = (props) => {

  const showButton = () => {
    document.getElementById("button").style.display='block';
      console.log('showButton')
  }

  return (
    <div>
        <H3 text='Konto' textAlign='center'/>
          <ProfileStyled>
            <ImgStyled></ImgStyled>
              <H3 text='Ändra profilbild'/>
            </ProfileStyled>
        <FormStyled/>
  </div>
)}

export default KontoPage;
