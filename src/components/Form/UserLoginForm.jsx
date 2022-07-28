import React, { useState } from "react";
import DescTextInput from "./DescTextInput";
import { ButtonPupple } from "../Share/ButtonPupple";
import { UserFormGroup } from "../Login/LoginLayout";

import axios from "axios";

axios.defaults.withCredentials = true;

export default function UserInputForm({ onSubmit }) {
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

        // return onSubmit(e, {
        //     id: usrInputs.id,
        //     password: usrInputs.password,
        // });
        console.log("로그인 시작", id, password);
        console.log("로그인 재실행", id, password);

        /* 데이터 전송 */
        axios
            .post("http://54.166.132.169:8080/login", {
                username: id,
                password: password,
            })
            .then(function (response) {
                console.log("성공", response);
                alert("로그인에 성공하였습니다.");
                //window.location.href = response.url;
                //response.redirect(response.url);
            })
            .catch(function (error) {
                // 오류발생시 실행
                console.log("실패", error);
                //window.location.href = "http://54.166.132.169:3200";
            });

        /*데이터 전송*/
        // fetch("http://54.166.132.169:8080/login", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({
        //         username: id,
        //         password: password,
        //     }),
        // })
        //     .then((response) => response.json())
        //     .then((data) => console.log(data));

        /* 데이터 전송 URLSearchParams*/
        // axios
        //     .post(
        //         "http://54.166.132.169:8080/login",
        //         new URLSearchParams({
        //             username: id,
        //             password: password,
        //         })
        //     )
        //     .then(function (response) {
        //         console.log("성공", response);
        //         alert("로그인에 성공하였습니다.");
        //     })
        //     .catch(function (error) {
        //         // 오류발생시 실행
        //         console.log("실패", error);
        //     });
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
