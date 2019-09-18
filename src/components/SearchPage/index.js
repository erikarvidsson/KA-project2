import React,{ useState } from 'react';
import styled from "styled-components";


const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100vw;

  &>h1 {
  color: #fff;
  height: 80px;
  width: 100vw;
  flex-direction: column;
  justify-content: flex-start;

  }

  section h2 {
  flex-direction: row;
  height: 50px;

  }
`;

const SearchPage = () => {
    return (
    <div>
        <Wrapper>
            <h1>kplay</h1>

            <section>
              <h2>Sök</h2>
            </section>
        </Wrapper>
    </div>
)}

export default SearchPage;
