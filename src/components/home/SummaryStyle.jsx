import styled from "styled-components"
const SummaryDiv= styled.div`
    width:90%;
    display: flex;
    align-items: center;
    text-align: center;
    height: 30px;
    margin:0% 5%;
`

const SummaryTitle = styled.div`
    width:50%;
`
const SummaryDate = styled.div`
    width:20%;
`
const SummaryWrite = styled.div`
    width:14%; 
`
const SummaryView = styled.div`
    width:13%;
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