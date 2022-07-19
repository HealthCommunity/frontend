import { WidthAreaSpace } from "../components/Layout/CommonLayout";
import Nav from "../components/Navigation/Nav";
import Title from "../components/Title";
import styled from "styled-components";


const IntroDiv = styled.div`
    box-sizing: border-box;
    margin-bottom: 50px;
    background-color: ${(props)=>props.theme.navBgColor};
`

function IntroducePage () {
    return(
        <>
            <Title name="Introduce" />
            <Nav/>
            <WidthAreaSpace>
              <IntroDiv>
              </IntroDiv>
            </WidthAreaSpace>
        </>
    )
}

export default IntroducePage