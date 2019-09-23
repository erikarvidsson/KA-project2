import React from 'react';
import styled from 'styled-components';
import { Header, P, H2, H3 } from '../typo';
import Line from '../Line';

const FormStyled = styled.form`
    width: 100vw;
    display: flex;
    /* justify-content: center; */
    flex-direction: column;
    align-items: center;
    margin-top: 121px;
`

const DivStyled = styled.div`
    height: 51px;
    width: 100vw;
    display: flex;
    justify-content: center;
`

const DivPasswordStyled = styled.div `
    height: 51px;
    width: 100vw;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

const InputStyled = styled.input`
    height: 100%;
    width: 90vw;
    background-color: #101010;
    border: 0;
    outline: none;
    font-size: 22px;
    color: #FFF;
    ::placeholder{
        padding-left: 12px;
        font-size: 22px;
        color: #FFF;
    }
`

const PasswordStyled = styled.input `
    height: 100%;
    width: 78.5vw;
    background-color: #101010;
    border: 0;
    outline: none;
    font-size: 22px;
    color: #FFF;
    margin-top: 1px;
    ::placeholder{
        padding-left: 12px;
        font-size: 22px;
        color: #FFF;
    }
`

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
`

const ImgStyled = styled.img `
    height: 25px;
    width: 25px;
    margin: 0;
`

const SignupForm = () => {
    return(
        <div>
            <FormStyled>
                <DivStyled>
                    <InputStyled type='email' placeholder='E-mail' name='email'></InputStyled>
                </DivStyled>
                <Line />
                <DivPasswordStyled>
                    <PasswordStyled type='password' placeholder='Välj lösenord' name='password'></PasswordStyled>
                    <ImgStyled  src='assets/icons/visible.svg'/>
                </DivPasswordStyled>
                <Line />
                <DivStyled>
                    <InputStyled type='name' placeholder='Namn' name='name'></InputStyled>
                </DivStyled>
                <Line />
                <DivStyled>
                    <InputStyled type='email' placeholder='Efternamn' name='lastname'></InputStyled>
                </DivStyled>
                <ButtonStyled type='submit'><P text='Fortsätt' textAlign='center'/></ButtonStyled>
            </FormStyled>
        </div>
    )
}

export default SignupForm;