import React from 'react';
import Layout from '../components/Layout';
import styled from "styled-components";
import { P, H3 } from '../components/typo';

const DivStyled = styled.div `
    width: 100vw;
    height: 56px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
`;

const Div = styled.div`
    height: 100px;
    width: 220px;
    display: flex;
    flex-direction: column;
    margin-top: 31px;
    margin-left: 20px;
`;

const BackIconStyled = styled.img`
    height: 25px;
    width: 25px;
    margin-left: 10px;
`;

const Help = (props) => {
    return(
        <div>
                <Layout>
                <DivStyled>
                    <BackIconStyled src='assets/icons/left-arrow.svg' onClick={() => props.history.goBack(props)}/>
                    <H3 text='Hjälp' textAlign='center' marginLeft="-34px" marginRight='0px'/>
                </DivStyled>
                <Div>
                    <H3 text="Har du bekymmer eller vill fråga något?"/>
                    <P text="Maila oss så hjälper vi gärna till!"/>
                    <P text="info@kulturakademin.com" fontWeight="Bold"/>
                </Div>
            </Layout>
        </div>
    );
}

export default Help;
