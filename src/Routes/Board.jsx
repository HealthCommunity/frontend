import Title from "../components/Title";
import Nav from '../components/Navigation/Nav'
import { RightDiv } from "../components/Main/HomeSeparate";
import { threepower } from "../FakeD/power";
import BoardItem from "../components/Board/BoardItem/BoardItem";
import BoardNav from "../components/Board/BoardNavigation/BoardNav";


function Board(){
    return (
        <>
            <Title name="Board"/>
            <Nav/>
            <BoardNav style={{paddingTop:"150px" ,width:"50%" , margin:"0 auto",pointerEvents:"none"}} name={"3대력 운동 게시판"} summary={"다른 사람의 3대 능력을 확인해보세요!"}/>
            <RightDiv >
            {threepower.map((x)=> 
                        <BoardItem key={Math.random()} item={x} color={"#3F8CFF"} value={"board"}/>
                )}
            </RightDiv>
        </>
        
    )
}

export default Board;