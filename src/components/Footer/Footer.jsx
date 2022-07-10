import {FootDiv,FootItem} from './FooterStyle'
import { SiGithub , SiNotion} from "react-icons/si";
import styled from 'styled-components';

const FootTop = styled.div`
    display: flex;
`

const FootBottom = styled.div`
    display: flex;
    
`

const FootBottomTitle = styled.div`
    color:${(props)=>props.theme.fontColor};
`

function Footer() {
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
                <FootBottomTitle>ChangJun Choi</FootBottomTitle>
                <FootBottomTitle>Songhee Park</FootBottomTitle>
                <FootBottomTitle>Hoonhee Park</FootBottomTitle>
                <FootBottomTitle>Jihoon Lee</FootBottomTitle>
            </FootBottom>
        </FootDiv>
    )
}

export default Footer;