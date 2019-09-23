import React from 'react';
import styled from 'styled-components';

const DivStyled = styled.div`
    height: 51px;
    width: 100vw;
    display: flex;
    justify-content: center;
`;

const UlStyled = styled.ul`
    height: 100%;
    width: 86vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    text-decoration: none;
    margin: 0;
    padding: 0;
`;

const LiStyled = styled.li`
    width: 100%;
    display: flex;
    justify-content: space-between;
    list-style: none;

`;

const ImgStyled = styled.img `
    height: 25px;
`;

const NavigationButton = (props) => {
    return(
        <DivStyled>
          <UlStyled>
            <LiStyled>{props.goTo}<ImgStyled src={props.img} alt=''></ImgStyled></LiStyled>
          </UlStyled>
        </DivStyled>  

    )
}
export default NavigationButton;
