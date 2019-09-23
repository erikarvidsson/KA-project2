import React from 'react';
import Layout from '../components/Layout';
import SettingPage from '../components/SettingPage';
import styled from "styled-components";

const BackIconStyled = styled.img`
    height: 30px;
    width: 30px;
    margin-left: 10px;
`;


const Settings = (props) => {
    return(
        <div>
            <Layout>
              <BackIconStyled src='assets/icons/left-arrow.svg' onClick={() => props.history.goBack(props)}/>
              <SettingPage />
            </Layout>
        </div>
    )
}

export default Settings;
