import React from 'react';
import Layout from '../components/Layout';
import ProfilePage from '../components/ProfilePage';
import styled from "styled-components";

const DivStyled = styled.div`
    width: 100vw;
    display: flex;
    justify-content: space-between;
    margin: 0;
`;

const BackIconStyled = styled.img `
    height: 30px;
    width: 30px;
    margin-left: 10px;
    z-index: 1;
    position: absolute;
`;

const Profile = (props) => {
    return(
        <div>
            <Layout>
                <DivStyled>
                    <BackIconStyled src='assets/icons/left-arrow.svg' onClick={() => props.history.goBack(props)}/>
                </DivStyled>
                <ProfilePage />
            </Layout>
        </div>
    );
}

export default Profile;
