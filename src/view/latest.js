import React from "react";
import Layout from "../components/Layout";
import styled from "styled-components";
import VideoData from "../data/youtube.json";
import ProfileIcon from "../components/ProfileIcon";
import { H3 } from "../components/typo";
import YPlayer from "../components/YPlayer";
import Modal from "../components/Modal";

const DivStyled = styled.div`  
    position: relative;
    width: 100vw;
    height: 56px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 59px;
`;

const BackIconStyled = styled.img`
    width: 25px;
    margin-left: 21px;
    z-index: 800;
`;

const SectionDivStyled = styled.div`
    margin-top: 36px;
    position: relative;
`;

const Latest = (props) => {

    return (
        <Layout>         
            <DivStyled>
                <BackIconStyled src='assets/icons/left-arrow.svg' onClick={() => props.history.goBack(props)} />
                <H3 position='relative' text='Senast tillagda' textAlign='center' marginLeft='18px' marginRight='0px' ZIndex='2' />
                <ProfileIcon />
            </DivStyled>
            <SectionDivStyled>
                <Modal url={VideoData[0].thumbnail} title={VideoData[0].title} description={VideoData[0].description} height='400px' imgWidth='100%' imgMarginLeft='0px'>
                    <YPlayer link={VideoData[0].url} hText={VideoData[0].title} pText={VideoData[0].description} height='270px' />
                </Modal>
            </SectionDivStyled>
            <SectionDivStyled>
                <Modal url={VideoData[1].thumbnail} title={VideoData[1].title} description={VideoData[1].description} height='400px' imgWidth='100%' imgMarginLeft='0px'>
                    <YPlayer link={VideoData[1].url} hText={VideoData[1].title} pText={VideoData[1].description} height='270px' />
                </Modal>
            </SectionDivStyled>
            <SectionDivStyled>
                <Modal url={VideoData[2].thumbnail} title={VideoData[2].title} description={VideoData[2].description} height='400px' imgWidth='100%' imgMarginLeft='0px'>
                    <YPlayer link={VideoData[2].url} hText={VideoData[2].title} pText={VideoData[2].description} height='270px' />
                </Modal>
            </SectionDivStyled>
        </Layout>
    );
}

export default Latest;
