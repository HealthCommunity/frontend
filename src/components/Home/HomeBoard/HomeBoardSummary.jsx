// react hook , react

// recoil ( 상태관리 )

// react library
import { Link } from "react-router-dom";

// styled-components , Style Files
import { CommonTitleArea } from "../../../styles/Layout/Layout";
import styled from "styled-components";

// Components

// Icons , Images

// Share , Utils

const categoryText = {
  exercisepost: "다른 사람들의 3대 능력을 확인해보세요",
  threepowerpost: "다른 사람들의 운동 루틴을 확인해보세요",
  freepost: "다른 사람들과 자유롭게 이야기를 나눠보세요",
};

export default function HomeBoardSummary({ selected }) {
  const SummaryText = categoryText[selected];

  return (
    <CommonTitleArea>
      <BoardStyle>
        <BoardStyleSpan>{SummaryText}</BoardStyleSpan>
        <Link to={`${selected}`}>
          <BoardStyleSpan>더보기 &gt;</BoardStyleSpan>
        </Link>
      </BoardStyle>
    </CommonTitleArea>
  );
}

const BoardStyle = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 93%;
  @media screen and (max-width: 1400px) {
    display: none;
  }
`;

const BoardStyleSpan = styled.span`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #888888;
`;
