// react hook , react
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// recoil ( 상태관리 )
import useUserData from "../../api/useUserData";

// react library
import axios from "axios";

// styled-components , Style Files
import styled from "styled-components";
import {
  UserFormGroup,
  InputTextLabel,
  InputTextGroup,
} from "../User/LoginStyle";

// Components
import InputTextDesc from "../User/InputTextDesc";
import UserDropOut from "./UserDropOut";

// Icons , Images

// Share , Utils
import {
  checkValidityPassword,
  checkDoublePassword,
  checkValidityNickname,
} from "../../utils/User/userValidation";
import userLogout from "../../utils/User/userLogout";
import Button from "../../share/Button";

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
              reFetch();
              navigate("/login");
            },
            onError: (error) => {
              reFetch();
              alert("정보 수정이 실패했습니다.");
            },
          });
        })
        .catch((error) => {
          alert("정보 수정이 실패했습니다.");
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
              onValidation={(value) => checkDoublePassword(value, password)}
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

const ProfileMyinfo = styled.div`
  box-sizing: border-box;
  width: 470px;
  height: 100%;
  margin: 0 auto;
`;
