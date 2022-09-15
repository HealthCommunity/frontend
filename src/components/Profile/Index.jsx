// react hook , react
import React, { useEffect, useState } from "react";

// recoil ( 상태관리 )
import useUserData from "../../api/useUserData";

// react library

// styled-components , Style Files
import styled from "styled-components";

// Components
import { ProfileSelector, SelectGroup, SlectItem } from "./ProfileSelector";
import UserModify from "./UserModify";
import BoardFetchItems from "../Board/BoardFetchItems";
import UserPowerChart from "./UserPowerChart";

// Icons , Images

// Share , Utils

export default function ProfileContnet() {
  const [selected, setSelected] = useState("profile");
  const [userData, reFetch] = useUserData(); //로그인 상태 유저 데이터 가져옴

  useEffect(() => {
    reFetch();
  }, [reFetch]);

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
    <>
      <ProfileSelector
        onChange={(name) => {
          setSelected(name);
        }}
        typeName={selected}
      />
      <SelectGroup selected={selected}>
        <SlectItem name="profile">
          <ProfileTopWapper>
            <ProfileMyinfo>
              <ProfileMyInfoGroup>
                <UserPowerChart PowerData={myPowerData}></UserPowerChart>
                <MyInfoIdGroup>
                  <MyInfoId>
                    {loginId.includes("_") ? loginId.split("_")[0] : loginId}
                  </MyInfoId>
                  <MyInfoNickname>{nickName}</MyInfoNickname>
                  <UserModifyButton
                    onClick={() => {
                      setSelected("profileModify");
                    }}
                  >
                    정보수정
                  </UserModifyButton>
                </MyInfoIdGroup>
              </ProfileMyInfoGroup>
            </ProfileMyinfo>
          </ProfileTopWapper>
          <BoardFetchItems category={"user"} />
        </SlectItem>

        <SlectItem name="profileModify">
          <ProfileTopWapper>
            <UserModify loginId={loginId}></UserModify>
          </ProfileTopWapper>
        </SlectItem>
      </SelectGroup>
    </>
  );
}

const ProfileTopWapper = styled.div`
  width: 100%;
  height: 440px;
`;

const ProfileMyinfo = styled.div`
  width: 470px;
  height: 100%;
  box-sizing: border-box;
  margin: 0 auto;
`;

const ProfileMyInfoGroup = styled.div`
  display: flex;
  width: 100%;
  padding-top: 16px;
`;

const MyInfoIdGroup = styled.div`
  margin: auto 0;
  margin-left: 10px;
`;

const MyInfoId = styled.span`
  font-size: 28px;
  line-height: 36px;
  text-align: center;
  color: ${(props) => props.theme.reverseFontColor};
`;

const MyInfoNickname = styled.span`
  font-size: 16px;
  line-height: 24px;
  margin-left: 12px;
  color: #888888;
`;

const UserModifyButton = styled.div`
  margin-top: 10px;
  font-size: 16px;
  line-height: 24px;
  color: #0066ff;
`;
