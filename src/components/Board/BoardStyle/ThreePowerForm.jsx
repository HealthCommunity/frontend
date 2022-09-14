// react hook , react
import { useEffect, useState } from "react";

// recoil ( 상태관리 )

// react library

// styled-components , Style Files
import styled from "styled-components";
import {
  BoardTextDiv,
  BoardText,
  BoardProfileImg,
  BoardDivWrite,
  SeparataSpan,
} from "./BoardStyle";

// Components

// Icons , Images
import NewIcon from "../../../assets/images/badge_new.svg";
import EyeIcon from "../../../assets/images/common_view_16.svg";
import TiemIcon from "../../../assets/images/board_write_gr_20.svg";

// Share , Utils

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
          <ThreeSeparateLeftDiv>
            <BoardProfileImg />
            <BoardDivWrite>
              {nickname.length > 5 ? `${nickname.slice(0, 5)}...` : nickname}
            </BoardDivWrite>
          </ThreeSeparateLeftDiv>
          <ThreeSeparateDiv>
            <ThreeSeparateView>
              <img src={EyeIcon} alt="eyeicon" />
              <SeparataSpan>{view}</SeparataSpan>
            </ThreeSeparateView>
            <ThreeSeparateCal>
              <img
                src={TiemIcon}
                alt="tiemicon"
                style={{ width: "18px", height: "18px" }}
              />
              <SeparataSpan>{createdDate.slice(0, 10)}</SeparataSpan>
            </ThreeSeparateCal>
          </ThreeSeparateDiv>
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

const ThreeSeparateDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 65%;
  margin: 0px 10px;
  font-size: 14px;
  @media screen and (max-width: 600px) {
    width: 100%;
    margin: 20px 0px;
  }
`;

const ThreeSeparateLeftDiv = styled.div`
  display: flex;
  width: 35%;
  align-items: center;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const ThreeSeparateView = styled.div`
  display: flex;
  justify-content: center;
  margin: 0px 5px;
  align-items: center;
  @media screen and (max-width: 600px) {
    width: 30%;
    margin: 5px 0px;
  }
`;

export const ThreeSeparateCal = styled.div`
  display: flex;
  justify-content: center;
  margin: 0px 5px;
  align-items: center;
  @media screen and (max-width: 600px) {
    width: 70%;
    margin: 5px 0px;
  }
`;
