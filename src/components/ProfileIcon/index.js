import React from 'react';
import styled from "styled-components";

const Icon = styled.img`
    height: 20px;
    width: 20px;
`

const ProfileIcon = () => {
    return(
        <div>
            <Icon src='assets/icons/profile.svg'/>
        </div>
    )

}

export default ProfileIcon;