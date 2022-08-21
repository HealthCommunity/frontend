import {
  InfoDiv,
  InfoTitle,
  InfoTitleDiv,
  InfoTitleWrite,
  BoardSummary,
} from "./BoardDetailStyle";
import { useState } from "react";
//import { useForm } from "react-hook-form";
import { useLocation, useNavigate, useParams } from "react-router";
import { useEffect } from "react";
import axios from "axios";
import parser from "html-react-parser";
import PostThreePower from "./ThreePower/PostThreePower";
import EyeIcon from "../../assets/images/common_view_16.svg";

function BoardDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const boardname = pathname.split("/")[1];
  const [boardData, setBoardData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const result = await axios(`/api/${boardname}/${id}`);
      setBoardData(result.data.data);
      setLoading(false);
    };
    fetchData();
  }, []);
  /*
  const { register, handleSubmit, reset } = useForm({ mode: "onChange" });
  const [commentlist, setCommentlist] = useState([]);
  const onSubmitValid = (data) => {
    setCommentlist([...commentlist, data]);
    reset();
  };
  */
  const onDelete = () => {
    axios.post(`/api/${boardname}/${id}/delete`).then((res) => {
      navigate(`/${boardname}`);
    });
  };
  const onEdit = () => {
    navigate("edit");
  };
  console.log("전체데이터", boardData);
  return (
    <>
      {loading ? (
        <div>로딩중입니다</div>
      ) : (
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
            <InfoTitleWrite>
              {boardData?.userPostResponse?.nickName}
            </InfoTitleWrite>
            <InfoTitleWrite>{`작성일 : ${boardData?.createdDate} `}</InfoTitleWrite>
          </InfoTitleDiv>
          {(boardname === "threepowerpost") &
          (boardData?.sessionUserResponse?.role === "ROLE_MASTER") ? (
            <PostThreePower item={boardData?.sessionUserResponse?.userId} />
          ) : (
            <></>
          )}
          {boardData.urls && (
            <>
              <div>
                <video controls>
                  <source src={`${boardData?.urls[0]}`} type="video/mp4" />
                </video>
                <video controls>
                  <source src={`${boardData?.urls[1]}`} type="video/mp4" />
                </video>
                <video controls>
                  <source src={`${boardData?.urls[2]}`} type="video/mp4" />
                </video>
              </div>
            </>
          )}

          <BoardSummary>{parser(String(boardData?.content))}</BoardSummary>
          {boardData?.sessionUserResponse?.userId ===
          boardData?.userPostResponse?.userId ? (
            <div>
              <button onClick={onDelete}>Delete</button>
              <button onClick={onEdit}>Edit</button>
            </div>
          ) : (
            ""
          )}

          {/* 
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
      */}
        </InfoDiv>
      )}
    </>
  );
}

export default BoardDetail;
