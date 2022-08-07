// import Nav from "../components/Navigation/Nav";
import Title from "../components/Title";
import { HomeDiv, LeftDiv, RightDiv } from "../components/Main/HomeSeparate";
//import MainSlider from "../components/Main/MainSlider/MainSlider";
import {
  MainTitle,
  MainTitleH1,
  MainTitleH4,
} from "../components/Main/MainTitle";
import React, { useState } from "react";
import { BoardItem } from "../components/Board/BoardItem/BoardItem";
import BoardNav from "../components/Board/BoardNavigation/BoardNav";
import MainChart from "../components/Main/MainChart/MainChart";
import PullSlider from "../components/Main/PullSlider/SliderMain";
import {
  WidthAreaSpace,
  WidthAreaPull,
} from "../components/Layout/CommonLayout";
import { Link } from "react-router-dom";

import {
  Nav,
  CommonContainer,
  CommonContents,
  CommonContentsHome,
  CommonContentsRight,
  CommonContentsLeft,
  MainSlide,
  CommonContent,
  CommonContentSidebar,
  CommonTitleArea,
  CommonTitleTitle,
  CommonTitleText,
  CommonContentArea,
  BoardSlide,
  CommonContentTools,
} from "../component/common/Layout/Layout";
import BoardCategory from "../component/Borad/View/BoardCategory";
import {
  BoardSelectTab,
  TabList,
  TabItem,
} from "../component/Borad/View/BoardSelectTab";

import SliderMain from "../component/Slider/PullSlider/SliderMain";

import styled from "styled-components";
import { IoContrast } from "react-icons/io5";
import { useEffect } from "react";

import slide1 from "../images/main-slide-img01.png";
import slide2 from "../images/main-slide-img02.png";
import slide3 from "../images/main-slide-img03.png";

function Home() {
  const data = [slide1, slide2, slide3];
  const [selected, setSelected] = useState("threepowerpost");

  return (
    <>
      <Title name="Home" />
      <Nav></Nav>
      <CommonContainer>
        <MainSlide>
          <SliderMain data={data} />
        </MainSlide>
        <CommonContents>
          <CommonContentsHome>
            <CommonContentsRight>
              <CommonContent>
                <CommonTitleArea>
                  <CommonTitleTitle>
                    <CommonTitleText>이번주 인기사진</CommonTitleText>
                  </CommonTitleTitle>
                </CommonTitleArea>
                <CommonContentArea>내용물</CommonContentArea>
              </CommonContent>

              <CommonContent>
                <CommonTitleArea>
                  <CommonTitleTitle>
                    <CommonTitleText>
                      <BoardSelectTab
                        onChange={(category) => {
                          setSelected(category);
                        }}
                        typeName={selected}
                      />
                    </CommonTitleText>
                  </CommonTitleTitle>
                </CommonTitleArea>

                <CommonContentArea style={{ marginTop: "100px" }}>
                  <Group selected={selected}>
                    <GroupItem category="threepowerpost">
                      <BoardCategory category={"threepowerpost"} />
                    </GroupItem>
                    <GroupItem category="exercisepost">
                      <BoardCategory category={"exercisepost"} />
                    </GroupItem>
                    <GroupItem category="freepost">
                      <BoardCategory category={"freepost"} />
                    </GroupItem>
                  </Group>
                </CommonContentArea>
              </CommonContent>
            </CommonContentsRight>
            <CommonContentsLeft>
              <CommonContentSidebar></CommonContentSidebar>
            </CommonContentsLeft>
          </CommonContentsHome>
        </CommonContents>
      </CommonContainer>
    </>
  );
}

function Group({ children, selected }) {
  const elements = React.Children.toArray(children);
  return <>{elements.find(({ props }) => selected === props.category)}</>;
}

function GroupItem({ children }) {
  return <>{children}</>;
}

export default Home;
