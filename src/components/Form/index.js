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
height: 51px;
width: 90vw;
list-style: none;
`;

const InputStyled = styled.input`
height: 60px;
width: 100vw;
background-color: black;
border: none;
color: #fff;
font-size: 20px;
padding-left: 10px;
text-decoration: none;
outline: none;
display: flex;

::placeholder {
color: #fff;
width: 100vw;
text-align: center;
}
`;

const ButtonStyled = styled.button`
height: 53px;
display: flex;
flex-direction: column;
justify-content: flex-end;

img{
  width: 30px;
  height: 30px;
}
`;

const Label = styled.label`
color: #fff;
width: 100px;
`;

const Form = (props) => {
  const [namn, setNamn] = useState('');
  const [yrke, setYrke] = useState('');
  const [mailadress, setMailadress] = useState('');
  const [telefon, setTelefon] = useState('');


    return (
      <DivStyled>
        <FormStyled>
          <Label>hej</Label>
          <InputStyled
            placeholder="Namn"
            value={namn}
            onChange={e => setNamn(e.target.value)}
            type="text"
            id="userText"/>
            <ButtonStyled><img src="assets/icons/cancel-1.svg"></img></ButtonStyled>
          </FormStyled>

          <FormStyled>
            <Label>hej</Label>
            <InputStyled
              placeholder="Yrke"
              value={yrke}
              onChange={e => setYrke(e.target.value)}
              type="text"
              id="userText"/>
            <ButtonStyled><img src="assets/icons/cancel-1.svg"></img></ButtonStyled>
          </FormStyled>

        <FormStyled>
          <Label>hej</Label>
          <InputStyled
            placeholder="Mailadress"
            value={mailadress}
            onChange={e => setMailadress(e.target.value)}
            type="text"
            id="userText"/>
          <ButtonStyled><img src="assets/icons/cancel-1.svg"></img></ButtonStyled>
        </FormStyled>

        <FormStyled>
          <Label>hej</Label>
          <InputStyled
            placeholder="Telefon"
            onChange={e => setTelefon(e.target.value)}
            type="text"
            id="userText"/>
          <ButtonStyled><img src="assets/icons/cancel-1.svg"></img></ButtonStyled>
        </FormStyled>
      </DivStyled>
  )}

export default Form;
