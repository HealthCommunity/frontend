import styled from "styled-components";
export const LeftBtn =styled.div`
    width:70%;
    display: flex;
    align-items: center;
    padding: 0px 10px;
    cursor: pointer;
    border-radius: ${(props)=>props.theme.radiusSize16};
    box-shadow: ${(props)=>props.border};
    @media all and (min-width:480px) and (max-width:767px) {
        flex-direction: column;
        padding: 0px ;
        margin-bottom: 15px;
    } 
    @media all and (max-width:479px) {
        flex-direction: column;
        padding: 0px ;
        margin-bottom: 15px;
    }
`

export const LeftBtnLogo = styled.div`
    width: 20%;
    text-align: center;
    font-size: ${(props)=>props.theme.fontSizeH1};
    padding-left: 20px;
    width:35%;
    @media all and (min-width:480px) and (max-width:767px) {
        margin-right: 5px;
        font-size: ${(props)=>props.theme.fontSizeH2};
        padding-left: 0px;
        padding-top: 5px;
    } 
    @media all and (max-width:479px) {
        margin-right: 5px;
        padding-top: 5px;
        font-size: ${(props)=>props.theme.fontSizeH2};
        padding-left: 0px;
    }
`
export const LeftBtnSummary = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    padding: 20px 0px 20px 0px;
    @media all and (min-width:480px) and (max-width:767px) {
        padding: 5px 0px 5px 0px;
    } 
    @media all and (max-width:479px) {
        padding: 5px 0px 5px 0px;
    }
`

export const LeftBtnSummaryH4 =styled.h4`
    font-weight: 600;
    margin: 10px 0px;
    font-size: ${(props)=>props.theme.fontSizeH5};
    @media all and (min-width:480px) and (max-width:767px) {
        line-height: 1.2em;
        text-align: center;
        font-size: ${(props)=>props.theme.fontSizeH7};
    } 
    @media all and (max-width:479px) {
        line-height: 1.2em;
        text-align: center;
        font-size: ${(props)=>props.theme.fontSizeH7};
    }
`

export const LeftBtnSummaryH5 =styled.h5`
    line-height: 2em;
    color: ${(props)=>props.theme.colorFontGrey100};
    font-size: ${(props)=>props.theme.fontSizeH6};
    @media all and (min-width:480px) and (max-width:767px) {
        display:none;
    } 
    @media all and (max-width:479px) {
        display:none;
    }
`


export const LeftDivArrow =styled.div`
    margin-left: 10px;
    @media all and (min-width:480px) and (max-width:767px) {
        display:none;
    } 
    @media all and (max-width:479px) {
        display:none;
    }
`