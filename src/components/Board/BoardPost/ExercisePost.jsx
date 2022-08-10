import { InfoTitle } from "./BoardDetailStyle";
import { useLocation, useNavigate } from "react-router";
import Tiptap from "../../Editor/Tiptap";
import Details from "../../Editor/Details";
import "../../Editor/TiptapStyle.css";
import { useRef, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const PostWrapper = styled.div`
    max-width: 1040px;
    padding: 60px 16px;
    width: 1024px;
    margin: 0 auto;
    color: #333;
    grid-gap: 50px;
    gap: 50px px;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 150px;
`;

const PostTitleTitle = styled.input`
    box-sizing: border-box;
    width: 100%;
    height: 56px;
    min-height: 56px;
    line-height: 44px;
    box-shadow: none;
    padding-left: 16px;
    padding-right: 52px;
    border: 1px solid grey;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 500;
    color: #333;
`;

const TitleLabel = styled.label`
    display: inline-block;
    margin-bottom: 5px;
    color: #333;
    font-weight: 500;
`;

function BoardNewWrite() {
    let navigate = useNavigate();
    const { pathname } = useLocation();
    const boardname = pathname.split("/")[1];
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const handleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const url = "/api/exercisepost";
        let files = e.target.inputfile.files;
        const formData = new FormData();
        formData.append("title", title);
        formData.append("content", description);
        for (let i = 0; i < files.length; i++) {
            formData.append("files", files[i]);
        }
        const config = {
            headers: {
                "content-type": "multipart/form-data",
            },
        };
        axios
            .post(url, formData, config)
            .then((response) => {
                console.log(response);
                if (response.data.status === "200") {
                    navigate("/exercise");
                }
            })
            .catch((error) =>
                alert(
                    `${error.response.status}번 error 입니다. 입력정보를 확인해주세요`
                )
            );
    };

    return (
        <PostWrapper>
            <TitleLabel Htmlfor="input-title">제목</TitleLabel>
            <form onSubmit={handleSubmit}>
                <PostTitleTitle
                    id="input-title"
                    placeholder="글 제목을 입력해주세요!"
                    value={title}
                    onChange={handleChange}
                    autoComplete="off"
                    required
                ></PostTitleTitle>
                <input
                    type="file"
                    multiple
                    name="inputfile"
                    accept="video/* , image/*"
                />
                <Tiptap setDescription={setDescription} />
                <button type="submit">제출하기</button>
            </form>
        </PostWrapper>
    );
}

export default BoardNewWrite;
