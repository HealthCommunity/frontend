import styled from "styled-components";
export const MainTitle =styled.div`
    margin: 0 auto;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const MainTitleH1 = styled.h1`
    font-size: ${(props)=>props.theme.fontSizeH0};
    margin: 10px 0px;
    font-weight: 600;
    @media all and (min-width:480px) and (max-width:767px) {
        font-size: ${(props)=>props.theme.fontSizeH0}; 

    } 
    @media all and (max-width:479px) {
    font-size: ${(props)=>props.theme.fontSizeH0}; 

    }
`
export const MainTitleH4 =styled.div`
    text-align: center;
    font-size: ${(props)=>props.theme.fontSizeH5};
    width:350px;
    margin: 10px;
    animation: typing 3s steps(22), blink .7s step-end infinite alternate;
    white-space: nowrap;
    overflow: hidden;
    border-right: 3px solid;
    @keyframes typing {
    from {
        width: 0
    }
    }
        
    @keyframes blink {
    50% {
        border-color: transparent
    }
    }

`