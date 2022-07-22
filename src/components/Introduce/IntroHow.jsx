import { IntroHowDiv,IntroSeparateHowH1,IntroSeparateHowDiv,IntroHowLink,IntroSeparateHowItem,IntroHowFont } from "./IntroStyle/IntroHowStyle";
import {FaGithub} from 'react-icons/fa';
import { SiNotion,SiReact,SiJavascript,SiJava,SiStyledcomponents,SiAmazonaws, SiGithub } from "react-icons/si";
import { IntroLink } from "../../Routes/IntroducePage";
import { IntroTitle } from "./IntroStyle/IntroduceStyle";
function IntroHow (){
    return (
        <>
            <IntroTitle>How we Make?</IntroTitle>
            <IntroSeparateHowH1>제작과정은 GitHub 와 Notion을 참조해주세요</IntroSeparateHowH1>
            <IntroHowLink>
                <IntroLink href="https://github.com/HealthCommunity" target="_blank">
                    <FaGithub style={{margin:"0 50px", width: "200px", height: "200px"}}/>
                </IntroLink>
                <IntroLink href="https://www.notion.so/d5155ebe8e9c46578afcc8b29addb88c" target="_blank">
                    <SiNotion style={{margin:"0 50px", width: "200px", height: "200px"}}/>
                </IntroLink>
            </IntroHowLink>
            <IntroHowDiv>
                <IntroSeparateHowDiv>
                    <IntroSeparateHowH1>Front Dev Skills</IntroSeparateHowH1>
                    <IntroSeparateHowItem>
                        <IntroHowFont><SiReact/></IntroHowFont>
                        <IntroHowFont><SiJavascript/></IntroHowFont>
                        <IntroHowFont style={{fontSize:"24px"}}>Recoil</IntroHowFont>
                        <IntroHowFont><SiStyledcomponents/></IntroHowFont>
                        <IntroHowFont style={{fontSize:"24px"}}>Axios</IntroHowFont>
                    </IntroSeparateHowItem>
                </IntroSeparateHowDiv>
                <IntroSeparateHowDiv>
                    <IntroSeparateHowH1>Back Dev Skills</IntroSeparateHowH1>
                    <IntroSeparateHowItem>
                        <IntroHowFont><SiJava/></IntroHowFont>
                        <IntroHowFont><SiAmazonaws/></IntroHowFont>
                    </IntroSeparateHowItem>
                </IntroSeparateHowDiv>
                <IntroSeparateHowDiv>
                    <IntroSeparateHowH1>Common Tools</IntroSeparateHowH1>
                    <IntroSeparateHowItem>
                        <IntroHowFont><SiNotion/></IntroHowFont>
                        <IntroHowFont><SiGithub/></IntroHowFont>
                    </IntroSeparateHowItem>
                </IntroSeparateHowDiv>
            </IntroHowDiv>
        </>
    )
}

export default IntroHow