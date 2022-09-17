// react hook , react
import React, { useState } from "react";

// recoil ( 상태관리 )
import useUserData from "../../api/useUserData";

// react library
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

// styled-components , Style Files
import {
  UserFormGroup,
  InputTextLabel,
  InputTextGroup,
  TextLabel,
  LinkGroup,
} from "./LoginStyle";

// Components
import InputTextDesc from "./InputTextDesc";

// Icons , Images

// Share , Utils
import Button from "../../share/Button";

export default function UserInputForm() {
  const [, refetch] = useUserData();

  axios.defaults.withCredentials = true;
  const navigate = useNavigate();

  const [usrInputs, setUsrInputs] = useState({
    id: "",
    password: "",
  });

  const { id, password } = usrInputs;

  const handleChange = (e) => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setUsrInputs({
      ...usrInputs, // 기존의 input 객체를 복사한 뒤
      [name]: value, // name 키를 가진 값을 value 로 설정
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //새로고침 방지
    e.stopPropagation();

    const myData = {
      username: id,
      password: password,
    };

    axios
      .post("/api/user/login", myData, {
        withCredentials: true,
        credentials: "include",
      })
      .then((response) => {
        if (response.data.status === "200") {
          refetch();
          navigate("/");
          alert("로그인에 성공하였습니다.");
        } else if (response.data.status === "0402") {
          alert(response.data.message);
        } else {
          alert("아이디 또는 비밀번호를 잘못 입력했습니다.");
        }
      })
      .catch((error) => {
        alert("로그인에 실패하였습니다.");
        refetch();
      });
  };

  return (
    <UserFormGroup onSubmit={handleSubmit} style={{ height: "300px" }}>
      <InputTextGroup>
        <InputTextLabel>아이디</InputTextLabel>
        <InputTextDesc
          type="text"
          name="id"
          placeholder="아이디"
          onChange={handleChange}
          required
        />
      </InputTextGroup>

      <InputTextGroup>
        <InputTextLabel>비밀번호</InputTextLabel>
        <InputTextDesc
          type="password"
          name="password"
          placeholder="비밀번호"
          onChange={handleChange}
          required
        />
      </InputTextGroup>

      <Button size="lg" type="submit">
        로그인
      </Button>
      <LinkGroup>
        <Link to="/sign">
          <TextLabel>회원가입</TextLabel>
        </Link>
      </LinkGroup>
    </UserFormGroup>
  );
}
