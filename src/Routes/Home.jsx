// import Nav from "../components/Navigation/Nav";
import Title from "../components/Title";
import { ex } from "../FakeD/exersise";
import { threepower } from "../FakeD/power";
import { free } from "../FakeD/free";
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
    SnsList,
    SnsItem,
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

    // const [whereboard, setWhereBoard] = useState(0);
    // const onExersise = () => {
    //     setWhereBoard(0);
    // };
    // const onThree = () => {
    //     setWhereBoard(1);
    // };
    // const onFree = () => {
    //     setWhereBoard(2);
    // };

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
                                        <CommonTitleText>
                                            이번주 인기사진
                                        </CommonTitleText>
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
                                        {/* <CommonTitleText>
                                            3대력 게시판
                                        </CommonTitleText> */}
                                    </CommonTitleTitle>
                                </CommonTitleArea>

                                <CommonContentArea>
                                    <Group selected={selected}>
                                        <GroupItem category="threepowerpost">
                                            <BoardCategory
                                                category={"threepowerpost"}
                                            />
                                        </GroupItem>
                                        <GroupItem category="exercisepost">
                                            <BoardCategory
                                                category={"exercisepost"}
                                            />
                                        </GroupItem>
                                        <GroupItem category="freepost">
                                            <BoardCategory
                                                category={"freepost"}
                                            />
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
            {/* <Nav />
            <WidthAreaPull>
                <PullSlider data={data} />
            </WidthAreaPull>
            <WidthAreaSpace>
                <MainChart />
                <MainTitle>
                    <MainTitleH1>Notice Board List </MainTitleH1>
                    <MainTitleH4>
                        Click the button to check the Notice Board!
                    </MainTitleH4>
                </MainTitle>
                <HomeDiv>
                    <LeftDiv>
                        <BoardNav
                            border={whereboard === 0 && "#6C5DD3"}
                            click={onExersise}
                            name={"운동 게시판"}
                            summary={"다른 사람의 운동 경험을 확인해보세요!"}
                        />
                        <BoardNav
                            border={whereboard === 1 && "#3F8CFF"}
                            click={onThree}
                            name={"3대 운동 게시판"}
                            summary={"다른 사람의 3대 능력을 확인해보세요!"}
                        />
                        <BoardNav
                            border={whereboard === 2 && "#FF754C"}
                            click={onFree}
                            name={"자유 게시판"}
                            summary={
                                " 운동경험, 운동 팁, 식단 등 자유로운 게시판입니다"
                            }
                        />
                    </LeftDiv>
                    <RightDiv>
                        {whereboard === 0
                            ? ex.map((x) => (
                                  <BoardItem
                                      key={Math.random()}
                                      item={x}
                                      color={"#6C5DD3"}
                                      value={"exersise"}
                                  />
                              ))
                            : whereboard === 1
                            ? threepower.map((x) => (
                                  <BoardItem
                                      key={Math.random()}
                                      item={x}
                                      color={"#3F8CFF"}
                                      value={"board"}
                                  />
                              ))
                            : free.map((x) => (
                                  <BoardItem
                                      key={Math.random()}
                                      item={x}
                                      color={"#FF754C"}
                                      value={"freeboard"}
                                  />
                              ))}
                    </RightDiv>
                </HomeDiv>
            </WidthAreaSpace> */}
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
