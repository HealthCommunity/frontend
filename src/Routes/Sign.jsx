import React, { useState } from "react";
import styled from "styled-components";
import Title from "../components/Title";
import Nav from "../components/Navigation/Nav";
import Footer from "../components/Footer/Footer";
import UserSignForm from "../components/Form/UserSignForm";
import { SnsNav, SnsList, SnsItem } from "../components/Login/SnsNav";
import { WidthAreaSpace } from "../components/Layout/CommonLayout";

import {
    ContentBackgroud,
    ContentContainer,
    ContainerTitle,
    LoginContainerArea,
} from "../components/Login/LoginLayout";

import kakao from "../images/kakao.png";
import google from "../images/google.png";
import naver from "../images/naver.png";

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
                            <SnsNav
                                onChange={(name) => {
                                    setSelected(name);
                                }}
                                typeName={selected}
                            />
                            <Group selected={selected}>
                                <GroupItem name="emaillogin">
                                    <UserSignForm
                                        onSubmit={console.log}
                                    ></UserSignForm>
                                </GroupItem>

                                <GroupItem name="snslogin">
                                    <SnsList style={{ height: "450px" }}>
                                        <SnsItem>
                                            <a href="/#">
                                                <img
                                                    src={naver}
                                                    alt="네이버 로그인"
                                                ></img>
                                            </a>
                                        </SnsItem>
                                        <SnsItem>
                                            <a href="/#">
                                                <img
                                                    src={kakao}
                                                    alt="카카오 로그인"
                                                ></img>
                                            </a>
                                        </SnsItem>
                                        <SnsItem>
                                            <a href="/#">
                                                <img
                                                    src={google}
                                                    alt="구글 로그인"
                                                ></img>
                                            </a>
                                        </SnsItem>
                                    </SnsList>
                                </GroupItem>
                            </Group>
                        </LoginContainerArea>
                    </ContentContainer>
                </ContentBackgroud>
            </WidthAreaSpace>
            <Footer />
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
