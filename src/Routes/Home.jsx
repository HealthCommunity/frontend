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
import { useState } from "react";
import { BoardItem } from "../components/Board/BoardItem/BoardItem";
import BoardNav from "../components/Board/BoardNavigation/BoardNav";
import MainChart from "../components/Main/MainChart/MainChart";
import PullSlider from "../components/Main/PullSlider/SliderMain";
import {
    WidthAreaSpace,
    WidthAreaPull,
} from "../components/Layout/CommonLayout";

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

import img0 from "../images/img00.png";
import img1 from "../images/img01.png";
import img2 from "../images/img02.png";
import img3 from "../images/img03.png";
import img4 from "../images/img04.png";
import img5 from "../images/img05.png";

function Home() {
    const data = [img0, img1, img2, img3, img4, img5];

    const [whereboard, setWhereBoard] = useState(0);
    const onExersise = () => {
        setWhereBoard(0);
    };
    const onThree = () => {
        setWhereBoard(1);
    };
    const onFree = () => {
        setWhereBoard(2);
    };
    return (
        <>
            <Title name="Home" />
            <Nav></Nav>
            <CommonContainer>
                <MainSlide></MainSlide>
                <CommonContents>
                    <CommonContentsHome>
                        <CommonContentsRight>
                            <CommonContent>
                                <CommonTitleArea>
                                    <CommonTitleTitle>
                                        <CommonTitleText>
                                            ????????? ????????????
                                        </CommonTitleText>
                                    </CommonTitleTitle>
                                </CommonTitleArea>
                                <CommonContentArea>?????????</CommonContentArea>
                            </CommonContent>

                            <CommonContent>
                                <CommonTitleArea>
                                    <CommonTitleTitle>
                                        <CommonTitleText>
                                            ??????????????????
                                        </CommonTitleText>
                                    </CommonTitleTitle>
                                </CommonTitleArea>
                                <CommonContentArea>?????????</CommonContentArea>
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
                            name={"?????? ?????????"}
                            summary={"?????? ????????? ?????? ????????? ??????????????????!"}
                        />
                        <BoardNav
                            border={whereboard === 1 && "#3F8CFF"}
                            click={onThree}
                            name={"3??? ?????? ?????????"}
                            summary={"?????? ????????? 3??? ????????? ??????????????????!"}
                        />
                        <BoardNav
                            border={whereboard === 2 && "#FF754C"}
                            click={onFree}
                            name={"?????? ?????????"}
                            summary={
                                " ????????????, ?????? ???, ?????? ??? ???????????? ??????????????????"
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

export default Home;
