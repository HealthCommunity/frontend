import {
  InfoDiv,
  InfoTitle,
  InfoTitleDiv,
  InfoTitleWrite,
  BoardSummary,
} from "./BoardDetailStyle";
import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import { useEffect } from "react";
import axios from "axios";
import parser from "html-react-parser";
import PostThreePower from "../ThreePower/ManagerThreePower";
import EyeIcon from "../../../assets/images/common_view_16.svg";
import styled from "styled-components";
import { FileBtn, FileBtnDiv } from "../NewWrite/BoardWriteStyle";
import useUserData from "../../../api/useUserData";
import { ModalButton } from "../../../pages/Board";
import { Link } from "react-router-dom";
import WriteIcon from "../../../assets/images/board_write_bl_24.svg";
import { useForm } from "react-hook-form";
import BoardComment from "./BoardComment";
import LoadingSpinner from "../../Loding/LoadingSpinner";

export default function BoardDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const boardname = pathname.split("/")[1];
  const [boardData, setBoardData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [userData] = useUserData();

  const { register, handleSubmit, reset } = useForm({ mode: "onChange" });
  const config = {
    headers: {
      "content-type": "application/json",
    },
  };
  const onSubmitValid = (data) => {
    axios
      .post(`/api/post/${boardData.postId}/comments`, data, config)
      .then(
        (res) =>
          res.data.status === "200" &&
          window.location.replace(`/${boardname}/${boardData.postId}`)
      );
    reset();
  };
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await axios(`/api/${boardname}/${id}`);
      setBoardData(result.data.data);
      setIsLoading(false);
    };
    fetchData();
  }, [boardname, id]);
  const onDelete = () => {
    if (window.confirm("삭제하시겠습니까?") === true) {
      axios.post(`/api/${boardname}/${id}/delete`).then(() => {
        navigate(`/${boardname}`);
      });
    }
    return;
  };
  const onEdit = () => {
    if (boardname === "threepowerpost") {
      if (
        window.confirm("3대력은 동영상 3개를 모두 변경해야합니다!") === true
      ) {
        navigate("edit");
      }
      return;
    }
    navigate("edit");
  };
  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <InfoDiv>
          <InfoTitleDiv>
            <InfoTitle>{boardData?.title}</InfoTitle>
            <InfoTitleWrite>
              <img src={EyeIcon} alt="eye" style={{ marginRight: "5px" }} />
              {boardData?.view}
            </InfoTitleWrite>
          </InfoTitleDiv>
          <div
            style={{
              width: "100%",
              height: "1px",
              backgroundColor: "#EEEEEE",
              margin: "20px",
            }}
          />
          <InfoTitleDiv>
            <InfoTitleWrite>
              {boardData?.userPostResponse?.nickName}
            </InfoTitleWrite>
            <InfoTitleWrite>{`작성일 : ${boardData?.createdDate} `}</InfoTitleWrite>
          </InfoTitleDiv>
          {(boardname === "threepowerpost") &
          (boardData?.sessionUserResponse?.role === "ROLE_MASTER") ? (
            <PostThreePower userId={boardData?.userPostResponse?.userId} />
          ) : (
            <></>
          )}
          <BoardSession>
            {boardData.urls &&
              boardData.urls.map((x) =>
                x.split("/")[3] === "VIDEO" ? (
                  <div key={Math.random()}>
                    <BoardVideo controls>
                      <source src={x} type="video/mp4" />
                    </BoardVideo>
                  </div>
                ) : (
                  <div key={Math.random()}>
                    <BoardImg src={x} />
                  </div>
                )
              )}
          </BoardSession>
          <BoardSummary>{parser(String(boardData?.content))}</BoardSummary>
          <BoardComment boardname={boardname} />

          {!userData ? (
            <>
              <Link to={`/${boardname}`}>
                <ModalButton>글목록</ModalButton>
              </Link>
            </>
          ) : (
            <InfoExplanationDiv>
              <InfoCommentForm onSubmit={handleSubmit(onSubmitValid)}>
                <InfoNickname>{userData.nickName}</InfoNickname>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <InfoCommentInputText
                    {...register("comment", {
                      required: "댓글을 입력해주세요",
                    })}
                    type="text"
                    placeholder="댓글을 입력해주세요"
                  />
                  <InfoCommentInputSubmit type="submit" value="댓글등록" />
                </div>
              </InfoCommentForm>
            </InfoExplanationDiv>
          )}
          {boardData?.sessionUserResponse?.userId ===
          boardData?.userPostResponse?.userId ? (
            <FileBtnDiv style={{ border: "none" }}>
              <FileBtn onClick={onDelete}>Delete</FileBtn>
              <FileBtn onClick={onEdit}>Edit</FileBtn>
              {userData ? (
                <div style={{ display: "flex" }}>
                  <Link to={`/${boardname}/write`}>
                    <ModalButton>
                      <img
                        src={WriteIcon}
                        style={{ marginRight: "5px" }}
                        alt="writeicon"
                      />
                      글쓰기
                    </ModalButton>
                  </Link>
                  <Link to={`/${boardname}`}>
                    <ModalButton>글목록</ModalButton>
                  </Link>
                </div>
              ) : (
                <Link to={`/${boardname}`}>
                  <ModalButton>글목록</ModalButton>
                </Link>
              )}
            </FileBtnDiv>
          ) : (
            <>
              <Link to={`/${boardname}`}>
                <ModalButton>글목록</ModalButton>
              </Link>
            </>
          )}
        </InfoDiv>
      )}
    </>
  );
}

const BoardSession = styled.section`
  flex-wrap: wrap;
  display: flex;
  margin: 0 auto;
`;

const BoardVideo = styled.video`
  width: 400px;
  height: 250px;
  margin-right: 30px;
  margin-top: 30px;
`;

const BoardImg = styled.img`
  width: 560px;
  height: 560px;
  margin-right: 30px;
  margin-top: 30px;
`;
const InfoExplanationDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 15px;
`;

export const InfoNickname = styled.div`
  font-size: 18px;
  font-weight: 800;
  margin: 20px;
`;

const InfoCommentForm = styled.form`
  flex-wrap: wrap;
  border-radius: 10px;
  margin-bottom: 30px;
  border: 1px solid rgb(238, 238, 238); ;
`;
const InfoCommentInputText = styled.input`
  margin: 15px;
  width: 90%;
  background-color: #f8f8f8;
  border-radius: 3px;
  padding: 0px 10px;
  height: 50px;
  border: none;
  outline: none;
  font-size: 16px;
`;
const InfoCommentInputSubmit = styled.input`
  border: none;
  outline: none;
  margin: 0 10px;
  cursor: pointer;
  background-color: transparent;
`;

const CommentList = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
`;

const CommentListitem = styled.div`
  font-size: ${(props) => props.theme.fontSizeH2};
  margin: 20px 0px;
`;
