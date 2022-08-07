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
    const url = "/api/threepowerpost";
    let benchFile = e.target.bench.files[0];
    let deadFile = e.target.dead.files[0];
    let squatFile = e.target.squat.files[0];
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", description);
    formData.append("bench", benchFile);
    formData.append("squat", squatFile);
    formData.append("dead", deadFile);
    console.log("bench", benchFile);
    console.log("dead", deadFile);
    console.log("squat", squatFile);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    axios.post(url, formData, config).then((response) => {
      console.log(response);
      if (response.data.status === "200") {
        navigate("/board");
      } else {
        alert(response.message);
      }
    });
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
        ></PostTitleTitle>
        <input type="file" name="bench" accept="video/*" />
        <input type="file" name="squat" accept="video/*" />
        <input type="file" name="dead" accept="video/*" />
        <Tiptap setDescription={setDescription} />
        <button type="submit">제출하기</button>
      </form>
    </PostWrapper>
  );
}

export default BoardNewWrite;
