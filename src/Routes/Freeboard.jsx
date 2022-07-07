import Title from "../components/Title";
import Nav from '../components/Navigation/Nav'
import { RightDiv } from "../components/Main/HomeSeparate";
import {SoloBoardItem} from "../components/Board/BoardItem/BoardItem";
import { free } from "../FakeD/free";
import BoardNav from "../components/Board/BoardNavigation/BoardNav";
import Footer from '../components/Footer/Footer'

function Freeboard(){
    return (
        <>
            <Title name="FreeBoard"/>
            <Nav/>
            <BoardNav style={{paddingTop:"150px" ,width:"50%" , margin:"0 auto",pointerEvents:"none"}} name={"자유 게시판"} summary={" 운동경험, 운동 팁, 식단 등 자유로운 게시판입니다"}/>
            <RightDiv style={{marginBottom:"150px"}}>
                {free.map((x)=>
                    <SoloBoardItem key={Math.random()} item={x} color={"#FF754C"} value={"freeboard"}/>
                )}
            </RightDiv>
            <Footer/>
        </>
        
    )
}

export default Freeboard;