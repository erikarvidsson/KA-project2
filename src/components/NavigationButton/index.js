import React from 'react';
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
    text-decoration: none;
  }

  li {
    display: flex;
    border-bottom: 1px solid white;
    padding-bottom: 25px;
    width: 90vw;
    /* height: 30px; */

    justify-content: space-between;
    list-style: none;
    /* text-decoration: none; */
  }

  img {
    height: 25px;
    margin-right: 20px;
  }
`;

const NavigationButton = (props) => {
    return(
        <div>
        <Div>
          <ul>
            <li>{props.goTo}<img src={props.img} alt=''></img></li>
          </ul>
          </Div>
        </div>
    )
}
export default NavigationButton;
