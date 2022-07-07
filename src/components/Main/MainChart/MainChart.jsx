import styled from "styled-components"

const MainChartDiv= styled.div`
    width:100%;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${(props)=>props.theme.fontSizeH1};
    background-color: ${(props)=>props.theme.navBgColor};
`

function MainChart (){
    return (
        <MainChartDiv>
            삼대력 차트 구현
        </MainChartDiv>
    )
}

export default MainChart