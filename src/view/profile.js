import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import ProfilePage from '../components/ProfilePage';

const BackIconStyled = styled.img`
    width: 25px;
    margin-left: 21px;
    margin-top: 59px;
    z-index: 800;
    position: absolute;
`;

const Profile = (props) => {
    return(
        <Layout>
            <BackIconStyled src='assets/icons/left-arrow.svg' onClick={() => props.history.goBack(props)} />
            <ProfilePage />
        </Layout>
    );
}

export default Profile;
