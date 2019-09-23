import React, { Component } from 'react';
import { Route, Switch, Link } from "react-router-dom";
import styled from 'styled-components';


const Div = styled.div`
  /* height: 40vh; */
  width: 100vw;
  display: flex;
  justify-content: center;

  form {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid white;
  height: 60px;
  width: 90vw;
}


input {
width: 90vw;
height: 45px;
background-color: black;
border: 0;

}

input[type=text]
{
color: #fff;
font-size: 20px;
height: 58px;
padding-left: 10px;
text-decoration: none;
border: 0;
}
  /* ul {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  line-height: 20px;
  } */

  /* li {
  display: flex;
  border-bottom: 1px solid white;
  padding-bottom: 25px;
  width: 90vw;
  justify-content: space-between;
  } */


}`;

const Form = (props) => {
    return(
      <div>
        <Div>
          <form>{props.goTo}<input type="text" name="firstname"></input></form>
        </Div>
      </div>
    )
}
export default Form;
