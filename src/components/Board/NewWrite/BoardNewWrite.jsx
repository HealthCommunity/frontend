// react hook , react
import { useState } from "react";

// recoil ( 상태관리 )

// react library
import { useLocation, useNavigate } from "react-router";
import axios from "axios";

// styled-components , Style Files
import {
  PostWrapper,
  PostTitleTitle,
  PostLabel,
  FileList,
  FileBtnDiv,
  FileBtn,
} from "./BoardWriteStyle";

// Components
import LoadingSpinner from "../../Loding/LoadingSpinner";

// Icons , Images
import FileAdd from "../../../assets/images/board_write_picture_24.svg";

// Share , Utils
import Tiptap from "../../../utils/Editor/Tiptap";
import "../../../utils/Editor/TiptapStyle.css";

export default function BoardNewWrite() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const boardname = pathname.split("/")[1];

  const [title, setTitle] = useState("");
  const [file, setFile] = useState([]);
  const [description, setDescription] = useState("");
  const [ispending, setIsPending] = useState(false);

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
    const files = e.target.inputfile.files;
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

    setIsPending(true);
    axios
      .post(url, formData, config)
      .then((response) => {
        if (response.data.status === "0452") {
          setIsPending(false);
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
      {!ispending ? (
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
                <img
                  src={FileAdd}
                  style={{ marginRight: "5px" }}
                  alt="videoicon"
                />
                파일 첨부
                {boardname === "exercisepost" ? (
                  <input
                    type="file"
                    multiple
                    name="inputfile"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={changeInputFile}
                  />
                ) : (
                  <input
                    type="file"
                    multiple
                    name="inputfile"
                    accept="video/* , image/*"
                    style={{ display: "none" }}
                    onChange={changeInputFile}
                  />
                )}
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
        <LoadingSpinner />
      )}
    </>
  );
}
