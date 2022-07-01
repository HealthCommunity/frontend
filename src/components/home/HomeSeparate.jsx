import styled from "styled-components";
export const HomeDiv = styled.div`
    padding-top: 100px;
    width:100%;
    display: flex;
    height:100vh;
    @media all and (min-width:480px) and (max-width:767px) {
       flex-direction: column;
    }
    @media all and (max-width:479px) {
        flex-direction: column;
    }

`

export const LeftDiv =styled.div`
    width:50%;
    display: flex;
    height:100%;
    margin: 0 auto;
    flex-direction: column;
    border-right: 1px solid grey;
    @media all and (min-width:480px) and (max-width:767px) {
        width: 90%;
        border-right: none;
      
    } 
    @media all and (max-width:479px) {
        width: 90%;
      
        border-right: none;
    }
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
