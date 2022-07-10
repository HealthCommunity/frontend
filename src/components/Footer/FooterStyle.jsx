import styled from "styled-components";

export const FootDiv = styled.div`
    width: 100%;
    height: 300px;
    display: flex;
    border-radius: 5px;
    background-color: ${(props)=>props.theme.navBgColor};
    overflow: hidden;
    margin: 0 auto;
    padding-bottom: 30px;
    justify-content: center;
    align-items: center;
    @media all and (min-width:480px) and (max-width:767px) {
        flex-direction: column;
    } 
    @media all and (max-width:479px) {
        flex-direction: column;
    }
`

export const FootItem = styled.div`
    width: 100px;
    height:100px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px 10px;
    border-radius: 50%;
    color: ${(props)=>props.theme.constPointWhite100};
    font-weight: 600;
`

