import React, { useState } from "react";
import styled from "styled-components";
import Title from "../utils/Title/Title";
import Nav from "../components/Navbar/index";
import UserSign from "../components/User/UserSign";
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

function Sign() {
    const [selected, setSelected] = useState("emaillogin");
    return (
        <>
            <Title name="Sign" />
            <Nav />
            <WidthAreaSpace>
                <ContentBackgroud>
                    <ContentContainer>
                        <LoginContainerArea>
                            <ContainerTitle>회원가입</ContainerTitle>
                            <SelectSNSTab
                                onChange={(name) => {
                                    setSelected(name);
                                }}
                                typeName={selected}
                            />
                            <Group selected={selected}>
                                <GroupItem name="emaillogin">
                                    <UserSign />
                                </GroupItem>

                                <GroupItem name="snslogin">
                                    <SnsLinkList style={{ height: "450px" }}>
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
                            </Group>
                        </LoginContainerArea>
                    </ContentContainer>
                </ContentBackgroud>
            </WidthAreaSpace>
        </>
    );
}

function Group({ children, selected }) {
    const elements = React.Children.toArray(children);
    return <>{elements.find(({ props }) => selected === props.name)}</>;
}

function GroupItem({ children }) {
    return <>{children}</>;
}

export default Sign;
