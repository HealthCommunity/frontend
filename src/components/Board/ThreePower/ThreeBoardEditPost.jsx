import { useLocation, useNavigate } from "react-router";
import Tiptap from "../../../utils/Editor/Tiptap";
import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Nav from "../../Navbar";

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

export default function ThreeBoardEditPost() {
  let navigate = useNavigate();
  const { pathname } = useLocation();
  const url = `/api${pathname}`;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [, setEditData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pending, setPending] = useState(false);
  const handleChange = (e) => {
    setTitle(e.target.value);
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
      .then((res) => {
        if (res.data.status === "0452") {
          setPending(false);
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
      {loading | pending ? (
        <div style={{ marginTop: "200px" }}>
          {pending ? "게시글 업로드중입니다" : "로딩중입니다"}
        </div>
      ) : (
        <PostWrapper>
          <TitleLabel Htmlfor="input-title">제목</TitleLabel>
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
      )}
    </>
  );
}
