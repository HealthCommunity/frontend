import Nav from "../components/Navigation/Nav";
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
            <Nav />
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
            </WidthAreaSpace>
        </>
    );
}

export default Home;
