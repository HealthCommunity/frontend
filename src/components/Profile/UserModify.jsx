import React, { useState } from "react";
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
import UserDropOut from "./UserDropOut";

const UserModifyFrom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function ContentUserModify(loginId) {
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

  const checkValidityPassword = (password) => {
    if (password.length < 8) {
      return [false, "비밀번호 8~16자, 숫자, 문자, 특수문자입니다."];
    } else if (password.length > 16) {
      return [false, "비밀번호 8~16자, 숫자, 문자, 특수문자입니다."];
    } else {
      if (isRulePassword(password)) {
        return [true, "사용 가능 비밀번호입니다."];
      }
      return [false, "유효하지 않은 비밀번호입니다."];
    }
  };

  const checkDoublePassword = (password) => {
    if (password !== usrInputs.password) {
      return [false, "비밀번호가 일치하지 않습니다."];
    } else {
      return [true, "동일한 비밀번호입니다."];
    }
  };

  const checkValidityNickname = (nickname) => {
    if (nickname.length < 2) {
      return [false, "닉네임은 2~10자 문자입니다."];
    } else if (nickname.length > 10) {
      return [false, "닉네임은 2~10자 문자입니다."];
    } else {
      if (isRuleNick(nickname)) {
        return [true, "올바른 닉네임입니다."];
      }
      return [false, "유효하지 않는 닉네임입니다."];
    }
  };

  const isRulePassword = (asValue) => {
    const regExp =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;
    return regExp.test(asValue);
  };

  const isRuleNick = (asValue) => {
    const regExp = /^[a-zA-Zㄱ-힣][a-zA-Zㄱ-힣 ]*$/;
    return regExp.test(asValue);
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
          console.log(response);
          console.log("정보 수정이 완료되었습니다.");
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
