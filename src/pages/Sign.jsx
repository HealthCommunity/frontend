import React, { useState } from "react";
import styled from "styled-components";
import Title from "../utils/Title/Title";
import Nav from "../components/Navbar/index";
import UserSign from "../components/User/UserSign";
import { SnsSelectTab } from "../components/User/SnsLogin/SnsSelectTab";
import { WidthAreaSpace } from "../styles/Layout/CommonLayout";
import { SnsLogin } from "../components/User/SnsLogin/SnsLogin";
import {
    ContentBackgroud,
    ContentContainer,
    LoginContainerArea,
} from "../components/User/LoginLayout";

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
                            <SnsSelectTab
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
                                    <SnsLogin />
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
