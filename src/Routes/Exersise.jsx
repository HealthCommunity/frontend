import Title from "../components/Title";
import Nav from '../components/Navigation/Nav'
import BoardItem from "../components/Board/BoardItem/BoardItem";
import { ex } from "../FakeD/exersise";
import { RightDiv } from "../components/Main/HomeSeparate";
import BoardNav from "../components/Board/BoardNavigation/BoardNav";

function Exersise(){
    return (
        <>
            <Title name="Exersise"/>
            <Nav/>
            <BoardNav style={{paddingTop:"150px" ,width:"50%" , margin:"0 auto",pointerEvents:"none"}} name={"운동 게시판"} summary={" 다른 사람의 운동 경험을 확인해보세요!"}/>
            <RightDiv>
                {ex.map((x)=>
                    <BoardItem key={Math.random()} item={x} color={"#6C5DD3"} value={"exersise"}/>
                )}
            </RightDiv>
        </>
        
    )
}

export default Exersise;