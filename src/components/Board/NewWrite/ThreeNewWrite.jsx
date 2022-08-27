import { useNavigate } from "react-router";
import Tiptap from "../../../utils/Editor/Tiptap";
import { useState } from "react";
import VideoIcon from "../../../assets/images/board_write_video_24.svg";
import axios from "axios";
import {
  PostWrapper,
  PostTitleTitle,
  PostLabel,
  FileList,
  FileBtnDiv,
  FileBtn,
} from "./BoardWriteStyle";

export default function ThreeBoardPost() {
  let navigate = useNavigate();
  const [pending, setPending] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [bench, setBench] = useState("");
  const [squat, setSquat] = useState("");
  const [dead, setDead] = useState("");
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const goList = () => {
    navigate("/threepowerpost");
  };
  const changeBench = (e) => {
    setBench(e.target.files[0].name);
  };
  const changeDead = (e) => {
    setDead(e.target.files[0].name);
  };
  const changeSqaut = (e) => {
    setSquat(e.target.files[0].name);
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
          <form onSubmit={handleSubmit}>
            <PostTitleTitle
              id="input-title"
              placeholder="글 제목을 입력해주세요!"
              value={title}
              onChange={handleChange}
              autoComplete="off"
              required
            />
            <Tiptap setDescription={setDescription} />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <FileList>
                <PostLabel>
                  <img
                    src={VideoIcon}
                    style={{ marginRight: "5px" }}
                    alt="videoicon"
                  />
                  벤치프레스 영상
                  <input
                    style={{ opacity: "0", width: "1px" }}
                    type="file"
                    name="bench"
                    accept="video/*"
                    required
                    onChange={changeBench}
                  />
                </PostLabel>
                <span style={{ margin: "0px 10px" }}>{bench}</span>
              </FileList>
              <FileList>
                <PostLabel>
                  <img
                    src={VideoIcon}
                    style={{ marginRight: "5px" }}
                    alt="videoicon"
                  />
                  데드리프트 영상
                  <input
                    style={{ opacity: "0", width: "1px" }}
                    onChange={changeDead}
                    type="file"
                    name="squat"
                    accept="video/*"
                    required
                  />
                </PostLabel>
                <span style={{ margin: "0px 10px" }}>{dead}</span>
              </FileList>
              <FileList>
                <PostLabel>
                  <img
                    src={VideoIcon}
                    style={{ marginRight: "5px" }}
                    alt="videoicon"
                  />
                  스쿼트 영상
                  <input
                    onChange={changeSqaut}
                    style={{ opacity: "0", width: "1px" }}
                    type="file"
                    name="dead"
                    accept="video/*"
                    required
                  />
                </PostLabel>
                <span style={{ margin: "0px 10px" }}>{squat}</span>
              </FileList>
            </div>

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
