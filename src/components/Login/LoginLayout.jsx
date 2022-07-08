import styled from "styled-components";

//콘텐츠 가로100, 세로 100, 전체 영역
export const ContentBackgroud = styled.div`
    box-sizing: border-box;
    padding-top: 150px;
    width: 100vw;
    height: 100vh;
    @media all and (min-width: 480px) and (max-width: 767px) {
        margin-bottom: 150px;
    }
    @media all and (max-width: 479px) {
        margin-bottom: 150px;
    }
`;

//콘텐츠 영역 중 가운데 세로 전체 영역
//여기서 실제 사용할 수 있는 가로 크기 잡음
export const ContentContainer = styled.div`
    width: 470px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;

    @media all and (min-width: 480px) and (max-width: 767px) {
        width: 90%;
    }
    @media all and (max-width: 479px) {
        width: 90%;
    }
`;

//타이틀, sns nav, form, 버튼 감싸는 영역
export const LoginContainerArea = styled.div`
    display: block;
    width: 90%;
    margin: 0 auto;
`;

export const UserFormGroup = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ContainerTitle = styled.h3`
    font-weight: 700;
    font-size: ${(props) => props.theme.fontSizeH1};
    color: ${(props) => props.theme.fontColor};
    text-align: center;
`;
