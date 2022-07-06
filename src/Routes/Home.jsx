
import Footer from "../components/Footer/Footer";
import Nav from "../components/Navigation/Nav";
import Title from "../components/Title";
import { ex } from "../FakeD/exersise";
import { threepower } from "../FakeD/power";
import { free } from "../FakeD/free";
import BoardStyle from "../components/Board/BoardStyle";
import Summary from '../components/Board/BoardTitleStyle';
import HomeStyle from "../components/Main/HomeStyle";
import { HomeDiv,LeftDiv,RightDiv,ExersiseDiv,ThreePowerDiv } from "../components/Main/HomeSeparate";
import Search from "../components/Search";

function Home(){
    return (
        <>
            <Title name="Home"/>
            <Nav/>
            <Search/>
            <HomeDiv>
                <LeftDiv>
                   
                    
                </LeftDiv>
                <RightDiv>
                        
                </RightDiv>
            </HomeDiv>
            <Footer/>
        </>
    )
}

export default Home;