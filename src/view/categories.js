import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';
import { H3 } from '../components/typo';
import ProfileIcon from '../components/ProfileIcon';
import Category from '../components/Category';
import Line from '../components/Line';

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

const CategoryDivStyled = styled.div`
    margin-top: 45px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const LinkStyled = styled(Link)`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 60px;
    justify-content: space-between;
    height: 22px;
    text-decoration: none;
`;

const ImgStyled = styled.img`
    height: 22px;
`;

const categories2 = [
    'Dans',
    'Musik',
    'Kroki',
    'Teater',
    'Scenografi'
];

const Categories = (props) => {
    return (
        <Layout>
            <DivStyled>
                <BackIconStyled src='assets/icons/left-arrow.svg' onClick={() => props.history.goBack(props)} />
                <H3 text='Kategorier' textAlign='center' marginLeft='0px' marginRight='0px' />
                <ProfileIcon />
            </DivStyled>
            <CategoryDivStyled>
                  {categories2.map(category => {
                      return (
                          <>
                              <Line id={category} />
                              <Category
                                  id={category}
                                  text={category}
                                  img='assets/icons/cancel-1.svg'
                              />
                          </>
                      );
                  })}
                  <LinkStyled to='/ChoseCategry'>
                      <H3 text='Add' />
                      <ImgStyled src='assets/icons/add.svg' />
                  </LinkStyled>
            </CategoryDivStyled>
        </Layout>
    );
}

export default Categories;
