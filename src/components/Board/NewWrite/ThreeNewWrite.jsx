import { useState } from "react";
import { useNavigate } from "react-router";

import axios from "axios";
import Tiptap from "../../../utils/Editor/Tiptap";

import {
  PostWrapper,
  PostTitleTitle,
  PostLabel,
  FileList,
  FileBtnDiv,
  FileBtn,
} from "./BoardWriteStyle";
import LoadingSpinner from "../../Loding/LoadingSpinner";
import VideoIcon from "../../../assets/images/board_write_video_24.svg";

export default function ThreeBoardPost() {
  let navigate = useNavigate();
  const [isPending, setIsPending] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  /*video 파일 명*/
  const [videoFileName, setVideoFailName] = useState({
    bench: "",
    squat: "",
    dead: "",
  });

  /*썸네일 이미지 파일 저장*/
  const [thumbnail, setThumbnail] = useState({
    bench: "",
    squat: "",
    dead: "",
  });

  /*썸네일 video 브라우저 URL 저장*/
  const [videoUrl, setVideoUrl] = useState({
    bench: "",
    squat: "",
    dead: "",
  });

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const goList = () => {
    navigate("/threepowerpost");
  };

  //썸네일 제작을 위한 canvas 변환 함수
  const handleLoadedData = (e) => {
    const video = e.target;
    const videoName = video.getAttribute("name");
    const canvas = document.createElement("canvas");
    const emptyCanvas = document.createElement("canvas");

    canvas.getContext("2d").drawImage(video, 0, 0, 300, 200);
    emptyCanvas
      .getContext("2d")
      .drawImage(document.createElement("video"), 0, 0, 300, 200);

    setTimeout(() => {
      //비디오가 비어있는 경우 다시 handleLoadedData() 호출
      if (canvas.toDataURL() === emptyCanvas.toDataURL()) {
        return handleLoadedData(e);
      }

      setThumbnail({
        ...thumbnail,
        [videoName]: canvas.toDataURL(),
      });
    });
  };

  //video 선택 실행
  const changeVideo = (e) => {
    const video = e.target;
    const videoName = video.name;
    const targetVideoUrl = video.files[0];
    const FileName = video.files[0].name;

    //video 파일 네임 변경
    setVideoFailName({
      ...videoFileName,
      [videoName]: FileName,
    });

    //video 파일 URL 변경
    setVideoUrl({
      ...videoUrl,
      [videoName]: URL.createObjectURL(targetVideoUrl),
    });
  };

  //서버에 게시글 정보, 삼대력 video 파일 전달
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

    setIsPending(true);
    axios
      .post(url, formData, config)
      .then((response) => {
        if (response.data.status === "0452") {
          setIsPending(false);
          alert("본문에 내용을 넣어주세요!");
          return;
        }
        navigate("/threepowerpost");
      })
      .catch((error) =>
        alert(
          `${error.response.status}번 error 입니다. 입력정보를 확인해주세요`
        )
      );
  };

  return (
    <>
      {!isPending ? (
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

            <div style={{ display: "flex", marginBottom: "16px" }}>
              {!!videoUrl.bench && (
                <video
                  src={videoUrl.bench}
                  width={325}
                  height={175}
                  name="bench"
                  onLoadedData={handleLoadedData}
                  style={{ marginRight: "32px" }}
                />
              )}

              {!!videoUrl.squat && (
                <video
                  src={videoUrl.squat}
                  width={325}
                  height={175}
                  name="squat"
                  onLoadedData={handleLoadedData}
                  style={{ marginRight: "32px" }}
                />
              )}

              {!!videoUrl.dead && (
                <video
                  src={videoUrl.dead}
                  width={325}
                  height={175}
                  name="dead"
                  onLoadedData={handleLoadedData}
                />
              )}
            </div>

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
                    onChange={changeVideo}
                  />
                </PostLabel>
                <span style={{ margin: "0px 10px" }}>
                  {videoFileName.bench}
                </span>
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
                    type="file"
                    name="squat"
                    accept="video/*"
                    required
                    onChange={changeVideo}
                  />
                </PostLabel>
                <span style={{ margin: "0px 10px" }}>
                  {videoFileName.squat}
                </span>
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
                    style={{ opacity: "0", width: "1px" }}
                    type="file"
                    name="dead"
                    accept="video/*"
                    required
                    onChange={changeVideo}
                  />
                </PostLabel>
                <span style={{ margin: "0px 10px" }}>{videoFileName.dead}</span>
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

          {!!thumbnail.bench && <img src={thumbnail.bench} alt="벤치동영상" />}
          {!!thumbnail.squat && (
            <img src={thumbnail.squat} alt="스쿼드동영상" />
          )}
          {!!thumbnail.dead && <img src={thumbnail.dead} alt="데드동영상" />}
        </PostWrapper>
      ) : (
        <LoadingSpinner text={"게시글을 등록하는 중입니다."} />
      )}
    </>
  );
}
