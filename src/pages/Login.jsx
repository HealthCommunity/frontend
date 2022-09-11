import React, { useState } from "react";
import Title from "../utils/Title/Title";
import Nav from "../components/Navbar/index";
import UserLogin from "../components/User/UserLogin";
import {
  SnsSelectTab,
  SNSGroup,
  GroupItem,
} from "../components/User/SnsLogin/SnsSelectTab";
import { WidthAreaSpace } from "../styles/Layout/Layout";

import {
  ContentBackgroud,
  ContentContainer,
  LoginContainerArea,
} from "../components/User/LoginStyle";

import { SnsLogin } from "../components/User/SnsLogin/SnsLogin";

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

export default Login;
