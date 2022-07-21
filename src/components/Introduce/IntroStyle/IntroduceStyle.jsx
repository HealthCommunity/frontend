import styled from "styled-components"

export const IntroDiv = styled.div`
    box-sizing: border-box;
    
`
export const SeparateIntroDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 100px 0px;
` 

export const IntroTitle = styled.div`
    font-weight: 700;
    font-size: ${(props)=>props.theme.fontSizeH0};
    line-height: 1.5em;
    margin-bottom: 60px;
`

export const IntroSubTitle = styled.div`
    width: 70%;
    text-align: center;
    font-size: ${(props)=>props.theme.fontSizeH3};
    letter-spacing: 0.05em;
    line-height: 2em;
`
