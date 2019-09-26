import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
    display: flex;
    width: 100vw;
    overflow-x: auto;
`;

const SideScroll = (props) => {
  return (
    <Div>
      {props.children}
    </Div>
)}

export default SideScroll;
