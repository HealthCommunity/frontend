
import Footer from "../components/Footer/Footer";
import Nav from "../components/Navgation/Nav";
import Title from "../funcskills/title";
import { ex } from "../FakeD/exersise";
import { threepower } from "../FakeD/power";
import { free } from "../FakeD/free";
import BoardStyle from "../components/home/BoardStyle";
import Summary from '../components/home/SummaryStyle';
import HomeStyle from "../components/home/HomeStyle";
import { HomeDiv,LeftDiv,RightDiv,ExersiseDiv,ThreePowerDiv } from "../components/home/HomeSeparate";

function Home(){
    return (
        <>
            <Title name="Home"/>
            <Nav/>
            <HomeDiv>
                <LeftDiv>
                    <ExersiseDiv>
                        <HomeStyle homeitem="exersise" homevalue="운동 게시판"/>
                        <Summary/>
                        {ex.map((x)=>(
                        <BoardStyle itemvalue="exersise" arrayvalue={x} key={x.id}/>      
                        ))}
                    </ExersiseDiv>
                    <ThreePowerDiv>
                        <HomeStyle homeitem="board" homevalue="3대력 게시판"/>
                        <Summary/>
                        {threepower.map((x)=>(
                            <BoardStyle itemvalue="board" arrayvalue={x} key={x.id}/>     
                        ))}
                    </ThreePowerDiv>
                </LeftDiv>
                <RightDiv>
                        <HomeStyle homeitem="freeboard" homevalue="자유 게시판"/>
                        <Summary/>
                        {free.map((x)=>(
                            <BoardStyle itemvalue="freeboard" arrayvalue={x} key={x.id}/>             
                        ))}
                </RightDiv>
            </HomeDiv>
            <Footer/>
        </>
    )
}

export default Home;