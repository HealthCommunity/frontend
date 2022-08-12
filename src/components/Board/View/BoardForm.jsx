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

export default function BoardForm({ id, title, createdDate, nickname, view }) {
  return (
    <Board>
      <BoardTitle>
        <BoardImage />
        <BoardTextDiv>
          <BoardText>{title}</BoardText>
          <img src={NewIcon} style={{ margin: "0px 5px" }} alt="newIcon" />
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

const BoardImage = styled.div`
  width: 50px;
  height: 50px;
  background-color: red;
  border-radius: 10px;
`;