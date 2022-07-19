import Footer from "../components/Footer/Footer";
import Nav from "../components/Navigation/Nav";
import Title from "../components/Title";
import { ex } from "../FakeD/exersise";
import { threepower } from "../FakeD/power";
import { free } from "../FakeD/free";
import { HomeDiv, LeftDiv, RightDiv } from "../components/Main/HomeSeparate";
import Search from "../components/Search/Search";
import MainSlider from "../components/Main/MainSlider/MainSlider";
import {
    MainTitle,
    MainTitleH1,
    MainTitleH4,
} from "../components/Main/MainTitle";
import { useState } from "react";
import { BoardItem } from "../components/Board/BoardItem/BoardItem";
import BoardNav from "../components/Board/BoardNavigation/BoardNav";
import MainChart from "../components/Main/MainChart/MainChart";
import {
    WidthAreaSpace,
    WidthAreaPull,
} from "../components/Layout/CommonLayout";

function Home() {
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
            <Nav />
            <WidthAreaPull></WidthAreaPull>

            <WidthAreaSpace>
                <Search />
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
                            border={
                                whereboard === 0 &&
                                "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset"
                            }
                            click={onExersise}
                            name={"운동 게시판"}
                            summary={"다른 사람의 운동 경험을 확인해보세요!"}
                        />
                        <BoardNav
                            border={
                                whereboard === 1 &&
                                "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset"
                            }
                            click={onThree}
                            name={"3대 운동 게시판"}
                            summary={"다른 사람의 3대 능력을 확인해보세요!"}
                        />
                        <BoardNav
                            border={
                                whereboard === 2 &&
                                "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset"
                            }
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
            </WidthAreaSpace>
            <Footer />
        </>
    );
}

export default Home;
