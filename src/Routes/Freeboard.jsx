import Title from "../components/Title";
import Nav from '../components/Navgation/Nav'
import BoardStyle, { SeeDiv } from "../components/Board/BoardStyle";
import HomeStyle from "../components/home/HomeStyle";
import Summary from "../components/Board/BoardTitleStyle";
import { free } from "../FakeD/free";

function Freeboard(){
    return (
        <>
            <Title name="FreeBoard"/>
            <Nav/>
            <SeeDiv>
            <HomeStyle homeitem="freeboard" homevalue="자유 게시판"/>
                <Summary/>
                {free.map((x)=>(
                <BoardStyle itemvalue="freeboard" arrayvalue={x} key={x.id}/>             
            ))}            
            </SeeDiv>
        </>
        
    )
}

export default Freeboard;