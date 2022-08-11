import Nav from "../components/Navigation/Nav";
import Title from "../components/Title";
import React, { useState } from "react";
import {
  // Nav,
  CommonContainer,
  CommonContents,
  CommonContentsHome,
  CommonContentsRight,
  CommonContentsLeft,
  MainSlide,
  CommonTitleArea,
  CommonTitleTitle,
  CommonTitleText,
} from "../component/common/Layout/Layout";

import FavoriteImage from "../images/figma/board_like_bk_32.svg";
import SliderMain from "../component/Slider/PullSlider/SliderMain";
import styled from "styled-components";

import slide1 from "../images/main-slide-img01.png";
import slide2 from "../images/main-slide-img02.png";
import slide3 from "../images/main-slide-img03.png";
import HomeBoardSelect from "../component/Home/HomeBoard/HomeBoardSelect";
import HomeBoardSummary from "../component/Home/HomeBoard/HomeBoardSummary";
import HomeBoard from "../component/Home/HomeBoard";
import HomeChart from "../component/Home/HomeChart/HomeChart";

export default function Home() {
  const data = [slide1, slide2, slide3];
  const [selected, setSelected] = useState("threepowerpost");

  return (
    <>
      <Title name="Home" />
      <Nav />
      <CommonContainer>
        <MainSlide>
          <SliderMain data={data} />
        </MainSlide>
        <CommonContents>
          <CommonContentsHome>
            <CommonContentsLeft>
              {/* 홈화면 인기사진 리스트 시작 */}
              <CommonTitleArea>
                <CommonTitleTitle>
                  <img src={FavoriteImage} alt="favorite" />
                  <CommonTitleText>이번주 인기사진</CommonTitleText>
                </CommonTitleTitle>
                <FavoriteDiv>여기는 이번주 인기사진이 들어갑니다</FavoriteDiv>
              </CommonTitleArea>
              {/* 홈화면 인기사진 리스트 끝 */}
              {/* //////////////////////////////////////////// */}
              {/* 홈화면 게시판 리스트 시작 */}
              <HomeBoardSelect selected={selected} setSelected={setSelected} />
              <HomeBoardSummary selected={selected} />
              <HomeBoard selected={selected} />
              {/* 홈화면 게시판 리스트 끝 */}
            </CommonContentsLeft>
            <CommonContentsRight>
              <HomeChart />
            </CommonContentsRight>
          </CommonContentsHome>
        </CommonContents>
      </CommonContainer>
    </>
  );
}

const FavoriteDiv = styled.div`
  width: 100%;
  height: 100px;
  background-color: red;
  font-size: 36px;
  color: white;
  text-align: center;
`;
