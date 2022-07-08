import Title from "../components/Title";
import Nav from '../components/Navigation/Nav'
import {SoloBoardItem} from "../components/Board/BoardItem/BoardItem";
import { ex } from "../FakeD/exersise";
import { RightDiv } from "../components/Main/HomeSeparate";
import BoardNav from "../components/Board/BoardNavigation/BoardNav";
import Footer from '../components/Footer/Footer'
import ExersiseSlider from "../components/Board/BoardSlider/ExersiseSlider";

function Exersise(){
    return (
        <>
            <Title name="Exersise"/>
            <Nav/>
            <ExersiseSlider/>
            <BoardNav style={{width:"50%" , margin:"0 auto",pointerEvents:"none"}} name={"운동 게시판"} summary={" 다른 사람의 운동 경험을 확인해보세요!"}/>
            <RightDiv style={{marginBottom:"150px", paddingRight:"0px"}}>
                {ex.map((x)=>
                    <SoloBoardItem key={Math.random()} item={x} color={"#7FBA7A"} value={"exersise"}/>
                )}
            </RightDiv>
            <Footer/>
        </>
        
    )
}

export default Exersise;