import styled from "styled-components";
export const RightDivItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 200px;
    border-radius: ${(props) => props.theme.radiusSize20};
    flex-direction: column;
    cursor: pointer;
    :hover {
        transform: scale(1.03);
        background-color: ${(props) => props.theme.bgColorSub};
        box-shadow: ${(props) => props.theme.shadowColor};
    }
    @media all and (min-width: 480px) and (max-width: 767px) {
        width: 160px;
        height: 160px;
        padding: 10px;
    }
    @media all and (max-width: 479px) {
        width: 160px;
        height: 160px;
        padding: 10px;
    }
`;

export const RightItemTitle = styled.h3`
    font-size: ${(props) => props.theme.fontSizeH4};
    font-weight: 500;
    text-align: center;
    margin: 15px 0px;
    @media all and (min-width: 480px) and (max-width: 767px) {
        font-size: ${(props) => props.theme.fontSizeH6};
    }
    @media all and (max-width: 479px) {
        font-size: ${(props) => props.theme.fontSizeH6};
    }
`;

export const RightItemSeparate = styled.div`
    display: flex;
`;

export const RightItemComments = styled.div`
    font-size: ${(props) => props.theme.fontSizeH5};
    margin: 0px 5px;
    display: flex;
    @media all and (min-width: 480px) and (max-width: 767px) {
        font-size: ${(props) => props.theme.fontSizeH8};
        margin: 0 auto;
    }
    @media all and (max-width: 479px) {
        font-size: ${(props) => props.theme.fontSizeH8};
        margin: 0 auto;
    }
`;
export const RightItemViews = styled.div`
    display: flex;
    font-size: ${(props) => props.theme.fontSizeH5};
    margin: 0px 5px;
    @media all and (min-width: 480px) and (max-width: 767px) {
        font-size: ${(props) => props.theme.fontSizeH8};
    }
    @media all and (max-width: 479px) {
        font-size: ${(props) => props.theme.fontSizeH8};
    }
`;
