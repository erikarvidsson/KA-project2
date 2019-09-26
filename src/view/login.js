import React from 'react';
import styled from 'styled-components';
import LoginForm from '../components/LoginForm';
import { H3 } from '../components/typo';

const DivStyled = styled.div`
    width: 100vw;
    height: 56px;
    margin: 0;
    margin-top: 59px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const BackIconStyled = styled.img`
    height: 25px;
    width: 25px;
    margin-left: 10px;
`;

const Login = (props) => {
  return (
        <div>
            <DivStyled>
                <BackIconStyled src='assets/icons/left-arrow.svg' onClick={() => props.history.goBack(props)} />
                <H3 text='Logga in' textAlign='center' marginLeft='-34px' marginRight='0px' />
            </DivStyled>
            <LoginForm />
        </div>
  );
}

export default Login;