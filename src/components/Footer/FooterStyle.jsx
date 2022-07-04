import styled from "styled-components";

export const FootDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.theme.navBgColor};
`

export const FootItem = styled.div`
    width: 80px;
    height:80px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px 10px;
    border-radius: 50%;
`