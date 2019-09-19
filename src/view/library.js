import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import ProfileIcon from '../components/ProfileIcon';


const BackIcon = styled.img `
    height: 20px;
    width: 20px;
`

const Library = (props) => {
    return(
        <div>
            <Layout>
                <BackIcon src='assets/icons/left-arrow.svg' onClick={() => props.history.goBack(props)}/>
                <ProfileIcon />
                <h1>This is the Library page!</h1>
            </Layout>
        </div>
    )
};

export default Library;