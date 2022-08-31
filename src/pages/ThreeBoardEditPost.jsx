import { useLocation, useNavigate } from "react-router";
import Tiptap from "../utils/Editor/Tiptap";
import { useEffect, useState } from "react";
import axios from "axios";
import Nav from "../components/Navbar";
import {
  PostWrapper,
  PostTitleTitle,
} from "../components/Board/NewWrite/BoardWriteStyle";
import LoadingSpinner from "components/Loding/LoadingSpinner";

export default function ThreeBoardEditPost() {
  let navigate = useNavigate();
  const { pathname } = useLocation();
  const url = `/api${pathname}`;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [, setEditData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await axios(url);
      setEditData(result.data.data);
      setTitle(result.data.data.title);
      setDescription(result.data.data.content);
      setIsLoading(false);
    };
    fetchData();
  }, [url]);
  const handleSubmit = (e) => {
    e.preventDefault();
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

  return (
    <>
      <Nav />
      {isLoading | isPending ? (
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
            <input type="file" name="bench" accept="video/*" />
            <input type="file" name="squat" accept="video/*" />
            <input type="file" name="dead" accept="video/*" />
            <Tiptap setDescription={setDescription} description={description} />
            <button type="submit">제출하기</button>
          </form>
        </PostWrapper>
      ) : isPending ? (
        <LoadingSpinner text={"게시글 업로드중입니다"} />
      ) : (
        <LoadingSpinner />
      )}
    </>
  );
}
