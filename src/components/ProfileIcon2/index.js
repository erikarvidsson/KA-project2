import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Icon = styled.img`
  width: 32px;
  margin-right: 22px;
`;

const ProfileIcon2 = () => {
    return (
        <div>
            <Link to='/Profile'><Icon src='assets/icons/Profilbild.svg' /></Link>
        </div>
    )
}

export default ProfileIcon2;
