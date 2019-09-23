import React, { useState } from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import { CategoryBox } from "../components/CategoryBox";

const DivStyled = styled.div`
  text-align: center;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-row: 2;
`;



const ChoseCategory = () => {
  const categories2 = ({name: ["Dans", "Musik", "Kroki", "Teater", "Scenografi"]})
  const [dans, setDanse] = useState(false);

  console.log(categories2)

  // newChosen = () => {
  //   setChosen(categories2.name);
  // }
  
  return (
    <div>
      <Layout>
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
