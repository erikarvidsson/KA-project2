import React from "react";
import Layout from "../components/Layout";
import styled from 'styled-components';
import VideoData from "../data/youtube.json";
import { MediaBox } from '../components/MediaBox';
import ProfileIcon from "../components/ProfileIcon";
import { H3 } from "../components/typo";
import YPlayer from "../components/YPlayer";

const LayoutStyled = styled.div`
    /* height: 400vw; */
`;

const DivStyled = styled.div `  
    position: relative;
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
  margin-top: 36px;
  position: relative;
  /* height: 300px; */
`;

const Latest = (props) => {
    console.log(VideoData[0].title);
    return (
      <div>
        <Layout>
          <LayoutStyled>
            <DivStyled>
              <BackIconStyled
                src="assets/icons/left-arrow.svg"
                onClick={() => props.history.goBack(props)}
              />
              <H3
                position="relative"
                text="Senast tillagda"
                textAlign="center"
                marginLeft="18px"
                marginRight="0px"
                ZIndex="2"
              />
              <ProfileIcon />
            </DivStyled>
            <SectionDivStyled>
              <YPlayer
                link={VideoData[0].url}
                hText={VideoData[0].title}
                pText={VideoData[0].description}
                position="relative"
                marginTop="28px"
                ZIndex="10"
              />
            </SectionDivStyled>
            <SectionDivStyled>
              <YPlayer
                link={VideoData[1].url}
                hText={VideoData[1].title}
                pText={VideoData[1].description}
                position="relative"
                ZIndex="2"
              />
            </SectionDivStyled>
            <SectionDivStyled>
              <YPlayer
                link={VideoData[2].url}
                hText={VideoData[2].title}
                pText={VideoData[2].description}
                position="relative"
                ZIndex="2"
              />
            </SectionDivStyled>
          </LayoutStyled>
        </Layout>
      </div>
    );
}

export default Latest;
