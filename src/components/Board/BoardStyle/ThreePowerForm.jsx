import {
  BoardDiv,
  BoardVideoOne,
  BoardVideoDiv,
  BoardVideoTwo,
  BoardVideoThree,
  BoardTextDiv,
  BoardText,
  BoardDivBottom,
  SeparataDivLeft,
  BoardDivIcon,
  BoardDivWrite,
  SeparataSpan,
  SeparataDiv,
  SeparataItem,
} from "./BoardStyle";
import NewIcon from "../../../assets/images/badge_new.svg";
import EyeIcon from "../../../assets/images/common_view_16.svg";
import { useEffect, useState } from "react";

export default function ThreePowerForm({
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
    <BoardDiv>
      <BoardVideoOne autoplay>
        <source src={urls[0]} type="video/mp4" />
      </BoardVideoOne>
      <BoardVideoDiv>
        <BoardVideoTwo autoplay>
          <source src={urls[1]} type="video/mp4" />
        </BoardVideoTwo>
        <BoardVideoThree autoplay>
          <source src={urls[2]} type="video/mp4" />
        </BoardVideoThree>
      </BoardVideoDiv>
      <BoardTextDiv>
        <BoardText>{title}</BoardText>
        {day.includes(`${createdDate.slice(0, 10)}`) && (
          <img src={NewIcon} style={{ margin: "0px 5px" }} alt="newicon" />
        )}
      </BoardTextDiv>
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
          <SeparataItem>
            <SeparataSpan>{`작성일 : ${createdDate.slice(
              0,
              10
            )}`}</SeparataSpan>
          </SeparataItem>
        </SeparataDiv>
      </BoardDivBottom>
    </BoardDiv>
  );
}