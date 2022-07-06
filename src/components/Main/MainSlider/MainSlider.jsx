import styled from "styled-components"

const MainSliderDiv= styled.div`
    width:100%;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${(props)=>props.theme.fontSizeH1};
    background-color: ${(props)=>props.theme.navBgColor};
`

function MainSlider (){
    return (
        <MainSliderDiv>
            인기 인증 사진 슬라이더 영역
        </MainSliderDiv>
    )
}

export default MainSlider