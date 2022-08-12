import React, { useState } from "react";
import Title from "../utils/Title/Title";
import Nav from "../components/Navbar/index";
import UserLogin from "../components/User/UserLogin";
import {
    SelectSNSTab,
    SnsLinkList,
    SnsLinkItem,
} from "../components/User/SelectSNSTab";
import { WidthAreaSpace } from "../styles/Layout/CommonLayout";

import {
    ContentBackgroud,
    ContentContainer,
    ContainerTitle,
    LoginContainerArea,
} from "../components/User/LoginLayout";

import kakao from "../assets/images/kakao.png";
import google from "../assets/images/google.png";
import naver from "../assets/images/naver.png";

function Login() {
    const [selected, setSelected] = useState("emaillogin");
    return (
        <>
            <Title name="Login" />
            <Nav />
            <WidthAreaSpace>
                <ContentBackgroud>
                    <ContentContainer>
                        <LoginContainerArea>
                            <ContainerTitle>로그인</ContainerTitle>
                            <SelectSNSTab
                                onChange={(name) => {
                                    setSelected(name);
                                }}
                                typeName={selected}
                            />
                            <SNSGroup selected={selected}>
                                <GroupItem name="emaillogin">
                                    <UserLogin />
                                </GroupItem>
                                <GroupItem name="snslogin">
                                    <SnsLinkList style={{ height: "300px" }}>
                                        <SnsLinkItem>
                                            <a href="/#">
                                                <img
                                                    src={naver}
                                                    alt="네이버 로그인"
                                                ></img>
                                            </a>
                                        </SnsLinkItem>
                                        <SnsLinkItem>
                                            <a href="/#">
                                                <img
                                                    src={kakao}
                                                    alt="카카오 로그인"
                                                ></img>
                                            </a>
                                        </SnsLinkItem>
                                        <SnsLinkItem>
                                            <a href="/#">
                                                <img
                                                    src={google}
                                                    alt="구글 로그인"
                                                ></img>
                                            </a>
                                        </SnsLinkItem>
                                    </SnsLinkList>
                                </GroupItem>
                            </SNSGroup>
                        </LoginContainerArea>
                    </ContentContainer>
                </ContentBackgroud>
            </WidthAreaSpace>
        </>
    );
}

function SNSGroup({ children, selected }) {
    const elements = React.Children.toArray(children);
    return <>{elements.find(({ props }) => selected === props.name)}</>;
}

function GroupItem({ children }) {
    return <>{children}</>;
}

export default Login;
