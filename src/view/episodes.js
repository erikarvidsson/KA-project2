import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Category from '../components/Category';
import ProfileIcon from '../components/ProfileIcon';
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

const Episodes = (props) => {
    return(
        <div>
            <Layout>
            <DivStyled>
                <BackIconStyled src='assets/icons/left-arrow.svg' onClick={() => props.history.goBack(props)}/>
                <H3 text='Avsnitt' textAlign='center' marginRight='0px'/>
                <ProfileIcon />
            </DivStyled>
            </Layout>
        </div>
    )
}

export default Episodes;
