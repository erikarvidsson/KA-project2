import React,{ useState } from 'react';
import { Route, Switch, Link } from "react-router-dom";
import styled from "styled-components";
import Form from '../Form';


const Section = styled.section`
height: 100vh;
width: 100vw;

`;

const Profile = styled.div`
height: 130px;
display: flex;
align-items: center;
justify-content: flex-start;
border-bottom: 1px solid white;

img {
width: 80px;
height: 80px;
border-radius: 50%;
background-color: #fff;
object-fit: cover;
margin-left: 40px;
box-shadow: 0 8px 6px -6px black;
}

h3 {
margin-left: 20px;
}
`;

const Icon = styled.div`
color: #fff;
display: flex;
justify-content:center;
align-items:center;
position:fixed;
top:30px;
left:30px;


`;

const Div = styled.div`
height: 40vh;
width: 100vw;

ul {
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;

line-height: 20px;
}

li {
display: flex;
border-bottom: 1px solid white;
padding-bottom: 25px;
width: 90vw;
height: 30px;
line-height: 2;
justify-content: space-between;

  }
}`;

const KontoPage = (props) => {
    return (
    <div>
    <Section>
      <h3>Konto</h3>
    <Profile>
      <img src=""></img>
      <h3>Ändra Profilbild</h3>
    </Profile>
        <Div>
        <Form goTo="Namn"/>
        <Form goTo="Yrke"/>
        <Form goTo="Mailadress"/>
        <Form goTo="Telefon"/>
      </Div>
    </Section>
  </div>
)}

export default KontoPage;
