import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProfileSelector from "./ProfileSelector";
import {
  ProfileContainer,
  ProfileContainerCenter,
  ProfileContent,
  MyInfoId,
  MyInfoNickname,
} from "./ProfileLayout";
import UserModify from "./UserModify";
import BoardFetchItems from "../../components/Board/View/BoardFetchItems";
import useUserData from "../../api/useUserData";
import UserPowerChart from "./UserPowerChart";

function Group({ children, selected }) {
  const elements = React.Children.toArray(children);
  return <>{elements.find(({ props }) => selected === props.name)}</>;
}

function GroupItem({ children }) {
  return <>{children}</>;
}

export default function ContentBody() {
  const [selected, setSelected] = useState("profile");
  const [userData, reFetch] = useUserData(); //로그인 상태 유저 데이터 가져옴

  useEffect(() => {
    reFetch();
  }, []);

  if (!userData) {
    return <></>;
  }

  const { nickName, loginId, bigThreePower } = userData;
  const myPowerData = [
    bigThreePower.bench,
    bigThreePower.dead,
    bigThreePower.squat,
    bigThreePower.sum,
  ];

  return (
    <ProfileContainer>
      <ProfileSelector
        onChange={(name) => {
          setSelected(name);
        }}
        typeName={selected}
      />
      <Group selected={selected}>
        <GroupItem name="profile">
          <ProfileContainerCenter>
            <ProfileContent>
              <UserPowerChart PowerData={myPowerData}></UserPowerChart>
              <MyInfoId>{loginId}</MyInfoId>
              <MyInfoNickname>{nickName}</MyInfoNickname>
            </ProfileContent>
          </ProfileContainerCenter>

          <BoardFetchItems category={"user"} />
        </GroupItem>
        <GroupItem name="profileModify">
          <UserModify loginId={loginId}></UserModify>
        </GroupItem>
      </Group>
    </ProfileContainer>
  );
}
