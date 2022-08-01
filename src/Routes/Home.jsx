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
import styled from "styled-components";

import img0 from "../images/img00.png";
import img1 from "../images/img01.png";
import img2 from "../images/img02.png";
import img3 from "../images/img03.png";
import img4 from "../images/img04.png";
import img5 from "../images/img05.png";
import { IoContrast } from "react-icons/io5";
import { useEffect } from "react";

function BoardItemBox({ id, title, createdDate, nickname, view }) {
    const BoardItem = styled.div`
        width: 325px;
        height: 346px;
        background: #ffffff;
        box-shadow: 1px 2px 16px rgba(0, 0, 0, 0.16);
        border-radius: 8px;
    `;

    const ItemArea = styled.div`
        width: 300px;
        height: 250px;
        margin: 0 auto; /*수정 : margin-top 안먹음*/
    `;

    const ItemImgGroup = styled.div`
        width: 300px;
        height: 250px;
        background: #f4a3a3;
    `;

    const ItemInfoGroup = styled.div`
        width: 300px;
        background: #f18686;
    `;

    const ItemInfoTitle = styled.div`
        width: 300px;
        font-family: "Pretendard";
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        color: #222222;
    `;

    const ItemInfo = styled.div`
        display: flex;
        background-color: teal;
    `;

    const ItemInfoDesc = styled.div``;

    const ItemInfoSumnail = styled.span`
        display: inline-block;
        width: 24px;
        height: 24px;
        background-color: #d9d9d9;
        border-radius: 50%;
    `;

    const ItemInfoNicname = styled.span`
        font-family: "Pretendard";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        color: #222222;
    `;

    const ItemInfoText = styled.span`
        font-family: "Pretendard";
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        color: #aaaaaa;
        margin: 0 16px;
    `;

    return (
        <BoardItem>
            <ItemArea>
                <ItemImgGroup></ItemImgGroup>
                <ItemInfoGroup>
                    <ItemInfoTitle>{title}</ItemInfoTitle>
                    <ItemInfo>
                        <ItemInfoDesc>
                            <ItemInfoSumnail></ItemInfoSumnail>
                            <ItemInfoNicname>{nickname}</ItemInfoNicname>
                            <ItemInfoText>덧글</ItemInfoText>
                            <ItemInfoText>{view}</ItemInfoText>
                            <ItemInfoText>좋음</ItemInfoText>
                        </ItemInfoDesc>
                    </ItemInfo>
                </ItemInfoGroup>
            </ItemArea>
        </BoardItem>
    );
}

function BoardCategory({ category }) {
    const BoardItemList = styled.ul`
        display: grid;
        justify-content: center;
        grid-template-columns: repeat(
            3,
            minmax(226px, 1fr)
        ); /*동적 개수 표현 수정*/
        grid-column-gap: 16px;
        grid-row-gap: 16px;
    `;

    const [boardLists, setboardLists] = useState([]);

    const getRequest = async () => {
        const response = await fetch(
            "http://54.166.132.169:8080/api/exercisepost/list?page=1&size=20",
            {
                method: "GET",
            }
        );
        const data = await response.json();
        return data.data;
    };

    useEffect(() => {
        getRequest().then(setboardLists);
    }, []);

    console.log("제발 와라", boardLists);

    return (
        <>
            <BoardItemList>
                {boardLists.map(
                    ({ id, title, createdDate, nickname, view }) => (
                        <Link to={`./${category}/${id}`}>
                            <li key={id}>
                                <BoardItemBox
                                    id={`${category}` + id}
                                    title={title}
                                    createdDate={createdDate}
                                    nickname={nickname}
                                    view={view}
                                ></BoardItemBox>
                            </li>
                        </Link>
                    )
                )}
            </BoardItemList>
        </>
    );
}

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
                                            3대력 게시판
                                        </CommonTitleText>
                                    </CommonTitleTitle>
                                </CommonTitleArea>
                                <CommonContentArea>
                                    <BoardCategory
                                        category={"exersise"}
                                    ></BoardCategory>
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

export default Home;
