import {
  BoardTextDiv,
  BoardText,
  SeparataDivLeft,
  BoardDivIcon,
  BoardDivWrite,
  SeparataSpan,
  SeparataDiv,
  SeparataItem,
  BoardDivBottomItem,
} from "./BoardStyle";
import NewIcon from "../../../assets/images/badge_new.svg";
import EyeIcon from "../../../assets/images/common_view_16.svg";
import styled from "styled-components";
import { useEffect, useState } from "react";
import TiemIcon from "../../../assets/icons/free-icon-calendar-2838779.png";

export default function BoardForm({
  title,
  createdDate,
  nickname,
  view,
  urls,
}) {
  const [nowday, setNowDay] = useState([]);
  function getToday() {
    var date = new Date();
    var year = date.getFullYear();
    var month = ("0" + (1 + date.getMonth())).slice(-2);
    var day = ("0" + date.getDate()).slice(-2);
    const dayList = [];
    for (let i = 0; i < 3; i++) {
      dayList.push(
        `${year}-${month}-${day - i < 10 ? "0" + (day - i) : day - i}`
      );
    }
    setNowDay(dayList);
  }
  useEffect(getToday, []);
  return (
    <Board>
      <BoardTitle>
        {urls[0].split("/")[3] === "IMAGE" ? (
          <BoardImage src={urls[0]} />
        ) : (
          <BoardVideo autoplay>
            <source src={urls[0]} type="video/mp4" />
          </BoardVideo>
        )}

        <BoardTextDiv>
          <BoardText>
            {title.length > 15 ? `${title.slice(0, 15)}...` : title}
          </BoardText>
          {nowday.includes(`${createdDate.slice(0, 10)}`) && (
            <img src={NewIcon} style={{ margin: "0px 5px" }} alt="newicon" />
          )}
        </BoardTextDiv>
      </BoardTitle>
      <BoardDivBottomItem>
        <SeparataDivLeft>
          <BoardDivIcon />
          <BoardDivWrite>
            {nickname.length > 5 ? `${nickname.slice(0, 5)}...` : nickname}
          </BoardDivWrite>
        </SeparataDivLeft>
        <SeparataDiv>
          <SeparataItem>
            <img src={EyeIcon} alt="eyeicon" />
            <SeparataSpan>{view}</SeparataSpan>
          </SeparataItem>
          <SeparataItem>
            <img
              src={TiemIcon}
              alt="tiemicon"
              style={{ widh: "18px", height: "18px" }}
            />
            <SeparataSpan>{createdDate.slice(0, 10)}</SeparataSpan>
          </SeparataItem>
        </SeparataDiv>
      </BoardDivBottomItem>
    </Board>
  );
}

const Board = styled.div`
  box-sizing: border-box;
  width: 325px;
  height: 136px;
  background-color: ${(props) => props.theme.backGroundColor};
  color: ${(props) => props.theme.reverseFontColor};
  padding: 12px 12px;
  box-shadow: 1px 2px 16px rgba(0, 0, 0, 0.16);
  border-radius: 8px;
  @media screen and (max-width: 600px) {
    height: 100%;
    width: 500px;
  }
`;

const BoardTitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 21px;
`;

const BoardImage = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 8px;
  border-radius: 8px;
`;

const BoardVideo = styled.video`
  width: 60px;
  height: 60px;
  border-radius: 8px;
`;
