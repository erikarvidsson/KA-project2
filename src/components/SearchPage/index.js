import React,{ useState } from 'react';
import { Route, Switch, Link } from "react-router-dom";
import styled from "styled-components";
import ProfileIcon from '../ProfileIcon';

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

margin-right: 20px;
}
`;

const Section = styled.section `
height: 100vh;

input {
width: 332px;
height: 35px;
box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 25px;
display: flex;
justify-content: center;
margin: 30px;
}

label {
font-size: 45px;
}

li {
display: flex;
padding-bottom: 50px;
line-height: 5;
margin-left: 40px;
}
`;

const SearchPage = () => {
    return (
      <div>
        <Icon>
          <Link to='/'><img src='assets/icons/right-arrow.svg'/></Link>
        </Icon>

        <Profile>
          <Link to='/Profile'><ProfileIcon/></Link>
        </Profile>

        <Section>
          <label for="fname">Sök</label>
          <input type="search" id="site-search" pattern="[A-z][0-9]" placeholder="Sök i Kplay...">
          </input>

        <ul>
          <li>Senast sökta</li>
          <li>Trender</li>
        </ul>
      </Section>
    </div>
)}

export default SearchPage;
