import React, { useState } from "react";
import Nav from "../components/Navbar/index";
import Title from "../utils/Title/Title";
import {
  CommonContainer,
  CommonContents,
  CommonContentsHome,
  CommonContentsRight,
  CommonContentsLeft,
  MainSlide,
  CommonTitleArea,
  CommonTitleTitle,
  CommonTitleText,
} from "../components/common/Layout/Layout";

import FavoriteImage from "../assets/images/board_like_bk_32.svg";
import SliderSingleMain from "../components/Slider/Slider/SliderSingleMain";
import TopPopularPicture from "../components/Slider/TopPopularPicture";
import slide1 from "../assets/images/main-slide-img01.png";
import slide2 from "../assets/images/main-slide-img02.png";
import slide3 from "../assets/images/main-slide-img03.png";
import HomeBoardSelect from "../components/Home/HomeBoard/HomeBoardSelect";
import HomeBoardSummary from "../components/Home/HomeBoard/HomeBoardSummary";
import HomeBoard from "../components/Home/HomeBoard";
import HomeChart from "../components/Home/HomeChart/HomeChart";

export default function Home() {
  const data = [slide1, slide2, slide3];
  const [selected, setSelected] = useState("threepowerpost");

  return (
    <>
      <Title name="Home" />
      <Nav />
      <CommonContainer>
        <MainSlide>
          <SliderSingleMain data={data} categories={"home"} />
        </MainSlide>
        <CommonContents>
          <CommonContentsHome>
            <CommonContentsLeft>
              <CommonTitleArea>
                <CommonTitleTitle>
                  <img
                    src={FavoriteImage}
                    alt="favorite"
                    style={{ marginRight: "10px" }}
                  />
                  <CommonTitleText>이번주 인기사진</CommonTitleText>
                </CommonTitleTitle>
                <TopPopularPicture />
              </CommonTitleArea>
              <HomeBoardSelect selected={selected} setSelected={setSelected} />
              <HomeBoardSummary selected={selected} />
              <HomeBoard selected={selected} />
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
