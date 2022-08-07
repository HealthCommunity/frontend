import React, { useState } from "react";
import DescTextInput from "./DescTextInput";
import { ButtonPupple } from "../Share/ButtonPupple";
import { UserFormGroup } from "../Login/LoginLayout";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isLogin } from "../../atom";

import axios from "axios";

export default function UserInputForm({ onSubmit }) {
    axios.defaults.withCredentials = true;
    let navigate = useNavigate();

    const setLogin = useSetRecoilState(isLogin);
    const useLogin = useRecoilValue(isLogin);

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
            .then(function (response) {
                if (response.status === 200) {
                    console.log("로그인 성공");
                    navigate("/");
                    setLogin((prev) => !prev);
                }
            })
            .catch(function (error) {
                console.log("로그인 실패", error);
            });
    };

    return (
        <UserFormGroup onSubmit={handleSubmit} style={{ height: "300px" }}>
            <DescTextInput
                type="text"
                name="id"
                placeholder="아이디"
                onChange={handleChange}
                required
            />

            <DescTextInput
                type="password"
                name="password"
                placeholder="비밀번호"
                onChange={handleChange}
                required
            />
            <ButtonPupple type="submit" info={"로그인"}></ButtonPupple>
        </UserFormGroup>
    );
}
