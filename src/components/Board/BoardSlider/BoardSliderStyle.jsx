import styled from 'styled-components';
export const BannerDiv = styled.div`
    width:500px;
    height:100px;
    border-radius: ${(props)=>props.theme.radiusSize16};
    padding:10px;
    display: flex;
    background-color: ${(props)=>props.color};
    box-shadow: ${(props)=>props.theme.shadowColor2};
    @media all and (min-width:480px) and (max-width:767px) {
        width:700px;
    } 
    @media all and (max-width:479px) {
        width:700px;
    }
`

export const BannerLeft = styled.div`
    width: 40%;
    display: flex;
    font-size:${(props)=>props.theme.fontSizeH3};
    font-weight: 600;
    justify-content: center;
    align-items: center;
    :hover{
        transform: scale(1.1);
        transition-duration: 1s;
    }
    @media all and (min-width:480px) and (max-width:767px) {
        font-size:${(props)=>props.theme.fontSizeH4};
        margin-right: 10px;
    } 
    @media all and (max-width:479px) {
        font-size:${(props)=>props.theme.fontSizeH4};
        margin-right: 10px;
    }
    
`

export const BannerRight= styled.div`
    width:60%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
export const BannerRightItemTitle= styled.div`
    font-size:${(props)=>props.theme.fontSizeH4};
    font-weight: 500;
    margin-bottom: 10px;
    @media all and (min-width:480px) and (max-width:767px) {
        font-size:${(props)=>props.theme.fontSizeH6};
        
    } 
    @media all and (max-width:479px) {
        font-size:${(props)=>props.theme.fontSizeH6};
    }
`

export const BannerRightItem =styled.div`
    font-size:${(props)=>props.theme.fontSizeH6};
    line-height: 1.5em;
    @media all and (min-width:480px) and (max-width:767px) {
        font-size:${(props)=>props.theme.fontSizeH7};
        
    } 
    @media all and (max-width:479px) {
        font-size:${(props)=>props.theme.fontSizeH7};
    }
`