import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import { Header, P, H2, H3 } from '../components/typo';
import ProfileIcon from '../components/ProfileIcon';

const DivStyled = styled.div `
    width: 100vw;
    height: 56px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
`

const BackIconStyled = styled.img `
    height: 30px;
    width: 30px;
    margin-left: 10px;
`

const Categories = (props) => {
    return(
        <div>
            <Layout>
                <DivStyled>
                    <BackIconStyled src='assets/icons/left-arrow.svg' onClick={() => props.history.goBack(props)}/>
                    <H3 text='Kategorier' textAlign='center'/>
                    <ProfileIcon />
                </DivStyled>
            </Layout>
        </div>
    )
}

export default Categories;