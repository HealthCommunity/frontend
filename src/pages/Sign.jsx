// react hook , react
import React, { useState } from "react";
// recoil ( 상태관리 )

// react library

// styled-components , Style Files
import { WidthAreaSpace } from "../styles/Layout/Layout";

// Components
import Nav from "../components/Navbar/index";
import UserSign from "../components/User/UserSign";
import {
  SnsSelectTab,
  SNSGroup,
  GroupItem,
} from "../components/User/SnsLogin/SnsSelectTab";
import { SnsLogin } from "../components/User/SnsLogin/SnsLogin";
import {
  ContentBackgroud,
  ContentContainer,
  LoginContainerArea,
} from "../components/User/LoginStyle";

// Icons , Images

// Share , Utils
import Title from "../utils/Title/Title";

export default function Sign() {
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
                text={"가입"}
              />
              <SNSGroup selected={selected}>
                <GroupItem name="emaillogin">
                  <UserSign />
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
