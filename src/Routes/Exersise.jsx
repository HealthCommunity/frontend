import Title from "../components/Title";
import Nav from '../components/Navigation/Nav'
import { ExersiseDiv } from "../components/Main/HomeSeparate";
import HomeStyle from "../components/Main/HomeStyle";
import Summary from "../components/Board/BoardTitleStyle";
import BoardStyle, { SeeDiv } from "../components/Board/BoardStyle";
import { ex } from "../FakeD/exersise";

function Exersise(){
    return (
        <>
            <Title name="Exersise"/>
            <Nav/>
            <SeeDiv>
                <ExersiseDiv>
                    <HomeStyle homeitem="exersise" homevalue="운동 게시판"/>
                    <Summary/>
                        {ex.map((x)=>(
                        <BoardStyle itemvalue="exersise" arrayvalue={x} key={x.id}/>      
                    ))}
                </ExersiseDiv>
            </SeeDiv>
        </>
        
    )
}

export default Exersise;