import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import ProfilePage from '../components/ProfilePage';

// Behövs denna?
// const DivStyled = styled.div`
//     width: 100vw;
//     display: flex;
//     justify-content: space-between;
//     margin: 0;
// `;

const BackIconStyled = styled.img `
    width: 25px;
    margin-left: 21px;
    margin-top: 59px;
    z-index: 800;
    position: absolute;
`;

const Profile = (props) => {
    return(
        <div>
            <Layout>
                {/* <DivStyled> */}
                    <BackIconStyled src='assets/icons/left-arrow.svg' onClick={() => props.history.goBack(props)} />
                {/* </DivStyled> */}
                <ProfilePage />
            </Layout>
        </div>
    );
}

export default Profile;
