import { useLocation, useNavigate } from "react-router";
import Tiptap from "../../utils/Editor/Tiptap";
import "../../utils/Editor/TiptapStyle.css";
import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Nav from "../Navbar/index";
import { FileBtn, FileBtnDiv, FileList, PostLabel } from "./BoardWriteStyle";
import FileAdd from "../../assets/images/board_write_picture_24.svg";
import { PostWrapper, PostTitleTitle } from "./BoardWriteStyle";

export default function BoardEditPost() {
  let navigate = useNavigate();
  const { pathname } = useLocation();
  const boardname = pathname.split("/")[1];
  const url = `/api${pathname}`;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [, setEditData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pending, setPending] = useState(false);
  const [file, setFile] = useState([]);
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
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
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const result = await axios(url);
      setEditData(result.data.data);
      setTitle(result.data.data.title);
      setDescription(result.data.data.content);
      setLoading(false);
    };
    fetchData();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData();
    let files = e.target.inputfile.files;
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
      .then(() => {
        navigate(`/${pathname.split("/")[1]}`);
      })
      .catch((error) =>
        alert(
          `${error.response.status}번 error 입니다. 입력  정보를 확인해주세요`
        )
      );
  };
  return (
    <>
      <Nav />
      {loading | pending ? (
        <div style={{ marginTop: "200px" }}>
          {pending ? "게시글 업로드중입니다" : "로딩중입니다"}
        </div>
      ) : (
        <PostWrapper>
          <form onSubmit={handleSubmit}>
            <PostTitleTitle
              id="input-title"
              placeholder="글 제목을 입력해주세요!"
              value={"" || title}
              onChange={handleChange}
              autoComplete="off"
            />
            <Tiptap setDescription={setDescription} description={description} />
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
                <span style={{ color: "red" }}>
                  (파일변경시 기존 파일은 삭제됩니다)
                </span>
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
      )}
    </>
  );
}
