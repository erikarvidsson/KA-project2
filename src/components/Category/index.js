import React from 'react';
import styled from 'styled-components';
import { P } from '../typo';

const DivStyled = styled.div`
  height: 51px;
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const CategoryDivStyled = styled.div`
  height: 100%;
  width: 90vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
`;

const ImgStyled = styled.img`
  height: 25px;
  margin-right: 12px;
`;

const Category = props => {
  const remove = a => {
    document.getElementById(a).style.display = 'none';
  };

  return (
    <DivStyled onClick={() => remove(props.text)} id={props.text}>
      <CategoryDivStyled>
        <P text={props.text} marginLeft='18px' fontWeight='Bold' />
        <ImgStyled src={props.img} alt={props.title}></ImgStyled>
      </CategoryDivStyled>
    </DivStyled>
  );
};

export default Category;
