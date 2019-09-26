import React, { useState } from 'react';
import styled from 'styled-components';
import UseLoginForm from '../UseLoginForm';
import { P } from '../typo';
import Line from '../Line';

const FormStyled = styled.form`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 121px;
`;

const DivStyled = styled.div`
  height: 51px;
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const DivPasswordStyled = styled.div`
  height: 51px;
  width: 100vw;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const InputStyled = styled.input`
  height: 100%;
  width: 86vw;
  background-color: #101010;
  border: 0;
  outline: none;
  font-size: 22px;
  color: #fff;
  ::placeholder {
    font-size: 22px;
    color: #fff;
  }
`;

const PasswordStyled = styled.input`
  height: 100%;
  width: 70vw;
  background-color: #101010;
  border: 0;
  outline: none;
  font-size: 22px;
  color: #fff;
  margin-top: 1px;
  ::placeholder {
    font-size: 22px;
    color: #fff;
  }
`;

const ButtonStyled = styled.button`
  height: 35px;
  width: 211px;
  background-color: #69df75;
  border: 0;
  border-radius: 17.5px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 72px;
`;

const ImgStyled = styled.img`
  height: 25px;
  width: 25px;
  margin: 0;
`;

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState('password');

  const { values, handleChange, handleSubmit } = UseLoginForm(login);

  function login() {}

  const showPasswordOnClick = () => {
    if (showPassword === 'password') {
      setShowPassword('text');
    } else {
      setShowPassword('password');
    }
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <DivStyled>
        <InputStyled
          type='email'
          name='email'
          placeholder='E-mail'
          onChange={handleChange}
          value={values.email}
        />
      </DivStyled>
      <Line />
      <DivPasswordStyled>
        <PasswordStyled
          type={showPassword}
          name='password'
          placeholder='Lösenord'
          onChange={handleChange}
          value={values.password}
        />
        <ImgStyled
          onClick={showPasswordOnClick}
          src='assets/icons/visible.svg'
        />
      </DivPasswordStyled>
      <ButtonStyled type='submit'>
        <P text='Fortsätt' textAlign='center' marginLeft='0px' />
      </ButtonStyled>
    </FormStyled>
  );
};

export default LoginForm;
