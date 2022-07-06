import styled from "styled-components";
export const HomeDiv = styled.div`
    width:100%;
    display: flex;
    height:100vh;

`

export const LeftDiv =styled.div`
    width:35%;
    display: flex;
    height:100%;
    margin: 0 auto;
    flex-direction: column;

`

export const RightDiv =styled.div`
    width:65%;
    height: 100%;
    border-bottom: 1px solid black;
    align-items: center;
    overflow-x: hidden;
    overflow-y: scroll;
    @media all and (min-width:480px) and (max-width:767px) {
       display: none;
    }
    @media all and (max-width:479px) {
        display: none;
    }
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
