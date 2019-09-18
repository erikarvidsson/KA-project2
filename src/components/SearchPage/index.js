import React,{ useState } from 'react';
import styled from "styled-components";


const Wrapper = styled.div`


  &>h1 {
    color: black;
    background-color: #fff;
    position: absolute;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100vw;
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
