import React,{ useState } from 'react';
import { Route, Switch, Link } from "react-router-dom";
import styled from "styled-components";
import {Header, H2, H3, P} from '../typo';

const DivStyled = styled.div`
width: 100vw;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`;

const FormStyled = styled.form`
width: 100vw;
display: flex;
border-bottom: 1px solid white;
padding-bottom: 25px;
height: 35px;
width: 90vw;
list-style: none;
`;

const Input = styled.input`
height: 55px;
background-color: black;
border: none;
color: #fff;
font-size: 20px;
padding-left: 10px;
text-decoration: none;
border: 0;

`;

const Label = styled.label`

`;

const Form = (props) => {
  const [namn, setNamn] = useState('');
  const [yrke, setYrke] = useState('');
  const [mailadress, setMailadress] = useState('');
  const [telefon, setTelefon] = useState('');


    return (
      <DivStyled>
        <FormStyled>
          <Label>
            Namn
          <Input
            value={namn}
            onChange={e => setNamn(e.target.value)}
            type="text"
            id="userText"/>
          </Label>
        </FormStyled>
        <FormStyled>
          <Label>
            Yrke
          <Input
            value={yrke}
            onChange={e => setYrke(e.target.value)}
            type="text"
            id="userText"/>
            </Label>
          </FormStyled>
        <FormStyled>
          <Label>
            Mailadress
          <Input
            value={mailadress}
            onChange={e => setMailadress(e.target.value)}
            type="text"
            id="userText"/>
          </Label>
        </FormStyled>
        <FormStyled>
          <Label>
            Telefon
          <Input
            value={telefon}
            onChange={e => setTelefon(e.target.value)}
            type="text"
            id="userText"/>
            </Label>
          </FormStyled>
      </DivStyled>
  )}

export default Form;
