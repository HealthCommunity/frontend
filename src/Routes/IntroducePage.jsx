import { WidthAreaSpace } from "../components/Layout/CommonLayout";
import Nav from "../components/Navigation/Nav";
import Title from "../components/Title";
import styled from "styled-components";
import {FaGithub} from 'react-icons/fa';
import { SiNotion } from "react-icons/si";

const IntroDiv = styled.div`
    box-sizing: border-box;
    
`
const SeparateIntroDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 100px 0px;
` 

const IntroTitle = styled.div`
    font-weight: 700;
    font-size: ${(props)=>props.theme.fontSizeH0};
    line-height: 1.5em;
    margin-bottom: 60px;
`

const IntroSubTitle = styled.div`
    width: 70%;
    text-align: center;
    font-size: ${(props)=>props.theme.fontSizeH3};
    letter-spacing: 0.05em;
    line-height: 2em;
`

const IntroHowDiv = styled.div`
    display: flex;
`

const IntroSeparateHowH1 = styled.h1`
    font-size: ${(props)=>props.theme.fontSizeH2};
    margin-bottom: 20px;
`

const IntroSeparateHowDiv = styled.div`
    margin : 0px 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const IntroHowLink = styled.div`
    margin-bottom: 30px;
`

const IntroSeparateHowItem = styled.div`
    width: 80%;
    height: 200px;
    text-align: center;
`

const IntroHowFont = styled.h1`
    margin: 10px 0px;
    font-size: ${(props)=>props.theme.fontSizeH4};
`

const IntroWhoDiv = styled.div`
    display: flex;
    width: 90%;
    
    :nth-child(odd){
        justify-content: flex-end;
    }
`

const IntroWhoImage = styled.div`
    background-image: url(${(props)=>props.bgImage});
    background-position: center;
    background-size: cover;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin-right: 50px;
`
const IntroWhoTItle= styled.h1`
    font-size: ${(props)=>props.theme.fontSizeH2};
    margin : 20px 0px;
    font-weight: bold;
`

const IntroWhoSubTitle = styled.h2`
    font-size: ${(props)=>props.theme.fontSizeH4};
    margin: 10px 0px;
`
const IntroLink = styled.a`
    svg{
        margin-top: 10px;
        width: 50px;
        height: 50px;
        :hover{
            transform: scale(1.1);
            transition-duration: 1s;
        }
    }
    
`

function IntroducePage () {
    return(
        <>
            <Title name="Introduce" />
            <Nav/>
            <WidthAreaSpace>
              <IntroDiv>
                <SeparateIntroDiv>
                    <IntroTitle>Why We Make?</IntroTitle>
                    <IntroSubTitle>
                        운동 정보를 어디서 찾을 수 있을까? <br/>
                        다른 사람들은 어떻게 운동하고 있을까? <br/>
                        끊임없는 물음표를 느낌표로 만들기 위해 <br/>
                        Okky 커뮤니티에서 만나 매주 회의와 피드백을 통해 <br/>
                        다른사람과 운동에 대한 경험과 정보를 공유하고, 평가받을 수 있는 <br/>
                        운동으로 하나가 되는 커뮤니티를 만들게 되었습니다
                    </IntroSubTitle>
                </SeparateIntroDiv>
                <SeparateIntroDiv>
                    <IntroTitle>How we Make?</IntroTitle>
                    <IntroHowLink>
                        <IntroLink href="https://github.com/HealthCommunity" target="_blank">
                            <FaGithub style={{margin: "0px 20px"}}/>
                        </IntroLink>
                        <IntroLink href="https://www.notion.so/d5155ebe8e9c46578afcc8b29addb88c" target="_blank">
                            <SiNotion style={{margin: "0px 20px"}}/>
                        </IntroLink>
                    </IntroHowLink>
                    <IntroHowDiv>
                        <IntroSeparateHowDiv>
                            <IntroSeparateHowH1>Front Dev Skills</IntroSeparateHowH1>
                            <IntroSeparateHowItem>
                                <IntroHowFont>React</IntroHowFont>
                                <IntroHowFont>JavaScript</IntroHowFont>
                                <IntroHowFont>Recoil</IntroHowFont>
                                <IntroHowFont>Styled-Components</IntroHowFont>
                                <IntroHowFont>Axios</IntroHowFont>
                            </IntroSeparateHowItem>
                        </IntroSeparateHowDiv>
                        <IntroSeparateHowDiv>
                            <IntroSeparateHowH1>Back Dev Skills</IntroSeparateHowH1>
                            <IntroSeparateHowItem>
                                <IntroHowFont>Java</IntroHowFont>
                                <IntroHowFont>Amazon S3</IntroHowFont>
                            </IntroSeparateHowItem>
                        </IntroSeparateHowDiv>
                        <IntroSeparateHowDiv>
                            <IntroSeparateHowH1>Common Tools</IntroSeparateHowH1>
                            <IntroSeparateHowItem>
                                <IntroHowFont>Notion</IntroHowFont>
                                <IntroHowFont>GitHub</IntroHowFont>
                            </IntroSeparateHowItem>
                        </IntroSeparateHowDiv>
                    </IntroHowDiv>
                </SeparateIntroDiv>
                <SeparateIntroDiv>
                    <IntroTitle>Who made it?</IntroTitle>
                        <IntroWhoDiv>
                            <IntroWhoImage bgImage={"https://avatars.githubusercontent.com/u/86876414?v=4"}/>
                            <div>
                                <IntroWhoTItle>Park Song Hee</IntroWhoTItle>
                                <IntroWhoSubTitle>Front End Develope</IntroWhoSubTitle>
                                <h3>역할 : </h3>
                                <IntroLink href="https://github.com/pasong0511" target="_blank"><FaGithub/></IntroLink>
                            </div>
                        </IntroWhoDiv>
                        <IntroWhoDiv>
                            <IntroWhoImage bgImage={"https://t1.daumcdn.net/cfile/tistory/231EB44C56E0F2811B"}/>
                            <div>
                                <IntroWhoTItle>Park Hoon Hee</IntroWhoTItle>
                                <IntroWhoSubTitle>Back End Develope</IntroWhoSubTitle>
                                <h3>역할 : </h3>
                                <IntroLink href="https://github.com/qkrgnsgml" target="_blank"><FaGithub/></IntroLink>
                            </div>
                        </IntroWhoDiv>
                        <IntroWhoDiv>
                            <IntroWhoImage bgImage={"https://avatars.githubusercontent.com/u/94469974?v=4"}/>
                            <div>
                                <IntroWhoTItle>Lee Ji Hoon</IntroWhoTItle>
                                <IntroWhoSubTitle>Front End Develope</IntroWhoSubTitle>
                                <h3>역할 : </h3>
                                <IntroLink href="https://github.com/jiji-hoon96" target="_blank"><FaGithub/></IntroLink>
                            </div>
                        </IntroWhoDiv>
                        <IntroWhoDiv>
                            <IntroWhoImage bgImage={"https://avatars.githubusercontent.com/u/58128623?v=4"}/>
                            <div>
                                <IntroWhoTItle>Choi Chang Jun</IntroWhoTItle>
                                <IntroWhoSubTitle>Back End Develope</IntroWhoSubTitle>
                                <h3>역할 : </h3>
                                <IntroLink href="https://github.com/changjun6518" target="_blank"><FaGithub/></IntroLink>
                            </div>
                        </IntroWhoDiv>
                </SeparateIntroDiv>
              </IntroDiv>
            </WidthAreaSpace>
        </>
    )
}

export default IntroducePage