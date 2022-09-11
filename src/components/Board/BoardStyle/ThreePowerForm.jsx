import { useEffect, useState } from "react";

import styled from "styled-components";
import {
  BoardTextDiv,
  BoardText,
  SeparataDivLeft,
  BoardProfileImg,
  BoardDivWrite,
  SeparataSpan,
  SeparataDiv,
  SeparataItem,
} from "./BoardStyle";

import NewIcon from "../../../assets/images/badge_new.svg";
import EyeIcon from "../../../assets/images/common_view_16.svg";
import TiemIcon from "../../../assets/icons/free-icon-calendar-2838779.png";

export default function ThreePowerForm({
  id,
  title,
  createdDate,
  nickname,
  view,
  urls,
  thumbnailUrls,
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
    <BoardDiv>
      <ReseponseDiv>
        <BoardVideoOne src={thumbnailUrls[0]} alt="벤치프레스 썸네일" />
        <BoardVideoDiv>
          <BoardVideoTwo src={thumbnailUrls[1]} alt="스쿼트 썸네일" />
          <BoardVideoThree src={thumbnailUrls[2]} alt="데드리프트 썸네일" />
        </BoardVideoDiv>
      </ReseponseDiv>
      <ReseponseDiv>
        <BoardTextDiv>
          <BoardText>
            {title.length > 15 ? `${title.slice(0, 15)}...` : title}
          </BoardText>
          {nowday.includes(`${createdDate.slice(0, 10)}`) && (
            <img src={NewIcon} style={{ margin: "0px 5px" }} alt="newicon" />
          )}
        </BoardTextDiv>
        <BoardDivBottom>
          <SeparataDivLeft>
            <BoardProfileImg />
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
        </BoardDivBottom>
      </ReseponseDiv>
    </BoardDiv>
  );
}

const BoardDiv = styled.div`
  width: 325px;
  height: 346px;
  padding: 12px 0px;
  box-shadow: 1px 2px 16px rgba(0, 0, 0, 0.16);
  border-radius: 8px;
  background-color: ${(props) => props.theme.backGroundColor};
  color: ${(props) => props.theme.reverseFontColor};

  @media screen and (max-width: 600px) {
    display: flex;
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }
`;

const ReseponseDiv = styled.div`
  @media screen and (max-width: 600px) {
    width: 45%;
    margin: 0 auto;
  }
`;

const BoardVideoOne = styled.img`
  height: 160px;
  margin: 0px 10px;
  width: 300px;
  border-radius: 8px;
  @media screen and (max-width: 600px) {
    width: 90%;
    height: 50%;
  }
`;

const BoardVideoDiv = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100px;
  margin: 8px 12px;
  @media screen and (max-width: 600px) {
    height: 40%;
  }
`;

const BoardVideoTwo = styled.img`
  width: 145px;
  border-radius: 8px;
  @media screen and (max-width: 600px) {
    width: 45%;
  }
`;

const BoardVideoThree = styled.img`
  width: 145px;
  border-radius: 8px;
  @media screen and (max-width: 600px) {
    width: 45%;
  }
`;

const BoardDivBottom = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  color: #aaaaaa;
  margin: 0 auto;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
