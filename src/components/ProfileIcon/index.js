import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";

const Icon = styled.img`
    height: 30px;
    width: 30px;
    margin-right: 20px;
`

const ProfileIcon = () => {
    return(
        <div>
            <Link to='/Profile'><Icon src='assets/icons/Profilbild.svg'/></Link>
        </div>
    )

}

export default ProfileIcon;