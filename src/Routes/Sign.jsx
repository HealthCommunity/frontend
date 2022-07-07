import React, { useState } from "react";
import styled from "styled-components";
import Title from "../components/Title";
import Nav from "../components/Navigation/Nav";
import Footer from "../components/Footer/Footer";
import UserSignForm from "../components/Form/UserSignForm";
import SnsNav from "../components/Login/SnsNav";

import {
    ContentDiv,
    ContentContainer,
    ContainerTitle,
} from "../components/Menu/MenuStyle";

import kakao from "../images/kakao.png";
import google from "../images/google.png";
import naver from "../images/naver.png";

const SingGroup = styled.div`
    height: 420px;
`;

const SocailList = styled.ul`
    width: 100%;
    height: 420px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const SocailItem = styled.li`
    img {
        width: 380px;
        height: 70px;
    }
`;

function Sign() {
    const [selected, setSelected] = useState("emaillogin");
    return (
        <>
            <Title name="Sign" />
            <Nav />
            <ContentDiv>
                <ContentContainer>
                    <ContainerTitle>회원가입</ContainerTitle>
                    <SnsNav
                        onChange={(name) => {
                            setSelected(name);
                        }}
                        typeName={selected}
                    />
                    <Group selected={selected}>
                        <GroupItem name="emaillogin">
                            <SingGroup>
                                <UserSignForm
                                    onSubmit={console.log}
                                ></UserSignForm>
                            </SingGroup>
                        </GroupItem>

                        <GroupItem name="snslogin">
                            <SocailList>
                                <SocailItem>
                                    <a href="/#">
                                        <img
                                            src={naver}
                                            alt="네이버 로그인"
                                        ></img>
                                    </a>
                                </SocailItem>
                                <SocailItem>
                                    <a href="/#">
                                        <img
                                            src={kakao}
                                            alt="카카오 로그인"
                                        ></img>
                                    </a>
                                </SocailItem>
                                <SocailItem>
                                    <a href="/#">
                                        <img
                                            src={google}
                                            alt="구글 로그인"
                                        ></img>
                                    </a>
                                </SocailItem>
                            </SocailList>
                        </GroupItem>
                    </Group>
                </ContentContainer>
            </ContentDiv>
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
