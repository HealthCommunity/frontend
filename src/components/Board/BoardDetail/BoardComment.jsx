// react hook , react
import { useEffect, useState } from "react";

// recoil ( 상태관리 )

// react library
import axios from "axios";
import { useParams } from "react-router-dom";

// styled-components , Style Files
import styled from "styled-components";
import { InfoNickname } from ".";

// Components

// Icons , Images
import DeleteIcon from "../../../assets/images/board_write__cancle_24.svg";
import WriteIcon from "../../../assets/images/board_write_gr_20.svg";

// Share , Utils

export default function BoardComment({ boardname }) {
  const [comments, SetComments] = useState([]);
  const { id } = useParams();
  const [editNum, setEditNum] = useState("");
  const [comment, setComment] = useState("");
  const config = {
    headers: {
      "content-type": "application/json",
    },
  };
  useEffect(() => {
    const result = async () => {
      const data = await axios(`/api/post/${id}/comments`);
      SetComments(data.data.data);
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
  const onEdit = (item, itemcomment) => {
    setComment(itemcomment);
    setEditNum(item);
  };

  const onChangeEdit = (e) => {
    e.preventDefault();
    setComment(e.target.value);
  };

  const changeSubmit = (item) => {
    const data = {
      commentId: item,
      comment,
    };
    console.log(data);
    axios.post(`/api/comment/${item}/edit`, data, config);
  };
  return (
    <>
      <div
        style={{
          width: "90%",
          height: "1px",
          backgroundColor: "#EEEEEE",
          margin: "20px",
        }}
      />
      <InfoExplanationTitle>{`댓글 ${comments.length}`}</InfoExplanationTitle>
      {comments.map((x) => (
        <CommentBox key={x.id}>
          <CommentHeader>
            <InfoNickname>{x.nickName}</InfoNickname>
            <div style={{ display: "flex" }}>
              <img
                src={DeleteIcon}
                style={{ margin: "0px 10px" }}
                alt="Deleteicon"
                onClick={() => onDelete(x.id, x.comment)}
              />
              <img
                src={WriteIcon}
                style={{ margin: "0px 10px" }}
                alt="WriteIcon"
                onClick={() => onEdit(x.id, x.comment)}
              />
            </div>
          </CommentHeader>
          {editNum === x.id ? (
            <CommentStyle>
              <form onSubmit={changeSubmit(x.id)}>
                <CommentInput
                  style={{ width: "90%" }}
                  type="text"
                  value={comment}
                  onChange={onChangeEdit}
                />
                <CommentInput type="submit" value="수정하기" />
              </form>
            </CommentStyle>
          ) : (
            <CommentStyle>
              <Comment>{x.comment}</Comment>
              <CommentDate>{x.createdDate}</CommentDate>
            </CommentStyle>
          )}
        </CommentBox>
      ))}
    </>
  );
}

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
  @media screen and (max-width: 420px) {
    margin: 40px 0px;
  }
`;

const Comment = styled.div`
  font-size: 18px;
  margin: 10px;
  font-weight: 600;
  color: #222222;
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
  @media screen and (max-width: 1024px) {
    width: 90%;
  }
  @media screen and (max-width: 420px) {
    width: 95%;
    margin: 20px 0px;
  }
`;

const CommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CommentInput = styled.input`
  border: none;
  outline: none;
  background-color: white;
  font-size: 18px;
  font-weight: 700;
  margin-left: 10px;
`;
