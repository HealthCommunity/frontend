import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import {FootBottomItem,FrontItem,BackItem,BackItemTitle,BackItemSubTitle} from './FooterStyle'
import styled from 'styled-components';
import { SiGithub , SiNotion} from "react-icons/si";

const BackItemButton = styled.button`
    background-color: ${(props)=>props.theme.navBgColor};
    width: 50%;
    font-size: ${(props)=>props.theme.fontSizeH4};
    height: 30px;
    margin: 0 auto;
    border :none;
    cursor: pointer;
    border-radius: ${(props)=>props.theme.radiusSize12};
    @media all and (min-width:480px) and (max-width:767px) {
        font-size: ${(props)=>props.theme.fontSizeH7};
    } 
    @media all and (max-width:479px) {
        font-size: ${(props)=>props.theme.fontSizeH7};
    }
`

const GitIcon =styled.div`
    width: 100px;
    height: 100px;
    font-size: 64px;
    margin: 0 auto;
    padding-top: 10px;
    border-radius: ${(props)=>props.theme.radiusSize50};
    :hover{
        transform: translateY(-5px);
        transition-duration: 1s;
    }
`


const BackLeft = styled.div`
    width: 200px;

`
const BackRight = styled.div`
    width: 200px;
    margin: 10px;
    border-radius: ${(props)=>props.theme.radiusSize12};
    background-color: ${(props)=>props.theme.colorPointPupple100};
    @media all and (min-width:480px) and (max-width:767px) {
        margin: 0px; 
    } 
    @media all and (max-width:479px) {
        margin: 0px;
    }
`

function FooterItem ({image, name, position,git}) {
    const [isflip , setIsFlip] = useState(false);
    const onClick= ()=>{
        setIsFlip((prev)=>!prev);
    }
    return (
        <FootBottomItem>
            <ReactCardFlip isFlipped={isflip}>
                <FrontItem onClick={onClick} image={`${image}`}/>
                <BackItem>
                    <BackLeft>
                        <BackItemTitle>{`${name}`}</BackItemTitle>
                        <BackItemSubTitle>{`( ${position} )`}</BackItemSubTitle>
                        <GitIcon>
                            <a href={`${git}`} target="_blank" rel="noreferrer"  >
                            <SiGithub/></a>
                        </GitIcon>
                    </BackLeft> 
                    <BackRight>
                        <BackItemSubTitle>프로젝트 역할</BackItemSubTitle>
                        <BackItemButton onClick={onClick}>Click Flip</BackItemButton>
                    </BackRight>
                </BackItem>
            </ReactCardFlip>
        </FootBottomItem>
    )
}

export default FooterItem;