import styled from "styled-components";
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
} from "../View/BoardStyle/BoardStyle";
import NewIcon from "../../../assets/images/badge_new.svg";
import EyeIcon from "../../../assets/images/common_view_16.svg";

export default function ThreePowerForm({
  id,
  title,
  createdDate,
  nickname,
  view,
  urls,
}) {
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
        <img src={NewIcon} style={{ margin: "0px 5px" }} />
      </BoardTextDiv>
      <BoardDivBottom>
        <SeparataDivLeft>
          <BoardDivIcon />
          <BoardDivWrite>{nickname}</BoardDivWrite>
        </SeparataDivLeft>
        <SeparataDiv>
          <SeparataItem>
            <img src={EyeIcon} />
            <SeparataSpan>{view}</SeparataSpan>
          </SeparataItem>
          <SeparataItem>
            <SeparataSpan>{`작성일 : ${createdDate}`}</SeparataSpan>
          </SeparataItem>
        </SeparataDiv>
      </BoardDivBottom>
    </BoardDiv>
  );
}
