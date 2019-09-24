import React, { useState } from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import { CategoryBox } from "../components/CategoryBox";
import { Header, H2, H3, P} from '../components/typo';

const TopDivStyled = styled.div`
    height: 189px;
    width: 100vw;
`;
const DivStyled = styled.div`
  text-align: center;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-row: 2;
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



const ChoseCategory = () => {
  const categories2 = ({name: ["Dans", "Musik", "Kroki", "Teater", "Scenografi"]})
  const [chosen, setChosen] = useState({name: ''});

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
          <div>
            <Header text='Välj intressen' />
          </div>
        </TopDivStyled>
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
