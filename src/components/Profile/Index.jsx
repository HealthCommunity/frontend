import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProfileNav from "./ProfileNav";
import { ProfileContainer, ProfileContainerMyInfo } from "./ProfileLayout";
import UserModify from "./UserModify";
import BoardFetchItems from "../../components/Board/View/BoardFetchItems";
import useUserData from "../../api/useUserData";
import MyPowerChart from "./MyPowerChart";

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
      <ProfileNav
        onChange={(name) => {
          setSelected(name);
        }}
        typeName={selected}
      />
      <Group selected={selected}>
        <GroupItem name="profile">
          <ProfileContainerMyInfo>
            <ProfileContent>
              <MyPowerChart PowerData={myPowerData}></MyPowerChart>
              <MyInfoId>{loginId}</MyInfoId>
              <MyInfoNickname>{nickName}</MyInfoNickname>
            </ProfileContent>
          </ProfileContainerMyInfo>

          <BoardFetchItems category={"user"} />
        </GroupItem>
        <GroupItem name="profileModify">
          <UserModify loginId={loginId}></UserModify>
        </GroupItem>
      </Group>
    </ProfileContainer>
  );
}

const ProfileContent = styled.div`
  display: flex;
  margin: auto;
`;

const MyInfoId = styled.span`
  font-family: "GangwonEduPower";
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 36px;
  text-align: center;
  color: #222222;
`;

const MyInfoNickname = styled.span`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #888888;
`;
