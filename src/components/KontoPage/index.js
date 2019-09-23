import React,{ useState } from 'react';
import { Route, Switch, Link } from "react-router-dom";
import styled from "styled-components";
import FormStyled from '../Form';
import {Header, H2, H3, P} from '../typo';


const ProfileStyled = styled.div`
height: 130px;
display: flex;
border-bottom: 1px solid white;
`;

const ImgStyled = styled.img `
width: 90px;
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
          <ProfileStyled>
            <ImgStyled src=""alt="profilepicture"></ImgStyled>
              <H3 text="Ändra profilbild" fontWeight="Bold"  marginLeft="10px" marginTop="35px"/>
            </ProfileStyled>
        <FormStyled/>
  </div>
)}

export default KontoPage;
