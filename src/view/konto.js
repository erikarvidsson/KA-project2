import React from 'react';
import Layout from '../components/Layout';
import KontoPage from '../components/KontoPage';
import styled from 'styled-components';
import { H3 } from '../components/typo';

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

const Konto = (props) => {
    return(
        <div>
            <Layout>
                <DivStyled>
                    <BackIconStyled src='assets/icons/left-arrow.svg' onClick={() => props.history.goBack(props)} />
                    <H3 text='Konto' textAlign='center' marginLeft='-45px' marginRight='0px' />
                </DivStyled>
                <KontoPage />
            </Layout>
        </div>
    );
}

export default Konto;
