import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { P } from '../typo';
import Line from '../Line';

const DivStyled = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const FormStyled = styled.form`
  height: 51px;
  width: 90vw;
  display: flex;
  align-items: center;
  list-style: none;
`;

const InputStyled = styled.input`
  height: 50px;
  width: 60vw;
  background-color: #101010;
  border: none;
  color: #fff;
  font-size: 16px;
  text-decoration: none;
  outline: none;
  ::placeholder {
    color: #fff;
  }
`;

const ButtonStyled = styled.div`
  height: 20px;
  width: 20px;
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  img {
    display: ${props => props.display || 'none'};
    width: 20px;
    margin-right: 10px;
  }
`;

const Label = styled.label`
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 51px;
  width: 40vw;
`;

const Form = () => {
  const [namn, setNamn] = useState('');
  const [showNamn, setShowNamn] = useState('');
  const [yrke, setYrke] = useState('');
  const [showYrke, setShowYrke] = useState('');
  const [mailadress, setMailadress] = useState('');
  const [showMailadress, setShowMailadress] = useState('');
  const [telefon, setTelefon] = useState('');
  const [showTelefon, setShowTelefon] = useState('');

  const setNames = () => {
    setNamn('');
  };

  const setYrkes = () => {
    setYrke('');
  };
  const setMailadresss = () => {
    setMailadress('');
  };
  const setTelefons = () => {
    setTelefon('');
  };

  const inputValue = document.getElementById('userText1');
  const inputValue2 = document.getElementById('userText2');
  const inputValue3 = document.getElementById('userText3');
  const inputValue4 = document.getElementById('userText4');

  useEffect(() => {
    if (!inputValue) {
    } else {
      hideButton(inputValue, setShowNamn);
    }
    if (!inputValue2) {
    } else {
      hideButton(inputValue2, setShowYrke);
    }
    if (!inputValue3) {
    } else {
      hideButton(inputValue3, setShowMailadress);
    }
    if (!inputValue4) {
    } else {
      hideButton(inputValue4, setShowTelefon);
    }
  });

  const hideButton = (a, b) => {
    if (a.value.length >= 1) {
      b('block');
    } else {
      b('none');
    }
  };

  return (
    <DivStyled>
      <FormStyled>
        <Label>
          <P text='Namn' fontWeight='bold' />
        </Label>
        <InputStyled
          placeholder='Erik Bergstrand'
          value={namn}
          onChange={e => setNamn(e.target.value)}
          type='text'
          id='userText1'
        />
        <ButtonStyled onClick={setNames} display={showNamn}>
          <img src='assets/icons/cancel-1.svg' alt='' />
        </ButtonStyled>
      </FormStyled>
      <Line />
      <FormStyled>
        <Label>
          <P text='Yrke' fontWeight='bold' />
        </Label>
        <InputStyled
          placeholder='Kulturakademin'
          value={yrke}
          onChange={e => setYrke(e.target.value)}
          type='text'
          id='userText2'
        />
        <ButtonStyled onClick={setYrkes} display={showYrke}>
          <img src='assets/icons/cancel-1.svg' alt='' />
        </ButtonStyled>
      </FormStyled>
      <Line />
      <FormStyled>
        <Label>
          <P text='Mailadress' fontWeight='bold' />
        </Label>
        <InputStyled
          placeholder='erik@kulturakademin.se'
          value={mailadress}
          onChange={e => setMailadress(e.target.value)}
          type='text'
          id='userText3'
        />
        <ButtonStyled onClick={setMailadresss} display={showMailadress}>
          <img src='assets/icons/cancel-1.svg' alt='' />
        </ButtonStyled>
      </FormStyled>
      <Line />
      <FormStyled>
        <Label>
          <P text='Telefon' fontWeight='bold' />
        </Label>
        <InputStyled
          placeholder='0739-461928'
          value={telefon}
          onChange={e => setTelefon(e.target.value)}
          type='text'
          id='userText4'
        />
        <ButtonStyled onClick={setTelefons} display={showTelefon}>
          <img src='assets/icons/cancel-1.svg' alt='' />
        </ButtonStyled>
      </FormStyled>
      <Line />
    </DivStyled>
  );
};

export default Form;
