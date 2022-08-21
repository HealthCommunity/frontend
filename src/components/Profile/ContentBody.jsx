import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProfileNav from "./ProfileNav";
import { ProfileContainer, ProfileContainerMyInfo } from "./ProfileLayout";
import ContentUserModify from "./ContentUserModify";
import ContentUserDropOut from "./ContentUserDropOut";
import BoardFetchItems from "../../components/Board/View/BoardFetchItems";
import useUserData from "../../api/useUserData";
import ProfileChart from "./ProfileChart";

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
            {!!userData && (
              <ProfileContent>
                <ProfileChart PowerData={myPowerData}></ProfileChart>
                <div>{loginId}</div>
                <div>{nickName}</div>
              </ProfileContent>
            )}
          </ProfileContainerMyInfo>

          <>{!!userData && <BoardFetchItems category={"user"} />}</>
        </GroupItem>
        <GroupItem name="profileModify">
          {!!userData && (
            <ContentUserModify loginId={loginId}></ContentUserModify>
          )}
        </GroupItem>
        {/* <GroupItem name="userDropOut">
          {!!userData && (
            <ContentUserDropOut loginId={loginId}></ContentUserDropOut>
          )}
        </GroupItem> */}
      </Group>
    </ProfileContainer>
  );
}

export const ProfileContent = styled.div`
  display: flex;
  margin: auto;
`;
