// react hook , react
import { useEffect } from "react";
import { useState } from "react";

// recoil ( 상태관리 )
import useUserData from "../../../api/useUserData";

// react library
import { useLocation, useNavigate, useParams } from "react-router";
import parser from "html-react-parser";
import axios from "axios";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

// styled-components , Style Files
import styled from "styled-components";
import { FileBtn, FileBtnDiv } from "../NewWrite/BoardWriteStyle";

// Components
import BoardComment from "./BoardComment";
import PostThreePower from "../ThreePower/ManagerThreePower";
import LoadingSpinner from "../../Loding/LoadingSpinner";

// Icons , Images
import EyeIcon from "../../../assets/images/common_view_16.svg";
import WriteIcon from "../../../assets/images/board_write_gr_20.svg";

// Share , Utils

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
              width: "95%",
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
            {boardData.urls && boardname === "threepowerpost"
              ? boardData.urls.splice(3).map((x) =>
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
                )
              : boardData.urls &&
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
            ""
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
              <FileBtn onClick={onDelete}>게시글 삭제</FileBtn>
              <FileBtn onClick={onEdit}>게시글 수정</FileBtn>
              {userData ? (
                <div style={{ display: "flex" }}>
                  <Link to={`/${boardname}/write`}>
                    <FileBtn
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={WriteIcon}
                        style={{ marginRight: "5px" }}
                        alt="writeicon"
                      />
                      글쓰기
                    </FileBtn>
                  </Link>
                  <Link to={`/${boardname}`}>
                    <FileBtn>글목록</FileBtn>
                  </Link>
                </div>
              ) : (
                ""
              )}
            </FileBtnDiv>
          ) : (
            <FileBtn style={{ margin: "20px auto" }}>
              <Link to={`/${boardname}`}>글목록</Link>
            </FileBtn>
          )}
        </InfoDiv>
      )}
    </>
  );
}

const BoardSession = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto;
`;

const BoardVideo = styled.video`
  width: 400px;
  height: 250px;
  margin-right: 30px;
  margin-top: 30px;

  @media screen and (max-width: 420px) {
    width: 300px;
  }
`;

const BoardImg = styled.img`
  width: 560px;
  height: 560px;
  margin-right: 30px;
  margin-top: 30px;

  @media screen and (max-width: 420px) {
    width: 300px;
    height: 300px;
  }
`;

const InfoExplanationDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 15px;

  @media screen and (max-width: 1024px) {
    width: 90%;
  }
  @media screen and (max-width: 420px) {
    width: 100%;
    margin: 0 auto;
  }
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
  border: 1px solid rgb(238, 238, 238);
`;

const InfoCommentInputText = styled.input`
  width: 90%;
  height: 50px;
  margin: 15px;
  border-radius: 3px;
  padding: 0px 10px;
  border: none;
  outline: none;
  font-size: 16px;
  background-color: #f8f8f8;
`;

const InfoCommentInputSubmit = styled.input`
  border: none;
  outline: none;
  margin: 0 10px;
  background-color: transparent;
  cursor: pointer;
`;

const InfoDiv = styled.div`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
`;

const InfoTitleDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;
`;

const InfoTitle = styled.div`
  font-weight: 700;
  font-size: 18px;
  color: ${(props) => props.theme.reverseFontColor};
`;

const InfoTitleWrite = styled.div`
  color: #9c9c9e;
  display: flex;
`;

const BoardSummary = styled.div`
  width: 90%;
  margin: 50px 20px;
`;
