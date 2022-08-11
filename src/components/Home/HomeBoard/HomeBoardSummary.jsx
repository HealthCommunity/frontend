import { CommonTitleArea } from "../../common/Layout/Layout";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function HomeBoardSummary({ selected }) {
  return (
    <CommonTitleArea>
      <BoardStyle>
        <BoardStyleSpan>다른사람의 운동경험을 공유해보세요</BoardStyleSpan>
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
`;

const BoardStyleSpan = styled.span`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #888888;
`;
