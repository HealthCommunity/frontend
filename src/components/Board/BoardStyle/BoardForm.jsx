// react hook , react
import { useEffect, useState } from "react";

// recoil ( 상태관리 )

// react library

// styled-components , Style Files
import styled from "styled-components";
import {
  BoardTextDiv,
  BoardText,
  SeparataDivLeft,
  BoardProfileImg,
  BoardDivWrite,
  SeparataSpan,
  SeparataDiv,
} from "./BoardStyle";
import { ThreeSeparateCal, ThreeSeparateView } from "./ThreePowerForm";

// Components

// Icons , Images
import NewIcon from "../../../assets/images/badge_new.svg";
import EyeIcon from "../../../assets/images/common_view_16.svg";
import TiemIcon from "../../../assets/images/board_write_gr_20.svg";

// Share , Utils

export default function BoardForm({
  title,
  createdDate,
  nickname,
  view,
  urls,
}) {
  const [nowday, setNowDay] = useState([]);
  function getToday() {
    let date = new Date();
    let year = date.getFullYear();
    let month = ("0" + (1 + date.getMonth())).slice(-2);
    let day = ("0" + date.getDate()).slice(-2);
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
        <BoardImage src={urls[0]} />
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
          <BoardProfileImg />
          <BoardDivWrite>
            {nickname.length > 5 ? `${nickname.slice(0, 5)}...` : nickname}
          </BoardDivWrite>
        </SeparataDivLeft>
        <SeparataDiv>
          <ThreeSeparateView>
            <img src={EyeIcon} alt="eyeicon" />
            <SeparataSpan>{view}</SeparataSpan>
          </ThreeSeparateView>
          <ThreeSeparateCal>
            <img
              src={TiemIcon}
              alt="tiemicon"
              style={{ widh: "18px", height: "18px" }}
            />
            <SeparataSpan>{createdDate.slice(0, 10)}</SeparataSpan>
          </ThreeSeparateCal>
        </SeparataDiv>
      </BoardDivBottomItem>
    </Board>
  );
}

const Board = styled.div`
  width: 300px;
  height: 136px;
  padding: 12px 12px;
  box-shadow: 1px 2px 16px rgba(0, 0, 0, 0.16);
  border-radius: 8px;
  background-color: ${(props) => props.theme.backGroundColor};
  color: ${(props) => props.theme.reverseFontColor};
  @media screen and (max-width: 1178px) {
    width: 450px;
    height: 200px;
    margin: 0 auto;
  }
  @media screen and (max-width: 930px) {
    width: 550px;
    height: 200px;
    margin: 0 auto;
  }
  @media screen and (max-width: 600px) {
    width: 450px;
    height: 120px;
    margin: 0 auto;
  }

  @media screen and (max-width: 420px) {
    width: 300px;
    height: 120px;
    margin: 0 auto;
  }
`;

const BoardTitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 21px;
  @media screen and (max-width: 600px) {
    width: 100%;
    margin: 0 auto;
  }
`;

const BoardImage = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 8px;
  border-radius: 8px;
  @media screen and (max-width: 1178px) {
    width: 150px;
    height: 150px;
    margin: 0 auto;
  }
  @media screen and (max-width: 930px) {
    width: 250px;
    height: 150px;
    margin: 0 auto;
  }
`;

const BoardVideo = styled.video`
  width: 60px;
  height: 60px;
  border-radius: 8px;
`;

const BoardDivBottomItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  color: #aaaaaa;
`;
