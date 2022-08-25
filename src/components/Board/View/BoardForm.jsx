import {
  BoardTextDiv,
  BoardText,
  BoardDivBottom,
  SeparataDivLeft,
  BoardDivIcon,
  BoardDivWrite,
  SeparataSpan,
  SeparataDiv,
  SeparataItem,
} from "../View/BoardStyle/BoardStyle";
import NewIcon from "../../../assets/images/badge_new.svg";
import EyeIcon from "../../../assets/images/common_view_16.svg";
import styled from "styled-components";
import { useEffect, useState } from "react";

export default function BoardForm({
  id,
  title,
  createdDate,
  nickname,
  view,
  urls,
}) {
  const [day, setDay] = useState([]);
  function getToday() {
    var date = new Date();
    var year = date.getFullYear();
    var month = ("0" + (1 + date.getMonth())).slice(-2);
    var day = ("0" + date.getDate()).slice(-2);
    const dayList = [];
    for (let i = 0; i < 3; i++) {
      dayList.push(year + "-" + month + "-" + (day - i));
    }
    setDay(dayList);
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
          <BoardText>{title}</BoardText>
          {day.includes(`${createdDate.slice(0, 10)}`) && (
            <img src={NewIcon} style={{ margin: "0px 5px" }} />
          )}
        </BoardTextDiv>
      </BoardTitle>
      <BoardDivBottom>
        <SeparataDivLeft>
          <BoardDivIcon />
          <BoardDivWrite>{nickname}</BoardDivWrite>
        </SeparataDivLeft>
        <SeparataDiv>
          <SeparataItem>
            <img src={EyeIcon} alt="eyeicon" />
            <SeparataSpan>{view}</SeparataSpan>
          </SeparataItem>
          <SeparataItem>{createdDate}</SeparataItem>
        </SeparataDiv>
      </BoardDivBottom>
    </Board>
  );
}

const Board = styled.div`
  width: 325px;
  height: 150px;
  background: #ffffff;
  padding: 10px 0px;
  box-shadow: 1px 2px 16px rgba(0, 0, 0, 0.16);
  border-radius: 8px;
`;

const BoardTitle = styled.div`
  display: flex;
  align-items: center;
  margin: 0px 10px 20px 10px;
`;

const BoardImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 10px;
`;

const BoardVideo = styled.video`
  width: 50px;
  height: 50px;
  border-radius: 10px;
`;
