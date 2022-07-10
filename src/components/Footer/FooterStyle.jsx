import styled from "styled-components";

export const FootDiv = styled.div`
    width: 100%;
    height: 300px;
    display: flex;
    border-radius: 5px;
    background-color: ${(props)=>props.theme.navBgColor};
    overflow: hidden;
    margin: 0 auto;
    padding-bottom: 30px;
    justify-content: center;
    align-items: center;
    @media all and (min-width:480px) and (max-width:767px) {
        flex-direction: column;
    } 
    @media all and (max-width:479px) {
        flex-direction: column;
    }
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


export const FootTop = styled.div`
    display: flex;
    margin : 0px 60px 0px 0px;
    flex-direction: column;
    @media all and (min-width:480px) and (max-width:767px) {
        flex-direction: row;
        margin : 0px 0px 30px 0px;
    } 
    @media all and (max-width:479px) {
        flex-direction: row;
        margin : 0px 0px 30px 0px;
    }
`

export const FootBottom = styled.div`
    display: flex;
    position: relative;
    height: 50%;
    width: 50%;
    justify-content: center;
    align-items: middle;
`

export const FootBottomItem = styled.div`
    height : 250px;
    padding: 20px;
    width: 450px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    opacity: 0.96;
    text-align: center;
    color:${(props)=>props.theme.fontColor};
    font-size: 16px;
    border-radius: 10px;
    box-sizing: border-box;
    @media all and (min-width:480px) and (max-width:767px) {
        height: 200px;
        width: 250px;
    } 
    @media all and (max-width:479px) {
        height: 200px;
        width: 250px;
    }
`

export const FrontItem =styled.div`
    width: 200px;
    height: 200px;
    margin: 0 auto;
    border-radius: 50%;
    background-position: center;
    background-size: cover;
    background-image: ${(props)=>props.image};
    cursor: pointer;
    :hover{
        transform: translateY(-5px);
        transition-duration: 1s;
    }
    @media all and (min-width:480px) and (max-width:767px) {
        width: 150px;
        height: 150px;
    } 
    @media all and (max-width:479px) {
        width: 150px;
    height: 150px;
    }
`

export const BackItem =styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    @media all and (min-width:480px) and (max-width:767px) {
        width: 230px;
        height: 150px;
    } 
    @media all and (max-width:479px) {
        width: 230px;
        height: 150px;
    }
`

export const BackItemTitle = styled.h4`
    font-size: ${(props)=>props.theme.fontSizeH3};
    font-weight: 600;
    margin: 10px 0px;
    @media all and (min-width:480px) and (max-width:767px) {
        font-size: ${(props)=>props.theme.fontSizeH5};
        margin-bottom: 5px;
    } 
    @media all and (max-width:479px) {
        font-size: ${(props)=>props.theme.fontSizeH5};
        margin-bottom: 5px;
    }
`
export const BackItemSubTitle= styled.h5`
    font-size: ${(props)=>props.theme.fontSizeH6};
    margin: 10px 0px;
    @media all and (min-width:480px) and (max-width:767px) {
        font-size: ${(props)=>props.theme.fontSizeH7};
        margin-bottom: 5px;
    } 
    @media all and (max-width:479px) {
        font-size: ${(props)=>props.theme.fontSizeH7};
        margin-bottom: 5px;
    }
`
