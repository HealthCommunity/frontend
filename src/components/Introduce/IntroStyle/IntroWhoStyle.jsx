import styled from "styled-components"
export const IntroWhoDiv = styled.div`
    display: flex;
    width: 90%;
    
    :nth-child(odd){
        justify-content: flex-end;
    }
`

export const IntroWhoImage = styled.div`
    background-image: url(${(props)=>props.bgImage});
    background-position: center;
    background-size: cover;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin-right: 50px;
`
export const IntroWhoTItle= styled.h1`
    font-size: ${(props)=>props.theme.fontSizeH2};
    margin : 20px 0px;
    font-weight: bold;
`

export const IntroWhoSubTitle = styled.h2`
    font-size: ${(props)=>props.theme.fontSizeH4};
    margin: 10px 0px;
`