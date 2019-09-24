import React, { useState } from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { CategoryBox } from "../components/CategoryBox";
import { Header, H2, H3, P} from '../components/typo';
import NavigationButton from "../components/NavigationButton";

const TopDivStyled = styled.div`
    height: 189px;
    width: 100vw;
`;
const DivStyled = styled.div`
  text-align: center;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-row: 2;
  margin-left: 10px;
`;

const LogoDivStyled = styled.div`
    height: 29px;
    width: 100vw;
`;

const LogoStyled = styled.img`
    height: 29px;
    width: 25px;
    margin-left: 21px;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;



const ChoseCategory = () => {
  const categories2 = ({name: ["DANS", "MUSIK", "HANTVERK", "SÅNG", "SCENKONST", 'FÄRGLÄRA']})
  const [dans, setDanse] = useState(false);

  console.log(categories2)

  // newChosen = () => {
  //   setChosen(categories2.name);
  // }
  
  return (
    <div>
      <Layout>
        <TopDivStyled>
          <LogoDivStyled>
            <LogoStyled src='assets/icons/kplay-logotyp-elva.svg'></LogoStyled>
          </LogoDivStyled>
          
          <Header text='Välj intressen' marginTop='21' margonBottom='0' marginLeft='0' marginRight='0'/>
          
        </TopDivStyled>
        <StyledLink to='/'>
          <NavigationButton goTo='Gå vidare' img='assets/icons/right-arrow.svg' />
        </StyledLink>
        <DivStyled>
          {categories2.name.map(category => {
            return (
              <CategoryBox title={category} 
              
              />
            );
          })}
        </DivStyled>


      </Layout>
    </div>
  );
};

export default ChoseCategory;
