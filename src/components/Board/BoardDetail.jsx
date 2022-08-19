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
  console.log(boardData);
  return (
    <InfoDiv>
      <InfoTitle>{`${boardname} : ${boardData.title}`}</InfoTitle>
      <InfoTitleDiv>
        <InfoTitleWrite>{`작성자 : ${boardData.nickName} `}</InfoTitleWrite>
        <InfoTitleWrite>{`작성일 : ${
          boardData.createdDate | "오늘씀"
        } `}</InfoTitleWrite>
        <InfoTitleWrite>{`view : ${boardData.view}`}</InfoTitleWrite>
      </InfoTitleDiv>
      {boardname === "threepowerpost" && <PostThreePower />}
      <InfoExplanationTitle>게시글 내용</InfoExplanationTitle>
      <BoardSummary>
        {parser(
          boardData.content === undefined
            ? "<h1>빈공간입니다</h1>"
            : boardData.content
        )}
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
