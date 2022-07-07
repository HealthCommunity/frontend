import styled from "styled-components";
export const InfoDiv =styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
    padding-top: 150px;
    @media all and (min-width: 480px) and (max-width: 767px) {
        padding: 150px 20px 0px 20px;
        
    }
    @media all and (max-width: 479px) {
        padding: 150px 20px 0px 20px;
        
    }
`
export const InfoTitleDiv =styled.div`
    display: flex;
    margin-bottom: 50px;
`

export const InfoTitle = styled.div`
    font-size: 64px;
    color:${(props)=>props.theme.fontColor};
    font-weight: bold;
    margin-bottom: 50px;
    background-color: ${(props)=>props.theme.infoBgColor};
    @media all and (min-width: 480px) and (max-width: 767px) {
        font-size: ${(props)=>props.theme.fontSizeH1};
        line-height: 1.5em;
    }
    @media all and (max-width: 479px) {
        font-size: ${(props)=>props.theme.fontSizeH1};
        line-height: 1.5em;
    }
`

export const InfoTitleWrite = styled.div`
    font-size: ${(props)=>props.theme.fontSizeH2};
    text-align: center;
    margin: 0px 20px;
    color:#9c9c9e;
    @media all and (min-width: 480px) and (max-width: 767px) {
        font-size: ${(props)=>props.theme.fontSizeH4};
    }
    @media all and (max-width: 479px) {
        font-size: ${(props)=>props.theme.fontSizeH4};
    }
`

export const InfoExplanationDiv = styled.div`
    display: flex;
    justify-content: center;
    width:80%;
    flex-direction: column;
    align-items: center;
`

export const InfoExplanationTitle =styled.div`
    font-size: ${(props)=>props.theme.fontSizeH1};
    font-weight: bold;
    color:${(props)=>props.theme.fontColor};
    background-color: ${(props)=>props.theme.infoBgColor};
    margin: 40px 0px;
    @media all and (min-width: 480px) and (max-width: 767px) {
        font-size: ${(props)=>props.theme.fontSizeH2};
    }
    @media all and (max-width: 479px) {
        font-size: ${(props)=>props.theme.fontSizeH2};
    }
`

export const InfoCommentForm = styled.form`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 30px;
`

export const InfoCommentInputText = styled.input`
    border-radius: 20px;
    padding: 20px;
    width:50vw;
    height: 100px;
    font-size: ${(props)=>props.theme.fontSizeH2};
    margin : 20px 0px;
    @media all and (min-width: 480px) and (max-width: 767px) {
        font-size: ${(props)=>props.theme.fontSizeH4};
        width:60vw;
        height: 25px;
    }
    @media all and (max-width: 479px) {
        font-size: ${(props)=>props.theme.fontSizeH4};
        width:60vw;
        height: 25px;
    }
`
export const InfoCommentInputSubmit =styled.input`
    display: flex;
    justify-content: center;
    font-size: ${(props)=>props.theme.fontSizeH2};
    padding: 1px 6px;
    margin: 25px 0px 15px 0px;
    align-items: center;
    width:150px;
    height: 70px;
    border: 1px solid #dcdde1;
    border-radius: 10px;
    cursor: pointer;
    background-color: ${(props)=>props.theme.bgColor};
    :hover{
        transform: scale(1.05);
        background-color: ${(props)=>props.theme.underLineColor};
        color:${(props)=>props.theme.boxFontHoverColor};
}
    @media all and (min-width: 480px) and (max-width: 767px) {
        font-size: ${(props)=>props.theme.fontSizeH4};
        width:150px;
        height: 40px;
        margin: 15px 0px;
    }
    @media all and (max-width: 479px) {
        font-size: ${(props)=>props.theme.fontSizeH4};
        width:150px;
        height: 40px;
        margin: 15px 0px;
    }
`

export const CommentList =styled.div`
    width:1000px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 100px;
`

export const BoardSummary = styled.div`
    width:60%;
    margin: 0 auto;
    background-color: ${(props)=>props.theme.navBgColor};
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${(props)=>props.theme.fontSizeH2};
    border-radius:  ${(props)=>props.theme.radiusSize20};
    box-shadow: ${(props)=>props.theme.shadowColor};
    @media all and (min-width: 480px) and (max-width: 767px) {
        font-size: ${(props)=>props.theme.fontSizeH4};
        width:80%;
        height: 200px;
    }
    @media all and (max-width: 479px) {
        font-size: ${(props)=>props.theme.fontSizeH4};
        width:80%;
        height: 200px;
    }
`

export const CommentListitem= styled.div`
    font-size: ${(props)=>props.theme.fontSizeH2};
    margin: 20px 0px;
    @media all and (min-width: 480px) and (max-width: 767px) {
        font-size: ${(props)=>props.theme.fontSizeH4};
        margin: 15px 0px;
    }
    @media all and (max-width: 479px) {
        font-size: ${(props)=>props.theme.fontSizeH4};
        margin: 15px 0px;
    }
`
