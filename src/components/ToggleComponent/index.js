import React from 'react';
import styled from 'styled-components';
import { P } from '../typo';

const DivStyled = styled.div`
    height: 51px;
    width: 90vw;
    display: flex;
    justify-content: center;
`;

const ToggleDivStyled = styled.div `
    height: 100%;
    width: 90vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0;
`;

const LabelDiv = styled.label`
    width: 40px;
    height: 20px;

    a {
        color: #fff;
        text-decoration: none;
    }

    label {
        position: absolute;
        width: 40px;
        height: 20px;
        background-color: #69df75;
        border-radius: 20px;
        transition: all 0.3s;
    }

    label::after {
        content: '';
        position: absolute;
        width: 18px;
        height: 18px;
        border-radius:50%;
        background-color: white;
        top: 1px;
        right: 1px;
        transition: all 0.3s;
    }

    input:checked + label::after {
        right: 20px;
    }

    input:checked + label {
        background-color: rgba(255,255,255, 0.3);
    }

    input {
        display: none;
    }
`;

const ToggleComponent = (props) => {
    return (
        <DivStyled>
            <ToggleDivStyled>
                <P text={props.text} marginLeft='8px' fontWeight='bold'/>
                <LabelDiv>
                    <input type='checkbox' id='toggle' />
                    <label for='toggle'></label>
                </LabelDiv>
            </ToggleDivStyled>
        </DivStyled>
    );
}

export default ToggleComponent;