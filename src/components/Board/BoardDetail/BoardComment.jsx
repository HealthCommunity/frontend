import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { InfoNickname } from ".";

const CommentStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #f8f8f8;
  height: 100px;
  border-radius: 6px;
  margin: 10px 20px;
`;
const InfoExplanationTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin: 40px 20px;
  border-top: 1px solid rgb(238, 238, 238);
  padding-top: 20px;
`;

const Comment = styled.div`
  font-size: 18px;
  margin: 10px;
  font-weight: 600;
`;

const CommentDate = styled.div`
  font-size: 14px;
  margin: 10px;
  font-weight: 400;
  color: #888888;
`;

const CommentBox = styled.div`
  box-shadow: 1px 2px 16px rgba(0, 0, 0, 0.16);
  margin: 0px 20px 20px 20px;
  border-radius: 8px;
`;

const CommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default function BoardComment({ boardname }) {
  const [comment, SetComment] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const result = async () => {
      const data = await axios(`/api/post/${id}/comments`);
      SetComment(data.data.data);
    };
    result();
  }, [id]);
  const onDelete = (item) => {
    if (window.confirm("삭제하시겠습니까?") === true) {
      axios.post(`/api/comment/${item}/delete`).then((res) => {
        res.status === 200 && window.location.replace(`/${boardname}/${id}`);
      });
    }
  };
  return (
    <>
      <InfoExplanationTitle>{`댓글 ${comment.length}`}</InfoExplanationTitle>
      {comment.map((x) => (
        <CommentBox key={x.id}>
          <CommentHeader>
            <InfoNickname>{x.nickName}</InfoNickname>
            <div
              style={{ margin: "20px", fontSize: "24px", color: "red" }}
              onClick={() => onDelete(x.id)}
            >
              x
            </div>
          </CommentHeader>
          <CommentStyle key={x.id}>
            <Comment>{x.comment}</Comment>
            <CommentDate>{x.createdDate}</CommentDate>
          </CommentStyle>
        </CommentBox>
      ))}
    </>
  );
}
