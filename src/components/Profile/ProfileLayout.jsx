import styled from "styled-components";

export const ProfileBackgroud = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    padding-top: 150px;
    margin-bottom: 150px;
`;

export const ProfileContainer = styled.section`
    width: 970px;
    height: 500px;

    @media all and (min-width: 480px) and (max-width: 767px) {
        font-size: ${(props) => props.theme.fontSizeH4};
        width: 90%;
    }
    @media all and (max-width: 479px) {
        font-size: ${(props) => props.theme.fontSizeH4};
        width: 90%;
    }
`;

export const ProfileContainerMyInfo = styled.section`
    box-sizing: border-box;
    width: 100%;
    margin: 0 auto;
    padding: 32px;
    border-radius: ${(props) => props.theme.radiusSize20};
    box-shadow: ${(props) => props.theme.shadowColor};

    @media all and (min-width: 480px) and (max-width: 767px) {
        padding: 24px 8px;
    }
    @media all and (max-width: 479px) {
        font-size: ${(props) => props.theme.fontSizeH4};
        padding: 24px 8px;
    }
`;

export const ProfileContainerCenter = styled.section`
    box-sizing: border-box;
    width: 470px;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding: 20px;

    @media all and (min-width: 480px) and (max-width: 767px) {
        width: 90%;
    }
    @media all and (max-width: 479px) {
        width: 90%;
    }
`;
