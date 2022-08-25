import { useLocation, useNavigate } from "react-router";
import Tiptap from "../../utils/Editor/Tiptap";
import "../../utils/Editor/TiptapStyle.css";
import { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import FileAdd from "../../assets/images/board_write_picture_24.svg";

const PostWrapper = styled.div`
  max-width: 1040px;
  width: 1024px;
  color: #333;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
`;

const PostTitleTitle = styled.input`
  width: 100%;
  height: 56px;
  min-height: 56px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  color: #333;
  border-bottom: 1px solid #eeeeee;
  margin-bottom: 20px;
  :focus {
    outline: none;
  }
`;

const PostLabel = styled.label`
  border: 1px solid #0066ff;
  border-radius: 60px;
  color: #0066ff;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  padding: 16px 20px;
  font-size: 16px;
  font-weight: bold;
  font-family: "Pretendard";
`;

const FileList = styled.div`
  display: flex;
  align-items: center;
`;

const FileBtnDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #eeeeee;
  margin-top: 20px;
  padding-top: 20px;
  margin-bottom: 50px;
`;

const FileBtn = styled.button`
  width: 100px;
  height: 50px;
  border-radius: 40px;
  margin: 0px 10px;
  border: 1px solid #eeeeee;
  background-color: transparent;
  text-align: center;
  font-family: "Pretendard";
`;

function BoardNewWrite() {
  let navigate = useNavigate();
  const [pending, setPending] = useState(false);
  const { pathname } = useLocation();
  const boardname = pathname.split("/")[1];
  const [title, setTitle] = useState("");
  const [file, setFile] = useState([]);
  const [description, setDescription] = useState("");

  const goList = () => {
    navigate(`/${boardname}`);
  };
  const changeInputFile = (e) => {
    const fileArr = e.target.files;
    const filelist = [];
    for (let i = 0; i < fileArr.length; i++) {
      if (fileArr.length > 5) return;
      filelist.push(fileArr[i]);
    }
    setFile(filelist);
  };
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const url = `/api/${boardname}`;
    let files = e.target.inputfile.files;
    const formData = new FormData();
    formData.append("title", title);
    for (let i = 0; i < files.length; i++) {
      if (files.length >= 5) {
        alert("파일은 최대 5개까지만 업로드 할 수 있습니다");
        return;
      }
      formData.append("files", files[i]);
    }
    formData.append("content", description);
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
          <form onSubmit={handleSubmit} style={{ height: "100%" }}>
            <PostTitleTitle
              id="input-title"
              placeholder="글 제목을 입력해주세요!"
              value={title}
              onChange={handleChange}
              autoComplete="off"
              required
            />
            <Tiptap setDescription={setDescription} />
            <FileList>
              <PostLabel>
                <img src={FileAdd} style={{ marginRight: "5px" }} />
                파일 첨부
                <input
                  type="file"
                  multiple
                  name="inputfile"
                  accept="video/* , image/*"
                  style={{ display: "none" }}
                  onChange={changeInputFile}
                />
              </PostLabel>
              {file.map((x) => (
                <span
                  key={x.name}
                  style={{ margin: "0px 10px" }}
                >{` ${x.name} `}</span>
              ))}
            </FileList>
            <FileBtnDiv>
              <FileBtn type="button" onClick={goList}>
                취소
              </FileBtn>
              <FileBtn
                type="submit"
                style={{ color: "white", backgroundColor: "#0066FF" }}
              >
                제출하기
              </FileBtn>
            </FileBtnDiv>
          </form>
        </PostWrapper>
      ) : (
        <div>게시글을 업로드중입니다</div>
      )}
    </>
  );
}

export default BoardNewWrite;
