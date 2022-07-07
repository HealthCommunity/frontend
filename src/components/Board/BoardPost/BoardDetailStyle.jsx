import styled from "styled-components";
export const InfoDiv =styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
    padding-top: 150px;
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
`

export const InfoTitleWrite = styled.div`
    font-size: ${(props)=>props.theme.fontSizeH2};
    text-align: center;
    margin: 0px 20px;
    color:#9c9c9e;
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
    margin: 100px 0px;
`

export const InfoCommentForm = styled.form`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 50px;
`

export const InfoCommentInputText = styled.input`
    border-radius: 20px;
    padding: 20px;
    width:100%;
    height: 150px;
    font-size: ${(props)=>props.theme.fontSizeH2};
    margin : 20px 0px;
`
export const InfoCommentInputSubmit =styled.input`
    display: flex;
    justify-content: center;
    font-size: 18px;
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
        color:${(props)=>props.theme.boxFontHoverColor}
}
`

export const CommentList =styled.div`
    width:1000px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
`

export const CommentListitem= styled.div`
    font-size: 24px;
`