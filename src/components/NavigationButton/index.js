import React, { Component } from 'react';
import { Route, Switch, Link } from "react-router-dom";
import styled from 'styled-components';


const Div = styled.div`
  /* height: 40vh; */
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
  /* height: 30px; */
  line-height: 4;
  justify-content: space-between;
  }


}`;

const NavigationButton = (props) => {
    return(
        <div>
        <Div>
          <ul>
            <li>{props.goTo}<img src={props.img}></img></li>
          </ul>
          </Div>
        </div>
    )
}
export default NavigationButton;
