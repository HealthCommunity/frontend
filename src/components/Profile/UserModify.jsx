import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import InputTextDesc from "../User/InputTextDesc";
import {
  UserFormGroup,
  InputTextLabel,
  InputTextGroup,
} from "../User/LoginLayout";
import { ProfileMyinfo } from "./ProfileLayout";
import axios from "axios";
import Button from "../common/Button";
import userLogout from "../../utils/User/userLogout";
import useUserData from "../../api/useUserData";
import UserDropOut from "./UserDropOut";
import {
  checkValidityPassword,
  checkValidityNickname,
} from "../../utils/User/userValidation";

export default function ContentUserModify(loginId) {
  const [, reFetch] = useUserData();
  const navigate = useNavigate();
  const [usrInputs, setUsrInputs] = useState({
    password: "",
    checkPassword: "",
    nickname: "",
  });

  const { password, checkPassword, nickname } = usrInputs;

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUsrInputs({
      ...usrInputs,
      [name]: value,
    });
  };

  const checkDoublePassword = (password) => {
    if (password !== usrInputs.password) {
      return [false, "비밀번호가 일치하지 않습니다."];
    } else {
      return [true, "동일한 비밀번호입니다."];
    }
  };

  if (!loginId) {
    alert("로그인 id가 없습니다!");
    return <></>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      checkValidityPassword(password)[0] &&
      checkDoublePassword(password, checkPassword)[0] &&
      checkValidityNickname(nickname)[0]
    ) {
      const myData = {
        loginId: loginId.loginId,
        password: password,
        nickName: nickname,
      };

      axios
        .post("/api/user/edit", myData, {
          withCredentials: true,
          credentials: "include",
        })
        .then((response) => {
          alert("정보 수정이 완료되었습니다. 다시 로그인해주세요.");
          userLogout({
            onSuccess: (response) => {
              console.log("로그아웃 성공");
              reFetch();
              navigate("/login");
            },
            onError: (error) => {
              reFetch();
              console.log("로그아웃 실패", error);
            },
          });
        })
        .catch((error) => {
          console.log("정보수정 실패", error);
        });
    }
  };
  return (
    <ProfileMyinfo>
      <UserModifyFrom>
        <UserFormGroup onSubmit={handleSubmit}>
          <InputTextGroup>
            <InputTextLabel>비밀번호</InputTextLabel>
            <InputTextDesc
              type="password"
              name="password"
              placeholder="비밀번호"
              onChange={handleChange}
              onValidation={checkValidityPassword}
              required
            />

            <InputTextDesc
              type="password"
              name="checkPassword"
              placeholder="비밀번호 확인"
              onChange={handleChange}
              onValidation={checkDoublePassword}
              required
            />
          </InputTextGroup>
          <InputTextGroup>
            <InputTextLabel>닉네임</InputTextLabel>
            <InputTextDesc
              type="text"
              name="nickname"
              placeholder="닉네임"
              onChange={handleChange}
              onValidation={checkValidityNickname}
              required
            />
          </InputTextGroup>
          <Button size="lg" type="submit">
            변경하기
          </Button>
          <UserDropOut />
        </UserFormGroup>
      </UserModifyFrom>
    </ProfileMyinfo>
  );
}

const UserModifyFrom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
