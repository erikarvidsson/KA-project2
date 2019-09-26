import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Icon = styled.img`
    width: 32px;
    border-radius: 50%;
    margin-right: 22px;
`;

const ProfileIcon2 = () => {
    return (
        <div>
            <Link to='/Profile'><Icon src='assets/imgs/profilbild.png' /></Link>
        </div>
    );
}

export default ProfileIcon2;
