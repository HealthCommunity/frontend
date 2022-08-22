import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProfileSelector from "./ProfileSelector";
import {
  ProfileContainer,
  ProfileMyinfo,
  ProfileMyInfoGroup,
  MyInfoId,
  MyInfoNickname,
} from "./ProfileLayout";
import UserModify from "./UserModify";
import BoardFetchItems from "../../components/Board/View/BoardFetchItems";
import useUserData from "../../api/useUserData";
import UserPowerChart from "./UserPowerChart";

function SelectGroup({ children, selected }) {
  const elements = React.Children.toArray(children);
  return <>{elements.find(({ props }) => selected === props.name)}</>;
}

function SlectItem({ children }) {
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
      <SelectGroup selected={selected}>
        <SlectItem name="profile">
          <ProfileMyinfo>
            <ProfileMyInfoGroup>
              <UserPowerChart PowerData={myPowerData}></UserPowerChart>
              <MyInfoId>{loginId}</MyInfoId>
              <MyInfoNickname>{nickName}</MyInfoNickname>
            </ProfileMyInfoGroup>
          </ProfileMyinfo>
          <BoardFetchItems category={"user"} />
        </SlectItem>
        <SlectItem name="profileModify">
          <UserModify loginId={loginId}></UserModify>
        </SlectItem>
      </SelectGroup>
    </ProfileContainer>
  );
}
