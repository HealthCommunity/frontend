import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import InputTextDesc from "./InputTextDesc";
import {
    UserFormGroup,
    InputTextLabel,
    InputTextGroup,
    TextLabel,
    CheckInput,
    LinkGroup,
} from "./LoginLayout";
import { ButtonPupple } from "../Share/ButtonPupple";
import Button from "../common/Button";

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

    const checkValidityId = (id) => {
        if (id.length < 5) {
            return [false, "5~12자를 입력하세요"];
        } else if (id.length > 12) {
            return [false, "5~12자를 입력하세요"];
        } else {
            if (isRuleId(id)) {
                return [true, "사용 가능"];
            }
            return [false, "사용 불가능"];
        }
    };

    const checkValidityPassword = (password) => {
        if (password.length < 8) {
            return [false, "숫자, 특수문자 포함"];
        } else if (password.length > 16) {
            return [false, "숫자, 특수문자 포함"];
        } else {
            if (isRulePassword(password)) {
                return [true, "사용 가능"];
            }
            return [false, "사용 불가능"];
        }
    };

    const checkDoublePassword = (password) => {
        if (password !== usrInputs.password) {
            return [false, "비밀번호 불일치"];
        } else {
            return [true, "사용 가능"];
        }
    };

    const checkValidityNickname = (nickname) => {
        if (nickname.length < 2) {
            return [false, "2~10자를 입력하세요"];
        } else if (nickname.length > 10) {
            return [false, "2~10자를 입력하세요"];
        } else {
            if (isRuleNick(nickname)) {
                return [true, "사용 가능"];
            }
            return [false, "사용 불가능"];
        }
    };

    const isRuleId = (asValue) => {
        const regExp = /^[a-z]+[a-z0-9]{5,19}$/g;
        return regExp.test(asValue);
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

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!isAgree) {
            return alert("동의 해주세요.");
        }

        if (
            checkValidityId(id)[0] &&
            checkValidityPassword(password)[0] &&
            checkDoublePassword(password, checkPassword)[0] &&
            checkValidityNickname(nickname)[0]
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
                    if (response.data.status === "0002") {
                        alert(response.data.message);
                    } else if (response.data.status === "0003") {
                        alert(response.data.message);
                    } else {
                        alert(response.data.message);
                        alert("회원가입 성공");
                        navigate("/login");
                    }
                })
                .catch(function (error) {
                    console.log(error);
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
                    onValidation={checkDoublePassword}
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
