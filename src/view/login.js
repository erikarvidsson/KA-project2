import React from "react";
import styled from 'styled-components';
import Layout from "../components/Layout";
import LoginForm from "../components/LoginForm";
import { Header, P, H2, H3 } from '../components/typo';


const DivStyled = styled.div `
    width: 100vw;
    height: 56px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
`

const BackIconStyled = styled.img `
    height: 25px;
    width: 25px;
    margin-left: 10px;
`

const Login = (props) => {
  return (
    <div>
      <Layout>
        <DivStyled>
            <BackIconStyled src='assets/icons/left-arrow.svg' onClick={() => props.history.goBack(props)}/>
            <H3 text='Logga in' textAlign='center'/>
        </DivStyled>
        <LoginForm />
      </Layout> 
    </div>
  );
};

export default Login;