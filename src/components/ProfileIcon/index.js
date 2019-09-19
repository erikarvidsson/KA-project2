import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";

const Icon = styled.img`
    height: 20px;
    width: 20px;
`

const ProfileIcon = () => {
    return(
        <div>
            <Link to='/Profile'><Icon src='assets/icons/Profilbild.svg'/></Link>
        </div>
    )

}

export default ProfileIcon;