import styled from "styled-components";
import Title from "../components/Title";
import Nav from "../components/Navigation/Nav";
import Footer from "../components/Footer/Footer";
import UserSignForm from "../components/Form/UserSignForm";

import {
    ContentDiv,
    ContentContainer,
    ContainerTitle,
} from "../components/Menu/MenuStyle";

import kakao from "../images/kakao.png";
import google from "../images/google.png";
import naver from "../images/naver.png";

const SignTab = styled.div`
    display: flex;
    margin-top: 28px;
    width: 100%;
`;

const SignTabItem = styled.div`
    flex: 1 1;
    font-size: ${(props) => props.theme.fontSizeH4};
    line-height: 47px;
    font-weight: 600;
    letter-spacing: 1px;
    text-align: center;
    border-bottom: pxsolidrgba (230, 234, 238, 0.6);
    text-transform: uppercase;
    cursor: pointer;
    color: ${(props) =>
        props.isActive
            ? props.theme.colorPointPupple200
            : props.theme.colorFontGrey100};
`;

const LoginType = styled.div`
    width: 100%;
`;
const SocailList = styled.ul`
    width: 100%;
    display: flex;
`;
const SocailItem = styled.li`
    background-color: tomato;
    padding: 8px;
    text-align: left;
    color: #fff;
    font-weight: 700;

    img {
        width: 44px;
        height: 44px;
    }
`;

function Sign() {
    return (
        <>
            <Title name="Sign" />
            <Nav />
            <ContentDiv>
                <ContentContainer>
                    <ContainerTitle>회원가입</ContainerTitle>
                    <SignTab>
                        <SignTabItem isActive={true}>이메일</SignTabItem>
                        <SignTabItem isActive={false}>소셜</SignTabItem>
                    </SignTab>
                    <LoginType>
                        <SocailList>
                            <SocailItem>
                                <a href="/#">
                                    <img src={naver} alt="네이버 로그인"></img>
                                </a>
                            </SocailItem>
                            <SocailItem>
                                <a href="/#">
                                    <img src={kakao} alt="카카오 로그인"></img>
                                </a>
                            </SocailItem>
                            <SocailItem>
                                <a href="/#">
                                    <img src={google} alt="구글 로그인"></img>
                                </a>
                            </SocailItem>
                        </SocailList>
                        <UserSignForm onSubmit={console.log}></UserSignForm>
                    </LoginType>
                </ContentContainer>
            </ContentDiv>
            <Footer />
        </>
    );
}

export default Sign;
