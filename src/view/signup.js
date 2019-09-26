import React from 'react';
import styled from 'styled-components';
import { H3 } from '../components/typo';
import SignupForm from '../components/SignupForm';

const DivStyled = styled.div`
    width: 100vw;
    height: 56px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    margin-top: 59px;
`;

const BackIconStyled = styled.img`
    width: 25px;
    margin-left: 21px;
    z-index: 800;
`;

const SignUp = (props) => {
    return (
        <div>
            <DivStyled>
                <BackIconStyled src='assets/icons/left-arrow.svg' onClick={() => props.history.goBack(props)} />
                <H3 text='Skapa konto' textAlign='center' marginLeft='-45px' marginRight='0px' />
            </DivStyled>
            <SignupForm />    
        </div>
    );
}

export default SignUp;