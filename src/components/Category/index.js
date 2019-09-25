import React from 'react';
import styled from 'styled-components';
import { Header, P, H2, H3 } from '../typo';

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





const Category = (props) => {
    console.log(props)

    const categories2 = ["Dans", "Musik", "Kroki", "Teater", "Scenografi"];

    const remove = a => {
        var removeItem = categories2.indexOf(a);
        var item = document.getElementById(a).style.display = "none";
        console.log(item);
    };

    return (
      <DivStyled onClick={() => remove(props.text)} id={props.text}>
        <CategoryDivStyled>
          <P text={props.text} marginLeft="18px" fontWeight="Bold" />
          <ImgStyled src={props.img} alt={props.title}></ImgStyled>
        </CategoryDivStyled>
      </DivStyled>
    );
}

export default Category;
