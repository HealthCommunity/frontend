import React, { useState } from "react";
import Title from "../utils/Title/Title";
import Nav from "../components/Navbar/index";
import UserSign from "../components/User/UserSign";
import {
  SnsSelectTab,
  SNSGroup,
  GroupItem,
} from "../components/User/SnsLogin/SnsSelectTab";
import { WidthAreaSpace } from "../styles/Layout/Layout";
import { SnsLogin } from "../components/User/SnsLogin/SnsLogin";
import {
  ContentBackgroud,
  ContentContainer,
  LoginContainerArea,
} from "../components/User/LoginStyle";

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

export default Sign;
