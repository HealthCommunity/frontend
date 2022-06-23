import styled from "styled-components";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Title from "../funcskills/title";

const HomeDiv = styled.div`
    padding-top: 150px;
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
    width:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
`

const ThreePowerDiv= styled.div`
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    width:100%;
    
`

function Home(){
    return (
        <>
            <Title name="Home"/>
            <Nav/>
            <HomeDiv>
                <LeftDiv>
                    <ExersiseDiv>운동게시판</ExersiseDiv>
                    <ThreePowerDiv>3대력 게시판</ThreePowerDiv>
                </LeftDiv>
                <RightDiv>자유게시판</RightDiv>
            </HomeDiv>
            <Footer/>
        </>
    )
     
}

export default Home;