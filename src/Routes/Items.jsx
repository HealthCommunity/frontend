import { CommonContainer } from "../component/common/Layout/Layout";
import styled from "styled-components";
import HeartIcon from "../images/figma/board_like_gr_24.svg";
import NewIcon from "../images/figma/badge_new.svg";
import EyeIcon from "../images/figma/common_view_16.svg";
import ReplyIcon from "../images/figma/common_reply_16.svg";
import LikeIcon from "../images/figma/common_like_16.svg";
import WriteIcon from "../images/figma/board_write_bl_24.svg";

////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 1. Main => 인기차트
const FavoriteList = styled.div`
  position: relative;
  background-color: blue;
  width: 87px;
  height: 87px;
  border-radius: 8px;
`;

const FavoriteListItem = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 40px;
  bottom: 0;
`;

const FavoriteListCount = styled.span`
  margin: 0 auto;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #ffffff;
  display: flex;
  align-items: center;
`;

////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 2. Main=> 각 게시판영역
const BoardDiv = styled.div`
  width: 325px;
  height: 346px;
  background: #ffffff;
  padding: 10px 0px;
  box-shadow: 1px 2px 16px rgba(0, 0, 0, 0.16);
  border-radius: 8px;
`;

const BoardVideoOne = styled.div`
  background-color: red;
  height: 160px;
  margin: 0px 10px;
  width: 301px;
  border-radius: 8px;
`;
const BoardVideoDiv = styled.div`
  display: flex;
  height: 100px;
  margin: 10px 0px;
`;

const BoardVideoTwo = styled.div`
  width: 146px;
  margin: 0 auto;
  background: green;
  border-radius: 8px;
`;
const BoardVideoThree = styled.div`
  width: 146px;
  margin: 0 auto;
  background: pink;
  border-radius: 8px;
`;

const BoardTextDiv = styled.div`
  width: 301px;
  height: 24px;
  display: flex;
  align-items: center;
  margin: 5px 10px;
`;

const BoardText = styled.span`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  color: #222222;
`;

const BoardDivBottom = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  color: #aaaaaa;
  margin: 0 auto;
`;

const BoardDivIcon = styled.div`
  width: 24px;
  height: 24px;
  background: #d9d9d9;
  border-radius: 50%;
  margin: 0px 10px;
`;

const BoardDivWrite = styled.span`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #222222;
`;

const SeparataDivLeft = styled.div`
  display: flex;
  width: 40%;
  align-items: center;
`;

const SeparataDiv = styled.div`
  display: flex;
  width: 60%;
  justify-content: flex-end;
  margin: 0px 10px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
`;

const SeparataItem = styled.div`
  margin: 0px 5px;
  display: flex;
`;

const SeparataSpan = styled.span`
  margin-left: 5px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
`;
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//3. 각 페이지 btn
const CommonBtn = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 48px;
  background: #ffffff;
  border: 1px solid #0066ff;
  border-radius: 48px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  color: #0066ff;
`;
////////////////////////////////////////////////////////////////////////////////////////////////////////////

function Items() {
  return (
    <CommonContainer>
      <FavoriteList>
        <FavoriteListItem>
          <img src={HeartIcon} style={{ margin: "0px 5px" }} />
          <FavoriteListCount>2123</FavoriteListCount>
        </FavoriteListItem>
      </FavoriteList>
      <BoardDiv>
        <BoardVideoOne />
        <BoardVideoDiv>
          <BoardVideoTwo />
          <BoardVideoThree />
        </BoardVideoDiv>
        <BoardTextDiv>
          <BoardText>안녕하세요</BoardText>
          <img src={NewIcon} style={{ margin: "0px 5px" }} />
        </BoardTextDiv>
        <BoardDivBottom>
          <SeparataDivLeft>
            <BoardDivIcon />
            <BoardDivWrite>작성자기입</BoardDivWrite>
          </SeparataDivLeft>
          <SeparataDiv>
            <SeparataItem>
              <img src={EyeIcon} />
              <SeparataSpan>2131</SeparataSpan>
            </SeparataItem>
            <SeparataItem>
              <img src={ReplyIcon} />
              <SeparataSpan>111</SeparataSpan>
            </SeparataItem>
            <SeparataItem>
              <img src={LikeIcon} />
              <SeparataSpan>21</SeparataSpan>
            </SeparataItem>
          </SeparataDiv>
        </BoardDivBottom>
      </BoardDiv>
      <CommonBtn>
        <img src={WriteIcon} style={{ margin: "0px 5px" }} />
        버튼
      </CommonBtn>
    </CommonContainer>
  );
}

export default Items;
