import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import InputTextDesc from "./InputTextDesc";
import { UserFormGroup } from "../Login/LoginLayout";
import { ButtonPupple } from "../Share/ButtonPupple";

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
            return [false, "아이디 5~12자 문자입니다."];
        } else if (id.length > 12) {
            return [false, "아이디 5~12자 문자입니다."];
        } else {
            if (isRuleId(id)) {
                return [true, "사용 가능 아이디입니다."];
            }
            return [false, "유효하지 않은 아이디입니다."];
        }
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
                    if (response.status === 200) {
                        console.log(response);
                        console.log("회원가입 성공");
                        navigate("/login");
                    }
                })
                .catch(function (error) {
                    console.log("회원가입 실패", error);
                });
        }
    };

    return (
        <UserFormGroup onSubmit={handleSubmit} style={{ height: "450px" }}>
            <InputTextDesc
                type="text"
                name="id"
                placeholder="아이디"
                onChange={handleChange}
                onValidation={checkValidityId}
                required
            />

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
            <InputTextDesc
                type="text"
                name="nickname"
                placeholder="닉네임"
                onChange={handleChange}
                onValidation={checkValidityNickname}
                required
            />
            <CheckInput>
                <input
                    type="checkbox"
                    id="agree"
                    checked={isAgree}
                    name="isAgree"
                    onChange={handleIsAgree}
                />
                <Label htmlFor="agree">
                    이용약관 및 개인정보 수집∙이용에 동의합니다.
                </Label>
            </CheckInput>
            <ButtonPupple type="submit" info={"가입하기"}></ButtonPupple>
        </UserFormGroup>
    );
}

const Label = styled.label`
    margin-bottom: 10px;
    font-size: ${(props) => props.theme.fontSizeH5};
    @media all and (min-width: 480px) and (max-width: 767px) {
        font-size: ${(props) => props.theme.fontSizeH6};
        white-space: nowrap;
        letter-spacing: -1px;
    }
    @media all and (max-width: 479px) {
        font-size: ${(props) => props.theme.fontSizeH6};
        white-space: nowrap;
        letter-spacing: -1px;
    }
`;

const CheckInput = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    margin: 0px 0px;
    input {
        margin: 0 8px 0 0;
    }
    label {
        margin-top: 8px;
    }
`;