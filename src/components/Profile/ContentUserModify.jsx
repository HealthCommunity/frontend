import React, { useState } from "react";
import styled from "styled-components";
import { ContentContainer, ContainerTitle } from "../Menu/MenuStyle";
import DescTextInput from "../Form/DescTextInput";
import { FormGroup, Form } from "../Form/FromStyle";
import { ButtonPupple } from "../Share/ButtonPupple";

const ProfileFrom = styled.section`
    padding: 20px;
    min-height: 200px;
    margin-bottom: 72px;
`;

export default function ContentUserModify({ onSubmit }) {
    const [usrInputs, setUsrInputs] = useState({
        password: "",
        checkPassword: "",
        nickname: "",
    });

    const { password, checkPassword, nickname, isAgree } = usrInputs;

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

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!isAgree) {
            return alert("동의 해주세요.");
        }

        if (
            checkValidityPassword(password)[0] &&
            checkDoublePassword(password, checkPassword)[0] &&
            checkValidityNickname(nickname)[0]
        ) {
            onSubmit(e, usrInputs);
        }
    };
    return (
        <ContentContainer>
            <ProfileFrom>
                <ContainerTitle>회원정보 변경</ContainerTitle>
                <FormGroup>
                    <Form onSubmit={handleSubmit}>
                        <DescTextInput
                            type="password"
                            name="password"
                            placeholder="비밀번호"
                            onChange={handleChange}
                            onValidation={checkValidityPassword}
                            required
                        />

                        <DescTextInput
                            type="password"
                            name="checkPassword"
                            placeholder="비밀번호 확인"
                            onChange={handleChange}
                            onValidation={checkDoublePassword}
                            required
                        />
                        <DescTextInput
                            type="text"
                            name="nickname"
                            placeholder="닉네임"
                            onChange={handleChange}
                            onValidation={checkValidityNickname}
                            required
                        />
                        <ButtonPupple
                            type="submit"
                            info={"변경하기"}
                        ></ButtonPupple>
                    </Form>
                </FormGroup>
            </ProfileFrom>
        </ContentContainer>
    );
}
