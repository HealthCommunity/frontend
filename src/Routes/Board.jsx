import Title from "../funcskills/title";
import Nav from '../components/Nav'
import BoardStyle, { SeeDiv } from "../components/home/BoardStyle";
import HomeStyle from "../components/home/HomeStyle";
import Summary from "../components/home/SummaryStyle";
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