
import Footer from "../components/Footer/Footer";
import Nav from "../components/Navigation/Nav";
import Title from "../components/Title";
import { ex } from "../FakeD/exersise";
import { threepower } from "../FakeD/power";
import { free } from "../FakeD/free";
import { HomeDiv,LeftDiv,RightDiv } from "../components/Main/HomeSeparate";
import Search from "../components/Search/Search";
import MainSlider from "../components/Main/MainSlider/MainSlider";
import {MainTitle,MainTitleH1,MainTitleH4} from '../components/Main/MainTitle'
import styled from "styled-components";
import { GiMuscleUp,GiThreeFriends} from "react-icons/gi";
import { BsClipboard} from "react-icons/bs";
import { MdArrowForwardIos } from "react-icons/md";
import { useState } from "react";
import BoardItem from "../components/Board/BoardItem";

const LeftBtn =styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    padding: 0px 20px;
    cursor: pointer;
    :hover{
        transform: scale(1.05);
        background-color: ${(props)=>props.theme.bgColorSub};
        box-shadow: ${(props)=>props.theme.shadowColor};
    }
`

const LeftBtnLogo = styled.div`
    width: 20%;
    text-align: center;
    font-size: ${(props)=>props.theme.fontSizeH2};
    padding-left: 20px;
    width:35%;
    @media all and (min-width:480px) and (max-width:767px) {
        margin-right: 5px;
    } 
    @media all and (max-width:479px) {
        margin-right: 5px;
    }
`
const LeftBtnSummary = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    padding: 20px 0px 20px 0px;
`

const LeftBtnSummaryH4 =styled.h4`
    font-weight: 600;
    margin: 10px 0px;
    font-size: ${(props)=>props.theme.fontSizeH4};
    @media all and (min-width:480px) and (max-width:767px) {
        line-height: 1.2em;
        text-align: center;
    } 
    @media all and (max-width:479px) {
        line-height: 1.2em;
        text-align: center;
    }
`

const LeftBtnSummaryH5 =styled.h5`
    line-height: 2em;
    color: ${(props)=>props.theme.colorFontGrey100};
    font-size: ${(props)=>props.theme.fontSizeH5};
    @media all and (min-width:480px) and (max-width:767px) {
        display:none;
    } 
    @media all and (max-width:479px) {
        display:none;
    }
`


const LeftDivArrow =styled.div`
    @media all and (min-width:480px) and (max-width:767px) {
        display:none;
    } 
    @media all and (max-width:479px) {
        display:none;
    }
`


function Home(){
    const [whereboard, setWhereBoard] = useState(0);
    const onExersise = () =>{
        setWhereBoard(0);
    }
    const onThree = ()=>{
        setWhereBoard(1);
    }
    const onFree = ()=>{
        setWhereBoard(2);
    }
    return (
        <>
            <Title name="Home"/>
            <Nav/>
            <Search/>
            <MainSlider/>
            <MainTitle>
                <MainTitleH1>Notice Board List </MainTitleH1>
                <MainTitleH4>Click the button to check the Notice Board!</MainTitleH4>
            </MainTitle>
            <HomeDiv>
                <LeftDiv>
                   <LeftBtn onClick={onExersise}>
                    <LeftBtnLogo>
                        <GiMuscleUp/>
                    </LeftBtnLogo>
                    <LeftBtnSummary>
                        <LeftBtnSummaryH4>
                            운동 게시판
                        </LeftBtnSummaryH4>
                        <LeftBtnSummaryH5>
                            다른 사람의 운동 경험을 확인해보세요!
                        </LeftBtnSummaryH5>
                    </LeftBtnSummary>
                    <LeftDivArrow>
                        <MdArrowForwardIos/>
                    </LeftDivArrow>
                    
                   </LeftBtn>
                   <LeftBtn onClick={onThree}>
                    <LeftBtnLogo>
                        <GiThreeFriends/>
                    </LeftBtnLogo>
                    <LeftBtnSummary>
                        <LeftBtnSummaryH4>
                            3대 운동 게시판
                        </LeftBtnSummaryH4>
                        <LeftBtnSummaryH5>
                            다른 사람의 3대 능력을 확인해보세요!
                        </LeftBtnSummaryH5>
                    </LeftBtnSummary>
                    <LeftDivArrow>
                        <MdArrowForwardIos/>
                    </LeftDivArrow>
                   </LeftBtn>
                   <LeftBtn onClick={onFree}>
                    <LeftBtnLogo>
                        <BsClipboard/>
                    </LeftBtnLogo>
                    <LeftBtnSummary>
                        <LeftBtnSummaryH4>
                            자유 게시판
                        </LeftBtnSummaryH4>
                        <LeftBtnSummaryH5>
                            운동경험, 운동 팁, 식단 등 자유로운 게시판입니다
                        </LeftBtnSummaryH5>
                    </LeftBtnSummary>
                    <LeftDivArrow>
                        <MdArrowForwardIos/>
                    </LeftDivArrow>
                   </LeftBtn>
                </LeftDiv>
                <RightDiv>
                    {whereboard === 0 ? ex.map((x)=>
                        <BoardItem key={Math.random()} item={x} />
                    ) : whereboard ===1 ? threepower.map((x)=> 
                        <BoardItem key={Math.random()} item={x} />
                    ) :  free.map((x)=>
                        <BoardItem key={Math.random()} item={x} />
                    )}
                </RightDiv>
            </HomeDiv>
            <Footer/>
        </>
    )
}

export default Home;