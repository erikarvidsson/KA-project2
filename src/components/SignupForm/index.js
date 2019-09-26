import React, { useState } from "react";
import styled from 'styled-components';
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

const DivPasswordStyled = styled.div `
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
    color: #FFF;
    ::placeholder {
        font-size: 22px;
        color: #FFF;
    }
`;

const PasswordStyled = styled.input`
    height: 100%;
    width: 70vw;
    background-color: #101010;
    border: 0;
    outline: none;
    font-size: 22px;
    color: #FFF;
    margin-top: 1px;
    ::placeholder {    
        font-size: 22px;
        color: #FFF;
    }
`;

const ButtonStyled = styled.button`
    height: 35px;
    width: 211px;
    background-color: #69DF75;
    border: 0;
    border-radius: 17.5px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 72px;
`;

const ImgStyled = styled.img`
    width: 30px;
    margin: 0;
    margin-right: 5px;
`;

const SignupForm = () => {
    const [showPassword, setShowPassword] = useState('password')

    const nextPage = () => {
        window.location = '/categories';
        window.open();
    }

    const showPasswordOnClick = () => {
        if(showPassword === 'password'){
            setShowPassword('text')
        }else{
            setShowPassword('password')
        }
    }

    return (
        <div>
            <FormStyled onSubmit={nextPage}>
                <DivStyled>
                    <InputStyled
                        type='email'
                        placeholder='E-mail'
                        name='email'
                    ></InputStyled>
                </DivStyled>
                <Line />
                <DivPasswordStyled>
                    <PasswordStyled
                        type={showPassword}
                        placeholder='Välj lösenord'
                        name='password'
                    ></PasswordStyled>
                    <ImgStyled
                        src='assets/icons/visible.svg'
                        onClick={showPasswordOnClick}
                    />
                </DivPasswordStyled>
                <Line />
                <DivStyled>
                    <InputStyled
                        type='name'
                        placeholder='Namn'
                        name='name'
                    ></InputStyled>
                </DivStyled>
                <Line />
                <DivStyled>
                    <InputStyled
                        type='text'
                        placeholder='Efternamn'
                        name='lastname'
                    ></InputStyled>
                </DivStyled>
                <ButtonStyled type='submit'>
                    <P text='Fortsätt' textAlign='center' />
                </ButtonStyled>
                <input type='hidden' name='redirect' value='/categories' />
            </FormStyled>
        </div>
    );
}

export default SignupForm;