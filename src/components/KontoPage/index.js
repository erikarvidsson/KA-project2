import React,{ useState } from 'react';
import { Route, Switch, Link } from "react-router-dom";
import styled from "styled-components";


const Section = styled.section`
  height: 100vh;
  width: 100vw;

  img {
  width:20px;
  height:auto;
  filter:invert(1);
  }

`;

const Icon = styled.div`
  color: #fff;
  display: flex;
  justify-content:center;
  align-items:center;
  position:fixed;
  top:30px;
  left:30px;


`;

const Div = styled.div`
  height: 40vh;
  width: 100vw;

  ul {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  line-height: 20px;
  }

  li {
  display: flex;
  border-bottom: 1px solid white;
  padding-bottom: 25px;
  width: 90vw;
  height: 30px;
  line-height: 4;
  justify-content: space-between;
  }


}`;

const KontoPage = () => {
    return (
    <div>
    <Section>
    <div>
      <img src='assets/icons/profile.svg'></img>
    </div>

    <Div>
      <ul>
        <li>Konto<Link to='/Konto'><img src='assets/icons/right-arrow.svg'></img></Link></li>
        <li>Inställningar<Link to='/'><img src='assets/icons/right-arrow.svg'></img></Link></li>
        <li>Hjälp<Link to='/'><img src='assets/icons/right-arrow.svg'></img></Link></li>
        <li>Logga ut<Link to='/'><img src='assets/icons/logout.svg'></img></Link></li>
      </ul>
      </Div>
    </Section>
  </div>
)}

export default KontoPage;
