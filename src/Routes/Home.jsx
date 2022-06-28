import styled from "styled-components";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Title from "../funcskills/title";
import { ex } from "../FakeD/exersise";
import { Link } from "react-router-dom";
import { CgChevronRight ,CgEye} from "react-icons/cg";

const HomeDiv = styled.div`
    padding-top: 100px;
    width:100%;
    display: flex;
    grid-template-columns: 1fr;
    height:100vh;
`

const LeftDiv =styled.div`
    width:50%;
    display: flex;
    height:100%;
    flex-direction: column;
    border-right: 1px solid grey;
`

const RightDiv =styled.div`
    width:50%;
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ExersiseDiv =styled.div`
    height: 50%;
    border-bottom: 1px solid black;
    align-items: center;
    overflow-x: hidden;
    overflow-y: scroll;
`

const ThreePowerDiv= styled.div`
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    width:100%;   
`
const EDiv =styled.div`
    width:90%;
    display: flex;
    align-items: center;
    text-align: center;
    height: 30px;
    margin:0% 5%;
    cursor: pointer;
    :hover{
        background-color: antiquewhite;
    }
`

const ExersiseTitle =styled.div`
    width:60%;   
    display: flex;
    margin-left:10px;
`
const ExersizeBigTitle=styled.div`
    width:60%;
`

const ExersiseDate =styled.div`
    width:17%; 
    font-size: 14px;
`
const ExersiseWrite =styled.div`
    width:14%; 
    font-size: 14px;
`
const ExersiseView =styled.div`
    width:9%;
    font-size: 12px;
    display: flex;
    align-items: center;
`


const Exersise = styled.div`
    display: flex;
    width:200px;
    padding: 10px 20px;
    margin: 20px 0px;
    font: bold;
    font-size: 24px;
    cursor: pointer;
    :hover{
        transform: scale(1.05);
    }
`

function Home(){
    return (
        <>
            <Title name="Home"/>
            <Nav/>
            <HomeDiv>
                <LeftDiv>
                    <ExersiseDiv>
                        <Link to={"/exersise"}>
                            <Exersise>운동 게시판 <CgChevronRight /></Exersise>
                        </Link>
                        <EDiv style={{backgroundColor:"#9e9a9a"}}>
                            <ExersizeBigTitle>제목</ExersizeBigTitle>
                            <ExersiseDate>작성날짜</ExersiseDate>
                            <ExersiseWrite>작성자</ExersiseWrite>
                            <ExersiseView>조회수</ExersiseView>   
                        </EDiv>
                        {ex.map((x)=>(
                            <Link to={`/exersise/${x.id}`}  key={x.id}>
                                <EDiv>                    
                                    <ExersiseTitle>{x.title}</ExersiseTitle>
                                    <ExersiseDate>{x.writeDay}</ExersiseDate>
                                    <ExersiseWrite>{x.userId}</ExersiseWrite>
                                    <ExersiseView><CgEye style={{margin:"0px 3px 0px 5px"}}/>{x.views}</ExersiseView>
                                </EDiv>
                            </Link>
                           
                                             
                        ))}
                    </ExersiseDiv>
                    <ThreePowerDiv>3대력 게시판</ThreePowerDiv>
                </LeftDiv>
                <RightDiv>자유게시판</RightDiv>
            </HomeDiv>
            <Footer/>
        </>
    )
     
}

export default Home;