import React from "react";
import Layout from "../components/Layout";
import styled from 'styled-components';
import VideoData from "../data/youtube.json";
import { MediaBox } from '../components/MediaBox';
import ProfileIcon from "../components/ProfileIcon";
import { H3 } from "../components/typo";

const LayoutStyled = styled.div`
    height: 400vw;
`;

const DivStyled = styled.div `
    width: 100vw;
    height: 56px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const BackIconStyled = styled.img`
    height: 25px;
    width: 25px;
    margin-left: 10px;
`;

const SectionDivStyled = styled.div`
    height: 300px;
`;

const Latest = (props) => {
    return (
        <div>
            <Layout>
                <LayoutStyled>
                    <DivStyled>
                        <BackIconStyled src='assets/icons/left-arrow.svg' onClick={() => props.history.goBack(props)}/>
                        <H3 text='Senast tillagda' textAlign='center' marginLeft='18px' marginRight='0px'/>
                        <ProfileIcon />
                    </DivStyled>
                    <SectionDivStyled>
                        <MediaBox
                            src={VideoData[0].thumbnail}
                            title={VideoData[0].title}
                            description={VideoData[0].description}
                            position="relative"
                            ZIndex="-1"
                        />
                    </SectionDivStyled>              
                    <SectionDivStyled>
                        <MediaBox
                            src={VideoData[1].thumbnail}
                            title={VideoData[1].title}
                            description={VideoData[1].description}
                            position="relative"
                            ZIndex="-1"
                        />
                    </SectionDivStyled>
                    <SectionDivStyled>
                        <MediaBox
                            src={VideoData[2].thumbnail}
                            title={VideoData[2].title}
                            description={VideoData[2].description}
                            position="relative"
                            ZIndex="-1"
                        />
                    </SectionDivStyled>
                </LayoutStyled>
            </Layout>
        </div>
    );
}

export default Latest;
