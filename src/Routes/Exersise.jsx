import Title from "../funcskills/title";
import Nav from '../components/Navgation/Nav'
import { ExersiseDiv } from "../components/home/HomeSeparate";
import HomeStyle from "../components/home/HomeStyle";
import Summary from "../components/home/SummaryStyle";
import BoardStyle, { SeeDiv } from "../components/home/BoardStyle";
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