import React, { useState } from "react";
import styled from "styled-components";
import DescTextInput from "./DescTextInput";

const Form = styled.form`
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
`;

const InputGroup = styled.div`
    width: 100%;
    margin-left: auto;
    margin-bottom: 1rem;
    text-align: left;
`;

const Button = styled.button`
    width: 100%;
    border: none;
    border-radius: 5px;
    padding: 12px 24px;
    font-weight: 700;
    background-color: #9e9a9a;
    color: white;
    cursor: pointer;
`;

const Label = styled.label`
    display: inline-block;
    margin-bottom: 0.5rem;
    font-size: 14px;
`;
const CheckInput = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    input {
        margin: 0 4px 0 0;
    }
    label {
        margin-top: 8px;
        letter-spacing: -0.9px;
    }
`;

function UserForm({ isJoin = false, onSubmit }) {
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
            return [
                false,
                "id가 너무 짧습니다. 아이디는 5자 이상 12자 이하로 입력해주세요.",
            ];
        } else if (id.length > 12) {
            return [
                false,
                "id가 너무 깁니다. 아이디는 5자 이상 12자 이하로 입력해주세요.",
            ];
        } else {
            if (isRuleId(id)) {
                return [true, "올바른 ID 입니다."];
            }
            return [false, "유효하지 않는 ID 입니다."];
        }
    };

    const checkValidityPassword = (password) => {
        if (password.length < 8) {
            return [
                false,
                "비밀번호가 너무 짧습니다. 8자 이상 16자 이하 숫자, 문자, 특수문자를 입력해주세요.",
            ];
        } else if (password.length > 16) {
            return [
                false,
                "비밀번호가 너무 깁니다. 8자 이상 15자 이하 숫자, 문자, 특수문자를 입력해주세요.",
            ];
        } else {
            if (isRulePassword(password)) {
                return [true, "올바른 패스워드입니다."];
            }
            return [false, "올바르지 않는 패스워드입니다."];
        }
    };

    const checkDoublePassword = (password) => {
        if (password !== usrInputs.password) {
            return [false, "비밀번호가 일치하지 않습니다."];
        } else {
            return [true, "동일한 패스워드입니다."];
        }
    };

    const checkValidityNickname = (nickname) => {
        if (nickname.length < 2) {
            return [
                false,
                "닉네임이 너무 짧습니다. 2자 이상 10자 이하 문자를 입력해주세요.",
            ];
        } else if (nickname.length > 10) {
            return [
                false,
                "닉네임이 너무 깁니다. 2자 이상 10자 이하 문자를 입력해주세요.",
            ];
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
        e.preventDefault(); //새로고침 방지

        if (!isJoin) {
            return onSubmit(e, {
                id: usrInputs.id,
                password: usrInputs.password,
            });
        }

        if (!isAgree) {
            return alert("동의 해주세요.");
        }

        if (
            checkValidityId(id)[0] &&
            checkValidityPassword(password)[0] &&
            checkDoublePassword(password, checkPassword)[0] &&
            checkValidityNickname(nickname)[0]
        ) {
            onSubmit(e, usrInputs);
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <InputGroup>
                <Label>아이디</Label>
                <DescTextInput
                    type="text"
                    name="id"
                    placeholder="아이디"
                    onChange={handleChange}
                    onValidation={isJoin ? checkValidityId : null}
                    required
                />
            </InputGroup>

            <InputGroup>
                <Label>비밀번호</Label>
                <DescTextInput
                    type="password"
                    name="password"
                    placeholder="********"
                    onChange={handleChange}
                    onValidation={isJoin ? checkValidityPassword : null}
                    required
                />
            </InputGroup>

            {isJoin && (
                <>
                    <InputGroup>
                        <Label>비밀번호 확인</Label>
                        <DescTextInput
                            type="password"
                            name="checkPassword"
                            placeholder="********"
                            onChange={handleChange}
                            onValidation={checkDoublePassword}
                            required
                        />
                    </InputGroup>
                    <InputGroup>
                        <Label>닉네임</Label>
                        <DescTextInput
                            type="text"
                            name="nickname"
                            placeholder="닉네임"
                            onChange={handleChange}
                            onValidation={checkValidityNickname}
                            required
                        />
                    </InputGroup>
                    <InputGroup>
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
                    </InputGroup>
                </>
            )}
            <Button type="submit">{isJoin ? "가입하기" : "로그인"}</Button>
        </Form>
    );
}

export default UserForm;
