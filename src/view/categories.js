import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import { Header, P, H2, H3 } from '../components/typo';
import ProfileIcon from '../components/ProfileIcon';
import NavigationButton from '../components/NavigationButton';
import Category from '../components/Category';
import Line from '../components/Line';

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

const CategoryDivStyled = styled.div`
    margin-top: 45px;
    display: flex;
    flex-direction: column;
    align-items: center;
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
                <CategoryDivStyled>
                    <Category text='Dans' img='assets/icons/cancel-1.svg'/>
                    <Line />
                    <Category text='Musik' img='assets/icons/cancel-1.svg'/>
                    <Line />
                    <Category text='Kroki' img='assets/icons/cancel-1.svg'/>
                    <Line />
                    <Category text='Teater' img='assets/icons/cancel-1.svg'/>
                    <Line />
                    <Category text='Scenografi' img='assets/icons/cancel-1.svg'/>
                </CategoryDivStyled>
            </Layout>
        </div>
    )
}

export default Categories;