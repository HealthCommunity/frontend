import {FootDiv,FootItem} from './FooterStyle'
import { SiGithub , SiNotion} from "react-icons/si";
import styled from 'styled-components';
import ReactCardCarousel from "react-card-carousel";
import ReactCardFlip from 'react-card-flip';
import { useState } from 'react';

const FootTop = styled.div`
    display: flex;
    margin-bottom: 30px;

`

const FootBottom = styled.div`
    display: flex;
    position: relative;
    height: 50%;
    width: 50%;
    justify-content: center;
    align-items: middle;
`

const FootBottomItem = styled.div`
    height: 200px;
    width: 200px;
    padding-top: 10px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
    text-align: center;
    color:${(props)=>props.theme.fontColor};
    font-size: 16px;
    border-radius: 10px;
    box-sizing: border-box;
`

const FrontItem =styled.div`
    width: 150px;
    height: 150px;
    margin: 0 auto;
    border-radius: 50%;
    background-position: center;
    background-size: cover;
    background-image: ${(props)=>props.image};
`

const BackItem =styled.div`
    display: flex;
    flex-direction: column;
    width: 150px;
    height: 150px;
    justify-content: center;
`

const BackItemTitle = styled.h4`
    font-size: ${(props)=>props.theme.fontSizeH4};
    font-weight: 600;
    margin: 5px 0px;
`
const BackItemSubTitle= styled.h5`
    font-size: ${(props)=>props.theme.fontSizeH6};
    margin: 5px 0px;
`

function Footer() {
    const [isflip , setIsFlip] = useState(false);
    const onClick= ()=>{
        setIsFlip((prev)=>!prev);
    }
    return (
        <FootDiv>
            <FootTop>
                <a href="https://www.notion.so/SpringBoot-JPA-1-db69d2f168ef4a16b4f8668fcb3d70da" target="_blank" rel="noreferrer">
                    <FootItem>
                        <SiNotion size="32px" style={{fill:"white" , marginRight: "10px"}}/>
                        Notion
                    </FootItem>
                </a>
                <a href="https://github.com/HealthCommunity" target="_blank" rel="noreferrer">
                    <FootItem>
                        <SiGithub size="32px" style={{fill:"white" , marginRight: "10px"}}/>
                        GitHub
                    </FootItem>
                </a>
            </FootTop>
            <FootBottom>
                <ReactCardCarousel autoplay={true}  spread={"wide"}>
                    <FootBottomItem>
                        <ReactCardFlip isFlipped={isflip}>
                            <FrontItem onClick={onClick} image={"url('https://avatars.githubusercontent.com/u/86876414?s=120&v=4')"}/>
                            <BackItem>
                                <BackItemTitle>Park Song Hee</BackItemTitle>
                                <BackItemSubTitle>Front-End Dev</BackItemSubTitle>
                                <button onClick={onClick}>Click Flip</button>
                            </BackItem>
                        </ReactCardFlip>
                    </FootBottomItem>
                    <FootBottomItem>
                        <ReactCardFlip isFlipped={isflip}>
                            <FrontItem onClick={onClick} image={"url('https://avatars.githubusercontent.com/u/58128623?v=4')"}/>
                            <BackItem>
                                <BackItemTitle>Choi Chang Jun</BackItemTitle>
                                <BackItemSubTitle>Back-End Dev</BackItemSubTitle>
                                <button onClick={onClick}>Click Flip</button>
                            </BackItem>
                        </ReactCardFlip>
                    </FootBottomItem>
                    <FootBottomItem>
                        <ReactCardFlip isFlipped={isflip}>
                            <FrontItem onClick={onClick} image={"url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRqRsuxt-PLyLh5fO0NoikjwsL5U5d3cAVzFCTBas5xmkqi35QXrMDSy_VdSfmHXv9Hho&usqp=CAU')"}/>
                            <BackItem>
                                <BackItemTitle>Park Hun Hee</BackItemTitle>
                                <BackItemSubTitle>Back-End Dev</BackItemSubTitle>
                                <button onClick={onClick}>Click Flip</button>
                            </BackItem>
                        </ReactCardFlip>
                    </FootBottomItem>
                    <FootBottomItem>
                        <ReactCardFlip isFlipped={isflip}>
                            <FrontItem onClick={onClick} image={"url('https://avatars.githubusercontent.com/u/94469974?v=4')"}/>
                            <BackItem>
                                <BackItemTitle>Lee Ji Hoon</BackItemTitle>
                                <BackItemSubTitle>Front-End Dev</BackItemSubTitle>
                                <button onClick={onClick}>Click Flip</button>
                            </BackItem>
                        </ReactCardFlip>
                    </FootBottomItem>
                </ReactCardCarousel>
            </FootBottom>
        </FootDiv>
    )
}

export default Footer;