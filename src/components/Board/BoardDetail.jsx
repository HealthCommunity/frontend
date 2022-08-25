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
import PostThreePower from "./ThreePower/PostThreePower";
import EyeIcon from "../../assets/images/common_view_16.svg";
import styled from "styled-components";
import { FileBtn, FileBtnDiv } from "./BoardWriteStyle";
import useUserData from "../../api/useUserData";
import { ModalButton } from "../../pages/Board";
import { Link } from "react-router-dom";
import WriteIcon from "../../assets/images/board_write_bl_24.svg";

export default function BoardDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const boardname = pathname.split("/")[1];
  const [boardData, setBoardData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [userData] = useUserData();
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const result = await axios(`/api/${boardname}/${id}`);
      setBoardData(result.data.data);
      setLoading(false);
    };
    fetchData();
  }, []);
  const onDelete = () => {
    if (window.confirm("삭제하시겠습니까?") == true) {
      axios.post(`/api/${boardname}/${id}/delete`).then(() => {
        navigate(`/${boardname}`);
      });
    }
    return;
  };
  const onEdit = () => {
    if (boardname === "threepowerpost") {
      if (window.confirm("3대력은 동영상 3개를 모두 변경해야합니다!") == true) {
        navigate("edit");
      }
      return;
    }
    navigate("edit");
  };
  return (
    <>
      {loading ? (
        <div>로딩중입니다</div>
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
          {boardData?.sessionUserResponse?.userId ===
          boardData?.userPostResponse?.userId ? (
            <FileBtnDiv style={{ border: "none" }}>
              <FileBtn onClick={onDelete}>Delete</FileBtn>
              <FileBtn onClick={onEdit}>Edit</FileBtn>
            </FileBtnDiv>
          ) : (
            ""
          )}
        </InfoDiv>
      )}
      {userData ? (
        <div style={{ display: "flex" }}>
          <Link to={`/${boardname}/write`}>
            <ModalButton>
              <img src={WriteIcon} style={{ marginRight: "5px" }} />
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
    </>
  );
}

const BoardSession = styled.section`
  flex-wrap: wrap;
  display: flex;
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
