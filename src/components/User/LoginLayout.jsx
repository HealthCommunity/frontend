import styled from "styled-components";

//콘텐츠 가로100, 세로 100, 전체 영역
export const ContentBackgroud = styled.div`
    box-sizing: border-box;
    width: 100%;
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
    width: 450px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;

    @media all and (min-width: 480px) and (max-width: 767px) {
        width: 100%;
    }
    @media all and (max-width: 479px) {
        width: 100%;
    }
`;

//타이틀, sns nav, form, 버튼 감싸는 영역
export const LoginContainerArea = styled.div`
    display: block;
    width: 100%;
    margin: 0 auto;
`;

export const UserFormGroup = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 1px 2px 16px rgba(0, 0, 0, 0.16);
    border-radius: 8px;
    padding: 32px;
`;

export const ContainerTitle = styled.h3`
    font-weight: 700;
    font-size: ${(props) => props.theme.fontSizeH1};
    color: ${(props) => props.theme.fontColor};
    text-align: center;
`;

export const InputTextLabel = styled.div`
    font-weight: 700;
    width: 100%;
    font-size: 16px;
    line-height: 24px;
`;

export const InputTextGroup = styled.div`
    width: 100%;
    margin-bottom: 14px;
`;
