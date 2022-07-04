import Title from "../components/Title";
import Nav from '../components/Navgation/Nav'
import BoardStyle, { SeeDiv } from "../components/Board/BoardStyle";
import HomeStyle from "../components/home/HomeStyle";
import Summary from "../components/Board/BoardTitleStyle";
import { threepower } from "../FakeD/power";

function Board(){
    return (
        <>
            <Title name="Board"/>
            <Nav/>
            <SeeDiv>
            <HomeStyle homeitem="board" homevalue="3대력 게시판"/>
                <Summary/>
                {threepower.map((x)=>(
                <BoardStyle itemvalue="board" arrayvalue={x} key={x.id}/>     
            ))}            
            </SeeDiv>
        </>
        
    )
}

export default Board;