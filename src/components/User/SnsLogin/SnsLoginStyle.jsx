import styled from "styled-components";

export const SelectTabBar = styled.div`
    display: flex;
    margin-top: 28px;
    width: 100%;
    background-color: tomato;
`;

export const SelectTabItem = styled.div`
    flex: 1 1;
    font-size: ${(props) => props.theme.fontSizeH4};
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
    text-align: center;
    cursor: pointer;
    font-weight: ${(props) => (props.isActive ? 700 : 400)};
    color: ${(props) =>
        props.isActive
            ? props.theme.colorPointPupple200
            : props.theme.colorFontGrey100};
    a {
        display: block;
    }
`;

export const SnsLinkList = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const SnsLinkItem = styled.li`
    img {
        width: 100%;
        height: 70px;
    }
`;

export const RowGroup = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    margin-top: 32px;
`;
