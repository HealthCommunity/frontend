import React, { useState } from "react";
import Title from "../utils/Title/Title";
import Nav from "../components/Navbar/index";
import UserLogin from "../components/User/UserLogin";
import {
    SnsSelectTab,
    SnsLinkList,
    SnsLinkItem,
} from "../components/User/SnsLogin/SnsSelectTab";
import { WidthAreaSpace } from "../styles/Layout/CommonLayout";

import {
    ContentBackgroud,
    ContentContainer,
    ContainerTitle,
    LoginContainerArea,
} from "../components/User/LoginLayout";

import { SnsLogin } from "../components/User/SnsLogin/SnsLogin";

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
                            <SnsSelectTab
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
                                    <SnsLogin />
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
