// react hook , react
import React, { useState } from "react";
// recoil ( 상태관리 )

// react library

// styled-components , Style Files
import { WidthAreaSpace } from "../styles/Layout/Layout";

// Components
import Nav from "../components/Navbar/index";
import UserLogin from "../components/User/UserLogin";
import {
  SnsSelectTab,
  SNSGroup,
  GroupItem,
} from "../components/User/SnsLogin/SnsSelectTab";
import {
  ContentBackgroud,
  ContentContainer,
  LoginContainerArea,
} from "../components/User/LoginStyle";

import { SnsLogin } from "../components/User/SnsLogin/SnsLogin";

// Icons , Images

// Share , Utils
import Title from "../utils/Title/Title";

export default function Login() {
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
                text={"로그인"}
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
