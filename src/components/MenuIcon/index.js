import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Icons = styled.img`
    height: 30px;
    width: 30px;

    /* transition: 0.4s; */

    &:active{
        transform: scale(1.5, 1.5);
    fill: purple;
    }
    /* Detta funkar inte */
    /* &::after{
        background-image: url('assets/icons/rocket-launch.svg')
    } */
`;

const MenuIcon = (props) => {
    return (
        <div>
             <Icons src={props.src} fill={props.fill} className={props.class}></Icons>
        </div>
    )
}

export default MenuIcon;
