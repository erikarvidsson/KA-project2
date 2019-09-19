import React,{ useState } from 'react';
import { Route, Switch, Link } from "react-router-dom";
import styled from "styled-components";


const Icon = styled.div`
  color: #fff;
  display: flex;
  justify-content:center;
  align-items:center;
  position:fixed;
  top:30px;
  left:30px;

  a {
    display:flex;
    align-items:center;
}

  img {
    width:20px;
    height:auto;
    transform:rotate(180deg);
    filter:invert(1);
  }


`;

const Profile = styled.div`
  color: #fff;
  display: flex;
  justify-content:center;
  align-items:center;
  position: fixed;
  top: 30px;
  right: 30px;

  a {
    display:flex;
    align-items:center;
}

  img {
    width:20px;
    height:auto;
    transform:rotate(180deg);
    filter:invert(1);
  }


`;

const Section = styled.section `
  height: 100vh;

  input {
  width: 332px;
  height: 35px;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
  margin-top: 70px;
  display: flex;
  justify-content:
}


label {
  font-size: 50px;
}

h3 {
display: flex;
margin-left: 20px;
margin-bottom: 100px;
margin-top: 60px;
font-size: 23px;
}

`;

const SearchPage = () => {
    return (
    <div>
      <Icon>
        <Link to='/'><img src='assets/icons/right-arrow.svg'/></Link>
      </Icon>

      <Profile>
        <Link to='/'><img src='assets/icons/right-arrow.svg'/></Link>
      </Profile>

      <Section>
          <label for="fname">Sök</label>
          <input type="text" id="fname" placeholder="Sök i Kplay...">
        </input>
        <h3>Senast sökta</h3>
        <h3>Trender</h3>
      </Section>

    </div>
)}

export default SearchPage;
