import styled from "styled-components"
export const RightDivItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width:250px;
    height:250px;   
    border-radius: ${(props)=>props.theme.radiusSize20};
    flex-direction: column;
    cursor: pointer;
    :hover{
        transform: scale(1.03);
        background-color: ${(props)=>props.theme.bgColorSub};
        box-shadow: ${(props)=>props.theme.shadowColor};
    }
`

export const RightItemTitle =styled.h3`
    font-size: ${(props)=>props.theme.fontSizeH3};
    font-weight: 500;
    text-align: center;
    margin: 15px 0px;
`

export const RightItemSeparate=styled.div`
    display: flex;
`

export const RightItemComments = styled.div`
    font-size: ${(props)=>props.theme.fontSizeH4};
    margin: 0px 5px;
    display: flex;
`
export const RightItemViews = styled.div`
    display: flex;
    font-size: ${(props)=>props.theme.fontSizeH4};
    margin: 0px 5px;
`