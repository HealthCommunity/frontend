import styled from "styled-components"
const SummaryDiv= styled.div`
    width:90%;
    display: flex;
    margin: 0px 20px;
    align-items: center;
    text-align: center;
    height: 30px;
    justify-content: center;
    
`

const SummaryFontDiv = styled.div`
    @media all and (min-width:480px) and (max-width:767px) {
        font-size: 10px;
    } 
    @media all and (max-width:479px) {
        font-size: 10px;
    }
`

const SummaryTitle = styled(SummaryFontDiv)`
    width:52%;  
    @media all and (min-width:480px) and (max-width:767px) {
        width:65%;
    } 
    @media all and (max-width:479px) {
        width:65%;
    }
      
`
const SummaryDate = styled(SummaryFontDiv)`
    width:15%;
    @media all and (min-width:480px) and (max-width:767px) {
        width:30%;
    } 
    @media all and (max-width:479px) {
        width:30%;
    }
`
const SummaryWrite = styled(SummaryFontDiv)`
    width:19%; 
    @media all and (min-width:480px) and (max-width:767px) {
        width:14%;
    } 
    @media all and (max-width:479px) {
        
        width:14%;
    }
`
const SummaryView = styled(SummaryFontDiv)`
    width:14%;
    @media all and (min-width:480px) and (max-width:767px) {
        width: 20%;
    } 
    @media all and (max-width:479px) {
        
        width: 20%;
    }
`

function Summary(){
    return (
        <SummaryDiv style={{backgroundColor:"#9e9a9a"}}>
            <SummaryTitle>제목</SummaryTitle>
            <SummaryDate>작성날짜</SummaryDate>
            <SummaryWrite>작성자</SummaryWrite>
            <SummaryView>조회수</SummaryView>   
        </SummaryDiv>
    )
}

export default Summary