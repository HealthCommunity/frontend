import styled from "styled-components";
export const HomeDiv = styled.div`
    padding-top: 100px;
    width:100%;
    display: flex;
    grid-template-columns: 1fr;
    height:100vh;
`

export const LeftDiv =styled.div`
    width:50%;
    display: flex;
    height:100%;
    flex-direction: column;
    border-right: 1px solid grey;
`

export const RightDiv =styled.div`
    width:50%;
    height: 100%;
    border-bottom: 1px solid black;
    align-items: center;
    overflow-x: hidden;
    overflow-y: scroll;
`

export const ExersiseDiv =styled.div`
    height: 50%;
    border-bottom: 1px solid black;
    align-items: center;
    overflow-x: hidden;
    overflow-y: scroll;
`

export const ThreePowerDiv= styled.div`
   height: 50%;
    border-bottom: 1px solid black;
    align-items: center;
    overflow-x: hidden;
    overflow-y: scroll; 
`
