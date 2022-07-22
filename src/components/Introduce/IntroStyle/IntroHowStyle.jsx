import styled from "styled-components"
export const IntroHowDiv = styled.div`
    display: flex;
`

export const IntroSeparateHowH1 = styled.h1`
    font-size: ${(props)=>props.theme.fontSizeH2};
    margin-bottom: 20px;
`

export const IntroSeparateHowDiv = styled.div`
    margin : 0px 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const IntroHowLink = styled.div`
    margin-bottom: 100px;
`

export const IntroSeparateHowItem = styled.div`
    width: 80%;
    height: 200px;
    text-align: center;
`

export const IntroHowFont = styled.h1`
    margin: 10px 0px;
    font-size: ${(props)=>props.theme.fontSizeH2};
`