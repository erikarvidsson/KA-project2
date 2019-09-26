import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import { P, H3 } from '../components/typo';

const DivStyled = styled.div`
    width: 100vw;
    height: 56px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    margin-top: 59px;
`;

const Div = styled.div`
    height: 100px;
    width: 220px;
    display: flex;
    flex-direction: column;
    margin-top: 31px;
    margin-left: 17px;
`;

const BackIconStyled = styled.img`
    width: 30px;
    margin-left: 21px;
    z-index: 800;
`;

const Help = (props) => {
    return(
        <Layout>
            <DivStyled>
                <BackIconStyled src='assets/icons/left-arrow.svg' onClick={() => props.history.goBack(props)} />
                <H3 text='Hjälp' textAlign='center' marginLeft='-45px' marginRight='0px' />
            </DivStyled>
            <Div>
                <H3 text='Har du bekymmer eller vill fråga något?' />
                <P text='Maila oss så hjälper vi gärna till!' />
                <P text='info@kulturakademin.com' fontWeight='bold' marginTop='0px' />
            </Div>
        </Layout>
    );
}

export default Help;
