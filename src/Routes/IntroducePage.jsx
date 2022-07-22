import { WidthAreaSpace } from "../components/Layout/CommonLayout";
import Nav from "../components/Navigation/Nav";
import Title from "../components/Title";
import styled from "styled-components";
import { IntroDiv,SeparateIntroDiv,IntroTitle,IntroSubTitle } from "../components/Introduce/IntroStyle/IntroduceStyle";

import IntroWho from "../components/Introduce/IntroWho";
import IntroHow from "../components/Introduce/IntroHow";


export const IntroLink = styled.a`
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
                    <IntroHow/>
                </SeparateIntroDiv>
                <SeparateIntroDiv>
                    <IntroWho/>
                </SeparateIntroDiv>
              </IntroDiv>
            </WidthAreaSpace>
        </>
    )
}

export default IntroducePage