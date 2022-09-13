// react hook , react
import { useEffect, useState } from "react";

// recoil ( 상태관리 )

// react library
import { useLocation, useNavigate } from "react-router";
import axios from "axios";

// styled-components , Style Files
import {
  PostWrapper,
  PostTitleTitle,
  FileBtnDiv,
  FileBtn,
} from "../NewWrite/BoardWriteStyle";
import { FileList, PostLabel } from "components/Board/NewWrite/BoardWriteStyle";
import { WidthAreaSpace } from "styles/Layout/Layout";

// Components
import Nav from "../../Navbar";
import LoadingSpinner from "components/Loding/LoadingSpinner";

// Icons , Images
import VideoIcon from "../../../assets/images/board_write_video_24.svg";

// Share , Utils
import Tiptap from "../../../utils/Editor/Tiptap";

export default function ThreeBoardEditPost() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const url = `/api${pathname}`;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [, setEditData] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const [videoFileName, setVideoFailName] = useState({
    bench: "",
    squat: "",
    dead: "",
  });
  const [thumbnail, setThumbnail] = useState({
    bench: "",
    squat: "",
    dead: "",
  });
  const [videoUrl, setVideoUrl] = useState({
    bench: "",
    squat: "",
    dead: "",
  });
  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(url);
      setEditData(result.data.data);
      setTitle(result.data.data.title);
      setDescription(result.data.data.content);
      setIsPending(true);
    };
    fetchData();
  }, [url]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const benchFile = e.target.bench.files[0];
    const deadFile = e.target.dead.files[0];
    const squatFile = e.target.squat.files[0];
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
      .then((res) => {
        if (res.data.status === "0452") {
          setIsPending(false);
          alert("3대력 게시글 수정은 동영상을 변경해주셔야합니다");
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
  const goList = () => {
    navigate("/threepowerpost");
  };
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
  return (
    <>
      <Nav />
      <WidthAreaSpace>
        {isPending ? (
          <PostWrapper>
            <form onSubmit={handleSubmit}>
              <PostTitleTitle
                id="input-title"
                placeholder="글 제목을 입력해주세요!"
                value={"" || title}
                onChange={handleChange}
                autoComplete="off"
                required
              />
              <Tiptap
                setDescription={setDescription}
                description={description}
              />
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
                  <span style={{ margin: "0px 10px" }}>
                    {videoFileName.dead}
                  </span>
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
          <LoadingSpinner />
        )}
      </WidthAreaSpace>
    </>
  );
}
