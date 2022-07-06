import styled from "styled-components";

export const ContentDiv = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ContentContainer = styled.div`
    width: 400px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ContainerTitle = styled.h3`
    font-weight: 700;
    font-size: ${(props) => props.theme.fontSizeH1};
    color: ${(props) => props.theme.fontColor};
`;
