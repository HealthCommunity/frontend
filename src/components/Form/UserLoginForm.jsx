import React, { useState } from "react";
import DescTextInput from "./DescTextInput";
import { ButtonPupple } from "../Share/ButtonPupple";
import { UserFormGroup } from "../Login/LoginLayout";
import { useNavigate } from "react-router-dom";

import axios from "axios";

export default function UserInputForm({ onSubmit }) {
    axios.defaults.withCredentials = true;

    let navigate = useNavigate();
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

        const myData = {
            username: id,
            password: password,
        };

        axios
            .post("http://54.166.132.169:8080/api/user/login", myData, {
                withCredentials: true,
                credentials: "include",
            })
            .then(function (response) {
                console.log("성공", response);
                alert("로그인 성공하였습니다.");
            })
            .catch(function (error) {
                // 오류발생시 실행
                console.log("실패", error);
            });

        // async function getUser() {
        //     try {
        //         const response = await fetch(
        //             "http://54.166.132.169:8080/api/user/login",
        //             {
        //                 method: "POST",
        //                 headers: {
        //                     "Content-Type": "application/x-www-form-urlencoded",
        //                 },
        //                 withCredentials: true,
        //                 credentials: "include",

        //                 body: JSON.stringify(myData),
        //             }
        //         );

        //         if (!response.ok) {
        //             throw new Error(`Error! status: ${response.status}`);
        //         }

        //         const result = await response.json();
        //         console.log(result);
        //         navigate("/exersise");
        //         return result;
        //     } catch (err) {
        //         console.log(err);
        //     }
        // }

        // getUser();

        // fetch("http://54.166.132.169:8080/api/user/login", {
        //     method: "POST",
        //     headers: { "Content-type": "application/json" },
        //     body: JSON.stringify(myData),
        // })
        //     .then(function (response) {
        //         console.log("설명", response);
        //         //console.log("성공", response.json());

        //         navigate("/exersise");
        //     })
        //     .catch(function (error) {
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
