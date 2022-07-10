import styled from "styled-components";

export const FootDiv = styled.div`
    width: 100%;
    height: 300px;
    display: flex;
    border-radius: 5px;
    background-color: ${(props)=>props.theme.navBgColor};
    overflow: hidden;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`

export const FootItem = styled.div`
    width: 100px;
    height:100px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px 10px;
    border-radius: 50%;
    color: ${(props)=>props.theme.constPointWhite100};
    font-weight: 600;
`

