import React, { useEffect, useState } from "react";
import useUserData from "../../api/useUserData";
import { ProfileSelector, SelectGroup, SlectItem } from "./ProfileSelector";
import UserModify from "./UserModify";
import BoardFetchItems from "../../components/Board/BoardFetchItems";
import UserPowerChart from "./UserPowerChart";
import {
  ProfileMyinfo,
  ProfileTopWapper,
  ProfileMyInfoGroup,
  MyInfoId,
  MyInfoNickname,
  MyInfoIdGroup,
  UserModifyButton,
} from "./ProfileStyle";

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
