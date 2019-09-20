import React,{ useState } from 'react';
import { Route, Switch, Link } from "react-router-dom";
import styled from "styled-components";
import Form from '../Form';
import {Header, H2, H3, P} from '../typo';

// const Section = styled.section`
// height: 100vh;
// width: 100vw;
//
// `;

const Profile = styled.div`
height: 130px;
display: flex;
align-items: center;
justify-content: flex-start;
border-bottom: 1px solid white;
`;

const Img = styled.img `
width: 100px;
height: 100px;
border-radius: 50%;
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
        <H3 text='Konto'/>
          <Profile>
            <Img></Img>
              <H3 text='Ändra profilbild'/>
            </Profile>
        <Form/>
  </div>
)}

export default KontoPage;
