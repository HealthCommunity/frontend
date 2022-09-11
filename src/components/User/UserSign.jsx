import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import InputTextDesc from "./InputTextDesc";
import {
  UserFormGroup,
  InputTextLabel,
  InputTextGroup,
  TextLabel,
  CheckInput,
  LinkGroup,
} from "./LoginStyle";
import Button from "../../share/Button";
import {
  checkValidityId,
  checkValidityPassword,
  checkDoublePassword,
  checkValidityNickname,
} from "../../utils/User/userValidation";

import axios from "axios";

export default function UserSign() {
  let navigate = useNavigate();
  const [usrInputs, setUsrInputs] = useState({
    id: "",
    password: "",
    checkPassword: "",
    nickname: "",
    isAgree: false,
  });

  const { id, password, checkPassword, nickname, isAgree } = usrInputs;

  const handleChange = (e) => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setUsrInputs({
      ...usrInputs, // 기존의 input 객체를 복사한 뒤
      [name]: value, // name 키를 가진 값을 value 로 설정
    });
  };

  const handleIsAgree = (e) => {
    const { checked, name } = e.target;

    setUsrInputs({
      ...usrInputs,
      [name]: checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isAgree) {
      return alert("동의 해주세요.");
    }

    if (
      true
      // checkValidityId(id)[0] &&
      // checkValidityPassword(password)[0] &&
      // checkDoublePassword(password, checkPassword)[0] &&
      // checkValidityNickname(nickname)[0]
    ) {
      const myData = {
        loginId: id,
        password: password,
        passwordCheck: checkPassword,
        nickName: nickname,
      };

      axios
        .post("/api/user/join", myData)
        .then(function (response) {
          if (
            response.data.status === "0500" || //서버에서 예외처리 작업 후 제거예정
            response.data.status === "0403" ||
            response.data.status === "0404"
          ) {
            alert(response.data.message);
          } else {
            alert("회원가입 성공");
            navigate("/login");
          }
        })
        .catch(function (error) {
          alert("회원가입이 실패하였습니다.");
        });
    }
  };

  return (
    <UserFormGroup onSubmit={handleSubmit} style={{ height: "510px" }}>
      <InputTextGroup>
        <InputTextLabel>아이디</InputTextLabel>
        <InputTextDesc
          type="text"
          name="id"
          placeholder="아이디 5~12자 입력"
          onChange={handleChange}
          onValidation={checkValidityId}
          required
        />
      </InputTextGroup>
      <InputTextGroup>
        <InputTextLabel>비밀번호</InputTextLabel>
        <InputTextDesc
          type="password"
          name="password"
          placeholder="비밀번호 8~16자, 숫자, 특수문자 포함"
          onChange={handleChange}
          onValidation={checkValidityPassword}
          required
        />
        <InputTextDesc
          type="password"
          name="checkPassword"
          placeholder="비밀번호 재입력"
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
          placeholder="닉네임 입력"
          onChange={handleChange}
          onValidation={checkValidityNickname}
          required
        />
      </InputTextGroup>
      <CheckInput>
        <input
          type="checkbox"
          id="agree"
          checked={isAgree}
          name="isAgree"
          onChange={handleIsAgree}
        />
        <TextLabel htmlFor="agree">
          이용약관 및 개인정보 수집∙이용에 동의합니다.
        </TextLabel>
      </CheckInput>
      <Button size="lg" type="submit">
        가입하기
      </Button>

      <LinkGroup>
        <Link to="/login">
          <TextLabel>로그인</TextLabel>
        </Link>
      </LinkGroup>
    </UserFormGroup>
  );
}
