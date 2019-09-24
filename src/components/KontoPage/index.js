import React,{ useState } from 'react';
import { Route, Switch, Link } from "react-router-dom";
import styled from "styled-components";
import FormStyled from '../Form';
import Line from '../Line';
import {Header, H2, H3, P} from '../typo';


const ProfileStyled = styled.div`
height: 28vw;
width: 100vw;
display: flex;
margin-bottom: 39px;
`;

const ImgStyled = styled.img `
width: 28vw;
height: 28vw;
border-radius: 50%;
background-color: #fff;
object-fit: cover;
margin-left: 33px;
`;

const H3DivStyled = styled.div`
width: 50vw;
margin-left: 10px;

`;
const KontoPage = (props) => {

  // const showButton = () => {
  //   document.getElementById("button").style.display='block';
  //     console.log('showButton')
  // }
    return (
      <div>
          <ProfileStyled>
            <ImgStyled src="assets/imgs/Erik.jpg" alt="profilepicture"></ImgStyled>
              <H3DivStyled>
              <H3 text="Ändra profilbild" fontWeight="Bold"  marginLeft="10px" marginTop="35px"/>
              </H3DivStyled>
            </ProfileStyled>
          <Line />
        <FormStyled/>
    </div>
)}

export default KontoPage;
