import styled from "styled-components";

const FooterItemDiv =styled.div`
    height : 150px;
    padding: 20px;
    width: 350px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.96;
    text-align: center;
    color:${(props)=>props.theme.fontColor};
    font-size: 16px;
    border-radius: 10px;
    box-sizing: border-box;
    @media all and (min-width:480px) and (max-width:767px) {
        height: 150px;
        width: 200px;
    } 
    @media all and (max-width:479px) {
        height: 150px;
        width: 200px;
    }
`

const LeftDiv = styled.div`
    width: 50%;
`

const RightDiv = styled.div`
    width: 50%;
`

const RigntDivH3 = styled.h3`
    font-size: ${(props)=>props.theme.fontSizeH3};
    margin-bottom: 15px;
    font-weight: 600;
    @media all and (min-width:480px) and (max-width:767px) {
        font-size: ${(props)=>props.theme.fontSizeH6};
        margin-bottom: 5px;
    } 
    @media all and (max-width:479px) {
        font-size: ${(props)=>props.theme.fontSizeH6};
        margin-bottom: 5px;
    }
`

const RightDivH4 = styled.h4`
    font-size: ${(props)=>props.theme.fontSizeH4};
    line-height: 1.5em;
    @media all and (min-width:480px) and (max-width:767px) {
        font-size: ${(props)=>props.theme.fontSizeH7};
        
    } 
    @media all and (max-width:479px) {
        font-size: ${(props)=>props.theme.fontSizeH7};
        
    }
`

const LeftItem =styled.div`
    width: 100px;
    height: 100px;
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
        width: 80px;
        height: 80px;
    } 
    @media all and (max-width:479px) {
        width: 80px;
    height: 80px;
    }
`

function FooterItemTitle ({image,name,position}){
    return (
        <FooterItemDiv>
            <LeftDiv>
                <LeftItem image={`${image}`}/>
            </LeftDiv>
            <RightDiv>
                <RigntDivH3>{`${name}`}</RigntDivH3>
                <RightDivH4>{` ${position} `}</RightDivH4>
            </RightDiv>
        </FooterItemDiv>
    )
}

export default FooterItemTitle;