import React,{ useState } from 'react';
import { Route, Switch, Link } from "react-router-dom";
import styled from "styled-components";
import MenuTop from '../MenuTop';
import {Header, H2, H3, P} from '../typo';

const InputStyled = styled.input`
width: 332px;
height: 35px;
box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 25px;
display: flex;
position: fixed;
justify-content: center;
margin-top: 100px;
margin-left: 20px;

`;

const SearchPage = (props) => {
    return (
      <div>
        <MenuTop/>
          <div>
            <InputStyled type="search" id="site-search" pattern="[A-z][0-9]" placeholder="Sök i Kplay..." />

        </div>
      </div>
  )}

export default SearchPage;
