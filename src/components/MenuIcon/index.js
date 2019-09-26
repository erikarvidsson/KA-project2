import React from 'react';
import styled from 'styled-components';

const Icons = styled.img`
  height: 30px;
  width: 30px;

  &:active {
    transform: scale(1.5, 1.5);
    fill: purple;
  }
`;

const MenuIcon = props => {
  return (
    <div>
      <Icons src={props.src} fill={props.fill} className={props.class}></Icons>
    </div>
  );
};

export default MenuIcon;
