import styled from "styled-components";
export const LeftBtn =styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    padding: 0px 20px;
    cursor: pointer;
    :hover{
        transform: scale(1.05);
        background-color: ${(props)=>props.theme.bgColorSub};
        box-shadow: ${(props)=>props.theme.shadowColor};
    }
`

export const LeftBtnLogo = styled.div`
    width: 20%;
    text-align: center;
    font-size: ${(props)=>props.theme.fontSizeH2};
    padding-left: 20px;
    width:35%;
    @media all and (min-width:480px) and (max-width:767px) {
        margin-right: 5px;
    } 
    @media all and (max-width:479px) {
        margin-right: 5px;
    }
`
export const LeftBtnSummary = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    padding: 20px 0px 20px 0px;
`

export const LeftBtnSummaryH4 =styled.h4`
    font-weight: 600;
    margin: 10px 0px;
    font-size: ${(props)=>props.theme.fontSizeH4};
    @media all and (min-width:480px) and (max-width:767px) {
        line-height: 1.2em;
        text-align: center;
    } 
    @media all and (max-width:479px) {
        line-height: 1.2em;
        text-align: center;
    }
`

export const LeftBtnSummaryH5 =styled.h5`
    line-height: 2em;
    color: ${(props)=>props.theme.colorFontGrey100};
    font-size: ${(props)=>props.theme.fontSizeH5};
    @media all and (min-width:480px) and (max-width:767px) {
        display:none;
    } 
    @media all and (max-width:479px) {
        display:none;
    }
`


export const LeftDivArrow =styled.div`
    @media all and (min-width:480px) and (max-width:767px) {
        display:none;
    } 
    @media all and (max-width:479px) {
        display:none;
    }
`