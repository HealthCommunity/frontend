import {
  InfoCommentInputSubmit,
  InfoCommentInputText,
  InfoDiv,
  InfoExplanationDiv,
  InfoExplanationTitle,
  InfoTitle,
  InfoTitleDiv,
  InfoTitleWrite,
  InfoCommentForm,
  CommentList,
  CommentListitem,
  BoardSummary,
} from "./BoardDetailStyle";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useParams } from "react-router";
import { useEffect } from "react";
import axios from "axios";
import parser from "html-react-parser";
import PostThreePower from "./ThreePower/PostThreePower";
import EyeIcon from "../../assets/images/common_view_16.svg";

function BoardDetail() {
  const { id } = useParams();
  const { pathname } = useLocation();
  const boardname = pathname.split("/")[1];
  const [boardData, setBoardData] = useState([]);
  useEffect(() => {
    axios
      .get(`/api/${boardname}/${id}`)
      .then((res) => setBoardData(res.data.data));
  }, []);
  const { register, handleSubmit, reset } = useForm({ mode: "onChange" });
  const [commentlist, setCommentlist] = useState([]);
  const onSubmitValid = (data) => {
    setCommentlist([...commentlist, data]);
    reset();
  };
  console.log("전체데이터", boardData);
  console.log("현재 로그인 유저", boardData.sessionUserResponse);
  console.log("글 작성자", boardData.userPostResponse);
  return (
    <InfoDiv>
      <InfoTitleDiv>
        <InfoTitle>{boardData?.title}</InfoTitle>
        <InfoTitleWrite>
          <img src={EyeIcon} alt="eye" />
          {boardData?.view}
        </InfoTitleWrite>
      </InfoTitleDiv>
      <div
        style={{
          width: "100%",
          height: "1px",
          backgroundColor: "#EEEEEE",
          margin: "20px 0px",
        }}
      />
      <InfoTitleDiv>
        <InfoTitleWrite>{boardData?.userPostResponse?.nickName}</InfoTitleWrite>
        <InfoTitleWrite>{`작성일 : ${boardData?.createdDate} `}</InfoTitleWrite>
      </InfoTitleDiv>
      {(boardname === "threepowerpost") &
        (boardData?.sessionUserResponse?.role === "MASTER") && (
        <PostThreePower />
      )}
      <BoardSummary>
        {parser(typeof boardData === String ? boardData?.content : "")}
      </BoardSummary>
      <InfoExplanationDiv>
        <InfoExplanationTitle style={{ marginTop: "50px" }}>
          댓글
        </InfoExplanationTitle>
        <InfoCommentForm onSubmit={handleSubmit(onSubmitValid)}>
          <InfoCommentInputText
            {...register("comment", {
              required: "댓글을 입력해주세요",
            })}
            type="text"
            placeholder="댓글을 입력해주세요"
          />
          <InfoCommentInputSubmit type="submit" value="댓글등록" />
        </InfoCommentForm>
        <CommentList>
          {commentlist.map((x) => (
            <CommentListitem key={Math.random()}>{x.comment}</CommentListitem>
          ))}
        </CommentList>
      </InfoExplanationDiv>
    </InfoDiv>
  );
}

export default BoardDetail;
