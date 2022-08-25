import { useLocation, useNavigate } from "react-router";
import Tiptap from "../../utils/Editor/Tiptap";
import "../../utils/Editor/TiptapStyle.css";
import { useState } from "react";
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
  const [pending, setPending] = useState(false);
  const { pathname } = useLocation();
  const boardname = pathname.split("/")[1];
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const url = `/api/${boardname}`;
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
    setPending(true);
    axios
      .post(url, formData, config)
      .then((response) => {
        if (response.data.status === "0452") {
          setPending(false);
          alert("본문에 내용을 넣어주세요!");
          return;
        }
        navigate(`/${boardname}`);
      })
      .catch((error) =>
        alert(
          `${error.response.status}번 error 입니다. 입력정보를 확인해주세요`
        )
      );
  };
  return (
    <>
      {!pending ? (
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
            />
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
      ) : (
        <div>대기상태입니다</div>
      )}
    </>
  );
}

export default BoardNewWrite;